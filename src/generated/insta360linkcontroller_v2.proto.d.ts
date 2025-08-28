import * as $protobuf from "protobufjs";
import Long = require("long");
/** ParamType enum. */
export enum ParamType {
    PARAM_MIRROR_VER = 1,
    PARAM_MIRROR_HOR = 2,
    PARAM_RESET_PTZ = 3,
    PARAM_ZOOM = 4,
    PARAM_VIDEO_MODE = 5,
    PARAM_PTZ_MID = 6,
    PARAM_PTZ_OP = 7,
    PATAM_PTZ_HOST = 8,
    PARAM_TRACK_SPEED = 9,
    PARAM_COMPOSITION_STYLE = 10,
    PARAM_COMPOSITION_STYLE_SWITCH = 11,
    PARAM_AUTO_TRACK = 12,
    PARAM_SINGLE_TAPTRACKING = 13,
    PARAM_ISO_VALUE = 14,
    PARAM_SHUTTER_VALUE = 15,
    PARAM_EXPOSURE_COMPENSATION = 16,
    PARAM_AUTO_EXPOSURE = 17,
    PARAM_AUTO_FOCUS = 18,
    PARAM_MANUAL_FOCUS_VALUE = 19,
    PARAM_AUTO_WHITEBALANCE = 20,
    PARAM_WHITE_BALANCE_TEMP = 21,
    PARAM_BRIGHTNESS = 22,
    PARAM_CONTRAST = 23,
    PARAM_SATURATION = 24,
    PARAM_SHARPNESS = 25,
    PARAM_HDR = 26,
    PARAM_AUTI_FLICK = 27,
    PARAM_BLUR_SWITCH = 28,
    PARAM_REPLACE_SWITCH = 29,
    PARAM_BLUR_RADIUS = 30,
    PARAM_BLUR_MODE = 31,
    PARAM_REPLACE_INDEX = 32,
    PARAM_AUDIO_CAPTURE_MODE = 33,
    PARAM_SMART_ADJUST = 34,
    PARAM_PRIVACY_MODE = 35,
    PARAM_ROLL_ADJUST = 36,
    PARAM_LOWER_RES = 37,
    PARAM_VERTICAL_SCREEN = 38,
    PARAM_GESTURE_TOTAL_SWITCH = 39,
    PARAM_GESTURE_PALM_SWITCH = 40,
    PARAM_GESTURE_V_SWITCH = 41,
    PARAM_GESTURE_L_SWITCH = 42,
    PARAM_GESTURE_ROCK_SWITCH = 43,
    PARAM_GESTURE_OK_SWITCH = 44,
    PARAM_HOST_PTZ_INFO = 45,
    PARAM_IMAGE_FILTER = 46,
    PARAM_IMAGE_TEMPLATE = 47,
    PARAM_CLOSE_BLUR_REPLACE = 48,
    PARAM_VIDEO_PRIVACY_MODE = 49,
    PARAM_FINE_TUNING = 50,
    PARAM_TRACK_FIRBOIDDEN_AREA = 51,
    PARAM_VER_SCREEN_LOCK = 52,
    PARAM_ROLL = 100,
    PARAM_PAN_TILT_ABSOLUTE = 101,
    PARAM_PAN_TILT_RELATIVE = 102,
    PARAM_PRESET_POSITION = 103,
    PARAM_BIAS = 104,
    PARAM_CHANGE_DEVICE_NAME = 105,
    PARAM_RESOLUTION = 106,
    PARAM_IMAGEPARAM_RESET = 107,
    PARAM_SAVE_IMAGEPARAM_PRESET = 108
}

/** VideoModeType enum. */
export enum VideoModeType {
    NORMAL_MODE = 0,
    AUTO_COMPOSITION = 1,
    TRACKING_MODE = 2,
    WHITEBOARD_MODE = 4,
    OVERHEAD_MODE = 5,
    DESKVIEW_MODE = 6,
    AUTOFRAMEING_MODE = 7,
    SMARTWHITEBOARD_MODE = 8,
    REGIONALTRACK_MODE = 9,
    SMARTWHITEBOARD_QUERY = 10,
    SMARTWHITEBOARD_CONFIG = 11
}

/** MettingCameraType enum. */
export enum MettingCameraType {
    Link = 0,
    PUC2 = 1,
    PUC2_Flow = 2,
    PUC3 = 3,
    PUC3_Flow = 4
}

/** ControlSelector enum. */
export enum ControlSelector {
    XU_CONTROL_UNDEFINED = 0,
    XU_EXEC_SCRIPT_CONTROL = 1,
    XU_VIDEO_MODE_CONTROL = 2,
    XU_DEVICE_INFO_CONTROL = 3,
    XU_PTZ_CMD_CONTROL = 4,
    XU_GESTURE_STATUS_CONTROL = 5,
    XU_GESTURE_BIND_CONTROL = 6,
    XU_NOISE_CANCEL_CONTROL = 7,
    XU_FIRMWARE_UPGRADE_CONTROL = 8,
    XU_EXPOSURE_VALUE_CONTROL = 9,
    XU_TAKE_PICTURE_CONTROL = 10,
    XU_DEVICE_STATUS_CONTROL = 11,
    XU_DEVICE_SN_CONTROL = 12,
    XU_DEVICE_LICENSEN_CONTROL = 13,
    XU_DEVICE_PARAM_CONTROL = 14,
    XU_AF_MODE_CONTROL = 15,
    XU_EXPOSURE_CURVE_CONTROL = 16,
    XU_USB_MODE_SWITCH_CONTROL = 17,
    XU_TRACK_SPEED_CONTROL = 18,
    XU_LAYOUT_STYLE_CONTROL = 19,
    XU_HEAD_LIST_CONTROL = 20,
    XU_TRACK_TARGET_CONTROL = 21,
    XU_PANTILT_RELATIVE_CONTROL = 22,
    XU_MOBVOI_PUBKEY_CONTROL = 23,
    XU_BIAS_CONTROL = 24,
    XU_ISO_CONTROL = 25,
    XU_PANTILT_ABSOLUTE_CONTROL = 26,
    XU_FUNC_ENABLE_CONTROL = 27,
    XU_VIDEO_RES_CONTROL = 28,
    XU_EXPOSURE_TIME_ABSOLUTE_CONTROL = 29,
    XU_AE_MODE_CONTROL = 30
}

/** Represents a UVCRequest. */
export class UVCRequest implements IUVCRequest {

    /**
     * Constructs a new UVCRequest.
     * @param [properties] Properties to set
     */
    constructor(properties?: IUVCRequest);

    /** UVCRequest curDeviceSerialNum. */
    public curDeviceSerialNum: string;

