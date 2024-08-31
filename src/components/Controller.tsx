import { useEffect, useRef } from "react";
import * as proto from "../generated/insta360linkcontroller.proto";
import {useGamepadHandler} from "../gamepad/useGamepadHandler.ts";

export function Controller() {
  const logRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    const appendLog = (message: string) => {
      if (logRef.current) {
        logRef.current.value += message + "\n";
        logRef.current.scrollTop = logRef.current.scrollHeight;
      }
    };

    const searchParams = new URLSearchParams(window.location.search);
    const portParam = searchParams.get("port");
    const tokenParam = searchParams.get("token");

    if (!portParam || !tokenParam) {
      appendLog("Missing port or token");
      return;
    }
    // {proto.Request.encode(proto.Request.create()).finish()}

    // Connect to WebSocket
    const ws = new WebSocket(
      `ws://localhost:${portParam}/?token=${tokenParam}`
    );
    ws.binaryType = "arraybuffer";
    ws.onopen = () => {
      appendLog("Connected");
    };
    ws.onclose = () => {
      appendLog("Disconnected");
    };
    ws.onerror = (event) => {
      appendLog(`Error: ${event}`);
    };

    const connected = (() => {
      let onConnect = () => {};
      const promise = new Promise<void>((resolve) => {
        onConnect = resolve;
      });
      return { promise, onConnect };
    })();
    let serialNumber = "";

    ws.onmessage = (event) => {
      const message = proto.Response.decode(new Uint8Array(event.data));
      const categories: [keyof typeof message, keyof typeof message][] = [
        ["hasConnectionNotify", "connectionNotify"],
        ["hasControlResponse", "controlResponse"],
        ["hasDeviceInfoNotify", "deviceInfoNotify"],
        ["hasHeartbeatResponse", "heartbeatResponse"],
        ["hasPresetUpdateResponse", "presetUpdateResponse"],
        ["hasToastNotify", "toastNotify"],
        ["hasValueChangeNotify", "valueChangeNotify"],
      ];
      for (const [hasKey, valueKey] of categories) {
        if (message[hasKey]) {
          appendLog(`<< ${valueKey} ${JSON.stringify(message[valueKey])}`);
        }
      }
      if (message.hasConnectionNotify) {
        connected.onConnect();
      }
      if (message.hasDeviceInfoNotify && message.deviceInfoNotify) {
        serialNumber = message.deviceInfoNotify.curDeviceSerialNum;
      }
    };

    const sendMessage = (message: Partial<proto.Request>) => {
      const categories: [keyof typeof message, keyof typeof message][] = [
        ["hasControlRequest", "controlRequest"],
        ["hasHeartbeatRequest", "heartbeatRequest"],
        ["hasPresetUpdateRequest", "presetUpdateRequest"],
        ["hasSwitchDeviceRequest", "switchDeviceRequest"],
        ["hasUvcExtendRequest", "uvcExtendRequest"],
        ["hasUvcRequest", "uvcRequest"],
        ["hasValueChangeNotify", "valueChangeNotify"],
      ];
      for (const [hasKey, valueKey] of categories) {
        if (message[hasKey]) {
          appendLog(`>> ${valueKey} ${JSON.stringify(message[valueKey])}`);
        }
      }
      ws.send(proto.Request.encode(proto.Request.create(message)).finish());
    };

    connected.promise.then(() => {
      sendMessage({
        hasControlRequest: true,
        controlRequest: { token: tokenParam },
      });
    });
    Object.assign(window, {
      sendMessage,
      setPanTiltSpeed: (x: number, y: number) => {
        sendMessage({
          hasUvcExtendRequest: true,
          uvcExtendRequest: {
            data: [
              x > 0 ? 1 : x < 0 ? 255 : 0,
              Math.ceil(Math.abs(x)),
              y > 0 ? 1 : y < 0 ? 255 : 0,
              Math.ceil(Math.abs(y)),
            ],
            curDeviceSerialNum: serialNumber,
            paramType: proto.ParamType.PARAM_PAN_TILT_RELATIVE,
            selector: proto.ControlSelector.XU_PANTILT_RELATIVE_CONTROL,
            presetPosIndex: -1,
          },
        });
      },
      setZoom: (z: number) => {
        sendMessage({
          hasUvcRequest: true,
          uvcRequest: {
            curDeviceSerialNum: serialNumber,
            paramType: proto.ParamType.PARAM_ZOOM,
            value: z,
          },
        });
      },
    });
    appendLog(
      "Use `setPanTiltSpeed(x, y)` and `setZoom(z)` to control the camera"
    );
  }, []);

  const {axis, zoomLevel} = useGamepadHandler()

  return (
    <div>
      <textarea
        ref={logRef}
        readOnly
        style={{
          width: "100%",
          height: "200px",
          marginTop: "10px",
          padding: "5px",
          fontFamily: "monospace",
        }}
      />
      <div className={"flex p-4"}>
        <section className={"bg-gray-100 space-y-2 px-4 py-2"}>
          <h1 className={"font-extrabold text-center"}>Controller</h1>
          <div className="bg-gray-200 w-48 h-48 rounded-xl relative overflow-hidden rounded-full">
            {/*Y-axis*/}
            <div className="h-48 w-0.5 bg-gray-300 absolute left-1/4"></div>
            <div className="h-48 w-0.5 bg-gray-900 absolute left-1/2 z-10"></div>
            <div className="h-48 w-0.5 bg-gray-300 absolute left-3/4"></div>
            {/*X-axis*/}
            <div className="w-48 h-0.5 bg-gray-300 absolute top-1/4"></div>
            <div className="w-48 h-0.5 bg-gray-900 absolute top-1/2 z-10"></div>
            <div className="w-48 h-0.5 bg-gray-300 absolute top-3/4"></div>

            {/*Dot*/}
            <div className="w-4 h-4 bg-red-500 rounded-full absolute z-20" style={{
              top: (6 - 0.4 + (axis[1] * 6)) * 16,
              left: (6 - 0.4 + (axis[0] * 6)) * 16,
            }}></div>
          </div>
          <div className={"w-48"}>
            <div className={"h-4 bg-gray-200 rounded-md overflow-hidden"}>
              <div className={"h-4 bg-blue-500"} style={{
                width: `${((zoomLevel - 100) * 100 / 300).toFixed(2)}%`
              }}></div>
            </div>
            <div className={"flex justify-between px-2 font-bold text-sm"}>
              <span>S</span>
              <span>L</span>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
