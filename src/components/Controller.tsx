import { useEffect, useRef } from "react";
import { initializeWebSocket } from "../io/insta360.ts";
import { addLogHandler } from "../state/logging.ts";
import { FaceDetectionController } from "./FaceDetector.tsx";
import { GamepadController } from "./GamepadController.tsx";

export function Controller() {
  const logRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const portParam = searchParams.get("port");
    const tokenParam = searchParams.get("token");

    const appendLog = (message: string) => {
      if (logRef.current) {
        logRef.current.value += message + "\n";
        logRef.current.scrollTop = logRef.current.scrollHeight;
      }
    };

    if (!portParam || !tokenParam) {
      console.error("Missing port or token");
      appendLog("Missing port or token");
      return;
    }

    addLogHandler(appendLog);
    initializeWebSocket(portParam, tokenParam);
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-green-400 font-bold">Log messages</h2>
      <textarea
        ref={logRef}
        readOnly
        defaultValue={"[Log output]\n"}
        className="w-full h-60 p-1 font-mono border border-green-400 text-white bg-transparent"
      />
      <div className={"flex p-4 gap-2"}>
        <GamepadController />
        <FaceDetectionController />
      </div>
    </div>
  );
}