    /** UVCRequest paramType. */
    public paramType: ParamType;

    /** UVCRequest value. */
    public value: (number|Long);

    /**
     * Creates a new UVCRequest instance using the specified properties.
     * @param [properties] Properties to set
     * @returns UVCRequest instance
     */
    public static create(properties?: IUVCRequest): UVCRequest;

    /**
     * Encodes the specified UVCRequest message. Does not implicitly {@link UVCRequest.verify|verify} messages.
     * @param message UVCRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IUVCRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified UVCRequest message, length delimited. Does not implicitly {@link UVCRequest.verify|verify} messages.
     * @param message UVCRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IUVCRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a UVCRequest message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns UVCRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): UVCRequest;

    /**
     * Decodes a UVCRequest message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns UVCRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): UVCRequest;

    /**
     * Verifies a UVCRequest message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a UVCRequest message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns UVCRequest
     */
    public static fromObject(object: { [k: string]: any }): UVCRequest;

    /**
     * Creates a plain object from a UVCRequest message. Also converts values to other types if specified.
     * @param message UVCRequest
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: UVCRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this UVCRequest to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for UVCRequest
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a UVCExtendRequest. */
export class UVCExtendRequest implements IUVCExtendRequest {

    /**
     * Constructs a new UVCExtendRequest.
     * @param [properties] Properties to set
     */
    constructor(properties?: IUVCExtendRequest);

    /** UVCExtendRequest curDeviceSerialNum. */
    public curDeviceSerialNum: string;

    /** UVCExtendRequest paramType. */
    public paramType: ParamType;

    /** UVCExtendRequest selector. */
    public selector: ControlSelector;

    /** UVCExtendRequest data. */
    public data: number[];

    /** UVCExtendRequest presetPosIndex. */
    public presetPosIndex: number;

    /**
     * Creates a new UVCExtendRequest instance using the specified properties.
     * @param [properties] Properties to set
     * @returns UVCExtendRequest instance
     */
    public static create(properties?: IUVCExtendRequest): UVCExtendRequest;

    /**
     * Encodes the specified UVCExtendRequest message. Does not implicitly {@link UVCExtendRequest.verify|verify} messages.
     * @param message UVCExtendRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IUVCExtendRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified UVCExtendRequest message, length delimited. Does not implicitly {@link UVCExtendRequest.verify|verify} messages.
     * @param message UVCExtendRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IUVCExtendRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a UVCExtendRequest message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns UVCExtendRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): UVCExtendRequest;

    /**
     * Decodes a UVCExtendRequest message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns UVCExtendRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): UVCExtendRequest;

    /**
     * Verifies a UVCExtendRequest message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a UVCExtendRequest message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns UVCExtendRequest
     */
    public static fromObject(object: { [k: string]: any }): UVCExtendRequest;

    /**
     * Creates a plain object from a UVCExtendRequest message. Also converts values to other types if specified.
     * @param message UVCExtendRequest
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: UVCExtendRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this UVCExtendRequest to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for UVCExtendRequest
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a DeviceInfoNotification. */
export class DeviceInfoNotification implements IDeviceInfoNotification {

    /**
     * Constructs a new DeviceInfoNotification.
     * @param [properties] Properties to set
     */
    constructor(properties?: IDeviceInfoNotification);

    /** DeviceInfoNotification basicInfo. */
    public basicInfo: IDeviceBasicInfo[];

    /** DeviceInfoNotification curDeviceSerialNum. */
    public curDeviceSerialNum: string;

    /**
     * Creates a new DeviceInfoNotification instance using the specified properties.
     * @param [properties] Properties to set
     * @returns DeviceInfoNotification instance
     */
    public static create(properties?: IDeviceInfoNotification): DeviceInfoNotification;

    /**
     * Encodes the specified DeviceInfoNotification message. Does not implicitly {@link DeviceInfoNotification.verify|verify} messages.
     * @param message DeviceInfoNotification message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IDeviceInfoNotification, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified DeviceInfoNotification message, length delimited. Does not implicitly {@link DeviceInfoNotification.verify|verify} messages.
     * @param message DeviceInfoNotification message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IDeviceInfoNotification, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a DeviceInfoNotification message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns DeviceInfoNotification
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): DeviceInfoNotification;

    /**
     * Decodes a DeviceInfoNotification message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns DeviceInfoNotification
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): DeviceInfoNotification;

    /**
     * Verifies a DeviceInfoNotification message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a DeviceInfoNotification message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns DeviceInfoNotification
     */
    public static fromObject(object: { [k: string]: any }): DeviceInfoNotification;

    /**
     * Creates a plain object from a DeviceInfoNotification message. Also converts values to other types if specified.
     * @param message DeviceInfoNotification
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: DeviceInfoNotification, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this DeviceInfoNotification to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for DeviceInfoNotification
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a DeviceBasicInfo. */
export class DeviceBasicInfo implements IDeviceBasicInfo {

    /**
     * Constructs a new DeviceBasicInfo.
     * @param [properties] Properties to set
     */
    constructor(properties?: IDeviceBasicInfo);

    /** DeviceBasicInfo deviceName. */
    public deviceName: string;

    /** DeviceBasicInfo serialNum. */
    public serialNum: string;

    /** DeviceBasicInfo cameraType. */
    public cameraType: MettingCameraType;

    /** DeviceBasicInfo VideoModeType. */
    public VideoModeType: VideoModeType;

    /** DeviceBasicInfo zoom. */
    public zoom?: (IZoomInfo|null);

    /** DeviceBasicInfo presetInfos. */
    public presetInfos: IPresetPosInfo[];

    /** DeviceBasicInfo curPresetPos. */
    public curPresetPos: number;

    /** DeviceBasicInfo verticallyMirror. */
    public verticallyMirror: boolean;

    /** DeviceBasicInfo horizontallyMirror. */
    public horizontallyMirror: boolean;

    /** DeviceBasicInfo settingInfos. */
    public settingInfos?: (IDeviceSettingInfo|null);

    /** DeviceBasicInfo hostPTZx. */
    public hostPTZx: number;

    /** DeviceBasicInfo hostPTZy. */
    public hostPTZy: number;

    /**
     * Creates a new DeviceBasicInfo instance using the specified properties.
     * @param [properties] Properties to set
     * @returns DeviceBasicInfo instance
     */
    public static create(properties?: IDeviceBasicInfo): DeviceBasicInfo;

