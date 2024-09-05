import { useEffect, useRef, useState } from "react";

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

export function FaceDetectionController() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [cameras, setCameras] = useState<MediaDeviceInfo[]>([]);
  const [selectedCamera, setSelectedCamera] = useState<string>("");

  useEffect(() => {
    let faceDetector: FaceDetector | null = null;

    // Check if FaceDetector is supported
    if ("FaceDetector" in window) {
      faceDetector = new (window as any).FaceDetector();
    } else {
      console.error("FaceDetector is not supported in this browser");
      alert("FaceDetector is not supported in this browser");
    }

    // Get available cameras
    async function getCameras() {
      const devices = await navigator.mediaDevices.enumerateDevices();
      const videoDevices = devices.filter(
        (device) => device.kind === "videoinput"
      );
      setCameras(videoDevices);
      if (videoDevices.length > 0) {
        let index = videoDevices.findIndex(
          (x) =>
            x.deviceId === "2e1a:4c01" ||
            x.deviceId ===
              "9cbd5096ff175d1c625ae14b12584e8304afa36a611a7e50580579f748353ca3"
        );
        console.log(videoDevices);
        if (index < 0) index = 0;
        setSelectedCamera(videoDevices[index].deviceId);
      }
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

    async function startVideo() {
      if (!videoRef.current) return;

      const constraints = {
        video: { deviceId: { exact: selectedCamera } },
      };

      try {
        const stream = await navigator.mediaDevices.getUserMedia(constraints);
        videoRef.current.srcObject = stream;
        videoRef.current.play();
        detectFaces();
      } catch (err) {
        console.error("Error accessing the camera:", err);
      }
    }

    startVideo();
  }, [selectedCamera]);

  async function detectFaces() {
    if (!videoRef.current || !canvasRef.current) return;

    const faceDetector = new (window as any).FaceDetector();

    const detectFacesLoop = async () => {
      try {
        const faces = await faceDetector.detect(videoRef.current);
        drawFaceBoxes(faces);
      } catch (e) {
        console.error("Face detection failed:", e);
      }
      requestAnimationFrame(detectFacesLoop);
    };

    detectFacesLoop();
  }

  function drawFaceBoxes(faces: any[]) {
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

    ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
    ctx.strokeStyle = "#00ff00";
    ctx.lineWidth = 2;
    // console.log(
    //   faces.map((face) => JSON.stringify(face.boundingBox)).join(", ")
    // );
    faces.forEach((face) => {
      const { top, left, width, height } = face.boundingBox;
      ctx.strokeRect(
        canvasRef.current!.width - left - width,
        top,
        width,
        height
      );
    });
    if (faces.length >= 1) {
      // Find the largest face
      const largestFace = faces.reduce((prev, current) => {
        return prev.boundingBox.width > current.boundingBox.width
          ? prev
          : current;
      });

      const { top, left, width, height } = largestFace.boundingBox;
      const centerX = left + width / 2;
      const centerY = top + height / 2;
      const canvasCenterX = canvasRef.current.width - centerX;
      if (centerX < canvasRef.current.width / 2 - 200) {
        setPanTiltSpeed(-20, 0);
      } else if (centerX < canvasRef.current.width / 2 - 50) {
        setPanTiltSpeed(-5, 0);
      } else if (centerX > canvasRef.current.width / 2 + 200) {
        setPanTiltSpeed(20, 0);
      } else if (centerX > canvasRef.current.width / 2 + 50) {
        setPanTiltSpeed(5, 0);
      } else {
        setPanTiltSpeed(0, 0);
      }
    }
  }

  return (
    <div className="face-detector">
      <h2>Face Detector</h2>
      <select
        value={selectedCamera}
        onChange={(e) => setSelectedCamera(e.target.value)}
      >
        {cameras.map((camera) => (
          <option key={camera.deviceId} value={camera.deviceId}>
            {camera.label || `Camera ${camera.deviceId}`}
          </option>
        ))}
      </select>
      <div className="video-container" style={{ position: "relative" }}>
        <video
          ref={videoRef}
          style={{ transform: "scaleX(-1)", objectFit: "cover" }}
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
