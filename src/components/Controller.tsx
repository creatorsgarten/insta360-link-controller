import { useEffect, useRef } from "react";
import * as proto from "../generated/insta360linkcontroller.proto";

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
    </div>
  );
}