    /**
     * Encodes the specified DeviceBasicInfo message. Does not implicitly {@link DeviceBasicInfo.verify|verify} messages.
     * @param message DeviceBasicInfo message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IDeviceBasicInfo, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified DeviceBasicInfo message, length delimited. Does not implicitly {@link DeviceBasicInfo.verify|verify} messages.
     * @param message DeviceBasicInfo message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IDeviceBasicInfo, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a DeviceBasicInfo message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns DeviceBasicInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): DeviceBasicInfo;

    /**
     * Decodes a DeviceBasicInfo message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns DeviceBasicInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): DeviceBasicInfo;

    /**
     * Verifies a DeviceBasicInfo message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a DeviceBasicInfo message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns DeviceBasicInfo
     */
    public static fromObject(object: { [k: string]: any }): DeviceBasicInfo;

    /**
     * Creates a plain object from a DeviceBasicInfo message. Also converts values to other types if specified.
     * @param message DeviceBasicInfo
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: DeviceBasicInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this DeviceBasicInfo to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for DeviceBasicInfo
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a ZoomInfo. */
export class ZoomInfo implements IZoomInfo {

    /**
     * Constructs a new ZoomInfo.
     * @param [properties] Properties to set
     */
    constructor(properties?: IZoomInfo);

    /** ZoomInfo curValue. */
    public curValue: number;

    /** ZoomInfo minValue. */
    public minValue: number;

    /** ZoomInfo maxValue. */
    public maxValue: number;

    /**
     * Creates a new ZoomInfo instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ZoomInfo instance
     */
    public static create(properties?: IZoomInfo): ZoomInfo;

    /**
     * Encodes the specified ZoomInfo message. Does not implicitly {@link ZoomInfo.verify|verify} messages.
     * @param message ZoomInfo message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IZoomInfo, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ZoomInfo message, length delimited. Does not implicitly {@link ZoomInfo.verify|verify} messages.
     * @param message ZoomInfo message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IZoomInfo, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ZoomInfo message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ZoomInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ZoomInfo;

    /**
     * Decodes a ZoomInfo message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ZoomInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ZoomInfo;

    /**
     * Verifies a ZoomInfo message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ZoomInfo message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ZoomInfo
     */
    public static fromObject(object: { [k: string]: any }): ZoomInfo;

    /**
     * Creates a plain object from a ZoomInfo message. Also converts values to other types if specified.
     * @param message ZoomInfo
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ZoomInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ZoomInfo to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ZoomInfo
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a PresetPosInfo. */
export class PresetPosInfo implements IPresetPosInfo {

    /**
     * Constructs a new PresetPosInfo.
     * @param [properties] Properties to set
     */
    constructor(properties?: IPresetPosInfo);

    /** PresetPosInfo name. */
    public name: string;

    /** PresetPosInfo index. */
    public index: number;

    /**
     * Creates a new PresetPosInfo instance using the specified properties.
     * @param [properties] Properties to set
     * @returns PresetPosInfo instance
     */
    public static create(properties?: IPresetPosInfo): PresetPosInfo;

    /**
     * Encodes the specified PresetPosInfo message. Does not implicitly {@link PresetPosInfo.verify|verify} messages.
     * @param message PresetPosInfo message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IPresetPosInfo, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified PresetPosInfo message, length delimited. Does not implicitly {@link PresetPosInfo.verify|verify} messages.
     * @param message PresetPosInfo message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IPresetPosInfo, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a PresetPosInfo message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns PresetPosInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): PresetPosInfo;

    /**
     * Decodes a PresetPosInfo message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns PresetPosInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): PresetPosInfo;

    /**
     * Verifies a PresetPosInfo message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a PresetPosInfo message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns PresetPosInfo
     */
    public static fromObject(object: { [k: string]: any }): PresetPosInfo;

    /**
     * Creates a plain object from a PresetPosInfo message. Also converts values to other types if specified.
     * @param message PresetPosInfo
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: PresetPosInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this PresetPosInfo to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for PresetPosInfo
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a DeviceSettingInfo. */
export class DeviceSettingInfo implements IDeviceSettingInfo {

    /**
     * Constructs a new DeviceSettingInfo.
     * @param [properties] Properties to set
     */
    constructor(properties?: IDeviceSettingInfo);

    /** DeviceSettingInfo compositionStyle. */
    public compositionStyle: number;

    /** DeviceSettingInfo trackSpeed. */
    public trackSpeed: number;

    /** DeviceSettingInfo enableAutoTrack. */
    public enableAutoTrack: boolean;

    /** DeviceSettingInfo enableSingleTapTracking. */
    public enableSingleTapTracking: boolean;

    /** DeviceSettingInfo compositionStyleEnabled. */
    public compositionStyleEnabled: boolean;

    /** DeviceSettingInfo hdr. */
    public hdr: boolean;

    /** DeviceSettingInfo brightness. */
    public brightness: number;

    /** DeviceSettingInfo contrast. */
    public contrast: number;

    /** DeviceSettingInfo satutation. */
    public satutation: number;

    /** DeviceSettingInfo sharpening. */
    public sharpening: number;

    /** DeviceSettingInfo imageParamReset. */
    public imageParamReset: boolean;

    /** DeviceSettingInfo autoExposure. */
    public autoExposure: boolean;

    /** DeviceSettingInfo isoValue. */
    public isoValue: number;

    /** DeviceSettingInfo shutterValue. */
    public shutterValue: number;

    /** DeviceSettingInfo exposureCompensation. */
    public exposureCompensation: number;

    /** DeviceSettingInfo autoWhiteBalance. */
    public autoWhiteBalance: boolean;

    /** DeviceSettingInfo whiteBalanceValue. */
    public whiteBalanceValue: number;

    /** DeviceSettingInfo imageParamPresetInfos. */
    public imageParamPresetInfos: IImageParamPreset[];

    /** DeviceSettingInfo imageFilterInfos. */
    public imageFilterInfos: IImageFilter[];

    /** DeviceSettingInfo curImageParam. */
    public curImageParam: number;

    /** DeviceSettingInfo curImageFilter. */
    public curImageFilter: number;

    /** DeviceSettingInfo supportVirtualCamera. */
    public supportVirtualCamera: boolean;

    /** DeviceSettingInfo enableBackGroudBlur. */
    public enableBackGroudBlur: boolean;

    /** DeviceSettingInfo enableBackGroudReplace. */
    public enableBackGroudReplace: boolean;

    /** DeviceSettingInfo supportBlurModeList. */
    public supportBlurModeList: number[];

    /** DeviceSettingInfo replaceIndex. */
    public replaceIndex: number;

    /** DeviceSettingInfo antiFlicker. */
    public antiFlicker: number;

