import * as protoV1 from "../generated/insta360linkcontroller.proto";
import * as protoV2 from "../generated/insta360linkcontroller_v2.proto";
import { $protocolVersion, PARAM_MAPPING_V1_TO_V2, PARAM_MAPPING_V2_TO_V1 } from "../state/protocol";

export type UnifiedParamType = {
  PARAM_ZOOM: number;
  PARAM_BRIGHTNESS: number;
  PARAM_CONTRAST: number;
  PARAM_SATURATION: number;
  PARAM_SHARPNESS: number;
  PARAM_WHITE_BALANCE_TEMP: number;
  PARAM_ROLL: number;
  PARAM_PAN_TILT_ABSOLUTE: number;
  PARAM_PAN_TILT_RELATIVE: number;
  PARAM_PRESET_POSITION: number;
};

export type UnifiedControlSelector = {
  XU_PANTILT_RELATIVE_CONTROL: number;
};

export type UnifiedRequest = Partial<protoV1.Request | protoV2.Request>;
export type UnifiedResponse = protoV1.Response | protoV2.Response;

export class ProtocolAbstraction {
  private static getV1ParamValue(paramName: keyof UnifiedParamType): number {
    const v1ParamType = protoV1.ParamType as any;
    return v1ParamType[paramName];
  }

  private static getV2ParamValue(paramName: keyof UnifiedParamType): number {
    const v2ParamType = protoV2.ParamType as any;
    return v2ParamType[paramName];
  }

  static getParamType(): UnifiedParamType {
    const version = $protocolVersion.get();
    
    if (version === "v1") {
      return {
        PARAM_ZOOM: this.getV1ParamValue("PARAM_ZOOM"),
        PARAM_BRIGHTNESS: this.getV1ParamValue("PARAM_BRIGHTNESS"),
        PARAM_CONTRAST: this.getV1ParamValue("PARAM_CONTRAST"),
        PARAM_SATURATION: this.getV1ParamValue("PARAM_SATURATION"),
        PARAM_SHARPNESS: this.getV1ParamValue("PARAM_SHARPNESS"),
        PARAM_WHITE_BALANCE_TEMP: this.getV1ParamValue("PARAM_WHITE_BALANCE_TEMP"),
        PARAM_ROLL: this.getV1ParamValue("PARAM_ROLL"),
        PARAM_PAN_TILT_ABSOLUTE: this.getV1ParamValue("PARAM_PAN_TILT_ABSOLUTE"),
        PARAM_PAN_TILT_RELATIVE: this.getV1ParamValue("PARAM_PAN_TILT_RELATIVE"),
        PARAM_PRESET_POSITION: this.getV1ParamValue("PARAM_PRESET_POSITION"),
      };
    } else {
      return {
        PARAM_ZOOM: this.getV2ParamValue("PARAM_ZOOM"),
        PARAM_BRIGHTNESS: this.getV2ParamValue("PARAM_BRIGHTNESS"),
        PARAM_CONTRAST: this.getV2ParamValue("PARAM_CONTRAST"),
        PARAM_SATURATION: this.getV2ParamValue("PARAM_SATURATION"),
        PARAM_SHARPNESS: this.getV2ParamValue("PARAM_SHARPNESS"),
        PARAM_WHITE_BALANCE_TEMP: this.getV2ParamValue("PARAM_WHITE_BALANCE_TEMP"),
        PARAM_ROLL: this.getV2ParamValue("PARAM_ROLL"),
        PARAM_PAN_TILT_ABSOLUTE: this.getV2ParamValue("PARAM_PAN_TILT_ABSOLUTE"),
        PARAM_PAN_TILT_RELATIVE: this.getV2ParamValue("PARAM_PAN_TILT_RELATIVE"),
        PARAM_PRESET_POSITION: this.getV2ParamValue("PARAM_PRESET_POSITION"),
      };
    }
  }

  static getControlSelector(): UnifiedControlSelector {
    const version = $protocolVersion.get();
    
    if (version === "v1") {
      return {
        XU_PANTILT_RELATIVE_CONTROL: protoV1.ControlSelector.XU_PANTILT_RELATIVE_CONTROL,
      };
    } else {
      return {
        XU_PANTILT_RELATIVE_CONTROL: protoV2.ControlSelector.XU_PANTILT_RELATIVE_CONTROL,
      };
    }
  }

  static createRequest(message: any): any {
    const version = $protocolVersion.get();
    
    if (version === "v1") {
      return protoV1.Request.create(message);
    } else {
      return protoV2.Request.create(message);
    }
  }

  static encodeRequest(message: any): Uint8Array {
    const version = $protocolVersion.get();
    
    if (version === "v1") {
      return protoV1.Request.encode(message).finish();
    } else {
      return protoV2.Request.encode(message).finish();
    }
  }

  static decodeResponse(data: Uint8Array): UnifiedResponse {
    const version = $protocolVersion.get();
    
    if (version === "v1") {
      return protoV1.Response.decode(data);
    } else {
      return protoV2.Response.decode(data);
    }
  }

  static createUvcRequest(params: {
    curDeviceSerialNum: string;
    paramType: number;
    value: number;
  }): UnifiedRequest {
    return {
      hasUvcRequest: true,
      uvcRequest: {
        curDeviceSerialNum: params.curDeviceSerialNum,
        paramType: params.paramType,
        value: params.value,
      },
    };
  }

  static createUvcExtendRequest(params: {
    data: number[];
    curDeviceSerialNum: string;
    paramType: number;
    selector: number;
    presetPosIndex: number;
  }): UnifiedRequest {
    return {
      hasUvcExtendRequest: true,
      uvcExtendRequest: {
        data: params.data,
        curDeviceSerialNum: params.curDeviceSerialNum,
        paramType: params.paramType,
        selector: params.selector,
        presetPosIndex: params.presetPosIndex,
      },
    };
  }

  static createControlRequest(token: string): UnifiedRequest {
    return {
      hasControlRequest: true,
      controlRequest: { token },
    };
  }

  static createHeartbeatRequest(): UnifiedRequest {
    return {
      hasHeartbeatRequest: true,
      heartbeatRequest: {},
    };
  }
}
