import { atom } from "nanostores";
import * as proto from "../generated/insta360linkcontroller.proto";
import { $throttledPanTiltSpeed, $zoomLevel } from "../state/camera";
import { addLog } from "../state/logging";

// State stores
export const $connectionStatus = atom<"disconnected" | "connected">(
  "disconnected"
);

let ws: WebSocket;
let serialNumber = "";

export function initializeWebSocket(port: string, token: string) {
  if (ws) return;
  ws = new WebSocket(`ws://localhost:${port}/?token=${token}`);
  ws.binaryType = "arraybuffer";

  ws.onopen = () => {
    $connectionStatus.set("connected");
    addLog("Connected");
    sendMessage({
      hasControlRequest: true,
      controlRequest: { token },
    });
  };

  ws.onclose = () => {
    $connectionStatus.set("disconnected");
    addLog("Disconnected");
  };

  ws.onerror = (event) => {
    console.log(event);
    addLog(`Error: ${event}`);
  };

  ws.onmessage = (event) => {
    const message = proto.Response.decode(new Uint8Array(event.data));
    handleIncomingMessage(message);
  };

  startHeartbeat();
}

function handleIncomingMessage(message: proto.Response) {
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
      addLog(`<< ${valueKey} ${JSON.stringify(message[valueKey])}`);
    }
  }

  if (message.hasDeviceInfoNotify && message.deviceInfoNotify) {
    serialNumber = message.deviceInfoNotify.curDeviceSerialNum;
  }
}

function sendMessage(message: Partial<proto.Request>) {
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
      addLog(`>> ${valueKey} ${JSON.stringify(message[valueKey])}`);
    }
  }

  ws.send(proto.Request.encode(proto.Request.create(message)).finish());
}

$throttledPanTiltSpeed.listen((value) => {
  sendMessage({
    hasUvcExtendRequest: true,
    uvcExtendRequest: {
      data: [
        value.x > 0 ? 1 : value.x < 0 ? 255 : 0,
        Math.ceil(Math.abs(value.x)),
        value.y > 0 ? 1 : value.y < 0 ? 255 : 0,
        Math.ceil(Math.abs(value.y)),
      ],
      curDeviceSerialNum: serialNumber,
      paramType: proto.ParamType.PARAM_PAN_TILT_RELATIVE,
      selector: proto.ControlSelector.XU_PANTILT_RELATIVE_CONTROL,
      presetPosIndex: -1,
    },
  });
});

$zoomLevel.listen((value) => {
  sendMessage({
    hasUvcRequest: true,
    uvcRequest: {
      curDeviceSerialNum: serialNumber,
      paramType: proto.ParamType.PARAM_ZOOM,
      value,
    },
  });
});

function startHeartbeat() {
  setInterval(() => {
    sendMessage({
      hasHeartbeatRequest: true,
      heartbeatRequest: {},
    });
  }, 1000);
}