    /** DeviceSettingInfo audioCaptureMode. */
    public audioCaptureMode: number;

    /** DeviceSettingInfo curBlurMode. */
    public curBlurMode: number;

    /** DeviceSettingInfo enableSmartAdjust. */
    public enableSmartAdjust: boolean;

    /** DeviceSettingInfo enablePrivacyMode. */
    public enablePrivacyMode: boolean;

    /** DeviceSettingInfo enableRollAdjust. */
    public enableRollAdjust: boolean;

    /** DeviceSettingInfo enableLowerRes. */
    public enableLowerRes: boolean;

    /** DeviceSettingInfo blurRadius. */
    public blurRadius: number;

    /** DeviceSettingInfo gestureEnabled. */
    public gestureEnabled: boolean;

    /** DeviceSettingInfo gesturePlamEnabled. */
    public gesturePlamEnabled: boolean;

    /** DeviceSettingInfo gestureVEnabled. */
    public gestureVEnabled: boolean;

    /** DeviceSettingInfo gestureLEnabled. */
    public gestureLEnabled: boolean;

    /** DeviceSettingInfo gestureRockEnabled. */
    public gestureRockEnabled: boolean;

    /** DeviceSettingInfo gestureOkEnabled. */
    public gestureOkEnabled: boolean;

    /** DeviceSettingInfo enableAutoFocus. */
    public enableAutoFocus: boolean;

    /** DeviceSettingInfo maualFocus. */
    public maualFocus: number;

    /** DeviceSettingInfo enableVerticalScreen. */
    public enableVerticalScreen: boolean;

    /** DeviceSettingInfo videoPrivacyMode. */
    public videoPrivacyMode: boolean;

    /** DeviceSettingInfo resolution. */
    public resolution: string;

    /** DeviceSettingInfo funeTuningValue. */
    public funeTuningValue: number;

    /** DeviceSettingInfo verScreenLock. */
    public verScreenLock: boolean;

    /** DeviceSettingInfo enableTrackForiddenArea. */
    public enableTrackForiddenArea: boolean;

    /**
     * Creates a new DeviceSettingInfo instance using the specified properties.
     * @param [properties] Properties to set
     * @returns DeviceSettingInfo instance
     */
    public static create(properties?: IDeviceSettingInfo): DeviceSettingInfo;

    /**
     * Encodes the specified DeviceSettingInfo message. Does not implicitly {@link DeviceSettingInfo.verify|verify} messages.
     * @param message DeviceSettingInfo message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IDeviceSettingInfo, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified DeviceSettingInfo message, length delimited. Does not implicitly {@link DeviceSettingInfo.verify|verify} messages.
     * @param message DeviceSettingInfo message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IDeviceSettingInfo, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a DeviceSettingInfo message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns DeviceSettingInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): DeviceSettingInfo;

    /**
     * Decodes a DeviceSettingInfo message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns DeviceSettingInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): DeviceSettingInfo;

    /**
     * Verifies a DeviceSettingInfo message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a DeviceSettingInfo message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns DeviceSettingInfo
     */
    public static fromObject(object: { [k: string]: any }): DeviceSettingInfo;

    /**
     * Creates a plain object from a DeviceSettingInfo message. Also converts values to other types if specified.
     * @param message DeviceSettingInfo
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: DeviceSettingInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this DeviceSettingInfo to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for DeviceSettingInfo
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents an ImageParamPreset. */
export class ImageParamPreset implements IImageParamPreset {

    /**
     * Constructs a new ImageParamPreset.
     * @param [properties] Properties to set
     */
    constructor(properties?: IImageParamPreset);

    /** ImageParamPreset name. */
    public name: string;

    /** ImageParamPreset index. */
    public index: number;

    /**
     * Creates a new ImageParamPreset instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ImageParamPreset instance
     */
    public static create(properties?: IImageParamPreset): ImageParamPreset;

    /**
     * Encodes the specified ImageParamPreset message. Does not implicitly {@link ImageParamPreset.verify|verify} messages.
     * @param message ImageParamPreset message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IImageParamPreset, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ImageParamPreset message, length delimited. Does not implicitly {@link ImageParamPreset.verify|verify} messages.
     * @param message ImageParamPreset message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IImageParamPreset, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an ImageParamPreset message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ImageParamPreset
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ImageParamPreset;

    /**
     * Decodes an ImageParamPreset message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ImageParamPreset
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ImageParamPreset;

    /**
     * Verifies an ImageParamPreset message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates an ImageParamPreset message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ImageParamPreset
     */
    public static fromObject(object: { [k: string]: any }): ImageParamPreset;

    /**
     * Creates a plain object from an ImageParamPreset message. Also converts values to other types if specified.
     * @param message ImageParamPreset
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ImageParamPreset, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ImageParamPreset to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ImageParamPreset
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents an ImageFilter. */
export class ImageFilter implements IImageFilter {

    /**
     * Constructs a new ImageFilter.
     * @param [properties] Properties to set
     */
    constructor(properties?: IImageFilter);

    /** ImageFilter name. */
    public name: string;

    /** ImageFilter index. */
    public index: number;

    /**
     * Creates a new ImageFilter instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ImageFilter instance
     */
    public static create(properties?: IImageFilter): ImageFilter;

    /**
     * Encodes the specified ImageFilter message. Does not implicitly {@link ImageFilter.verify|verify} messages.
     * @param message ImageFilter message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IImageFilter, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ImageFilter message, length delimited. Does not implicitly {@link ImageFilter.verify|verify} messages.
     * @param message ImageFilter message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IImageFilter, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an ImageFilter message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ImageFilter
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ImageFilter;

    /**
     * Decodes an ImageFilter message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ImageFilter
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ImageFilter;

    /**
     * Verifies an ImageFilter message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates an ImageFilter message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ImageFilter
     */
    public static fromObject(object: { [k: string]: any }): ImageFilter;

    /**
     * Creates a plain object from an ImageFilter message. Also converts values to other types if specified.
     * @param message ImageFilter
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ImageFilter, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ImageFilter to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ImageFilter
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a PTZParam. */
export class PTZParam implements IPTZParam {

    /**
     * Constructs a new PTZParam.
     * @param [properties] Properties to set
     */
    constructor(properties?: IPTZParam);

    /** PTZParam panSpeed. */
    public panSpeed: number;

    /** PTZParam tiltSpeed. */
    public tiltSpeed: number;

    /** PTZParam panValue. */
    public panValue: number;

    /** PTZParam tiltVaule. */
    public tiltVaule: number;

    /** PTZParam hostPTZx. */
    public hostPTZx: number;

    /** PTZParam hostPTZy. */
    public hostPTZy: number;

