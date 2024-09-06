import { useEffect, useRef, useState } from "react";
import { $zoomLevel, contributePanTiltSpeed } from "../state/camera";
import { addLog } from "../state/logging";

interface FaceDetector {
  detect(source: HTMLVideoElement): Promise<Face[]>;
}
interface Face {
  boundingBox: {
    top: number;
    left: number;
    width: number;
    height: number;
  };
}

interface ProcessedFace {
  x: number;
  y: number;
  raw: Face;
}

function processFaces(faces: Face[], videoWidth: number, videoHeight: number) {
  const processedFaces = faces.map((face): ProcessedFace => {
    const { left, top, width, height } = face.boundingBox;
    return {
      raw: face,
      x: ((left + width / 2) / videoWidth - 0.5) * 2,
      y: ((top + height / 2) / videoHeight - 0.5) * 2,
    };
  });

  const mainFace =
    processedFaces.length > 0
      ? processedFaces.reduce((prev, curr) =>
          Math.abs(curr.x) < Math.abs(prev.x) ? curr : prev
        )
      : undefined;

  return { processedFaces, mainFace };
}

type FaceProcessingResult = ReturnType<typeof processFaces>;

export function FaceDetectionController() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [cameras, setCameras] = useState<MediaDeviceInfo[]>([]);
  const [selectedCamera, setSelectedCamera] = useState<string>("");

  useEffect(() => {
    // Check if FaceDetector is supported
    if (!("FaceDetector" in window)) {
      console.error("FaceDetector is not supported in this browser");
      addLog("FaceDetector is not supported in this browser");
    }

    // Get available cameras
    async function getCameras() {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      stream.getTracks().forEach((track) => track.stop());

      const devices = await navigator.mediaDevices.enumerateDevices();
      const videoDevices = devices.filter(
        (device) => device.kind === "videoinput"
      );
      setCameras(videoDevices);
    }

    getCameras();

    // Cleanup function
    return () => {
      if (videoRef.current && videoRef.current.srcObject) {
        const tracks = (videoRef.current.srcObject as MediaStream).getTracks();
        tracks.forEach((track) => track.stop());
      }
    };
  }, []);

  useEffect(() => {
    if (!selectedCamera) return;
    const detectionHandle = { stop: false };
    async function startVideo() {
      if (!videoRef.current) return;

      const constraints = {
        video: { deviceId: { exact: selectedCamera } },
      };

      try {
        const stream = await navigator.mediaDevices.getUserMedia(constraints);
        videoRef.current.srcObject = stream;
        videoRef.current.play();
        detectFaces(detectionHandle);
      } catch (err) {
        console.error("Error accessing the camera:", err);
      }
    }

    startVideo();
    return () => {
      detectionHandle.stop = true;
      videoRef.current?.pause();
      contributePanTiltSpeed("face", 0, 0);
    };
  }, [selectedCamera]);

  async function detectFaces(detectionHandle: { stop: boolean }) {
    if (!videoRef.current || !canvasRef.current) return;
    const faceDetector: FaceDetector = new (window as any).FaceDetector();

    const detectFacesLoop = async () => {
      const video = videoRef.current;
      if (!video) return;
      if (detectionHandle.stop) return;
      try {
        const faces = await faceDetector.detect(video);
        const videoWidth = video.videoWidth;
        const videoHeight = video.videoHeight;
        const faceResult = processFaces(faces, videoWidth, videoHeight);
        Object.assign(window, { faceResult });
        if (detectionHandle.stop) return;
        drawFaceBoxes(faceResult);
        moveCamera(faceResult);
      } catch (e) {
        console.error("Face detection failed:", e);
      }
      requestAnimationFrame(detectFacesLoop);
    };

    detectFacesLoop();
  }

  const movementSpeeds: [number, number][] = [
    [0.05, 0],
    [0.1, 1],
    [0.15, 2],
    [0.2, 5],
    [0.4, 10],
    [0.6, 20],
  ];

  function drawFaceBoxes(result: FaceProcessingResult) {
    if (!canvasRef.current || !videoRef.current) return;

    const ctx = canvasRef.current.getContext("2d");
    if (!ctx) return;

    ctx.reset();

    // If the canvas size does not match the video size, set the canvas size
    if (
      canvasRef.current.width !== videoRef.current.videoWidth ||
      canvasRef.current.height !== videoRef.current.videoHeight
    ) {
      canvasRef.current.width = videoRef.current.videoWidth;
      canvasRef.current.height = videoRef.current.videoHeight;
    }

    const canvasWidth = canvasRef.current.width;
    const canvasHeight = canvasRef.current.height;
    ctx.clearRect(0, 0, canvasWidth, canvasHeight);
    ctx.strokeStyle = "#00ff00";
    ctx.lineWidth = 3;
    ctx.fillStyle = "#00ff00";
    result.processedFaces.forEach((face) => {
      const { top, left, width, height } = face.raw.boundingBox;
      ctx.strokeRect(left, top, width, height);
    });
    ctx.fillStyle = "#000";
    for (const [threshold] of movementSpeeds) {
      for (const sign of [-1, 1]) {
        const x = (0.5 + 0.5 * sign * threshold) * canvasWidth;
        ctx.fillRect(x - 2, 0, 4, 24);
      }
    }
  }

  function moveCamera(result: FaceProcessingResult) {
    if (!canvasRef.current || !videoRef.current) return;

    let speedX = 0;
    const mainFace = result.mainFace;
    if (mainFace) {
      const magnitude = Math.abs(mainFace.x);
      const sign = Math.sign(mainFace.x);

      for (const [threshold, speed] of movementSpeeds) {
        if (magnitude < threshold) {
          speedX = speed * sign;
          break;
        }
      }
    }
    speedX /= $zoomLevel.get() / 100;
    contributePanTiltSpeed("face", speedX, 0);
  }

  return (
    <div className="space-y-2 px-4 py-2">
      <h2 className={"font-extrabold"}>Face Detector</h2>
      <select
        value={selectedCamera}
        onChange={(e) => setSelectedCamera(e.target.value)}
        className="p-2 bg-green-950 text-green-200"
      >
        <option value="">Choose a camera to enable</option>
        {cameras.map((camera) => (
          <option key={camera.deviceId} value={camera.deviceId}>
            {camera.label || `Camera ${camera.deviceId}`}
          </option>
        ))}
      </select>
      <div
        className="video-container"
        style={{
          position: "relative",
          display: selectedCamera ? "block" : "none",
        }}
      >
        <video
          ref={videoRef}
          style={{ objectFit: "cover" }}
          width="640"
          height="480"
        />
        <canvas
          ref={canvasRef}
          width="640"
          height="480"
          style={{
            position: "absolute",
            objectFit: "cover",
            top: 0,
            left: 0,
            width: 640,
            height: 480,
            maxWidth: "100%",
            maxHeight: "100%",
          }}
        />
      </div>
    </div>
  );
}
