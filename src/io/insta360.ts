import { atom } from "nanostores";
import { ProtocolAbstraction, type UnifiedResponse } from "./protocol-abstraction";
import { $throttledPanTiltSpeed, $zoomLevel } from "../state/camera";
import { addLog } from "../state/logging";

// State stores
export const $connectionStatus = atom<"disconnected" | "connected">(
  "disconnected"
);

let ws: WebSocket;
let serialNumber = "";

async function requestPortAndToken(): Promise<{
  port: string;
  token: string;
}> {
  return new Promise<{ port: string; token: string }>((resolve) => {
    addLog(
      "Please take a screenshot of the QR code from the Insta360 app and paste it in this webpage."
    );
    const pasteHandler = async (event: ClipboardEvent) => {
      const items = event.clipboardData?.items;
      addLog(`Paste event received. Number of items: ${items?.length}`);
      if (!items) return;

      for (let i = 0; i < items.length; i++) {
        addLog(`items[${i}].type = ${items[i].type}`);
        if (items[i].type.indexOf("image") !== -1) {
          const blob = items[i].getAsFile();
          if (!blob) continue;
          addLog(`Received image with size: ${blob.size}`);
          try {
            const barcodeDetector = new (window as any).BarcodeDetector({
              formats: ["qr_code"],
            });
            const imageBitmap = await createImageBitmap(blob);
            try {
              const barcodes = await barcodeDetector.detect(imageBitmap);
              for (const [i, barcode] of barcodes.entries()) {
                addLog(`barcodes[${i}] detected.`);
                try {
                  const url = new URL(barcode.rawValue);
                  const port = url.searchParams.get("port");
                  const token = url.searchParams.get("token");
                  if (!port || !token) {
                    throw new Error("Missing port or token in URL");
                  }

                  const searchParams = new URLSearchParams(
                    window.location.search
                  );
                  searchParams.set("port", port);
                  searchParams.set("token", token);
                  window.history.replaceState({}, "", `?${searchParams}`);

                  resolve({ port, token });
                } catch (error) {
                  console.error("Error processing barcode:", error);
                  addLog(`Unable to process barcodes[${i}]: ${error}`);
                }
              }
            } catch (e) {
              console.error("Barcode detection failed:", e);
            }
          } catch (error) {
            console.error("Error processing image:", error);
            addLog("Error processing image. Please try again.");
          }
        }
      }
    };

    document.addEventListener("paste", pasteHandler);
  });
}

export async function initializeWebSocket() {
  const searchParams = new URLSearchParams(window.location.search);
  let port = searchParams.get("port");
  let token = searchParams.get("token");

  if (!port || !token) {
    console.error("Missing port or token");
    addLog("Missing port or token");

    ({ port, token } = await requestPortAndToken());
  }

  if (ws) return;
  ws = new WebSocket(`ws://localhost:${port}/?token=${token}`);
  ws.binaryType = "arraybuffer";

  ws.onopen = () => {
    $connectionStatus.set("connected");
    addLog("Connected");
    sendMessage(ProtocolAbstraction.createControlRequest(token));
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
    const message = ProtocolAbstraction.decodeResponse(new Uint8Array(event.data));
    handleIncomingMessage(message);
  };

  startHeartbeat();
}

function handleIncomingMessage(message: UnifiedResponse) {
  const categories: [string, string][] = [
    ["hasConnectionNotify", "connectionNotify"],
    ["hasControlResponse", "controlResponse"],
    ["hasDeviceInfoNotify", "deviceInfoNotify"],
    ["hasHeartbeatResponse", "heartbeatResponse"],
    ["hasPresetUpdateResponse", "presetUpdateResponse"],
    ["hasToastNotify", "toastNotify"],
    ["hasValueChangeNotify", "valueChangeNotify"],
  ];

  for (const [hasKey, valueKey] of categories) {
    if ((message as any)[hasKey]) {
      addLog(`<< ${valueKey} ${JSON.stringify((message as any)[valueKey])}`);
    }
  }

  if ((message as any).hasDeviceInfoNotify && (message as any).deviceInfoNotify) {
    serialNumber = (message as any).deviceInfoNotify.curDeviceSerialNum;
    // Handle different structure between v1 and v2 protocols
    const devices = (message as any).deviceInfoNotify.devices || (message as any).deviceInfoNotify.basicInfo;
    const device = devices?.find((device: any) => device.serialNum === serialNumber);
    if (device?.zoom?.curValue) {
      $zoomLevel.set(device.zoom.curValue);
      console.log("zoomLevel", device.zoom.curValue);
    }
  }
}

function sendMessage(message: any) {
  const categories: [string, string][] = [
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

  const request = ProtocolAbstraction.createRequest(message);
  ws.send(ProtocolAbstraction.encodeRequest(request));
}

$throttledPanTiltSpeed.listen((value) => {
  const paramType = ProtocolAbstraction.getParamType();
  const controlSelector = ProtocolAbstraction.getControlSelector();
  
  sendMessage(ProtocolAbstraction.createUvcExtendRequest({
    data: [
      value.x > 0 ? 1 : value.x < 0 ? 255 : 0,
      Math.ceil(Math.abs(value.x)),
      value.y > 0 ? 1 : value.y < 0 ? 255 : 0,
      Math.ceil(Math.abs(value.y)),
    ],
    curDeviceSerialNum: serialNumber,
    paramType: paramType.PARAM_PAN_TILT_RELATIVE,
    selector: controlSelector.XU_PANTILT_RELATIVE_CONTROL,
    presetPosIndex: -1,
  }));
});

$zoomLevel.listen((value) => {
  const paramType = ProtocolAbstraction.getParamType();
  
  sendMessage(ProtocolAbstraction.createUvcRequest({
    curDeviceSerialNum: serialNumber,
    paramType: paramType.PARAM_ZOOM,
    value,
  }));
});

function startHeartbeat() {
  setInterval(() => {
    sendMessage(ProtocolAbstraction.createHeartbeatRequest());
  }, 1000);
}