    /**
     * Creates a new PTZParam instance using the specified properties.
     * @param [properties] Properties to set
     * @returns PTZParam instance
     */
    public static create(properties?: IPTZParam): PTZParam;

    /**
     * Encodes the specified PTZParam message. Does not implicitly {@link PTZParam.verify|verify} messages.
     * @param message PTZParam message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IPTZParam, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified PTZParam message, length delimited. Does not implicitly {@link PTZParam.verify|verify} messages.
     * @param message PTZParam message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IPTZParam, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a PTZParam message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns PTZParam
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): PTZParam;

    /**
     * Decodes a PTZParam message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns PTZParam
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): PTZParam;

    /**
     * Verifies a PTZParam message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a PTZParam message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns PTZParam
     */
    public static fromObject(object: { [k: string]: any }): PTZParam;

    /**
     * Creates a plain object from a PTZParam message. Also converts values to other types if specified.
     * @param message PTZParam
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: PTZParam, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this PTZParam to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for PTZParam
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a ValueChangeNotification. */
export class ValueChangeNotification implements IValueChangeNotification {

    /**
     * Constructs a new ValueChangeNotification.
     * @param [properties] Properties to set
     */
    constructor(properties?: IValueChangeNotification);

    /** ValueChangeNotification curDeviceSerialNum. */
    public curDeviceSerialNum: string;

    /** ValueChangeNotification paramType. */
    public paramType: ParamType;

    /** ValueChangeNotification newValue. */
    public newValue: string;

    /** ValueChangeNotification ptzParam. */
    public ptzParam?: (IPTZParam|null);

    /**
     * Creates a new ValueChangeNotification instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ValueChangeNotification instance
     */
    public static create(properties?: IValueChangeNotification): ValueChangeNotification;

    /**
     * Encodes the specified ValueChangeNotification message. Does not implicitly {@link ValueChangeNotification.verify|verify} messages.
     * @param message ValueChangeNotification message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IValueChangeNotification, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ValueChangeNotification message, length delimited. Does not implicitly {@link ValueChangeNotification.verify|verify} messages.
     * @param message ValueChangeNotification message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IValueChangeNotification, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ValueChangeNotification message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ValueChangeNotification
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ValueChangeNotification;

    /**
     * Decodes a ValueChangeNotification message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ValueChangeNotification
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ValueChangeNotification;

    /**
     * Verifies a ValueChangeNotification message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ValueChangeNotification message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ValueChangeNotification
     */
    public static fromObject(object: { [k: string]: any }): ValueChangeNotification;

    /**
     * Creates a plain object from a ValueChangeNotification message. Also converts values to other types if specified.
     * @param message ValueChangeNotification
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ValueChangeNotification, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ValueChangeNotification to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ValueChangeNotification
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a SwitchDeviceRequest. */
export class SwitchDeviceRequest implements ISwitchDeviceRequest {

    /**
     * Constructs a new SwitchDeviceRequest.
     * @param [properties] Properties to set
     */
    constructor(properties?: ISwitchDeviceRequest);

    /** SwitchDeviceRequest curDeviceSerialNum. */
    public curDeviceSerialNum: string;

    /** SwitchDeviceRequest newDeviceSerialNum. */
    public newDeviceSerialNum: string;

    /**
     * Creates a new SwitchDeviceRequest instance using the specified properties.
     * @param [properties] Properties to set
     * @returns SwitchDeviceRequest instance
     */
    public static create(properties?: ISwitchDeviceRequest): SwitchDeviceRequest;

    /**
     * Encodes the specified SwitchDeviceRequest message. Does not implicitly {@link SwitchDeviceRequest.verify|verify} messages.
     * @param message SwitchDeviceRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ISwitchDeviceRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified SwitchDeviceRequest message, length delimited. Does not implicitly {@link SwitchDeviceRequest.verify|verify} messages.
     * @param message SwitchDeviceRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ISwitchDeviceRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a SwitchDeviceRequest message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns SwitchDeviceRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SwitchDeviceRequest;

    /**
     * Decodes a SwitchDeviceRequest message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns SwitchDeviceRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SwitchDeviceRequest;

    /**
     * Verifies a SwitchDeviceRequest message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a SwitchDeviceRequest message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns SwitchDeviceRequest
     */
    public static fromObject(object: { [k: string]: any }): SwitchDeviceRequest;

    /**
     * Creates a plain object from a SwitchDeviceRequest message. Also converts values to other types if specified.
     * @param message SwitchDeviceRequest
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: SwitchDeviceRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this SwitchDeviceRequest to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for SwitchDeviceRequest
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a ConnectionNotification. */
export class ConnectionNotification implements IConnectionNotification {

    /**
     * Constructs a new ConnectionNotification.
     * @param [properties] Properties to set
     */
    constructor(properties?: IConnectionNotification);

    /** ConnectionNotification connectNum. */
    public connectNum: number;

    /** ConnectionNotification inControl. */
    public inControl: boolean;

    /**
     * Creates a new ConnectionNotification instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ConnectionNotification instance
     */
    public static create(properties?: IConnectionNotification): ConnectionNotification;

    /**
     * Encodes the specified ConnectionNotification message. Does not implicitly {@link ConnectionNotification.verify|verify} messages.
     * @param message ConnectionNotification message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IConnectionNotification, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ConnectionNotification message, length delimited. Does not implicitly {@link ConnectionNotification.verify|verify} messages.
     * @param message ConnectionNotification message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IConnectionNotification, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ConnectionNotification message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ConnectionNotification
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ConnectionNotification;

    /**
     * Decodes a ConnectionNotification message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ConnectionNotification
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ConnectionNotification;

    /**
     * Verifies a ConnectionNotification message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ConnectionNotification message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ConnectionNotification
     */
    public static fromObject(object: { [k: string]: any }): ConnectionNotification;

    /**
     * Creates a plain object from a ConnectionNotification message. Also converts values to other types if specified.
     * @param message ConnectionNotification
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ConnectionNotification, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ConnectionNotification to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ConnectionNotification
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a ControlRequest. */
export class ControlRequest implements IControlRequest {

    /**
     * Constructs a new ControlRequest.
     * @param [properties] Properties to set
     */
    constructor(properties?: IControlRequest);

    /** ControlRequest token. */
    public token: string;

    /**
     * Creates a new ControlRequest instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ControlRequest instance
     */
    public static create(properties?: IControlRequest): ControlRequest;

    /**
     * Encodes the specified ControlRequest message. Does not implicitly {@link ControlRequest.verify|verify} messages.
     * @param message ControlRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IControlRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ControlRequest message, length delimited. Does not implicitly {@link ControlRequest.verify|verify} messages.
     * @param message ControlRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IControlRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ControlRequest message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ControlRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ControlRequest;

    /**
     * Decodes a ControlRequest message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ControlRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ControlRequest;

    /**
     * Verifies a ControlRequest message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ControlRequest message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ControlRequest
     */
    public static fromObject(object: { [k: string]: any }): ControlRequest;

    /**
     * Creates a plain object from a ControlRequest message. Also converts values to other types if specified.
     * @param message ControlRequest
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ControlRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ControlRequest to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ControlRequest
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a ControlResponse. */
export class ControlResponse implements IControlResponse {

    /**
     * Constructs a new ControlResponse.
     * @param [properties] Properties to set
     */
    constructor(properties?: IControlResponse);

    /** ControlResponse success. */
    public success: boolean;

    /** ControlResponse reason. */
    public reason: ControlResponse.FailureReason;

    /**
     * Creates a new ControlResponse instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ControlResponse instance
     */
    public static create(properties?: IControlResponse): ControlResponse;

    /**
     * Encodes the specified ControlResponse message. Does not implicitly {@link ControlResponse.verify|verify} messages.
     * @param message ControlResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IControlResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ControlResponse message, length delimited. Does not implicitly {@link ControlResponse.verify|verify} messages.
     * @param message ControlResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IControlResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ControlResponse message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ControlResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ControlResponse;

    /**
     * Decodes a ControlResponse message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ControlResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ControlResponse;

    /**
     * Verifies a ControlResponse message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ControlResponse message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ControlResponse
     */
    public static fromObject(object: { [k: string]: any }): ControlResponse;

    /**
     * Creates a plain object from a ControlResponse message. Also converts values to other types if specified.
     * @param message ControlResponse
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ControlResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ControlResponse to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ControlResponse
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

export namespace ControlResponse {

    /** FailureReason enum. */
    enum FailureReason {
        UNKNOW_FAILURE = 0,
        ANOTHER_CONNECTION_EXISTS = 1,
        TOKEN_INVALID = 2,
        ACTIVE_DISCONNECT = 3
    }
}

/** Represents a HeartbeatRequest. */
export class HeartbeatRequest implements IHeartbeatRequest {

    /**
     * Constructs a new HeartbeatRequest.
     * @param [properties] Properties to set
     */
    constructor(properties?: IHeartbeatRequest);

    /**
     * Creates a new HeartbeatRequest instance using the specified properties.
     * @param [properties] Properties to set
     * @returns HeartbeatRequest instance
     */
    public static create(properties?: IHeartbeatRequest): HeartbeatRequest;

    /**
     * Encodes the specified HeartbeatRequest message. Does not implicitly {@link HeartbeatRequest.verify|verify} messages.
     * @param message HeartbeatRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IHeartbeatRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified HeartbeatRequest message, length delimited. Does not implicitly {@link HeartbeatRequest.verify|verify} messages.
     * @param message HeartbeatRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IHeartbeatRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a HeartbeatRequest message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns HeartbeatRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): HeartbeatRequest;

    /**
     * Decodes a HeartbeatRequest message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns HeartbeatRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): HeartbeatRequest;

    /**
     * Verifies a HeartbeatRequest message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a HeartbeatRequest message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns HeartbeatRequest
     */
    public static fromObject(object: { [k: string]: any }): HeartbeatRequest;

    /**
     * Creates a plain object from a HeartbeatRequest message. Also converts values to other types if specified.
     * @param message HeartbeatRequest
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: HeartbeatRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this HeartbeatRequest to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for HeartbeatRequest
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a HeartbeatResponse. */
export class HeartbeatResponse implements IHeartbeatResponse {

    /**
     * Constructs a new HeartbeatResponse.
     * @param [properties] Properties to set
     */
    constructor(properties?: IHeartbeatResponse);

    /**
     * Creates a new HeartbeatResponse instance using the specified properties.
     * @param [properties] Properties to set
     * @returns HeartbeatResponse instance
     */
    public static create(properties?: IHeartbeatResponse): HeartbeatResponse;

    /**
     * Encodes the specified HeartbeatResponse message. Does not implicitly {@link HeartbeatResponse.verify|verify} messages.
     * @param message HeartbeatResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IHeartbeatResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified HeartbeatResponse message, length delimited. Does not implicitly {@link HeartbeatResponse.verify|verify} messages.
     * @param message HeartbeatResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IHeartbeatResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a HeartbeatResponse message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns HeartbeatResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): HeartbeatResponse;

    /**
     * Decodes a HeartbeatResponse message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns HeartbeatResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): HeartbeatResponse;

    /**
     * Verifies a HeartbeatResponse message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a HeartbeatResponse message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns HeartbeatResponse
     */
    public static fromObject(object: { [k: string]: any }): HeartbeatResponse;

    /**
     * Creates a plain object from a HeartbeatResponse message. Also converts values to other types if specified.
     * @param message HeartbeatResponse
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: HeartbeatResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this HeartbeatResponse to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for HeartbeatResponse
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a PresetUpdateRequest. */
export class PresetUpdateRequest implements IPresetUpdateRequest {

    /**
     * Constructs a new PresetUpdateRequest.
     * @param [properties] Properties to set
     */
    constructor(properties?: IPresetUpdateRequest);

    /** PresetUpdateRequest type. */
    public type: PresetUpdateRequest.PresetUpdateType;

    /** PresetUpdateRequest position. */
    public position: number;

    /** PresetUpdateRequest name. */
    public name: string;

    /** PresetUpdateRequest curDeviceSerialNum. */
    public curDeviceSerialNum: string;

    /**
     * Creates a new PresetUpdateRequest instance using the specified properties.
     * @param [properties] Properties to set
     * @returns PresetUpdateRequest instance
     */
    public static create(properties?: IPresetUpdateRequest): PresetUpdateRequest;

    /**
     * Encodes the specified PresetUpdateRequest message. Does not implicitly {@link PresetUpdateRequest.verify|verify} messages.
     * @param message PresetUpdateRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IPresetUpdateRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified PresetUpdateRequest message, length delimited. Does not implicitly {@link PresetUpdateRequest.verify|verify} messages.
     * @param message PresetUpdateRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IPresetUpdateRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a PresetUpdateRequest message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns PresetUpdateRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): PresetUpdateRequest;

    /**
     * Decodes a PresetUpdateRequest message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns PresetUpdateRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): PresetUpdateRequest;

    /**
     * Verifies a PresetUpdateRequest message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a PresetUpdateRequest message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns PresetUpdateRequest
     */
    public static fromObject(object: { [k: string]: any }): PresetUpdateRequest;

    /**
     * Creates a plain object from a PresetUpdateRequest message. Also converts values to other types if specified.
     * @param message PresetUpdateRequest
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: PresetUpdateRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this PresetUpdateRequest to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for PresetUpdateRequest
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

export namespace PresetUpdateRequest {

    /** PresetUpdateType enum. */
    enum PresetUpdateType {
        ADD = 0,
        UPDATE = 1,
        DELETE = 2,
        RENAME = 3,
        SELECT = 4
    }
}

/** Represents a PresetUpdateResponse. */
export class PresetUpdateResponse implements IPresetUpdateResponse {

    /**
     * Constructs a new PresetUpdateResponse.
     * @param [properties] Properties to set
     */
    constructor(properties?: IPresetUpdateResponse);

    /** PresetUpdateResponse success. */
    public success: boolean;

    /** PresetUpdateResponse reason. */
    public reason: PresetUpdateResponse.FailureReason;

    /** PresetUpdateResponse curDeviceInfo. */
    public curDeviceInfo?: (IDeviceBasicInfo|null);

    /**
     * Creates a new PresetUpdateResponse instance using the specified properties.
     * @param [properties] Properties to set
     * @returns PresetUpdateResponse instance
     */
    public static create(properties?: IPresetUpdateResponse): PresetUpdateResponse;

    /**
     * Encodes the specified PresetUpdateResponse message. Does not implicitly {@link PresetUpdateResponse.verify|verify} messages.
     * @param message PresetUpdateResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IPresetUpdateResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified PresetUpdateResponse message, length delimited. Does not implicitly {@link PresetUpdateResponse.verify|verify} messages.
     * @param message PresetUpdateResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IPresetUpdateResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a PresetUpdateResponse message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns PresetUpdateResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): PresetUpdateResponse;

    /**
     * Decodes a PresetUpdateResponse message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns PresetUpdateResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): PresetUpdateResponse;

    /**
     * Verifies a PresetUpdateResponse message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a PresetUpdateResponse message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns PresetUpdateResponse
     */
    public static fromObject(object: { [k: string]: any }): PresetUpdateResponse;

    /**
     * Creates a plain object from a PresetUpdateResponse message. Also converts values to other types if specified.
     * @param message PresetUpdateResponse
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: PresetUpdateResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this PresetUpdateResponse to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for PresetUpdateResponse
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

export namespace PresetUpdateResponse {

    /** FailureReason enum. */
    enum FailureReason {
        UNKNOW_FAILURE = 0,
        LINK_DISCONNECTED = 1
    }
}

/** Represents an ImageParamPresetUpdateRequest. */
export class ImageParamPresetUpdateRequest implements IImageParamPresetUpdateRequest {

    /**
     * Constructs a new ImageParamPresetUpdateRequest.
     * @param [properties] Properties to set
     */
    constructor(properties?: IImageParamPresetUpdateRequest);

    /** ImageParamPresetUpdateRequest imageParamPresetInfos. */
    public imageParamPresetInfos: IImageParamPreset[];

    /** ImageParamPresetUpdateRequest curImageParam. */
    public curImageParam: number;

    /** ImageParamPresetUpdateRequest curDeviceSerialNum. */
    public curDeviceSerialNum: string;

    /**
     * Creates a new ImageParamPresetUpdateRequest instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ImageParamPresetUpdateRequest instance
     */
    public static create(properties?: IImageParamPresetUpdateRequest): ImageParamPresetUpdateRequest;

    /**
     * Encodes the specified ImageParamPresetUpdateRequest message. Does not implicitly {@link ImageParamPresetUpdateRequest.verify|verify} messages.
     * @param message ImageParamPresetUpdateRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IImageParamPresetUpdateRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ImageParamPresetUpdateRequest message, length delimited. Does not implicitly {@link ImageParamPresetUpdateRequest.verify|verify} messages.
     * @param message ImageParamPresetUpdateRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IImageParamPresetUpdateRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an ImageParamPresetUpdateRequest message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ImageParamPresetUpdateRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ImageParamPresetUpdateRequest;

    /**
     * Decodes an ImageParamPresetUpdateRequest message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ImageParamPresetUpdateRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ImageParamPresetUpdateRequest;

    /**
     * Verifies an ImageParamPresetUpdateRequest message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates an ImageParamPresetUpdateRequest message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ImageParamPresetUpdateRequest
     */
    public static fromObject(object: { [k: string]: any }): ImageParamPresetUpdateRequest;

    /**
     * Creates a plain object from an ImageParamPresetUpdateRequest message. Also converts values to other types if specified.
     * @param message ImageParamPresetUpdateRequest
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ImageParamPresetUpdateRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ImageParamPresetUpdateRequest to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ImageParamPresetUpdateRequest
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents an ImageParamPresetUpdateResponse. */
export class ImageParamPresetUpdateResponse implements IImageParamPresetUpdateResponse {

    /**
     * Constructs a new ImageParamPresetUpdateResponse.
     * @param [properties] Properties to set
     */
    constructor(properties?: IImageParamPresetUpdateResponse);

    /** ImageParamPresetUpdateResponse success. */
    public success: boolean;

    /** ImageParamPresetUpdateResponse reason. */
    public reason: ImageParamPresetUpdateResponse.FailureReason;

    /** ImageParamPresetUpdateResponse curDeviceInfo. */
    public curDeviceInfo?: (IDeviceBasicInfo|null);

    /**
     * Creates a new ImageParamPresetUpdateResponse instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ImageParamPresetUpdateResponse instance
     */
    public static create(properties?: IImageParamPresetUpdateResponse): ImageParamPresetUpdateResponse;

    /**
     * Encodes the specified ImageParamPresetUpdateResponse message. Does not implicitly {@link ImageParamPresetUpdateResponse.verify|verify} messages.
     * @param message ImageParamPresetUpdateResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IImageParamPresetUpdateResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ImageParamPresetUpdateResponse message, length delimited. Does not implicitly {@link ImageParamPresetUpdateResponse.verify|verify} messages.
     * @param message ImageParamPresetUpdateResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IImageParamPresetUpdateResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an ImageParamPresetUpdateResponse message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ImageParamPresetUpdateResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ImageParamPresetUpdateResponse;

    /**
     * Decodes an ImageParamPresetUpdateResponse message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ImageParamPresetUpdateResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ImageParamPresetUpdateResponse;

    /**
     * Verifies an ImageParamPresetUpdateResponse message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates an ImageParamPresetUpdateResponse message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ImageParamPresetUpdateResponse
     */
    public static fromObject(object: { [k: string]: any }): ImageParamPresetUpdateResponse;

    /**
     * Creates a plain object from an ImageParamPresetUpdateResponse message. Also converts values to other types if specified.
     * @param message ImageParamPresetUpdateResponse
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ImageParamPresetUpdateResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ImageParamPresetUpdateResponse to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ImageParamPresetUpdateResponse
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

export namespace ImageParamPresetUpdateResponse {

    /** FailureReason enum. */
    enum FailureReason {
        UNKNOW_FAILURE = 0,
        LINK_DISCONNECTED = 1
    }
}

/** Represents a ToastNotification. */
export class ToastNotification implements IToastNotification {

    /**
     * Constructs a new ToastNotification.
     * @param [properties] Properties to set
     */
    constructor(properties?: IToastNotification);

    /** ToastNotification curDeviceSerialNum. */
    public curDeviceSerialNum: string;

    /** ToastNotification content. */
    public content: string;

    /**
     * Creates a new ToastNotification instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ToastNotification instance
     */
    public static create(properties?: IToastNotification): ToastNotification;

    /**
     * Encodes the specified ToastNotification message. Does not implicitly {@link ToastNotification.verify|verify} messages.
     * @param message ToastNotification message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IToastNotification, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ToastNotification message, length delimited. Does not implicitly {@link ToastNotification.verify|verify} messages.
     * @param message ToastNotification message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IToastNotification, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ToastNotification message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ToastNotification
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ToastNotification;

    /**
     * Decodes a ToastNotification message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ToastNotification
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ToastNotification;

    /**
     * Verifies a ToastNotification message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ToastNotification message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ToastNotification
     */
    public static fromObject(object: { [k: string]: any }): ToastNotification;

    /**
     * Creates a plain object from a ToastNotification message. Also converts values to other types if specified.
     * @param message ToastNotification
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ToastNotification, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ToastNotification to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ToastNotification
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a Request. */
export class Request implements IRequest {

    /**
     * Constructs a new Request.
     * @param [properties] Properties to set
     */
    constructor(properties?: IRequest);

    /** Request hasUvcRequest. */
    public hasUvcRequest: boolean;

    /** Request hasUvcExtendRequest. */
    public hasUvcExtendRequest: boolean;

    /** Request hasSwitchDeviceRequest. */
    public hasSwitchDeviceRequest: boolean;

    /** Request hasControlRequest. */
    public hasControlRequest: boolean;

    /** Request hasHeartbeatRequest. */
    public hasHeartbeatRequest: boolean;

    /** Request hasPresetUpdateRequest. */
    public hasPresetUpdateRequest: boolean;

    /** Request hasValueChangeNotify. */
    public hasValueChangeNotify: boolean;

    /** Request uvcRequest. */
    public uvcRequest?: (IUVCRequest|null);

    /** Request uvcExtendRequest. */
    public uvcExtendRequest?: (IUVCExtendRequest|null);

    /** Request switchDeviceRequest. */
    public switchDeviceRequest?: (ISwitchDeviceRequest|null);

    /** Request controlRequest. */
    public controlRequest?: (IControlRequest|null);

    /** Request heartbeatRequest. */
    public heartbeatRequest?: (IHeartbeatRequest|null);

    /** Request presetUpdateRequest. */
    public presetUpdateRequest?: (IPresetUpdateRequest|null);

    /** Request valueChangeNotify. */
    public valueChangeNotify?: (IValueChangeNotification|null);

    /**
     * Creates a new Request instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Request instance
     */
    public static create(properties?: IRequest): Request;

    /**
     * Encodes the specified Request message. Does not implicitly {@link Request.verify|verify} messages.
     * @param message Request message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Request message, length delimited. Does not implicitly {@link Request.verify|verify} messages.
     * @param message Request message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Request message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Request
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Request;

    /**
     * Decodes a Request message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Request
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Request;

    /**
     * Verifies a Request message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a Request message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Request
     */
    public static fromObject(object: { [k: string]: any }): Request;

    /**
     * Creates a plain object from a Request message. Also converts values to other types if specified.
     * @param message Request
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: Request, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this Request to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for Request
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a Response. */
export class Response implements IResponse {

    /**
     * Constructs a new Response.
     * @param [properties] Properties to set
     */
    constructor(properties?: IResponse);

    /** Response hasDeviceInfoNotify. */
    public hasDeviceInfoNotify: boolean;

    /** Response hasValueChangeNotify. */
    public hasValueChangeNotify: boolean;

    /** Response hasControlResponse. */
    public hasControlResponse: boolean;

    /** Response hasConnectionNotify. */
    public hasConnectionNotify: boolean;

    /** Response hasHeartbeatResponse. */
    public hasHeartbeatResponse: boolean;

    /** Response hasPresetUpdateResponse. */
    public hasPresetUpdateResponse: boolean;

    /** Response hasToastNotify. */
    public hasToastNotify: boolean;

    /** Response hasImageParamPresetUpdateRequest. */
    public hasImageParamPresetUpdateRequest: boolean;

    /** Response deviceInfoNotify. */
    public deviceInfoNotify?: (IDeviceInfoNotification|null);

    /** Response valueChangeNotify. */
    public valueChangeNotify?: (IValueChangeNotification|null);

    /** Response controlResponse. */
    public controlResponse?: (IControlResponse|null);

    /** Response connectionNotify. */
    public connectionNotify?: (IConnectionNotification|null);

    /** Response heartbeatResponse. */
    public heartbeatResponse?: (IHeartbeatResponse|null);

    /** Response presetUpdateResponse. */
    public presetUpdateResponse?: (IPresetUpdateResponse|null);

    /** Response toastNotify. */
    public toastNotify?: (IToastNotification|null);

    /** Response imageParamRequest. */
    public imageParamRequest?: (IImageParamPresetUpdateRequest|null);

    /**
     * Creates a new Response instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Response instance
     */
    public static create(properties?: IResponse): Response;

    /**
     * Encodes the specified Response message. Does not implicitly {@link Response.verify|verify} messages.
     * @param message Response message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Response message, length delimited. Does not implicitly {@link Response.verify|verify} messages.
     * @param message Response message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Response message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Response
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Response;

    /**
     * Decodes a Response message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Response
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Response;

    /**
     * Verifies a Response message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a Response message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Response
     */
    public static fromObject(object: { [k: string]: any }): Response;

    /**
     * Creates a plain object from a Response message. Also converts values to other types if specified.
     * @param message Response
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: Response, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this Response to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for Response
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}
