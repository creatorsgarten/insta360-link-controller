/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
import * as $protobuf from "protobufjs/minimal";

// Common aliases
const $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
const $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

/**
 * ParamType enum.
 * @exports ParamType
 * @enum {number}
 * @property {number} PARAM_ZOOM=1 PARAM_ZOOM value
 * @property {number} PARAM_BRIGHTNESS=2 PARAM_BRIGHTNESS value
 * @property {number} PARAM_CONTRAST=3 PARAM_CONTRAST value
 * @property {number} PARAM_SATURATION=4 PARAM_SATURATION value
 * @property {number} PARAM_SHARPNESS=5 PARAM_SHARPNESS value
 * @property {number} PARAM_WHITE_BALANCE_TEMP=6 PARAM_WHITE_BALANCE_TEMP value
 * @property {number} PARAM_ROLL=7 PARAM_ROLL value
 * @property {number} PARAM_MANUAL_FOCUS=8 PARAM_MANUAL_FOCUS value
 * @property {number} PARAM_AUTOFOCUS=9 PARAM_AUTOFOCUS value
 * @property {number} PARAM_AUTO_EXPOSURE=10 PARAM_AUTO_EXPOSURE value
 * @property {number} PARAM_PAN_TILT_ABSOLUTE=11 PARAM_PAN_TILT_ABSOLUTE value
 * @property {number} PARAM_PAN_TILT_RELATIVE=12 PARAM_PAN_TILT_RELATIVE value
 * @property {number} PARAM_MIRROR=13 PARAM_MIRROR value
 * @property {number} PARAM_VIDEO_MODE=14 PARAM_VIDEO_MODE value
 * @property {number} PARAM_PRESET_POSITION=15 PARAM_PRESET_POSITION value
 * @property {number} PARAM_BIAS=16 PARAM_BIAS value
 * @property {number} PARAM_CHANGE_DEVICE_NAME=17 PARAM_CHANGE_DEVICE_NAME value
 * @property {number} PARAM_RESOLUTION=18 PARAM_RESOLUTION value
 * @property {number} PARAM_HDR=19 PARAM_HDR value
 * @property {number} PARAM_TRACK_SPEED=20 PARAM_TRACK_SPEED value
 * @property {number} PARAM_COMPOSITION_STYLE=21 PARAM_COMPOSITION_STYLE value
 * @property {number} PARAM_IMAGEPARAM_RESET=22 PARAM_IMAGEPARAM_RESET value
 * @property {number} PARAM_ISO_VALUE=23 PARAM_ISO_VALUE value
 * @property {number} PARAM_SHUTTER_VALUE=24 PARAM_SHUTTER_VALUE value
 * @property {number} PARAM_EXPOSURE_COMPENSATION=25 PARAM_EXPOSURE_COMPENSATION value
 * @property {number} PARAM_AUTO_WHITEBALANCE=26 PARAM_AUTO_WHITEBALANCE value
 * @property {number} PARAM_SAVE_IMAGEPARAM_PRESET=27 PARAM_SAVE_IMAGEPARAM_PRESET value
 * @property {number} PARAM_COMPOSITION_STYLE_SWITCH=28 PARAM_COMPOSITION_STYLE_SWITCH value
 */
export const ParamType = $root.ParamType = (() => {
    const valuesById = {}, values = Object.create(valuesById);
    values[valuesById[1] = "PARAM_ZOOM"] = 1;
    values[valuesById[2] = "PARAM_BRIGHTNESS"] = 2;
    values[valuesById[3] = "PARAM_CONTRAST"] = 3;
    values[valuesById[4] = "PARAM_SATURATION"] = 4;
    values[valuesById[5] = "PARAM_SHARPNESS"] = 5;
    values[valuesById[6] = "PARAM_WHITE_BALANCE_TEMP"] = 6;
    values[valuesById[7] = "PARAM_ROLL"] = 7;
    values[valuesById[8] = "PARAM_MANUAL_FOCUS"] = 8;
    values[valuesById[9] = "PARAM_AUTOFOCUS"] = 9;
    values[valuesById[10] = "PARAM_AUTO_EXPOSURE"] = 10;
    values[valuesById[11] = "PARAM_PAN_TILT_ABSOLUTE"] = 11;
    values[valuesById[12] = "PARAM_PAN_TILT_RELATIVE"] = 12;
    values[valuesById[13] = "PARAM_MIRROR"] = 13;
    values[valuesById[14] = "PARAM_VIDEO_MODE"] = 14;
    values[valuesById[15] = "PARAM_PRESET_POSITION"] = 15;
    values[valuesById[16] = "PARAM_BIAS"] = 16;
    values[valuesById[17] = "PARAM_CHANGE_DEVICE_NAME"] = 17;
    values[valuesById[18] = "PARAM_RESOLUTION"] = 18;
    values[valuesById[19] = "PARAM_HDR"] = 19;
    values[valuesById[20] = "PARAM_TRACK_SPEED"] = 20;
    values[valuesById[21] = "PARAM_COMPOSITION_STYLE"] = 21;
    values[valuesById[22] = "PARAM_IMAGEPARAM_RESET"] = 22;
    values[valuesById[23] = "PARAM_ISO_VALUE"] = 23;
    values[valuesById[24] = "PARAM_SHUTTER_VALUE"] = 24;
    values[valuesById[25] = "PARAM_EXPOSURE_COMPENSATION"] = 25;
    values[valuesById[26] = "PARAM_AUTO_WHITEBALANCE"] = 26;
    values[valuesById[27] = "PARAM_SAVE_IMAGEPARAM_PRESET"] = 27;
    values[valuesById[28] = "PARAM_COMPOSITION_STYLE_SWITCH"] = 28;
    return values;
})();

/**
 * VideoModeType enum.
 * @exports VideoModeType
 * @enum {number}
 * @property {number} NORMAL_MODE=0 NORMAL_MODE value
 * @property {number} AUTO_COMPOSITION=1 AUTO_COMPOSITION value
 * @property {number} TRACKING_MODE=2 TRACKING_MODE value
 * @property {number} WHITEBOARD_MODE=4 WHITEBOARD_MODE value
 * @property {number} OVERHEAD_MODE=5 OVERHEAD_MODE value
 * @property {number} DESKVIEW_MODE=6 DESKVIEW_MODE value
 */
export const VideoModeType = $root.VideoModeType = (() => {
    const valuesById = {}, values = Object.create(valuesById);
    values[valuesById[0] = "NORMAL_MODE"] = 0;
    values[valuesById[1] = "AUTO_COMPOSITION"] = 1;
    values[valuesById[2] = "TRACKING_MODE"] = 2;
    values[valuesById[4] = "WHITEBOARD_MODE"] = 4;
    values[valuesById[5] = "OVERHEAD_MODE"] = 5;
    values[valuesById[6] = "DESKVIEW_MODE"] = 6;
    return values;
})();

/**
 * ControlSelector enum.
 * @exports ControlSelector
 * @enum {number}
 * @property {number} XU_CONTROL_UNDEFINED=0 XU_CONTROL_UNDEFINED value
 * @property {number} XU_EXEC_SCRIPT_CONTROL=1 XU_EXEC_SCRIPT_CONTROL value
 * @property {number} XU_VIDEO_MODE_CONTROL=2 XU_VIDEO_MODE_CONTROL value
 * @property {number} XU_DEVICE_INFO_CONTROL=3 XU_DEVICE_INFO_CONTROL value
 * @property {number} XU_PTZ_CMD_CONTROL=4 XU_PTZ_CMD_CONTROL value
 * @property {number} XU_GESTURE_STATUS_CONTROL=5 XU_GESTURE_STATUS_CONTROL value
 * @property {number} XU_GESTURE_BIND_CONTROL=6 XU_GESTURE_BIND_CONTROL value
 * @property {number} XU_NOISE_CANCEL_CONTROL=7 XU_NOISE_CANCEL_CONTROL value
 * @property {number} XU_FIRMWARE_UPGRADE_CONTROL_OR_XU_BLEND_DRAW_CONTROL=8 XU_FIRMWARE_UPGRADE_CONTROL_OR_XU_BLEND_DRAW_CONTROL value
 * @property {number} XU_EXPOSURE_VALUE_CONTROL=9 XU_EXPOSURE_VALUE_CONTROL value
 * @property {number} XU_TAKE_PICTURE_CONTROL=10 XU_TAKE_PICTURE_CONTROL value
 * @property {number} XU_DEVICE_STATUS_CONTROL=11 XU_DEVICE_STATUS_CONTROL value
 * @property {number} XU_DEVICE_SN_CONTROL=12 XU_DEVICE_SN_CONTROL value
 * @property {number} XU_DEVICE_LICENSEN_CONTROL=13 XU_DEVICE_LICENSEN_CONTROL value
 * @property {number} XU_DEVICE_PARAM_CONTROL=14 XU_DEVICE_PARAM_CONTROL value
 * @property {number} XU_DOWNLOAD_FILE_CONTROL_OR_XU_AF_MODE_CONTROL=15 XU_DOWNLOAD_FILE_CONTROL_OR_XU_AF_MODE_CONTROL value
 * @property {number} XU_UPLOAD_FILE_CONTROL_OR_XU_EXPOSURE_CURVE_CONTROL=16 XU_UPLOAD_FILE_CONTROL_OR_XU_EXPOSURE_CURVE_CONTROL value
 * @property {number} XU_USB_MODE_SWITCH_CONTROL=17 XU_USB_MODE_SWITCH_CONTROL value
 * @property {number} XU_TRACK_SPEED_CONTROL=18 XU_TRACK_SPEED_CONTROL value
 * @property {number} XU_LAYOUT_STYLE_CONTROL=19 XU_LAYOUT_STYLE_CONTROL value
 * @property {number} XU_HEAD_LIST_CONTROL=20 XU_HEAD_LIST_CONTROL value
 * @property {number} XU_TRACK_TARGET_CONTROL=21 XU_TRACK_TARGET_CONTROL value
 * @property {number} XU_PANTILT_RELATIVE_CONTROL=22 XU_PANTILT_RELATIVE_CONTROL value
 * @property {number} XU_MOBVOI_PUBKEY_CONTROL=23 XU_MOBVOI_PUBKEY_CONTROL value
 * @property {number} XU_BIAS_CONTROL=24 XU_BIAS_CONTROL value
 * @property {number} XU_ISO_CONTROL=25 XU_ISO_CONTROL value
 * @property {number} XU_PANTILT_ABSOLUTE_CONTROL=26 XU_PANTILT_ABSOLUTE_CONTROL value
 * @property {number} XU_FUNC_ENABLE_CONTROL=27 XU_FUNC_ENABLE_CONTROL value
 * @property {number} XU_VIDEO_RES_CONTROL=28 XU_VIDEO_RES_CONTROL value
 * @property {number} XU_EXPOSURE_TIME_ABSOLUTE_CONTROL=29 XU_EXPOSURE_TIME_ABSOLUTE_CONTROL value
 * @property {number} XU_AE_MODE_CONTROL=30 XU_AE_MODE_CONTROL value
 */
export const ControlSelector = $root.ControlSelector = (() => {
    const valuesById = {}, values = Object.create(valuesById);
    values[valuesById[0] = "XU_CONTROL_UNDEFINED"] = 0;
    values[valuesById[1] = "XU_EXEC_SCRIPT_CONTROL"] = 1;
    values[valuesById[2] = "XU_VIDEO_MODE_CONTROL"] = 2;
    values[valuesById[3] = "XU_DEVICE_INFO_CONTROL"] = 3;
    values[valuesById[4] = "XU_PTZ_CMD_CONTROL"] = 4;
    values[valuesById[5] = "XU_GESTURE_STATUS_CONTROL"] = 5;
    values[valuesById[6] = "XU_GESTURE_BIND_CONTROL"] = 6;
    values[valuesById[7] = "XU_NOISE_CANCEL_CONTROL"] = 7;
    values[valuesById[8] = "XU_FIRMWARE_UPGRADE_CONTROL_OR_XU_BLEND_DRAW_CONTROL"] = 8;
    values[valuesById[9] = "XU_EXPOSURE_VALUE_CONTROL"] = 9;
    values[valuesById[10] = "XU_TAKE_PICTURE_CONTROL"] = 10;
    values[valuesById[11] = "XU_DEVICE_STATUS_CONTROL"] = 11;
    values[valuesById[12] = "XU_DEVICE_SN_CONTROL"] = 12;
    values[valuesById[13] = "XU_DEVICE_LICENSEN_CONTROL"] = 13;
    values[valuesById[14] = "XU_DEVICE_PARAM_CONTROL"] = 14;
    values[valuesById[15] = "XU_DOWNLOAD_FILE_CONTROL_OR_XU_AF_MODE_CONTROL"] = 15;
    values[valuesById[16] = "XU_UPLOAD_FILE_CONTROL_OR_XU_EXPOSURE_CURVE_CONTROL"] = 16;
    values[valuesById[17] = "XU_USB_MODE_SWITCH_CONTROL"] = 17;
    values[valuesById[18] = "XU_TRACK_SPEED_CONTROL"] = 18;
    values[valuesById[19] = "XU_LAYOUT_STYLE_CONTROL"] = 19;
    values[valuesById[20] = "XU_HEAD_LIST_CONTROL"] = 20;
    values[valuesById[21] = "XU_TRACK_TARGET_CONTROL"] = 21;
    values[valuesById[22] = "XU_PANTILT_RELATIVE_CONTROL"] = 22;
    values[valuesById[23] = "XU_MOBVOI_PUBKEY_CONTROL"] = 23;
    values[valuesById[24] = "XU_BIAS_CONTROL"] = 24;
    values[valuesById[25] = "XU_ISO_CONTROL"] = 25;
    values[valuesById[26] = "XU_PANTILT_ABSOLUTE_CONTROL"] = 26;
    values[valuesById[27] = "XU_FUNC_ENABLE_CONTROL"] = 27;
    values[valuesById[28] = "XU_VIDEO_RES_CONTROL"] = 28;
    values[valuesById[29] = "XU_EXPOSURE_TIME_ABSOLUTE_CONTROL"] = 29;
    values[valuesById[30] = "XU_AE_MODE_CONTROL"] = 30;
    return values;
})();

export const UVCRequest = $root.UVCRequest = (() => {

    /**
     * Properties of a UVCRequest.
     * @exports IUVCRequest
     * @interface IUVCRequest
     * @property {string|null} [curDeviceSerialNum] UVCRequest curDeviceSerialNum
     * @property {ParamType|null} [paramType] UVCRequest paramType
     * @property {number|Long|null} [value] UVCRequest value
     */

    /**
     * Constructs a new UVCRequest.
     * @exports UVCRequest
     * @classdesc Represents a UVCRequest.
     * @implements IUVCRequest
     * @constructor
     * @param {IUVCRequest=} [properties] Properties to set
     */
    function UVCRequest(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * UVCRequest curDeviceSerialNum.
     * @member {string} curDeviceSerialNum
     * @memberof UVCRequest
     * @instance
     */
    UVCRequest.prototype.curDeviceSerialNum = "";

    /**
     * UVCRequest paramType.
     * @member {ParamType} paramType
     * @memberof UVCRequest
     * @instance
     */
    UVCRequest.prototype.paramType = 1;

    /**
     * UVCRequest value.
     * @member {number|Long} value
     * @memberof UVCRequest
     * @instance
     */
    UVCRequest.prototype.value = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * Creates a new UVCRequest instance using the specified properties.
     * @function create
     * @memberof UVCRequest
     * @static
     * @param {IUVCRequest=} [properties] Properties to set
     * @returns {UVCRequest} UVCRequest instance
     */
    UVCRequest.create = function create(properties) {
        return new UVCRequest(properties);
    };

    /**
     * Encodes the specified UVCRequest message. Does not implicitly {@link UVCRequest.verify|verify} messages.
     * @function encode
     * @memberof UVCRequest
     * @static
     * @param {IUVCRequest} message UVCRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    UVCRequest.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.curDeviceSerialNum != null && Object.hasOwnProperty.call(message, "curDeviceSerialNum"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.curDeviceSerialNum);
        if (message.paramType != null && Object.hasOwnProperty.call(message, "paramType"))
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.paramType);
        if (message.value != null && Object.hasOwnProperty.call(message, "value"))
            writer.uint32(/* id 3, wireType 0 =*/24).int64(message.value);
        return writer;
    };

    /**
     * Encodes the specified UVCRequest message, length delimited. Does not implicitly {@link UVCRequest.verify|verify} messages.
     * @function encodeDelimited
     * @memberof UVCRequest
     * @static
     * @param {IUVCRequest} message UVCRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    UVCRequest.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a UVCRequest message from the specified reader or buffer.
     * @function decode
     * @memberof UVCRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {UVCRequest} UVCRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    UVCRequest.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.UVCRequest();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.curDeviceSerialNum = reader.string();
                    break;
                }
            case 2: {
                    message.paramType = reader.int32();
                    break;
                }
            case 3: {
                    message.value = reader.int64();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a UVCRequest message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof UVCRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {UVCRequest} UVCRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    UVCRequest.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a UVCRequest message.
     * @function verify
     * @memberof UVCRequest
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    UVCRequest.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.curDeviceSerialNum != null && message.hasOwnProperty("curDeviceSerialNum"))
            if (!$util.isString(message.curDeviceSerialNum))
                return "curDeviceSerialNum: string expected";
        if (message.paramType != null && message.hasOwnProperty("paramType"))
            switch (message.paramType) {
            default:
                return "paramType: enum value expected";
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
            case 6:
            case 7:
            case 8:
            case 9:
            case 10:
            case 11:
            case 12:
            case 13:
            case 14:
            case 15:
            case 16:
            case 17:
            case 18:
            case 19:
            case 20:
            case 21:
            case 22:
            case 23:
            case 24:
            case 25:
            case 26:
            case 27:
            case 28:
                break;
            }
        if (message.value != null && message.hasOwnProperty("value"))
            if (!$util.isInteger(message.value) && !(message.value && $util.isInteger(message.value.low) && $util.isInteger(message.value.high)))
                return "value: integer|Long expected";
        return null;
    };

    /**
     * Creates a UVCRequest message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof UVCRequest
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {UVCRequest} UVCRequest
     */
    UVCRequest.fromObject = function fromObject(object) {
        if (object instanceof $root.UVCRequest)
            return object;
        let message = new $root.UVCRequest();
        if (object.curDeviceSerialNum != null)
            message.curDeviceSerialNum = String(object.curDeviceSerialNum);
        switch (object.paramType) {
        default:
            if (typeof object.paramType === "number") {
                message.paramType = object.paramType;
                break;
            }
            break;
        case "PARAM_ZOOM":
        case 1:
            message.paramType = 1;
            break;
        case "PARAM_BRIGHTNESS":
        case 2:
            message.paramType = 2;
            break;
        case "PARAM_CONTRAST":
        case 3:
            message.paramType = 3;
            break;
        case "PARAM_SATURATION":
        case 4:
            message.paramType = 4;
            break;
        case "PARAM_SHARPNESS":
        case 5:
            message.paramType = 5;
            break;
        case "PARAM_WHITE_BALANCE_TEMP":
        case 6:
            message.paramType = 6;
            break;
        case "PARAM_ROLL":
        case 7:
            message.paramType = 7;
            break;
        case "PARAM_MANUAL_FOCUS":
        case 8:
            message.paramType = 8;
            break;
        case "PARAM_AUTOFOCUS":
        case 9:
            message.paramType = 9;
            break;
        case "PARAM_AUTO_EXPOSURE":
        case 10:
            message.paramType = 10;
            break;
        case "PARAM_PAN_TILT_ABSOLUTE":
        case 11:
            message.paramType = 11;
            break;
        case "PARAM_PAN_TILT_RELATIVE":
        case 12:
            message.paramType = 12;
            break;
        case "PARAM_MIRROR":
        case 13:
            message.paramType = 13;
            break;
        case "PARAM_VIDEO_MODE":
        case 14:
            message.paramType = 14;
            break;
        case "PARAM_PRESET_POSITION":
        case 15:
            message.paramType = 15;
            break;
        case "PARAM_BIAS":
        case 16:
            message.paramType = 16;
            break;
        case "PARAM_CHANGE_DEVICE_NAME":
        case 17:
            message.paramType = 17;
            break;
        case "PARAM_RESOLUTION":
        case 18:
            message.paramType = 18;
            break;
        case "PARAM_HDR":
        case 19:
            message.paramType = 19;
            break;
        case "PARAM_TRACK_SPEED":
        case 20:
            message.paramType = 20;
            break;
        case "PARAM_COMPOSITION_STYLE":
        case 21:
            message.paramType = 21;
            break;
        case "PARAM_IMAGEPARAM_RESET":
        case 22:
            message.paramType = 22;
            break;
        case "PARAM_ISO_VALUE":
        case 23:
            message.paramType = 23;
            break;
        case "PARAM_SHUTTER_VALUE":
        case 24:
            message.paramType = 24;
            break;
        case "PARAM_EXPOSURE_COMPENSATION":
        case 25:
            message.paramType = 25;
            break;
        case "PARAM_AUTO_WHITEBALANCE":
        case 26:
            message.paramType = 26;
            break;
        case "PARAM_SAVE_IMAGEPARAM_PRESET":
        case 27:
            message.paramType = 27;
            break;
        case "PARAM_COMPOSITION_STYLE_SWITCH":
        case 28:
            message.paramType = 28;
            break;
        }
        if (object.value != null)
            if ($util.Long)
                (message.value = $util.Long.fromValue(object.value)).unsigned = false;
            else if (typeof object.value === "string")
                message.value = parseInt(object.value, 10);
            else if (typeof object.value === "number")
                message.value = object.value;
            else if (typeof object.value === "object")
                message.value = new $util.LongBits(object.value.low >>> 0, object.value.high >>> 0).toNumber();
        return message;
    };

    /**
     * Creates a plain object from a UVCRequest message. Also converts values to other types if specified.
     * @function toObject
     * @memberof UVCRequest
     * @static
     * @param {UVCRequest} message UVCRequest
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    UVCRequest.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.defaults) {
            object.curDeviceSerialNum = "";
            object.paramType = options.enums === String ? "PARAM_ZOOM" : 1;
            if ($util.Long) {
                let long = new $util.Long(0, 0, false);
                object.value = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.value = options.longs === String ? "0" : 0;
        }
        if (message.curDeviceSerialNum != null && message.hasOwnProperty("curDeviceSerialNum"))
            object.curDeviceSerialNum = message.curDeviceSerialNum;
        if (message.paramType != null && message.hasOwnProperty("paramType"))
            object.paramType = options.enums === String ? $root.ParamType[message.paramType] === undefined ? message.paramType : $root.ParamType[message.paramType] : message.paramType;
        if (message.value != null && message.hasOwnProperty("value"))
            if (typeof message.value === "number")
                object.value = options.longs === String ? String(message.value) : message.value;
            else
                object.value = options.longs === String ? $util.Long.prototype.toString.call(message.value) : options.longs === Number ? new $util.LongBits(message.value.low >>> 0, message.value.high >>> 0).toNumber() : message.value;
        return object;
    };

    /**
     * Converts this UVCRequest to JSON.
     * @function toJSON
     * @memberof UVCRequest
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    UVCRequest.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for UVCRequest
     * @function getTypeUrl
     * @memberof UVCRequest
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    UVCRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/UVCRequest";
    };

    return UVCRequest;
})();

export const UVCExtendRequest = $root.UVCExtendRequest = (() => {

    /**
     * Properties of a UVCExtendRequest.
     * @exports IUVCExtendRequest
     * @interface IUVCExtendRequest
     * @property {string|null} [curDeviceSerialNum] UVCExtendRequest curDeviceSerialNum
     * @property {ParamType|null} [paramType] UVCExtendRequest paramType
     * @property {ControlSelector|null} [selector] UVCExtendRequest selector
     * @property {Array.<number>|null} [data] UVCExtendRequest data
     * @property {number|null} [presetPosIndex] UVCExtendRequest presetPosIndex
     */

    /**
     * Constructs a new UVCExtendRequest.
     * @exports UVCExtendRequest
     * @classdesc Represents a UVCExtendRequest.
     * @implements IUVCExtendRequest
     * @constructor
     * @param {IUVCExtendRequest=} [properties] Properties to set
     */
    function UVCExtendRequest(properties) {
        this.data = [];
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * UVCExtendRequest curDeviceSerialNum.
     * @member {string} curDeviceSerialNum
     * @memberof UVCExtendRequest
     * @instance
     */
    UVCExtendRequest.prototype.curDeviceSerialNum = "";

    /**
     * UVCExtendRequest paramType.
     * @member {ParamType} paramType
     * @memberof UVCExtendRequest
     * @instance
     */
    UVCExtendRequest.prototype.paramType = 1;

    /**
     * UVCExtendRequest selector.
     * @member {ControlSelector} selector
     * @memberof UVCExtendRequest
     * @instance
     */
    UVCExtendRequest.prototype.selector = 0;

    /**
     * UVCExtendRequest data.
     * @member {Array.<number>} data
     * @memberof UVCExtendRequest
     * @instance
     */
    UVCExtendRequest.prototype.data = $util.emptyArray;

    /**
     * UVCExtendRequest presetPosIndex.
     * @member {number} presetPosIndex
     * @memberof UVCExtendRequest
     * @instance
     */
    UVCExtendRequest.prototype.presetPosIndex = 0;

    /**
     * Creates a new UVCExtendRequest instance using the specified properties.
     * @function create
     * @memberof UVCExtendRequest
     * @static
     * @param {IUVCExtendRequest=} [properties] Properties to set
     * @returns {UVCExtendRequest} UVCExtendRequest instance
     */
    UVCExtendRequest.create = function create(properties) {
        return new UVCExtendRequest(properties);
    };

    /**
     * Encodes the specified UVCExtendRequest message. Does not implicitly {@link UVCExtendRequest.verify|verify} messages.
     * @function encode
     * @memberof UVCExtendRequest
     * @static
     * @param {IUVCExtendRequest} message UVCExtendRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    UVCExtendRequest.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.curDeviceSerialNum != null && Object.hasOwnProperty.call(message, "curDeviceSerialNum"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.curDeviceSerialNum);
        if (message.paramType != null && Object.hasOwnProperty.call(message, "paramType"))
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.paramType);
        if (message.selector != null && Object.hasOwnProperty.call(message, "selector"))
            writer.uint32(/* id 3, wireType 0 =*/24).int32(message.selector);
        if (message.data != null && message.data.length) {
            writer.uint32(/* id 4, wireType 2 =*/34).fork();
            for (let i = 0; i < message.data.length; ++i)
                writer.int32(message.data[i]);
            writer.ldelim();
        }
        if (message.presetPosIndex != null && Object.hasOwnProperty.call(message, "presetPosIndex"))
            writer.uint32(/* id 5, wireType 0 =*/40).int32(message.presetPosIndex);
        return writer;
    };

    /**
     * Encodes the specified UVCExtendRequest message, length delimited. Does not implicitly {@link UVCExtendRequest.verify|verify} messages.
     * @function encodeDelimited
     * @memberof UVCExtendRequest
     * @static
     * @param {IUVCExtendRequest} message UVCExtendRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    UVCExtendRequest.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a UVCExtendRequest message from the specified reader or buffer.
     * @function decode
     * @memberof UVCExtendRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {UVCExtendRequest} UVCExtendRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    UVCExtendRequest.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.UVCExtendRequest();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.curDeviceSerialNum = reader.string();
                    break;
                }
            case 2: {
                    message.paramType = reader.int32();
                    break;
                }
            case 3: {
                    message.selector = reader.int32();
                    break;
                }
            case 4: {
                    if (!(message.data && message.data.length))
                        message.data = [];
                    if ((tag & 7) === 2) {
                        let end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.data.push(reader.int32());
                    } else
                        message.data.push(reader.int32());
                    break;
                }
            case 5: {
                    message.presetPosIndex = reader.int32();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a UVCExtendRequest message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof UVCExtendRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {UVCExtendRequest} UVCExtendRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    UVCExtendRequest.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a UVCExtendRequest message.
     * @function verify
     * @memberof UVCExtendRequest
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    UVCExtendRequest.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.curDeviceSerialNum != null && message.hasOwnProperty("curDeviceSerialNum"))
            if (!$util.isString(message.curDeviceSerialNum))
                return "curDeviceSerialNum: string expected";
        if (message.paramType != null && message.hasOwnProperty("paramType"))
            switch (message.paramType) {
            default:
                return "paramType: enum value expected";
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
            case 6:
            case 7:
            case 8:
            case 9:
            case 10:
            case 11:
            case 12:
            case 13:
            case 14:
            case 15:
            case 16:
            case 17:
            case 18:
            case 19:
            case 20:
            case 21:
            case 22:
            case 23:
            case 24:
            case 25:
            case 26:
            case 27:
            case 28:
                break;
            }
        if (message.selector != null && message.hasOwnProperty("selector"))
            switch (message.selector) {
            default:
                return "selector: enum value expected";
            case 0:
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
            case 6:
            case 7:
            case 8:
            case 9:
            case 10:
            case 11:
            case 12:
            case 13:
            case 14:
            case 15:
            case 16:
            case 17:
            case 18:
            case 19:
            case 20:
            case 21:
            case 22:
            case 23:
            case 24:
            case 25:
            case 26:
            case 27:
            case 28:
            case 29:
            case 30:
                break;
            }
        if (message.data != null && message.hasOwnProperty("data")) {
            if (!Array.isArray(message.data))
                return "data: array expected";
            for (let i = 0; i < message.data.length; ++i)
                if (!$util.isInteger(message.data[i]))
                    return "data: integer[] expected";
        }
        if (message.presetPosIndex != null && message.hasOwnProperty("presetPosIndex"))
            if (!$util.isInteger(message.presetPosIndex))
                return "presetPosIndex: integer expected";
        return null;
    };

    /**
     * Creates a UVCExtendRequest message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof UVCExtendRequest
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {UVCExtendRequest} UVCExtendRequest
     */
    UVCExtendRequest.fromObject = function fromObject(object) {
        if (object instanceof $root.UVCExtendRequest)
            return object;
        let message = new $root.UVCExtendRequest();
        if (object.curDeviceSerialNum != null)
            message.curDeviceSerialNum = String(object.curDeviceSerialNum);
        switch (object.paramType) {
        default:
            if (typeof object.paramType === "number") {
                message.paramType = object.paramType;
                break;
            }
            break;
        case "PARAM_ZOOM":
        case 1:
            message.paramType = 1;
            break;
        case "PARAM_BRIGHTNESS":
        case 2:
            message.paramType = 2;
            break;
        case "PARAM_CONTRAST":
        case 3:
            message.paramType = 3;
            break;
        case "PARAM_SATURATION":
        case 4:
            message.paramType = 4;
            break;
        case "PARAM_SHARPNESS":
        case 5:
            message.paramType = 5;
            break;
        case "PARAM_WHITE_BALANCE_TEMP":
        case 6:
            message.paramType = 6;
            break;
        case "PARAM_ROLL":
        case 7:
            message.paramType = 7;
            break;
        case "PARAM_MANUAL_FOCUS":
        case 8:
            message.paramType = 8;
            break;
        case "PARAM_AUTOFOCUS":
        case 9:
            message.paramType = 9;
            break;
        case "PARAM_AUTO_EXPOSURE":
        case 10:
            message.paramType = 10;
            break;
        case "PARAM_PAN_TILT_ABSOLUTE":
        case 11:
            message.paramType = 11;
            break;
        case "PARAM_PAN_TILT_RELATIVE":
        case 12:
            message.paramType = 12;
            break;
        case "PARAM_MIRROR":
        case 13:
            message.paramType = 13;
            break;
        case "PARAM_VIDEO_MODE":
        case 14:
            message.paramType = 14;
            break;
        case "PARAM_PRESET_POSITION":
        case 15:
            message.paramType = 15;
            break;
        case "PARAM_BIAS":
        case 16:
            message.paramType = 16;
            break;
        case "PARAM_CHANGE_DEVICE_NAME":
        case 17:
            message.paramType = 17;
            break;
        case "PARAM_RESOLUTION":
        case 18:
            message.paramType = 18;
            break;
        case "PARAM_HDR":
        case 19:
            message.paramType = 19;
            break;
        case "PARAM_TRACK_SPEED":
        case 20:
            message.paramType = 20;
            break;
        case "PARAM_COMPOSITION_STYLE":
        case 21:
            message.paramType = 21;
            break;
        case "PARAM_IMAGEPARAM_RESET":
        case 22:
            message.paramType = 22;
            break;
        case "PARAM_ISO_VALUE":
        case 23:
            message.paramType = 23;
            break;
        case "PARAM_SHUTTER_VALUE":
        case 24:
            message.paramType = 24;
            break;
        case "PARAM_EXPOSURE_COMPENSATION":
        case 25:
            message.paramType = 25;
            break;
        case "PARAM_AUTO_WHITEBALANCE":
        case 26:
            message.paramType = 26;
            break;
        case "PARAM_SAVE_IMAGEPARAM_PRESET":
        case 27:
            message.paramType = 27;
            break;
        case "PARAM_COMPOSITION_STYLE_SWITCH":
        case 28:
            message.paramType = 28;
            break;
        }
        switch (object.selector) {
        default:
            if (typeof object.selector === "number") {
                message.selector = object.selector;
                break;
            }
            break;
        case "XU_CONTROL_UNDEFINED":
        case 0:
            message.selector = 0;
            break;
        case "XU_EXEC_SCRIPT_CONTROL":
        case 1:
            message.selector = 1;
            break;
        case "XU_VIDEO_MODE_CONTROL":
        case 2:
            message.selector = 2;
            break;
        case "XU_DEVICE_INFO_CONTROL":
        case 3:
            message.selector = 3;
            break;
        case "XU_PTZ_CMD_CONTROL":
        case 4:
            message.selector = 4;
            break;
        case "XU_GESTURE_STATUS_CONTROL":
        case 5:
            message.selector = 5;
            break;
        case "XU_GESTURE_BIND_CONTROL":
        case 6:
            message.selector = 6;
            break;
        case "XU_NOISE_CANCEL_CONTROL":
        case 7:
            message.selector = 7;
            break;
        case "XU_FIRMWARE_UPGRADE_CONTROL_OR_XU_BLEND_DRAW_CONTROL":
        case 8:
            message.selector = 8;
            break;
        case "XU_EXPOSURE_VALUE_CONTROL":
        case 9:
            message.selector = 9;
            break;
        case "XU_TAKE_PICTURE_CONTROL":
        case 10:
            message.selector = 10;
            break;
        case "XU_DEVICE_STATUS_CONTROL":
        case 11:
            message.selector = 11;
            break;
        case "XU_DEVICE_SN_CONTROL":
        case 12:
            message.selector = 12;
            break;
        case "XU_DEVICE_LICENSEN_CONTROL":
        case 13:
            message.selector = 13;
            break;
        case "XU_DEVICE_PARAM_CONTROL":
        case 14:
            message.selector = 14;
            break;
        case "XU_DOWNLOAD_FILE_CONTROL_OR_XU_AF_MODE_CONTROL":
        case 15:
            message.selector = 15;
            break;
        case "XU_UPLOAD_FILE_CONTROL_OR_XU_EXPOSURE_CURVE_CONTROL":
        case 16:
            message.selector = 16;
            break;
        case "XU_USB_MODE_SWITCH_CONTROL":
        case 17:
            message.selector = 17;
            break;
        case "XU_TRACK_SPEED_CONTROL":
        case 18:
            message.selector = 18;
            break;
        case "XU_LAYOUT_STYLE_CONTROL":
        case 19:
            message.selector = 19;
            break;
        case "XU_HEAD_LIST_CONTROL":
        case 20:
            message.selector = 20;
            break;
        case "XU_TRACK_TARGET_CONTROL":
        case 21:
            message.selector = 21;
            break;
        case "XU_PANTILT_RELATIVE_CONTROL":
        case 22:
            message.selector = 22;
            break;
        case "XU_MOBVOI_PUBKEY_CONTROL":
        case 23:
            message.selector = 23;
            break;
        case "XU_BIAS_CONTROL":
        case 24:
            message.selector = 24;
            break;
        case "XU_ISO_CONTROL":
        case 25:
            message.selector = 25;
            break;
        case "XU_PANTILT_ABSOLUTE_CONTROL":
        case 26:
            message.selector = 26;
            break;
        case "XU_FUNC_ENABLE_CONTROL":
        case 27:
            message.selector = 27;
            break;
        case "XU_VIDEO_RES_CONTROL":
        case 28:
            message.selector = 28;
            break;
        case "XU_EXPOSURE_TIME_ABSOLUTE_CONTROL":
        case 29:
            message.selector = 29;
            break;
        case "XU_AE_MODE_CONTROL":
        case 30:
            message.selector = 30;
            break;
        }
        if (object.data) {
            if (!Array.isArray(object.data))
                throw TypeError(".UVCExtendRequest.data: array expected");
            message.data = [];
            for (let i = 0; i < object.data.length; ++i)
                message.data[i] = object.data[i] | 0;
        }
        if (object.presetPosIndex != null)
            message.presetPosIndex = object.presetPosIndex | 0;
        return message;
    };

    /**
     * Creates a plain object from a UVCExtendRequest message. Also converts values to other types if specified.
     * @function toObject
     * @memberof UVCExtendRequest
     * @static
     * @param {UVCExtendRequest} message UVCExtendRequest
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    UVCExtendRequest.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.arrays || options.defaults)
            object.data = [];
        if (options.defaults) {
            object.curDeviceSerialNum = "";
            object.paramType = options.enums === String ? "PARAM_ZOOM" : 1;
            object.selector = options.enums === String ? "XU_CONTROL_UNDEFINED" : 0;
            object.presetPosIndex = 0;
        }
        if (message.curDeviceSerialNum != null && message.hasOwnProperty("curDeviceSerialNum"))
            object.curDeviceSerialNum = message.curDeviceSerialNum;
        if (message.paramType != null && message.hasOwnProperty("paramType"))
            object.paramType = options.enums === String ? $root.ParamType[message.paramType] === undefined ? message.paramType : $root.ParamType[message.paramType] : message.paramType;
        if (message.selector != null && message.hasOwnProperty("selector"))
            object.selector = options.enums === String ? $root.ControlSelector[message.selector] === undefined ? message.selector : $root.ControlSelector[message.selector] : message.selector;
        if (message.data && message.data.length) {
            object.data = [];
            for (let j = 0; j < message.data.length; ++j)
                object.data[j] = message.data[j];
        }
        if (message.presetPosIndex != null && message.hasOwnProperty("presetPosIndex"))
            object.presetPosIndex = message.presetPosIndex;
        return object;
    };

    /**
     * Converts this UVCExtendRequest to JSON.
     * @function toJSON
     * @memberof UVCExtendRequest
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    UVCExtendRequest.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for UVCExtendRequest
     * @function getTypeUrl
     * @memberof UVCExtendRequest
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    UVCExtendRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/UVCExtendRequest";
    };

    return UVCExtendRequest;
})();

export const DeviceInfoNotification = $root.DeviceInfoNotification = (() => {

    /**
     * Properties of a DeviceInfoNotification.
     * @exports IDeviceInfoNotification
     * @interface IDeviceInfoNotification
     * @property {string|null} [curDeviceSerialNum] DeviceInfoNotification curDeviceSerialNum
     * @property {Array.<DeviceInfoNotification.IDeviceInfo>|null} [devices] DeviceInfoNotification devices
     */

    /**
     * Constructs a new DeviceInfoNotification.
     * @exports DeviceInfoNotification
     * @classdesc Represents a DeviceInfoNotification.
     * @implements IDeviceInfoNotification
     * @constructor
     * @param {IDeviceInfoNotification=} [properties] Properties to set
     */
    function DeviceInfoNotification(properties) {
        this.devices = [];
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * DeviceInfoNotification curDeviceSerialNum.
     * @member {string} curDeviceSerialNum
     * @memberof DeviceInfoNotification
     * @instance
     */
    DeviceInfoNotification.prototype.curDeviceSerialNum = "";

    /**
     * DeviceInfoNotification devices.
     * @member {Array.<DeviceInfoNotification.IDeviceInfo>} devices
     * @memberof DeviceInfoNotification
     * @instance
     */
    DeviceInfoNotification.prototype.devices = $util.emptyArray;

    /**
     * Creates a new DeviceInfoNotification instance using the specified properties.
     * @function create
     * @memberof DeviceInfoNotification
     * @static
     * @param {IDeviceInfoNotification=} [properties] Properties to set
     * @returns {DeviceInfoNotification} DeviceInfoNotification instance
     */
    DeviceInfoNotification.create = function create(properties) {
        return new DeviceInfoNotification(properties);
    };

    /**
     * Encodes the specified DeviceInfoNotification message. Does not implicitly {@link DeviceInfoNotification.verify|verify} messages.
     * @function encode
     * @memberof DeviceInfoNotification
     * @static
     * @param {IDeviceInfoNotification} message DeviceInfoNotification message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    DeviceInfoNotification.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.curDeviceSerialNum != null && Object.hasOwnProperty.call(message, "curDeviceSerialNum"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.curDeviceSerialNum);
        if (message.devices != null && message.devices.length)
            for (let i = 0; i < message.devices.length; ++i)
                $root.DeviceInfoNotification.DeviceInfo.encode(message.devices[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified DeviceInfoNotification message, length delimited. Does not implicitly {@link DeviceInfoNotification.verify|verify} messages.
     * @function encodeDelimited
     * @memberof DeviceInfoNotification
     * @static
     * @param {IDeviceInfoNotification} message DeviceInfoNotification message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    DeviceInfoNotification.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a DeviceInfoNotification message from the specified reader or buffer.
     * @function decode
     * @memberof DeviceInfoNotification
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {DeviceInfoNotification} DeviceInfoNotification
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    DeviceInfoNotification.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.DeviceInfoNotification();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.curDeviceSerialNum = reader.string();
                    break;
                }
            case 2: {
                    if (!(message.devices && message.devices.length))
                        message.devices = [];
                    message.devices.push($root.DeviceInfoNotification.DeviceInfo.decode(reader, reader.uint32()));
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a DeviceInfoNotification message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof DeviceInfoNotification
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {DeviceInfoNotification} DeviceInfoNotification
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    DeviceInfoNotification.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a DeviceInfoNotification message.
     * @function verify
     * @memberof DeviceInfoNotification
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    DeviceInfoNotification.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.curDeviceSerialNum != null && message.hasOwnProperty("curDeviceSerialNum"))
            if (!$util.isString(message.curDeviceSerialNum))
                return "curDeviceSerialNum: string expected";
        if (message.devices != null && message.hasOwnProperty("devices")) {
            if (!Array.isArray(message.devices))
                return "devices: array expected";
            for (let i = 0; i < message.devices.length; ++i) {
                let error = $root.DeviceInfoNotification.DeviceInfo.verify(message.devices[i]);
                if (error)
                    return "devices." + error;
            }
        }
        return null;
    };

    /**
     * Creates a DeviceInfoNotification message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof DeviceInfoNotification
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {DeviceInfoNotification} DeviceInfoNotification
     */
    DeviceInfoNotification.fromObject = function fromObject(object) {
        if (object instanceof $root.DeviceInfoNotification)
            return object;
        let message = new $root.DeviceInfoNotification();
        if (object.curDeviceSerialNum != null)
            message.curDeviceSerialNum = String(object.curDeviceSerialNum);
        if (object.devices) {
            if (!Array.isArray(object.devices))
                throw TypeError(".DeviceInfoNotification.devices: array expected");
            message.devices = [];
            for (let i = 0; i < object.devices.length; ++i) {
                if (typeof object.devices[i] !== "object")
                    throw TypeError(".DeviceInfoNotification.devices: object expected");
                message.devices[i] = $root.DeviceInfoNotification.DeviceInfo.fromObject(object.devices[i]);
            }
        }
        return message;
    };

    /**
     * Creates a plain object from a DeviceInfoNotification message. Also converts values to other types if specified.
     * @function toObject
     * @memberof DeviceInfoNotification
     * @static
     * @param {DeviceInfoNotification} message DeviceInfoNotification
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    DeviceInfoNotification.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.arrays || options.defaults)
            object.devices = [];
        if (options.defaults)
            object.curDeviceSerialNum = "";
        if (message.curDeviceSerialNum != null && message.hasOwnProperty("curDeviceSerialNum"))
            object.curDeviceSerialNum = message.curDeviceSerialNum;
        if (message.devices && message.devices.length) {
            object.devices = [];
            for (let j = 0; j < message.devices.length; ++j)
                object.devices[j] = $root.DeviceInfoNotification.DeviceInfo.toObject(message.devices[j], options);
        }
        return object;
    };

    /**
     * Converts this DeviceInfoNotification to JSON.
     * @function toJSON
     * @memberof DeviceInfoNotification
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    DeviceInfoNotification.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for DeviceInfoNotification
     * @function getTypeUrl
     * @memberof DeviceInfoNotification
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    DeviceInfoNotification.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/DeviceInfoNotification";
    };

    DeviceInfoNotification.DeviceInfo = (function() {

        /**
         * Properties of a DeviceInfo.
         * @memberof DeviceInfoNotification
         * @interface IDeviceInfo
         * @property {string|null} [deviceName] DeviceInfo deviceName
         * @property {string|null} [serialNum] DeviceInfo serialNum
         * @property {DeviceInfoNotification.DeviceInfo.IZoomInfo|null} [zoom] DeviceInfo zoom
         * @property {VideoModeType|null} [mode] DeviceInfo mode
         * @property {boolean|null} [mirror] DeviceInfo mirror
         * @property {number|null} [curPresetPos] DeviceInfo curPresetPos
         * @property {Array.<DeviceInfoNotification.DeviceInfo.IPresetPosInfo>|null} [presetInfos] DeviceInfo presetInfos
         * @property {boolean|null} [verticalResolution] DeviceInfo verticalResolution
         * @property {boolean|null} [hdr] DeviceInfo hdr
         * @property {number|null} [trackSpeed] DeviceInfo trackSpeed
         * @property {number|null} [compositionStyle] DeviceInfo compositionStyle
         * @property {number|null} [brightness] DeviceInfo brightness
         * @property {number|null} [contrast] DeviceInfo contrast
         * @property {number|null} [saturation] DeviceInfo saturation
         * @property {number|null} [sharpening] DeviceInfo sharpening
         * @property {boolean|null} [imageParamReset] DeviceInfo imageParamReset
         * @property {boolean|null} [autoExposure] DeviceInfo autoExposure
         * @property {number|null} [isoValue] DeviceInfo isoValue
         * @property {number|null} [shutterValue] DeviceInfo shutterValue
         * @property {number|null} [exposureCompensation] DeviceInfo exposureCompensation
         * @property {boolean|null} [autoWhiteBalance] DeviceInfo autoWhiteBalance
         * @property {number|null} [whiteBalanceValue] DeviceInfo whiteBalanceValue
         * @property {boolean|null} [saveImageParamPreset] DeviceInfo saveImageParamPreset
         * @property {boolean|null} [compositionStyleEnabled] DeviceInfo compositionStyleEnabled
         */

        /**
         * Constructs a new DeviceInfo.
         * @memberof DeviceInfoNotification
         * @classdesc Represents a DeviceInfo.
         * @implements IDeviceInfo
         * @constructor
         * @param {DeviceInfoNotification.IDeviceInfo=} [properties] Properties to set
         */
        function DeviceInfo(properties) {
            this.presetInfos = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * DeviceInfo deviceName.
         * @member {string} deviceName
         * @memberof DeviceInfoNotification.DeviceInfo
         * @instance
         */
        DeviceInfo.prototype.deviceName = "";

        /**
         * DeviceInfo serialNum.
         * @member {string} serialNum
         * @memberof DeviceInfoNotification.DeviceInfo
         * @instance
         */
        DeviceInfo.prototype.serialNum = "";

        /**
         * DeviceInfo zoom.
         * @member {DeviceInfoNotification.DeviceInfo.IZoomInfo|null|undefined} zoom
         * @memberof DeviceInfoNotification.DeviceInfo
         * @instance
         */
        DeviceInfo.prototype.zoom = null;

        /**
         * DeviceInfo mode.
         * @member {VideoModeType} mode
         * @memberof DeviceInfoNotification.DeviceInfo
         * @instance
         */
        DeviceInfo.prototype.mode = 0;

        /**
         * DeviceInfo mirror.
         * @member {boolean} mirror
         * @memberof DeviceInfoNotification.DeviceInfo
         * @instance
         */
        DeviceInfo.prototype.mirror = false;

        /**
         * DeviceInfo curPresetPos.
         * @member {number} curPresetPos
         * @memberof DeviceInfoNotification.DeviceInfo
         * @instance
         */
        DeviceInfo.prototype.curPresetPos = 0;

        /**
         * DeviceInfo presetInfos.
         * @member {Array.<DeviceInfoNotification.DeviceInfo.IPresetPosInfo>} presetInfos
         * @memberof DeviceInfoNotification.DeviceInfo
         * @instance
         */
        DeviceInfo.prototype.presetInfos = $util.emptyArray;

        /**
         * DeviceInfo verticalResolution.
         * @member {boolean} verticalResolution
         * @memberof DeviceInfoNotification.DeviceInfo
         * @instance
         */
        DeviceInfo.prototype.verticalResolution = false;

        /**
         * DeviceInfo hdr.
         * @member {boolean} hdr
         * @memberof DeviceInfoNotification.DeviceInfo
         * @instance
         */
        DeviceInfo.prototype.hdr = false;

        /**
         * DeviceInfo trackSpeed.
         * @member {number} trackSpeed
         * @memberof DeviceInfoNotification.DeviceInfo
         * @instance
         */
        DeviceInfo.prototype.trackSpeed = 0;

        /**
         * DeviceInfo compositionStyle.
         * @member {number} compositionStyle
         * @memberof DeviceInfoNotification.DeviceInfo
         * @instance
         */
        DeviceInfo.prototype.compositionStyle = 0;

        /**
         * DeviceInfo brightness.
         * @member {number} brightness
         * @memberof DeviceInfoNotification.DeviceInfo
         * @instance
         */
        DeviceInfo.prototype.brightness = 0;

        /**
         * DeviceInfo contrast.
         * @member {number} contrast
         * @memberof DeviceInfoNotification.DeviceInfo
         * @instance
         */
        DeviceInfo.prototype.contrast = 0;

        /**
         * DeviceInfo saturation.
         * @member {number} saturation
         * @memberof DeviceInfoNotification.DeviceInfo
         * @instance
         */
        DeviceInfo.prototype.saturation = 0;

        /**
         * DeviceInfo sharpening.
         * @member {number} sharpening
         * @memberof DeviceInfoNotification.DeviceInfo
         * @instance
         */
        DeviceInfo.prototype.sharpening = 0;

        /**
         * DeviceInfo imageParamReset.
         * @member {boolean} imageParamReset
         * @memberof DeviceInfoNotification.DeviceInfo
         * @instance
         */
        DeviceInfo.prototype.imageParamReset = false;

        /**
         * DeviceInfo autoExposure.
         * @member {boolean} autoExposure
         * @memberof DeviceInfoNotification.DeviceInfo
         * @instance
         */
        DeviceInfo.prototype.autoExposure = false;

        /**
         * DeviceInfo isoValue.
         * @member {number} isoValue
         * @memberof DeviceInfoNotification.DeviceInfo
         * @instance
         */
        DeviceInfo.prototype.isoValue = 0;

        /**
         * DeviceInfo shutterValue.
         * @member {number} shutterValue
         * @memberof DeviceInfoNotification.DeviceInfo
         * @instance
         */
        DeviceInfo.prototype.shutterValue = 0;

        /**
         * DeviceInfo exposureCompensation.
         * @member {number} exposureCompensation
         * @memberof DeviceInfoNotification.DeviceInfo
         * @instance
         */
        DeviceInfo.prototype.exposureCompensation = 0;

        /**
         * DeviceInfo autoWhiteBalance.
         * @member {boolean} autoWhiteBalance
         * @memberof DeviceInfoNotification.DeviceInfo
         * @instance
         */
        DeviceInfo.prototype.autoWhiteBalance = false;

        /**
         * DeviceInfo whiteBalanceValue.
         * @member {number} whiteBalanceValue
         * @memberof DeviceInfoNotification.DeviceInfo
         * @instance
         */
        DeviceInfo.prototype.whiteBalanceValue = 0;

        /**
         * DeviceInfo saveImageParamPreset.
         * @member {boolean} saveImageParamPreset
         * @memberof DeviceInfoNotification.DeviceInfo
         * @instance
         */
        DeviceInfo.prototype.saveImageParamPreset = false;

        /**
         * DeviceInfo compositionStyleEnabled.
         * @member {boolean} compositionStyleEnabled
         * @memberof DeviceInfoNotification.DeviceInfo
         * @instance
         */
        DeviceInfo.prototype.compositionStyleEnabled = false;

        /**
         * Creates a new DeviceInfo instance using the specified properties.
         * @function create
         * @memberof DeviceInfoNotification.DeviceInfo
         * @static
         * @param {DeviceInfoNotification.IDeviceInfo=} [properties] Properties to set
         * @returns {DeviceInfoNotification.DeviceInfo} DeviceInfo instance
         */
        DeviceInfo.create = function create(properties) {
            return new DeviceInfo(properties);
        };

        /**
         * Encodes the specified DeviceInfo message. Does not implicitly {@link DeviceInfoNotification.DeviceInfo.verify|verify} messages.
         * @function encode
         * @memberof DeviceInfoNotification.DeviceInfo
         * @static
         * @param {DeviceInfoNotification.IDeviceInfo} message DeviceInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DeviceInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.deviceName != null && Object.hasOwnProperty.call(message, "deviceName"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.deviceName);
            if (message.serialNum != null && Object.hasOwnProperty.call(message, "serialNum"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.serialNum);
            if (message.zoom != null && Object.hasOwnProperty.call(message, "zoom"))
                $root.DeviceInfoNotification.DeviceInfo.ZoomInfo.encode(message.zoom, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message.mode != null && Object.hasOwnProperty.call(message, "mode"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.mode);
            if (message.mirror != null && Object.hasOwnProperty.call(message, "mirror"))
                writer.uint32(/* id 5, wireType 0 =*/40).bool(message.mirror);
            if (message.curPresetPos != null && Object.hasOwnProperty.call(message, "curPresetPos"))
                writer.uint32(/* id 6, wireType 0 =*/48).int32(message.curPresetPos);
            if (message.presetInfos != null && message.presetInfos.length)
                for (let i = 0; i < message.presetInfos.length; ++i)
                    $root.DeviceInfoNotification.DeviceInfo.PresetPosInfo.encode(message.presetInfos[i], writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
            if (message.verticalResolution != null && Object.hasOwnProperty.call(message, "verticalResolution"))
                writer.uint32(/* id 8, wireType 0 =*/64).bool(message.verticalResolution);
            if (message.hdr != null && Object.hasOwnProperty.call(message, "hdr"))
                writer.uint32(/* id 9, wireType 0 =*/72).bool(message.hdr);
            if (message.trackSpeed != null && Object.hasOwnProperty.call(message, "trackSpeed"))
                writer.uint32(/* id 10, wireType 0 =*/80).int32(message.trackSpeed);
            if (message.compositionStyle != null && Object.hasOwnProperty.call(message, "compositionStyle"))
                writer.uint32(/* id 11, wireType 0 =*/88).int32(message.compositionStyle);
            if (message.brightness != null && Object.hasOwnProperty.call(message, "brightness"))
                writer.uint32(/* id 12, wireType 0 =*/96).int32(message.brightness);
            if (message.contrast != null && Object.hasOwnProperty.call(message, "contrast"))
                writer.uint32(/* id 13, wireType 0 =*/104).int32(message.contrast);
            if (message.saturation != null && Object.hasOwnProperty.call(message, "saturation"))
                writer.uint32(/* id 14, wireType 0 =*/112).int32(message.saturation);
            if (message.sharpening != null && Object.hasOwnProperty.call(message, "sharpening"))
                writer.uint32(/* id 15, wireType 0 =*/120).int32(message.sharpening);
            if (message.imageParamReset != null && Object.hasOwnProperty.call(message, "imageParamReset"))
                writer.uint32(/* id 16, wireType 0 =*/128).bool(message.imageParamReset);
            if (message.autoExposure != null && Object.hasOwnProperty.call(message, "autoExposure"))
                writer.uint32(/* id 17, wireType 0 =*/136).bool(message.autoExposure);
            if (message.isoValue != null && Object.hasOwnProperty.call(message, "isoValue"))
                writer.uint32(/* id 18, wireType 0 =*/144).int32(message.isoValue);
            if (message.shutterValue != null && Object.hasOwnProperty.call(message, "shutterValue"))
                writer.uint32(/* id 19, wireType 0 =*/152).int32(message.shutterValue);
            if (message.exposureCompensation != null && Object.hasOwnProperty.call(message, "exposureCompensation"))
                writer.uint32(/* id 20, wireType 0 =*/160).int32(message.exposureCompensation);
            if (message.autoWhiteBalance != null && Object.hasOwnProperty.call(message, "autoWhiteBalance"))
                writer.uint32(/* id 21, wireType 0 =*/168).bool(message.autoWhiteBalance);
            if (message.whiteBalanceValue != null && Object.hasOwnProperty.call(message, "whiteBalanceValue"))
                writer.uint32(/* id 22, wireType 0 =*/176).int32(message.whiteBalanceValue);
            if (message.saveImageParamPreset != null && Object.hasOwnProperty.call(message, "saveImageParamPreset"))
                writer.uint32(/* id 23, wireType 0 =*/184).bool(message.saveImageParamPreset);
            if (message.compositionStyleEnabled != null && Object.hasOwnProperty.call(message, "compositionStyleEnabled"))
                writer.uint32(/* id 24, wireType 0 =*/192).bool(message.compositionStyleEnabled);
            return writer;
        };

        /**
         * Encodes the specified DeviceInfo message, length delimited. Does not implicitly {@link DeviceInfoNotification.DeviceInfo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof DeviceInfoNotification.DeviceInfo
         * @static
         * @param {DeviceInfoNotification.IDeviceInfo} message DeviceInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DeviceInfo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a DeviceInfo message from the specified reader or buffer.
         * @function decode
         * @memberof DeviceInfoNotification.DeviceInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {DeviceInfoNotification.DeviceInfo} DeviceInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DeviceInfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.DeviceInfoNotification.DeviceInfo();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.deviceName = reader.string();
                        break;
                    }
                case 2: {
                        message.serialNum = reader.string();
                        break;
                    }
                case 3: {
                        message.zoom = $root.DeviceInfoNotification.DeviceInfo.ZoomInfo.decode(reader, reader.uint32());
                        break;
                    }
                case 4: {
                        message.mode = reader.int32();
                        break;
                    }
                case 5: {
                        message.mirror = reader.bool();
                        break;
                    }
                case 6: {
                        message.curPresetPos = reader.int32();
                        break;
                    }
                case 7: {
                        if (!(message.presetInfos && message.presetInfos.length))
                            message.presetInfos = [];
                        message.presetInfos.push($root.DeviceInfoNotification.DeviceInfo.PresetPosInfo.decode(reader, reader.uint32()));
                        break;
                    }
                case 8: {
                        message.verticalResolution = reader.bool();
                        break;
                    }
                case 9: {
                        message.hdr = reader.bool();
                        break;
                    }
                case 10: {
                        message.trackSpeed = reader.int32();
                        break;
                    }
                case 11: {
                        message.compositionStyle = reader.int32();
                        break;
                    }
                case 12: {
                        message.brightness = reader.int32();
                        break;
                    }
                case 13: {
                        message.contrast = reader.int32();
                        break;
                    }
                case 14: {
                        message.saturation = reader.int32();
                        break;
                    }
                case 15: {
                        message.sharpening = reader.int32();
                        break;
                    }
                case 16: {
                        message.imageParamReset = reader.bool();
                        break;
                    }
                case 17: {
                        message.autoExposure = reader.bool();
                        break;
                    }
                case 18: {
                        message.isoValue = reader.int32();
                        break;
                    }
                case 19: {
                        message.shutterValue = reader.int32();
                        break;
                    }
                case 20: {
                        message.exposureCompensation = reader.int32();
                        break;
                    }
                case 21: {
                        message.autoWhiteBalance = reader.bool();
                        break;
                    }
                case 22: {
                        message.whiteBalanceValue = reader.int32();
                        break;
                    }
                case 23: {
                        message.saveImageParamPreset = reader.bool();
                        break;
                    }
                case 24: {
                        message.compositionStyleEnabled = reader.bool();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a DeviceInfo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof DeviceInfoNotification.DeviceInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {DeviceInfoNotification.DeviceInfo} DeviceInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DeviceInfo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a DeviceInfo message.
         * @function verify
         * @memberof DeviceInfoNotification.DeviceInfo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        DeviceInfo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.deviceName != null && message.hasOwnProperty("deviceName"))
                if (!$util.isString(message.deviceName))
                    return "deviceName: string expected";
            if (message.serialNum != null && message.hasOwnProperty("serialNum"))
                if (!$util.isString(message.serialNum))
                    return "serialNum: string expected";
            if (message.zoom != null && message.hasOwnProperty("zoom")) {
                let error = $root.DeviceInfoNotification.DeviceInfo.ZoomInfo.verify(message.zoom);
                if (error)
                    return "zoom." + error;
            }
            if (message.mode != null && message.hasOwnProperty("mode"))
                switch (message.mode) {
                default:
                    return "mode: enum value expected";
                case 0:
                case 1:
                case 2:
                case 4:
                case 5:
                case 6:
                    break;
                }
            if (message.mirror != null && message.hasOwnProperty("mirror"))
                if (typeof message.mirror !== "boolean")
                    return "mirror: boolean expected";
            if (message.curPresetPos != null && message.hasOwnProperty("curPresetPos"))
                if (!$util.isInteger(message.curPresetPos))
                    return "curPresetPos: integer expected";
            if (message.presetInfos != null && message.hasOwnProperty("presetInfos")) {
                if (!Array.isArray(message.presetInfos))
                    return "presetInfos: array expected";
                for (let i = 0; i < message.presetInfos.length; ++i) {
                    let error = $root.DeviceInfoNotification.DeviceInfo.PresetPosInfo.verify(message.presetInfos[i]);
                    if (error)
                        return "presetInfos." + error;
                }
            }
            if (message.verticalResolution != null && message.hasOwnProperty("verticalResolution"))
                if (typeof message.verticalResolution !== "boolean")
                    return "verticalResolution: boolean expected";
            if (message.hdr != null && message.hasOwnProperty("hdr"))
                if (typeof message.hdr !== "boolean")
                    return "hdr: boolean expected";
            if (message.trackSpeed != null && message.hasOwnProperty("trackSpeed"))
                if (!$util.isInteger(message.trackSpeed))
                    return "trackSpeed: integer expected";
            if (message.compositionStyle != null && message.hasOwnProperty("compositionStyle"))
                if (!$util.isInteger(message.compositionStyle))
                    return "compositionStyle: integer expected";
            if (message.brightness != null && message.hasOwnProperty("brightness"))
                if (!$util.isInteger(message.brightness))
                    return "brightness: integer expected";
            if (message.contrast != null && message.hasOwnProperty("contrast"))
                if (!$util.isInteger(message.contrast))
                    return "contrast: integer expected";
            if (message.saturation != null && message.hasOwnProperty("saturation"))
                if (!$util.isInteger(message.saturation))
                    return "saturation: integer expected";
            if (message.sharpening != null && message.hasOwnProperty("sharpening"))
                if (!$util.isInteger(message.sharpening))
                    return "sharpening: integer expected";
            if (message.imageParamReset != null && message.hasOwnProperty("imageParamReset"))
                if (typeof message.imageParamReset !== "boolean")
                    return "imageParamReset: boolean expected";
            if (message.autoExposure != null && message.hasOwnProperty("autoExposure"))
                if (typeof message.autoExposure !== "boolean")
                    return "autoExposure: boolean expected";
            if (message.isoValue != null && message.hasOwnProperty("isoValue"))
                if (!$util.isInteger(message.isoValue))
                    return "isoValue: integer expected";
            if (message.shutterValue != null && message.hasOwnProperty("shutterValue"))
                if (!$util.isInteger(message.shutterValue))
                    return "shutterValue: integer expected";
            if (message.exposureCompensation != null && message.hasOwnProperty("exposureCompensation"))
                if (!$util.isInteger(message.exposureCompensation))
                    return "exposureCompensation: integer expected";
            if (message.autoWhiteBalance != null && message.hasOwnProperty("autoWhiteBalance"))
                if (typeof message.autoWhiteBalance !== "boolean")
                    return "autoWhiteBalance: boolean expected";
            if (message.whiteBalanceValue != null && message.hasOwnProperty("whiteBalanceValue"))
                if (!$util.isInteger(message.whiteBalanceValue))
                    return "whiteBalanceValue: integer expected";
            if (message.saveImageParamPreset != null && message.hasOwnProperty("saveImageParamPreset"))
                if (typeof message.saveImageParamPreset !== "boolean")
                    return "saveImageParamPreset: boolean expected";
            if (message.compositionStyleEnabled != null && message.hasOwnProperty("compositionStyleEnabled"))
                if (typeof message.compositionStyleEnabled !== "boolean")
                    return "compositionStyleEnabled: boolean expected";
            return null;
        };

        /**
         * Creates a DeviceInfo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof DeviceInfoNotification.DeviceInfo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {DeviceInfoNotification.DeviceInfo} DeviceInfo
         */
        DeviceInfo.fromObject = function fromObject(object) {
            if (object instanceof $root.DeviceInfoNotification.DeviceInfo)
                return object;
            let message = new $root.DeviceInfoNotification.DeviceInfo();
            if (object.deviceName != null)
                message.deviceName = String(object.deviceName);
            if (object.serialNum != null)
                message.serialNum = String(object.serialNum);
            if (object.zoom != null) {
                if (typeof object.zoom !== "object")
                    throw TypeError(".DeviceInfoNotification.DeviceInfo.zoom: object expected");
                message.zoom = $root.DeviceInfoNotification.DeviceInfo.ZoomInfo.fromObject(object.zoom);
            }
            switch (object.mode) {
            default:
                if (typeof object.mode === "number") {
                    message.mode = object.mode;
                    break;
                }
                break;
            case "NORMAL_MODE":
            case 0:
                message.mode = 0;
                break;
            case "AUTO_COMPOSITION":
            case 1:
                message.mode = 1;
                break;
            case "TRACKING_MODE":
            case 2:
                message.mode = 2;
                break;
            case "WHITEBOARD_MODE":
            case 4:
                message.mode = 4;
                break;
            case "OVERHEAD_MODE":
            case 5:
                message.mode = 5;
                break;
            case "DESKVIEW_MODE":
            case 6:
                message.mode = 6;
                break;
            }
            if (object.mirror != null)
                message.mirror = Boolean(object.mirror);
            if (object.curPresetPos != null)
                message.curPresetPos = object.curPresetPos | 0;
            if (object.presetInfos) {
                if (!Array.isArray(object.presetInfos))
                    throw TypeError(".DeviceInfoNotification.DeviceInfo.presetInfos: array expected");
                message.presetInfos = [];
                for (let i = 0; i < object.presetInfos.length; ++i) {
                    if (typeof object.presetInfos[i] !== "object")
                        throw TypeError(".DeviceInfoNotification.DeviceInfo.presetInfos: object expected");
                    message.presetInfos[i] = $root.DeviceInfoNotification.DeviceInfo.PresetPosInfo.fromObject(object.presetInfos[i]);
                }
            }
            if (object.verticalResolution != null)
                message.verticalResolution = Boolean(object.verticalResolution);
            if (object.hdr != null)
                message.hdr = Boolean(object.hdr);
            if (object.trackSpeed != null)
                message.trackSpeed = object.trackSpeed | 0;
            if (object.compositionStyle != null)
                message.compositionStyle = object.compositionStyle | 0;
            if (object.brightness != null)
                message.brightness = object.brightness | 0;
            if (object.contrast != null)
                message.contrast = object.contrast | 0;
            if (object.saturation != null)
                message.saturation = object.saturation | 0;
            if (object.sharpening != null)
                message.sharpening = object.sharpening | 0;
            if (object.imageParamReset != null)
                message.imageParamReset = Boolean(object.imageParamReset);
            if (object.autoExposure != null)
                message.autoExposure = Boolean(object.autoExposure);
            if (object.isoValue != null)
                message.isoValue = object.isoValue | 0;
            if (object.shutterValue != null)
                message.shutterValue = object.shutterValue | 0;
            if (object.exposureCompensation != null)
                message.exposureCompensation = object.exposureCompensation | 0;
            if (object.autoWhiteBalance != null)
                message.autoWhiteBalance = Boolean(object.autoWhiteBalance);
            if (object.whiteBalanceValue != null)
                message.whiteBalanceValue = object.whiteBalanceValue | 0;
            if (object.saveImageParamPreset != null)
                message.saveImageParamPreset = Boolean(object.saveImageParamPreset);
            if (object.compositionStyleEnabled != null)
                message.compositionStyleEnabled = Boolean(object.compositionStyleEnabled);
            return message;
        };

        /**
         * Creates a plain object from a DeviceInfo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof DeviceInfoNotification.DeviceInfo
         * @static
         * @param {DeviceInfoNotification.DeviceInfo} message DeviceInfo
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        DeviceInfo.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.presetInfos = [];
            if (options.defaults) {
                object.deviceName = "";
                object.serialNum = "";
                object.zoom = null;
                object.mode = options.enums === String ? "NORMAL_MODE" : 0;
                object.mirror = false;
                object.curPresetPos = 0;
                object.verticalResolution = false;
                object.hdr = false;
                object.trackSpeed = 0;
                object.compositionStyle = 0;
                object.brightness = 0;
                object.contrast = 0;
                object.saturation = 0;
                object.sharpening = 0;
                object.imageParamReset = false;
                object.autoExposure = false;
                object.isoValue = 0;
                object.shutterValue = 0;
                object.exposureCompensation = 0;
                object.autoWhiteBalance = false;
                object.whiteBalanceValue = 0;
                object.saveImageParamPreset = false;
                object.compositionStyleEnabled = false;
            }
            if (message.deviceName != null && message.hasOwnProperty("deviceName"))
                object.deviceName = message.deviceName;
            if (message.serialNum != null && message.hasOwnProperty("serialNum"))
                object.serialNum = message.serialNum;
            if (message.zoom != null && message.hasOwnProperty("zoom"))
                object.zoom = $root.DeviceInfoNotification.DeviceInfo.ZoomInfo.toObject(message.zoom, options);
            if (message.mode != null && message.hasOwnProperty("mode"))
                object.mode = options.enums === String ? $root.VideoModeType[message.mode] === undefined ? message.mode : $root.VideoModeType[message.mode] : message.mode;
            if (message.mirror != null && message.hasOwnProperty("mirror"))
                object.mirror = message.mirror;
            if (message.curPresetPos != null && message.hasOwnProperty("curPresetPos"))
                object.curPresetPos = message.curPresetPos;
            if (message.presetInfos && message.presetInfos.length) {
                object.presetInfos = [];
                for (let j = 0; j < message.presetInfos.length; ++j)
                    object.presetInfos[j] = $root.DeviceInfoNotification.DeviceInfo.PresetPosInfo.toObject(message.presetInfos[j], options);
            }
            if (message.verticalResolution != null && message.hasOwnProperty("verticalResolution"))
                object.verticalResolution = message.verticalResolution;
            if (message.hdr != null && message.hasOwnProperty("hdr"))
                object.hdr = message.hdr;
            if (message.trackSpeed != null && message.hasOwnProperty("trackSpeed"))
                object.trackSpeed = message.trackSpeed;
            if (message.compositionStyle != null && message.hasOwnProperty("compositionStyle"))
                object.compositionStyle = message.compositionStyle;
            if (message.brightness != null && message.hasOwnProperty("brightness"))
                object.brightness = message.brightness;
            if (message.contrast != null && message.hasOwnProperty("contrast"))
                object.contrast = message.contrast;
            if (message.saturation != null && message.hasOwnProperty("saturation"))
                object.saturation = message.saturation;
            if (message.sharpening != null && message.hasOwnProperty("sharpening"))
                object.sharpening = message.sharpening;
            if (message.imageParamReset != null && message.hasOwnProperty("imageParamReset"))
                object.imageParamReset = message.imageParamReset;
            if (message.autoExposure != null && message.hasOwnProperty("autoExposure"))
                object.autoExposure = message.autoExposure;
            if (message.isoValue != null && message.hasOwnProperty("isoValue"))
                object.isoValue = message.isoValue;
            if (message.shutterValue != null && message.hasOwnProperty("shutterValue"))
                object.shutterValue = message.shutterValue;
            if (message.exposureCompensation != null && message.hasOwnProperty("exposureCompensation"))
                object.exposureCompensation = message.exposureCompensation;
            if (message.autoWhiteBalance != null && message.hasOwnProperty("autoWhiteBalance"))
                object.autoWhiteBalance = message.autoWhiteBalance;
            if (message.whiteBalanceValue != null && message.hasOwnProperty("whiteBalanceValue"))
                object.whiteBalanceValue = message.whiteBalanceValue;
            if (message.saveImageParamPreset != null && message.hasOwnProperty("saveImageParamPreset"))
                object.saveImageParamPreset = message.saveImageParamPreset;
            if (message.compositionStyleEnabled != null && message.hasOwnProperty("compositionStyleEnabled"))
                object.compositionStyleEnabled = message.compositionStyleEnabled;
            return object;
        };

        /**
         * Converts this DeviceInfo to JSON.
         * @function toJSON
         * @memberof DeviceInfoNotification.DeviceInfo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        DeviceInfo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for DeviceInfo
         * @function getTypeUrl
         * @memberof DeviceInfoNotification.DeviceInfo
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        DeviceInfo.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/DeviceInfoNotification.DeviceInfo";
        };

        DeviceInfo.PresetPosInfo = (function() {

            /**
             * Properties of a PresetPosInfo.
             * @memberof DeviceInfoNotification.DeviceInfo
             * @interface IPresetPosInfo
             * @property {string|null} [name] PresetPosInfo name
             * @property {Array.<number>|null} [extendData] PresetPosInfo extendData
             */

            /**
             * Constructs a new PresetPosInfo.
             * @memberof DeviceInfoNotification.DeviceInfo
             * @classdesc Represents a PresetPosInfo.
             * @implements IPresetPosInfo
             * @constructor
             * @param {DeviceInfoNotification.DeviceInfo.IPresetPosInfo=} [properties] Properties to set
             */
            function PresetPosInfo(properties) {
                this.extendData = [];
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * PresetPosInfo name.
             * @member {string} name
             * @memberof DeviceInfoNotification.DeviceInfo.PresetPosInfo
             * @instance
             */
            PresetPosInfo.prototype.name = "";

            /**
             * PresetPosInfo extendData.
             * @member {Array.<number>} extendData
             * @memberof DeviceInfoNotification.DeviceInfo.PresetPosInfo
             * @instance
             */
            PresetPosInfo.prototype.extendData = $util.emptyArray;

            /**
             * Creates a new PresetPosInfo instance using the specified properties.
             * @function create
             * @memberof DeviceInfoNotification.DeviceInfo.PresetPosInfo
             * @static
             * @param {DeviceInfoNotification.DeviceInfo.IPresetPosInfo=} [properties] Properties to set
             * @returns {DeviceInfoNotification.DeviceInfo.PresetPosInfo} PresetPosInfo instance
             */
            PresetPosInfo.create = function create(properties) {
                return new PresetPosInfo(properties);
            };

            /**
             * Encodes the specified PresetPosInfo message. Does not implicitly {@link DeviceInfoNotification.DeviceInfo.PresetPosInfo.verify|verify} messages.
             * @function encode
             * @memberof DeviceInfoNotification.DeviceInfo.PresetPosInfo
             * @static
             * @param {DeviceInfoNotification.DeviceInfo.IPresetPosInfo} message PresetPosInfo message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            PresetPosInfo.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
                if (message.extendData != null && message.extendData.length) {
                    writer.uint32(/* id 2, wireType 2 =*/18).fork();
                    for (let i = 0; i < message.extendData.length; ++i)
                        writer.int32(message.extendData[i]);
                    writer.ldelim();
                }
                return writer;
            };

            /**
             * Encodes the specified PresetPosInfo message, length delimited. Does not implicitly {@link DeviceInfoNotification.DeviceInfo.PresetPosInfo.verify|verify} messages.
             * @function encodeDelimited
             * @memberof DeviceInfoNotification.DeviceInfo.PresetPosInfo
             * @static
             * @param {DeviceInfoNotification.DeviceInfo.IPresetPosInfo} message PresetPosInfo message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            PresetPosInfo.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a PresetPosInfo message from the specified reader or buffer.
             * @function decode
             * @memberof DeviceInfoNotification.DeviceInfo.PresetPosInfo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {DeviceInfoNotification.DeviceInfo.PresetPosInfo} PresetPosInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            PresetPosInfo.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.DeviceInfoNotification.DeviceInfo.PresetPosInfo();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.name = reader.string();
                            break;
                        }
                    case 2: {
                            if (!(message.extendData && message.extendData.length))
                                message.extendData = [];
                            if ((tag & 7) === 2) {
                                let end2 = reader.uint32() + reader.pos;
                                while (reader.pos < end2)
                                    message.extendData.push(reader.int32());
                            } else
                                message.extendData.push(reader.int32());
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a PresetPosInfo message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof DeviceInfoNotification.DeviceInfo.PresetPosInfo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {DeviceInfoNotification.DeviceInfo.PresetPosInfo} PresetPosInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            PresetPosInfo.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a PresetPosInfo message.
             * @function verify
             * @memberof DeviceInfoNotification.DeviceInfo.PresetPosInfo
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            PresetPosInfo.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.name != null && message.hasOwnProperty("name"))
                    if (!$util.isString(message.name))
                        return "name: string expected";
                if (message.extendData != null && message.hasOwnProperty("extendData")) {
                    if (!Array.isArray(message.extendData))
                        return "extendData: array expected";
                    for (let i = 0; i < message.extendData.length; ++i)
                        if (!$util.isInteger(message.extendData[i]))
                            return "extendData: integer[] expected";
                }
                return null;
            };

            /**
             * Creates a PresetPosInfo message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof DeviceInfoNotification.DeviceInfo.PresetPosInfo
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {DeviceInfoNotification.DeviceInfo.PresetPosInfo} PresetPosInfo
             */
            PresetPosInfo.fromObject = function fromObject(object) {
                if (object instanceof $root.DeviceInfoNotification.DeviceInfo.PresetPosInfo)
                    return object;
                let message = new $root.DeviceInfoNotification.DeviceInfo.PresetPosInfo();
                if (object.name != null)
                    message.name = String(object.name);
                if (object.extendData) {
                    if (!Array.isArray(object.extendData))
                        throw TypeError(".DeviceInfoNotification.DeviceInfo.PresetPosInfo.extendData: array expected");
                    message.extendData = [];
                    for (let i = 0; i < object.extendData.length; ++i)
                        message.extendData[i] = object.extendData[i] | 0;
                }
                return message;
            };

            /**
             * Creates a plain object from a PresetPosInfo message. Also converts values to other types if specified.
             * @function toObject
             * @memberof DeviceInfoNotification.DeviceInfo.PresetPosInfo
             * @static
             * @param {DeviceInfoNotification.DeviceInfo.PresetPosInfo} message PresetPosInfo
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            PresetPosInfo.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.arrays || options.defaults)
                    object.extendData = [];
                if (options.defaults)
                    object.name = "";
                if (message.name != null && message.hasOwnProperty("name"))
                    object.name = message.name;
                if (message.extendData && message.extendData.length) {
                    object.extendData = [];
                    for (let j = 0; j < message.extendData.length; ++j)
                        object.extendData[j] = message.extendData[j];
                }
                return object;
            };

            /**
             * Converts this PresetPosInfo to JSON.
             * @function toJSON
             * @memberof DeviceInfoNotification.DeviceInfo.PresetPosInfo
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            PresetPosInfo.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for PresetPosInfo
             * @function getTypeUrl
             * @memberof DeviceInfoNotification.DeviceInfo.PresetPosInfo
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            PresetPosInfo.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/DeviceInfoNotification.DeviceInfo.PresetPosInfo";
            };

            return PresetPosInfo;
        })();

        DeviceInfo.ZoomInfo = (function() {

            /**
             * Properties of a ZoomInfo.
             * @memberof DeviceInfoNotification.DeviceInfo
             * @interface IZoomInfo
             * @property {number|null} [curValue] ZoomInfo curValue
             * @property {number|null} [minValue] ZoomInfo minValue
             * @property {number|null} [maxValue] ZoomInfo maxValue
             */

            /**
             * Constructs a new ZoomInfo.
             * @memberof DeviceInfoNotification.DeviceInfo
             * @classdesc Represents a ZoomInfo.
             * @implements IZoomInfo
             * @constructor
             * @param {DeviceInfoNotification.DeviceInfo.IZoomInfo=} [properties] Properties to set
             */
            function ZoomInfo(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * ZoomInfo curValue.
             * @member {number} curValue
             * @memberof DeviceInfoNotification.DeviceInfo.ZoomInfo
             * @instance
             */
            ZoomInfo.prototype.curValue = 0;

            /**
             * ZoomInfo minValue.
             * @member {number} minValue
             * @memberof DeviceInfoNotification.DeviceInfo.ZoomInfo
             * @instance
             */
            ZoomInfo.prototype.minValue = 0;

            /**
             * ZoomInfo maxValue.
             * @member {number} maxValue
             * @memberof DeviceInfoNotification.DeviceInfo.ZoomInfo
             * @instance
             */
            ZoomInfo.prototype.maxValue = 0;

            /**
             * Creates a new ZoomInfo instance using the specified properties.
             * @function create
             * @memberof DeviceInfoNotification.DeviceInfo.ZoomInfo
             * @static
             * @param {DeviceInfoNotification.DeviceInfo.IZoomInfo=} [properties] Properties to set
             * @returns {DeviceInfoNotification.DeviceInfo.ZoomInfo} ZoomInfo instance
             */
            ZoomInfo.create = function create(properties) {
                return new ZoomInfo(properties);
            };

            /**
             * Encodes the specified ZoomInfo message. Does not implicitly {@link DeviceInfoNotification.DeviceInfo.ZoomInfo.verify|verify} messages.
             * @function encode
             * @memberof DeviceInfoNotification.DeviceInfo.ZoomInfo
             * @static
             * @param {DeviceInfoNotification.DeviceInfo.IZoomInfo} message ZoomInfo message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ZoomInfo.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.curValue != null && Object.hasOwnProperty.call(message, "curValue"))
                    writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.curValue);
                if (message.minValue != null && Object.hasOwnProperty.call(message, "minValue"))
                    writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.minValue);
                if (message.maxValue != null && Object.hasOwnProperty.call(message, "maxValue"))
                    writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.maxValue);
                return writer;
            };

            /**
             * Encodes the specified ZoomInfo message, length delimited. Does not implicitly {@link DeviceInfoNotification.DeviceInfo.ZoomInfo.verify|verify} messages.
             * @function encodeDelimited
             * @memberof DeviceInfoNotification.DeviceInfo.ZoomInfo
             * @static
             * @param {DeviceInfoNotification.DeviceInfo.IZoomInfo} message ZoomInfo message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ZoomInfo.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a ZoomInfo message from the specified reader or buffer.
             * @function decode
             * @memberof DeviceInfoNotification.DeviceInfo.ZoomInfo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {DeviceInfoNotification.DeviceInfo.ZoomInfo} ZoomInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ZoomInfo.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.DeviceInfoNotification.DeviceInfo.ZoomInfo();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.curValue = reader.uint32();
                            break;
                        }
                    case 2: {
                            message.minValue = reader.uint32();
                            break;
                        }
                    case 3: {
                            message.maxValue = reader.uint32();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a ZoomInfo message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof DeviceInfoNotification.DeviceInfo.ZoomInfo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {DeviceInfoNotification.DeviceInfo.ZoomInfo} ZoomInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ZoomInfo.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a ZoomInfo message.
             * @function verify
             * @memberof DeviceInfoNotification.DeviceInfo.ZoomInfo
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            ZoomInfo.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.curValue != null && message.hasOwnProperty("curValue"))
                    if (!$util.isInteger(message.curValue))
                        return "curValue: integer expected";
                if (message.minValue != null && message.hasOwnProperty("minValue"))
                    if (!$util.isInteger(message.minValue))
                        return "minValue: integer expected";
                if (message.maxValue != null && message.hasOwnProperty("maxValue"))
                    if (!$util.isInteger(message.maxValue))
                        return "maxValue: integer expected";
                return null;
            };

            /**
             * Creates a ZoomInfo message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof DeviceInfoNotification.DeviceInfo.ZoomInfo
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {DeviceInfoNotification.DeviceInfo.ZoomInfo} ZoomInfo
             */
            ZoomInfo.fromObject = function fromObject(object) {
                if (object instanceof $root.DeviceInfoNotification.DeviceInfo.ZoomInfo)
                    return object;
                let message = new $root.DeviceInfoNotification.DeviceInfo.ZoomInfo();
                if (object.curValue != null)
                    message.curValue = object.curValue >>> 0;
                if (object.minValue != null)
                    message.minValue = object.minValue >>> 0;
                if (object.maxValue != null)
                    message.maxValue = object.maxValue >>> 0;
                return message;
            };

            /**
             * Creates a plain object from a ZoomInfo message. Also converts values to other types if specified.
             * @function toObject
             * @memberof DeviceInfoNotification.DeviceInfo.ZoomInfo
             * @static
             * @param {DeviceInfoNotification.DeviceInfo.ZoomInfo} message ZoomInfo
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            ZoomInfo.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.defaults) {
                    object.curValue = 0;
                    object.minValue = 0;
                    object.maxValue = 0;
                }
                if (message.curValue != null && message.hasOwnProperty("curValue"))
                    object.curValue = message.curValue;
                if (message.minValue != null && message.hasOwnProperty("minValue"))
                    object.minValue = message.minValue;
                if (message.maxValue != null && message.hasOwnProperty("maxValue"))
                    object.maxValue = message.maxValue;
                return object;
            };

            /**
             * Converts this ZoomInfo to JSON.
             * @function toJSON
             * @memberof DeviceInfoNotification.DeviceInfo.ZoomInfo
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            ZoomInfo.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for ZoomInfo
             * @function getTypeUrl
             * @memberof DeviceInfoNotification.DeviceInfo.ZoomInfo
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            ZoomInfo.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/DeviceInfoNotification.DeviceInfo.ZoomInfo";
            };

            return ZoomInfo;
        })();

        return DeviceInfo;
    })();

    return DeviceInfoNotification;
})();

export const ValueChangeNotification = $root.ValueChangeNotification = (() => {

    /**
     * Properties of a ValueChangeNotification.
     * @exports IValueChangeNotification
     * @interface IValueChangeNotification
     * @property {string|null} [curDeviceSerialNum] ValueChangeNotification curDeviceSerialNum
     * @property {ParamType|null} [paramType] ValueChangeNotification paramType
     * @property {string|null} [newValue] ValueChangeNotification newValue
     */

    /**
     * Constructs a new ValueChangeNotification.
     * @exports ValueChangeNotification
     * @classdesc Represents a ValueChangeNotification.
     * @implements IValueChangeNotification
     * @constructor
     * @param {IValueChangeNotification=} [properties] Properties to set
     */
    function ValueChangeNotification(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * ValueChangeNotification curDeviceSerialNum.
     * @member {string} curDeviceSerialNum
     * @memberof ValueChangeNotification
     * @instance
     */
    ValueChangeNotification.prototype.curDeviceSerialNum = "";

    /**
     * ValueChangeNotification paramType.
     * @member {ParamType} paramType
     * @memberof ValueChangeNotification
     * @instance
     */
    ValueChangeNotification.prototype.paramType = 1;

    /**
     * ValueChangeNotification newValue.
     * @member {string} newValue
     * @memberof ValueChangeNotification
     * @instance
     */
    ValueChangeNotification.prototype.newValue = "";

    /**
     * Creates a new ValueChangeNotification instance using the specified properties.
     * @function create
     * @memberof ValueChangeNotification
     * @static
     * @param {IValueChangeNotification=} [properties] Properties to set
     * @returns {ValueChangeNotification} ValueChangeNotification instance
     */
    ValueChangeNotification.create = function create(properties) {
        return new ValueChangeNotification(properties);
    };

    /**
     * Encodes the specified ValueChangeNotification message. Does not implicitly {@link ValueChangeNotification.verify|verify} messages.
     * @function encode
     * @memberof ValueChangeNotification
     * @static
     * @param {IValueChangeNotification} message ValueChangeNotification message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ValueChangeNotification.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.curDeviceSerialNum != null && Object.hasOwnProperty.call(message, "curDeviceSerialNum"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.curDeviceSerialNum);
        if (message.paramType != null && Object.hasOwnProperty.call(message, "paramType"))
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.paramType);
        if (message.newValue != null && Object.hasOwnProperty.call(message, "newValue"))
            writer.uint32(/* id 3, wireType 2 =*/26).string(message.newValue);
        return writer;
    };

    /**
     * Encodes the specified ValueChangeNotification message, length delimited. Does not implicitly {@link ValueChangeNotification.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ValueChangeNotification
     * @static
     * @param {IValueChangeNotification} message ValueChangeNotification message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ValueChangeNotification.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a ValueChangeNotification message from the specified reader or buffer.
     * @function decode
     * @memberof ValueChangeNotification
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ValueChangeNotification} ValueChangeNotification
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ValueChangeNotification.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.ValueChangeNotification();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.curDeviceSerialNum = reader.string();
                    break;
                }
            case 2: {
                    message.paramType = reader.int32();
                    break;
                }
            case 3: {
                    message.newValue = reader.string();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a ValueChangeNotification message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ValueChangeNotification
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ValueChangeNotification} ValueChangeNotification
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ValueChangeNotification.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a ValueChangeNotification message.
     * @function verify
     * @memberof ValueChangeNotification
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ValueChangeNotification.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.curDeviceSerialNum != null && message.hasOwnProperty("curDeviceSerialNum"))
            if (!$util.isString(message.curDeviceSerialNum))
                return "curDeviceSerialNum: string expected";
        if (message.paramType != null && message.hasOwnProperty("paramType"))
            switch (message.paramType) {
            default:
                return "paramType: enum value expected";
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
            case 6:
            case 7:
            case 8:
            case 9:
            case 10:
            case 11:
            case 12:
            case 13:
            case 14:
            case 15:
            case 16:
            case 17:
            case 18:
            case 19:
            case 20:
            case 21:
            case 22:
            case 23:
            case 24:
            case 25:
            case 26:
            case 27:
            case 28:
                break;
            }
        if (message.newValue != null && message.hasOwnProperty("newValue"))
            if (!$util.isString(message.newValue))
                return "newValue: string expected";
        return null;
    };

    /**
     * Creates a ValueChangeNotification message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ValueChangeNotification
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ValueChangeNotification} ValueChangeNotification
     */
    ValueChangeNotification.fromObject = function fromObject(object) {
        if (object instanceof $root.ValueChangeNotification)
            return object;
        let message = new $root.ValueChangeNotification();
        if (object.curDeviceSerialNum != null)
            message.curDeviceSerialNum = String(object.curDeviceSerialNum);
        switch (object.paramType) {
        default:
            if (typeof object.paramType === "number") {
                message.paramType = object.paramType;
                break;
            }
            break;
        case "PARAM_ZOOM":
        case 1:
            message.paramType = 1;
            break;
        case "PARAM_BRIGHTNESS":
        case 2:
            message.paramType = 2;
            break;
        case "PARAM_CONTRAST":
        case 3:
            message.paramType = 3;
            break;
        case "PARAM_SATURATION":
        case 4:
            message.paramType = 4;
            break;
        case "PARAM_SHARPNESS":
        case 5:
            message.paramType = 5;
            break;
        case "PARAM_WHITE_BALANCE_TEMP":
        case 6:
            message.paramType = 6;
            break;
        case "PARAM_ROLL":
        case 7:
            message.paramType = 7;
            break;
        case "PARAM_MANUAL_FOCUS":
        case 8:
            message.paramType = 8;
            break;
        case "PARAM_AUTOFOCUS":
        case 9:
            message.paramType = 9;
            break;
        case "PARAM_AUTO_EXPOSURE":
        case 10:
            message.paramType = 10;
            break;
        case "PARAM_PAN_TILT_ABSOLUTE":
        case 11:
            message.paramType = 11;
            break;
        case "PARAM_PAN_TILT_RELATIVE":
        case 12:
            message.paramType = 12;
            break;
        case "PARAM_MIRROR":
        case 13:
            message.paramType = 13;
            break;
        case "PARAM_VIDEO_MODE":
        case 14:
            message.paramType = 14;
            break;
        case "PARAM_PRESET_POSITION":
        case 15:
            message.paramType = 15;
            break;
        case "PARAM_BIAS":
        case 16:
            message.paramType = 16;
            break;
        case "PARAM_CHANGE_DEVICE_NAME":
        case 17:
            message.paramType = 17;
            break;
        case "PARAM_RESOLUTION":
        case 18:
            message.paramType = 18;
            break;
        case "PARAM_HDR":
        case 19:
            message.paramType = 19;
            break;
        case "PARAM_TRACK_SPEED":
        case 20:
            message.paramType = 20;
            break;
        case "PARAM_COMPOSITION_STYLE":
        case 21:
            message.paramType = 21;
            break;
        case "PARAM_IMAGEPARAM_RESET":
        case 22:
            message.paramType = 22;
            break;
        case "PARAM_ISO_VALUE":
        case 23:
            message.paramType = 23;
            break;
        case "PARAM_SHUTTER_VALUE":
        case 24:
            message.paramType = 24;
            break;
        case "PARAM_EXPOSURE_COMPENSATION":
        case 25:
            message.paramType = 25;
            break;
        case "PARAM_AUTO_WHITEBALANCE":
        case 26:
            message.paramType = 26;
            break;
        case "PARAM_SAVE_IMAGEPARAM_PRESET":
        case 27:
            message.paramType = 27;
            break;
        case "PARAM_COMPOSITION_STYLE_SWITCH":
        case 28:
            message.paramType = 28;
            break;
        }
        if (object.newValue != null)
            message.newValue = String(object.newValue);
        return message;
    };

    /**
     * Creates a plain object from a ValueChangeNotification message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ValueChangeNotification
     * @static
     * @param {ValueChangeNotification} message ValueChangeNotification
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ValueChangeNotification.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.defaults) {
            object.curDeviceSerialNum = "";
            object.paramType = options.enums === String ? "PARAM_ZOOM" : 1;
            object.newValue = "";
        }
        if (message.curDeviceSerialNum != null && message.hasOwnProperty("curDeviceSerialNum"))
            object.curDeviceSerialNum = message.curDeviceSerialNum;
        if (message.paramType != null && message.hasOwnProperty("paramType"))
            object.paramType = options.enums === String ? $root.ParamType[message.paramType] === undefined ? message.paramType : $root.ParamType[message.paramType] : message.paramType;
        if (message.newValue != null && message.hasOwnProperty("newValue"))
            object.newValue = message.newValue;
        return object;
    };

    /**
     * Converts this ValueChangeNotification to JSON.
     * @function toJSON
     * @memberof ValueChangeNotification
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ValueChangeNotification.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for ValueChangeNotification
     * @function getTypeUrl
     * @memberof ValueChangeNotification
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    ValueChangeNotification.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/ValueChangeNotification";
    };

    return ValueChangeNotification;
})();

export const SwitchDeviceRequest = $root.SwitchDeviceRequest = (() => {

    /**
     * Properties of a SwitchDeviceRequest.
     * @exports ISwitchDeviceRequest
     * @interface ISwitchDeviceRequest
     * @property {string|null} [curDeviceSerialNum] SwitchDeviceRequest curDeviceSerialNum
     * @property {string|null} [newDeviceSerialNum] SwitchDeviceRequest newDeviceSerialNum
     */

    /**
     * Constructs a new SwitchDeviceRequest.
     * @exports SwitchDeviceRequest
     * @classdesc Represents a SwitchDeviceRequest.
     * @implements ISwitchDeviceRequest
     * @constructor
     * @param {ISwitchDeviceRequest=} [properties] Properties to set
     */
    function SwitchDeviceRequest(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * SwitchDeviceRequest curDeviceSerialNum.
     * @member {string} curDeviceSerialNum
     * @memberof SwitchDeviceRequest
     * @instance
     */
    SwitchDeviceRequest.prototype.curDeviceSerialNum = "";

    /**
     * SwitchDeviceRequest newDeviceSerialNum.
     * @member {string} newDeviceSerialNum
     * @memberof SwitchDeviceRequest
     * @instance
     */
    SwitchDeviceRequest.prototype.newDeviceSerialNum = "";

    /**
     * Creates a new SwitchDeviceRequest instance using the specified properties.
     * @function create
     * @memberof SwitchDeviceRequest
     * @static
     * @param {ISwitchDeviceRequest=} [properties] Properties to set
     * @returns {SwitchDeviceRequest} SwitchDeviceRequest instance
     */
    SwitchDeviceRequest.create = function create(properties) {
        return new SwitchDeviceRequest(properties);
    };

    /**
     * Encodes the specified SwitchDeviceRequest message. Does not implicitly {@link SwitchDeviceRequest.verify|verify} messages.
     * @function encode
     * @memberof SwitchDeviceRequest
     * @static
     * @param {ISwitchDeviceRequest} message SwitchDeviceRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    SwitchDeviceRequest.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.curDeviceSerialNum != null && Object.hasOwnProperty.call(message, "curDeviceSerialNum"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.curDeviceSerialNum);
        if (message.newDeviceSerialNum != null && Object.hasOwnProperty.call(message, "newDeviceSerialNum"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.newDeviceSerialNum);
        return writer;
    };

    /**
     * Encodes the specified SwitchDeviceRequest message, length delimited. Does not implicitly {@link SwitchDeviceRequest.verify|verify} messages.
     * @function encodeDelimited
     * @memberof SwitchDeviceRequest
     * @static
     * @param {ISwitchDeviceRequest} message SwitchDeviceRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    SwitchDeviceRequest.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a SwitchDeviceRequest message from the specified reader or buffer.
     * @function decode
     * @memberof SwitchDeviceRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {SwitchDeviceRequest} SwitchDeviceRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    SwitchDeviceRequest.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.SwitchDeviceRequest();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.curDeviceSerialNum = reader.string();
                    break;
                }
            case 2: {
                    message.newDeviceSerialNum = reader.string();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a SwitchDeviceRequest message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof SwitchDeviceRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {SwitchDeviceRequest} SwitchDeviceRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    SwitchDeviceRequest.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a SwitchDeviceRequest message.
     * @function verify
     * @memberof SwitchDeviceRequest
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    SwitchDeviceRequest.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.curDeviceSerialNum != null && message.hasOwnProperty("curDeviceSerialNum"))
            if (!$util.isString(message.curDeviceSerialNum))
                return "curDeviceSerialNum: string expected";
        if (message.newDeviceSerialNum != null && message.hasOwnProperty("newDeviceSerialNum"))
            if (!$util.isString(message.newDeviceSerialNum))
                return "newDeviceSerialNum: string expected";
        return null;
    };

    /**
     * Creates a SwitchDeviceRequest message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof SwitchDeviceRequest
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {SwitchDeviceRequest} SwitchDeviceRequest
     */
    SwitchDeviceRequest.fromObject = function fromObject(object) {
        if (object instanceof $root.SwitchDeviceRequest)
            return object;
        let message = new $root.SwitchDeviceRequest();
        if (object.curDeviceSerialNum != null)
            message.curDeviceSerialNum = String(object.curDeviceSerialNum);
        if (object.newDeviceSerialNum != null)
            message.newDeviceSerialNum = String(object.newDeviceSerialNum);
        return message;
    };

    /**
     * Creates a plain object from a SwitchDeviceRequest message. Also converts values to other types if specified.
     * @function toObject
     * @memberof SwitchDeviceRequest
     * @static
     * @param {SwitchDeviceRequest} message SwitchDeviceRequest
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    SwitchDeviceRequest.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.defaults) {
            object.curDeviceSerialNum = "";
            object.newDeviceSerialNum = "";
        }
        if (message.curDeviceSerialNum != null && message.hasOwnProperty("curDeviceSerialNum"))
            object.curDeviceSerialNum = message.curDeviceSerialNum;
        if (message.newDeviceSerialNum != null && message.hasOwnProperty("newDeviceSerialNum"))
            object.newDeviceSerialNum = message.newDeviceSerialNum;
        return object;
    };

    /**
     * Converts this SwitchDeviceRequest to JSON.
     * @function toJSON
     * @memberof SwitchDeviceRequest
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    SwitchDeviceRequest.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for SwitchDeviceRequest
     * @function getTypeUrl
     * @memberof SwitchDeviceRequest
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    SwitchDeviceRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/SwitchDeviceRequest";
    };

    return SwitchDeviceRequest;
})();

export const ConnectionNotification = $root.ConnectionNotification = (() => {

    /**
     * Properties of a ConnectionNotification.
     * @exports IConnectionNotification
     * @interface IConnectionNotification
     * @property {number|null} [connectNum] ConnectionNotification connectNum
     * @property {boolean|null} [inControl] ConnectionNotification inControl
     */

    /**
     * Constructs a new ConnectionNotification.
     * @exports ConnectionNotification
     * @classdesc Represents a ConnectionNotification.
     * @implements IConnectionNotification
     * @constructor
     * @param {IConnectionNotification=} [properties] Properties to set
     */
    function ConnectionNotification(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * ConnectionNotification connectNum.
     * @member {number} connectNum
     * @memberof ConnectionNotification
     * @instance
     */
    ConnectionNotification.prototype.connectNum = 0;

    /**
     * ConnectionNotification inControl.
     * @member {boolean} inControl
     * @memberof ConnectionNotification
     * @instance
     */
    ConnectionNotification.prototype.inControl = false;

    /**
     * Creates a new ConnectionNotification instance using the specified properties.
     * @function create
     * @memberof ConnectionNotification
     * @static
     * @param {IConnectionNotification=} [properties] Properties to set
     * @returns {ConnectionNotification} ConnectionNotification instance
     */
    ConnectionNotification.create = function create(properties) {
        return new ConnectionNotification(properties);
    };

    /**
     * Encodes the specified ConnectionNotification message. Does not implicitly {@link ConnectionNotification.verify|verify} messages.
     * @function encode
     * @memberof ConnectionNotification
     * @static
     * @param {IConnectionNotification} message ConnectionNotification message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ConnectionNotification.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.connectNum != null && Object.hasOwnProperty.call(message, "connectNum"))
            writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.connectNum);
        if (message.inControl != null && Object.hasOwnProperty.call(message, "inControl"))
            writer.uint32(/* id 2, wireType 0 =*/16).bool(message.inControl);
        return writer;
    };

    /**
     * Encodes the specified ConnectionNotification message, length delimited. Does not implicitly {@link ConnectionNotification.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ConnectionNotification
     * @static
     * @param {IConnectionNotification} message ConnectionNotification message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ConnectionNotification.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a ConnectionNotification message from the specified reader or buffer.
     * @function decode
     * @memberof ConnectionNotification
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ConnectionNotification} ConnectionNotification
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ConnectionNotification.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.ConnectionNotification();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.connectNum = reader.uint32();
                    break;
                }
            case 2: {
                    message.inControl = reader.bool();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a ConnectionNotification message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ConnectionNotification
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ConnectionNotification} ConnectionNotification
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ConnectionNotification.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a ConnectionNotification message.
     * @function verify
     * @memberof ConnectionNotification
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ConnectionNotification.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.connectNum != null && message.hasOwnProperty("connectNum"))
            if (!$util.isInteger(message.connectNum))
                return "connectNum: integer expected";
        if (message.inControl != null && message.hasOwnProperty("inControl"))
            if (typeof message.inControl !== "boolean")
                return "inControl: boolean expected";
        return null;
    };

    /**
     * Creates a ConnectionNotification message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ConnectionNotification
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ConnectionNotification} ConnectionNotification
     */
    ConnectionNotification.fromObject = function fromObject(object) {
        if (object instanceof $root.ConnectionNotification)
            return object;
        let message = new $root.ConnectionNotification();
        if (object.connectNum != null)
            message.connectNum = object.connectNum >>> 0;
        if (object.inControl != null)
            message.inControl = Boolean(object.inControl);
        return message;
    };

    /**
     * Creates a plain object from a ConnectionNotification message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ConnectionNotification
     * @static
     * @param {ConnectionNotification} message ConnectionNotification
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ConnectionNotification.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.defaults) {
            object.connectNum = 0;
            object.inControl = false;
        }
        if (message.connectNum != null && message.hasOwnProperty("connectNum"))
            object.connectNum = message.connectNum;
        if (message.inControl != null && message.hasOwnProperty("inControl"))
            object.inControl = message.inControl;
        return object;
    };

    /**
     * Converts this ConnectionNotification to JSON.
     * @function toJSON
     * @memberof ConnectionNotification
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ConnectionNotification.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for ConnectionNotification
     * @function getTypeUrl
     * @memberof ConnectionNotification
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    ConnectionNotification.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/ConnectionNotification";
    };

    return ConnectionNotification;
})();

export const ControlRequest = $root.ControlRequest = (() => {

    /**
     * Properties of a ControlRequest.
     * @exports IControlRequest
     * @interface IControlRequest
     * @property {string|null} [token] ControlRequest token
     */

    /**
     * Constructs a new ControlRequest.
     * @exports ControlRequest
     * @classdesc Represents a ControlRequest.
     * @implements IControlRequest
     * @constructor
     * @param {IControlRequest=} [properties] Properties to set
     */
    function ControlRequest(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * ControlRequest token.
     * @member {string} token
     * @memberof ControlRequest
     * @instance
     */
    ControlRequest.prototype.token = "";

    /**
     * Creates a new ControlRequest instance using the specified properties.
     * @function create
     * @memberof ControlRequest
     * @static
     * @param {IControlRequest=} [properties] Properties to set
     * @returns {ControlRequest} ControlRequest instance
     */
    ControlRequest.create = function create(properties) {
        return new ControlRequest(properties);
    };

    /**
     * Encodes the specified ControlRequest message. Does not implicitly {@link ControlRequest.verify|verify} messages.
     * @function encode
     * @memberof ControlRequest
     * @static
     * @param {IControlRequest} message ControlRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ControlRequest.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.token != null && Object.hasOwnProperty.call(message, "token"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.token);
        return writer;
    };

    /**
     * Encodes the specified ControlRequest message, length delimited. Does not implicitly {@link ControlRequest.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ControlRequest
     * @static
     * @param {IControlRequest} message ControlRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ControlRequest.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a ControlRequest message from the specified reader or buffer.
     * @function decode
     * @memberof ControlRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ControlRequest} ControlRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ControlRequest.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.ControlRequest();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.token = reader.string();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a ControlRequest message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ControlRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ControlRequest} ControlRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ControlRequest.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a ControlRequest message.
     * @function verify
     * @memberof ControlRequest
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ControlRequest.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.token != null && message.hasOwnProperty("token"))
            if (!$util.isString(message.token))
                return "token: string expected";
        return null;
    };

    /**
     * Creates a ControlRequest message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ControlRequest
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ControlRequest} ControlRequest
     */
    ControlRequest.fromObject = function fromObject(object) {
        if (object instanceof $root.ControlRequest)
            return object;
        let message = new $root.ControlRequest();
        if (object.token != null)
            message.token = String(object.token);
        return message;
    };

    /**
     * Creates a plain object from a ControlRequest message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ControlRequest
     * @static
     * @param {ControlRequest} message ControlRequest
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ControlRequest.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.defaults)
            object.token = "";
        if (message.token != null && message.hasOwnProperty("token"))
            object.token = message.token;
        return object;
    };

    /**
     * Converts this ControlRequest to JSON.
     * @function toJSON
     * @memberof ControlRequest
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ControlRequest.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for ControlRequest
     * @function getTypeUrl
     * @memberof ControlRequest
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    ControlRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/ControlRequest";
    };

    return ControlRequest;
})();

export const ControlResponse = $root.ControlResponse = (() => {

    /**
     * Properties of a ControlResponse.
     * @exports IControlResponse
     * @interface IControlResponse
     * @property {boolean|null} [success] ControlResponse success
     * @property {ControlResponse.FailureReason|null} [reason] ControlResponse reason
     */

    /**
     * Constructs a new ControlResponse.
     * @exports ControlResponse
     * @classdesc Represents a ControlResponse.
     * @implements IControlResponse
     * @constructor
     * @param {IControlResponse=} [properties] Properties to set
     */
    function ControlResponse(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * ControlResponse success.
     * @member {boolean} success
     * @memberof ControlResponse
     * @instance
     */
    ControlResponse.prototype.success = false;

    /**
     * ControlResponse reason.
     * @member {ControlResponse.FailureReason} reason
     * @memberof ControlResponse
     * @instance
     */
    ControlResponse.prototype.reason = 0;

    /**
     * Creates a new ControlResponse instance using the specified properties.
     * @function create
     * @memberof ControlResponse
     * @static
     * @param {IControlResponse=} [properties] Properties to set
     * @returns {ControlResponse} ControlResponse instance
     */
    ControlResponse.create = function create(properties) {
        return new ControlResponse(properties);
    };

    /**
     * Encodes the specified ControlResponse message. Does not implicitly {@link ControlResponse.verify|verify} messages.
     * @function encode
     * @memberof ControlResponse
     * @static
     * @param {IControlResponse} message ControlResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ControlResponse.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.success != null && Object.hasOwnProperty.call(message, "success"))
            writer.uint32(/* id 1, wireType 0 =*/8).bool(message.success);
        if (message.reason != null && Object.hasOwnProperty.call(message, "reason"))
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.reason);
        return writer;
    };

    /**
     * Encodes the specified ControlResponse message, length delimited. Does not implicitly {@link ControlResponse.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ControlResponse
     * @static
     * @param {IControlResponse} message ControlResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ControlResponse.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a ControlResponse message from the specified reader or buffer.
     * @function decode
     * @memberof ControlResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ControlResponse} ControlResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ControlResponse.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.ControlResponse();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.success = reader.bool();
                    break;
                }
            case 2: {
                    message.reason = reader.int32();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a ControlResponse message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ControlResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ControlResponse} ControlResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ControlResponse.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a ControlResponse message.
     * @function verify
     * @memberof ControlResponse
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ControlResponse.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.success != null && message.hasOwnProperty("success"))
            if (typeof message.success !== "boolean")
                return "success: boolean expected";
        if (message.reason != null && message.hasOwnProperty("reason"))
            switch (message.reason) {
            default:
                return "reason: enum value expected";
            case 0:
            case 1:
            case 2:
            case 3:
                break;
            }
        return null;
    };

    /**
     * Creates a ControlResponse message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ControlResponse
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ControlResponse} ControlResponse
     */
    ControlResponse.fromObject = function fromObject(object) {
        if (object instanceof $root.ControlResponse)
            return object;
        let message = new $root.ControlResponse();
        if (object.success != null)
            message.success = Boolean(object.success);
        switch (object.reason) {
        default:
            if (typeof object.reason === "number") {
                message.reason = object.reason;
                break;
            }
            break;
        case "UNKNOW_FAILURE":
        case 0:
            message.reason = 0;
            break;
        case "ANOTHER_CONNECTION_EXISTS":
        case 1:
            message.reason = 1;
            break;
        case "TOKEN_INVALID":
        case 2:
            message.reason = 2;
            break;
        case "ACTIVE_DISCONNECT":
        case 3:
            message.reason = 3;
            break;
        }
        return message;
    };

    /**
     * Creates a plain object from a ControlResponse message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ControlResponse
     * @static
     * @param {ControlResponse} message ControlResponse
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ControlResponse.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.defaults) {
            object.success = false;
            object.reason = options.enums === String ? "UNKNOW_FAILURE" : 0;
        }
        if (message.success != null && message.hasOwnProperty("success"))
            object.success = message.success;
        if (message.reason != null && message.hasOwnProperty("reason"))
            object.reason = options.enums === String ? $root.ControlResponse.FailureReason[message.reason] === undefined ? message.reason : $root.ControlResponse.FailureReason[message.reason] : message.reason;
        return object;
    };

    /**
     * Converts this ControlResponse to JSON.
     * @function toJSON
     * @memberof ControlResponse
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ControlResponse.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for ControlResponse
     * @function getTypeUrl
     * @memberof ControlResponse
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    ControlResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/ControlResponse";
    };

    /**
     * FailureReason enum.
     * @name ControlResponse.FailureReason
     * @enum {number}
     * @property {number} UNKNOW_FAILURE=0 UNKNOW_FAILURE value
     * @property {number} ANOTHER_CONNECTION_EXISTS=1 ANOTHER_CONNECTION_EXISTS value
     * @property {number} TOKEN_INVALID=2 TOKEN_INVALID value
     * @property {number} ACTIVE_DISCONNECT=3 ACTIVE_DISCONNECT value
     */
    ControlResponse.FailureReason = (function() {
        const valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "UNKNOW_FAILURE"] = 0;
        values[valuesById[1] = "ANOTHER_CONNECTION_EXISTS"] = 1;
        values[valuesById[2] = "TOKEN_INVALID"] = 2;
        values[valuesById[3] = "ACTIVE_DISCONNECT"] = 3;
        return values;
    })();

    return ControlResponse;
})();

export const HeartbeatRequest = $root.HeartbeatRequest = (() => {

    /**
     * Properties of a HeartbeatRequest.
     * @exports IHeartbeatRequest
     * @interface IHeartbeatRequest
     */

    /**
     * Constructs a new HeartbeatRequest.
     * @exports HeartbeatRequest
     * @classdesc Represents a HeartbeatRequest.
     * @implements IHeartbeatRequest
     * @constructor
     * @param {IHeartbeatRequest=} [properties] Properties to set
     */
    function HeartbeatRequest(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Creates a new HeartbeatRequest instance using the specified properties.
     * @function create
     * @memberof HeartbeatRequest
     * @static
     * @param {IHeartbeatRequest=} [properties] Properties to set
     * @returns {HeartbeatRequest} HeartbeatRequest instance
     */
    HeartbeatRequest.create = function create(properties) {
        return new HeartbeatRequest(properties);
    };

    /**
     * Encodes the specified HeartbeatRequest message. Does not implicitly {@link HeartbeatRequest.verify|verify} messages.
     * @function encode
     * @memberof HeartbeatRequest
     * @static
     * @param {IHeartbeatRequest} message HeartbeatRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    HeartbeatRequest.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        return writer;
    };

    /**
     * Encodes the specified HeartbeatRequest message, length delimited. Does not implicitly {@link HeartbeatRequest.verify|verify} messages.
     * @function encodeDelimited
     * @memberof HeartbeatRequest
     * @static
     * @param {IHeartbeatRequest} message HeartbeatRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    HeartbeatRequest.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a HeartbeatRequest message from the specified reader or buffer.
     * @function decode
     * @memberof HeartbeatRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {HeartbeatRequest} HeartbeatRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    HeartbeatRequest.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.HeartbeatRequest();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a HeartbeatRequest message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof HeartbeatRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {HeartbeatRequest} HeartbeatRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    HeartbeatRequest.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a HeartbeatRequest message.
     * @function verify
     * @memberof HeartbeatRequest
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    HeartbeatRequest.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        return null;
    };

    /**
     * Creates a HeartbeatRequest message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof HeartbeatRequest
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {HeartbeatRequest} HeartbeatRequest
     */
    HeartbeatRequest.fromObject = function fromObject(object) {
        if (object instanceof $root.HeartbeatRequest)
            return object;
        return new $root.HeartbeatRequest();
    };

    /**
     * Creates a plain object from a HeartbeatRequest message. Also converts values to other types if specified.
     * @function toObject
     * @memberof HeartbeatRequest
     * @static
     * @param {HeartbeatRequest} message HeartbeatRequest
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    HeartbeatRequest.toObject = function toObject() {
        return {};
    };

    /**
     * Converts this HeartbeatRequest to JSON.
     * @function toJSON
     * @memberof HeartbeatRequest
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    HeartbeatRequest.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for HeartbeatRequest
     * @function getTypeUrl
     * @memberof HeartbeatRequest
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    HeartbeatRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/HeartbeatRequest";
    };

    return HeartbeatRequest;
})();

export const HeartbeatResponse = $root.HeartbeatResponse = (() => {

    /**
     * Properties of a HeartbeatResponse.
     * @exports IHeartbeatResponse
     * @interface IHeartbeatResponse
     */

    /**
     * Constructs a new HeartbeatResponse.
     * @exports HeartbeatResponse
     * @classdesc Represents a HeartbeatResponse.
     * @implements IHeartbeatResponse
     * @constructor
     * @param {IHeartbeatResponse=} [properties] Properties to set
     */
    function HeartbeatResponse(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Creates a new HeartbeatResponse instance using the specified properties.
     * @function create
     * @memberof HeartbeatResponse
     * @static
     * @param {IHeartbeatResponse=} [properties] Properties to set
     * @returns {HeartbeatResponse} HeartbeatResponse instance
     */
    HeartbeatResponse.create = function create(properties) {
        return new HeartbeatResponse(properties);
    };

    /**
     * Encodes the specified HeartbeatResponse message. Does not implicitly {@link HeartbeatResponse.verify|verify} messages.
     * @function encode
     * @memberof HeartbeatResponse
     * @static
     * @param {IHeartbeatResponse} message HeartbeatResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    HeartbeatResponse.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        return writer;
    };

    /**
     * Encodes the specified HeartbeatResponse message, length delimited. Does not implicitly {@link HeartbeatResponse.verify|verify} messages.
     * @function encodeDelimited
     * @memberof HeartbeatResponse
     * @static
     * @param {IHeartbeatResponse} message HeartbeatResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    HeartbeatResponse.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a HeartbeatResponse message from the specified reader or buffer.
     * @function decode
     * @memberof HeartbeatResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {HeartbeatResponse} HeartbeatResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    HeartbeatResponse.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.HeartbeatResponse();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a HeartbeatResponse message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof HeartbeatResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {HeartbeatResponse} HeartbeatResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    HeartbeatResponse.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a HeartbeatResponse message.
     * @function verify
     * @memberof HeartbeatResponse
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    HeartbeatResponse.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        return null;
    };

    /**
     * Creates a HeartbeatResponse message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof HeartbeatResponse
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {HeartbeatResponse} HeartbeatResponse
     */
    HeartbeatResponse.fromObject = function fromObject(object) {
        if (object instanceof $root.HeartbeatResponse)
            return object;
        return new $root.HeartbeatResponse();
    };

    /**
     * Creates a plain object from a HeartbeatResponse message. Also converts values to other types if specified.
     * @function toObject
     * @memberof HeartbeatResponse
     * @static
     * @param {HeartbeatResponse} message HeartbeatResponse
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    HeartbeatResponse.toObject = function toObject() {
        return {};
    };

    /**
     * Converts this HeartbeatResponse to JSON.
     * @function toJSON
     * @memberof HeartbeatResponse
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    HeartbeatResponse.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for HeartbeatResponse
     * @function getTypeUrl
     * @memberof HeartbeatResponse
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    HeartbeatResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/HeartbeatResponse";
    };

    return HeartbeatResponse;
})();

export const PresetUpdateRequest = $root.PresetUpdateRequest = (() => {

    /**
     * Properties of a PresetUpdateRequest.
     * @exports IPresetUpdateRequest
     * @interface IPresetUpdateRequest
     * @property {PresetUpdateRequest.PresetUpdateType|null} [type] PresetUpdateRequest type
     * @property {number|null} [position] PresetUpdateRequest position
     * @property {string|null} [name] PresetUpdateRequest name
     * @property {string|null} [curDeviceSerialNum] PresetUpdateRequest curDeviceSerialNum
     */

    /**
     * Constructs a new PresetUpdateRequest.
     * @exports PresetUpdateRequest
     * @classdesc Represents a PresetUpdateRequest.
     * @implements IPresetUpdateRequest
     * @constructor
     * @param {IPresetUpdateRequest=} [properties] Properties to set
     */
    function PresetUpdateRequest(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * PresetUpdateRequest type.
     * @member {PresetUpdateRequest.PresetUpdateType} type
     * @memberof PresetUpdateRequest
     * @instance
     */
    PresetUpdateRequest.prototype.type = 0;

    /**
     * PresetUpdateRequest position.
     * @member {number} position
     * @memberof PresetUpdateRequest
     * @instance
     */
    PresetUpdateRequest.prototype.position = 0;

    /**
     * PresetUpdateRequest name.
     * @member {string} name
     * @memberof PresetUpdateRequest
     * @instance
     */
    PresetUpdateRequest.prototype.name = "";

    /**
     * PresetUpdateRequest curDeviceSerialNum.
     * @member {string} curDeviceSerialNum
     * @memberof PresetUpdateRequest
     * @instance
     */
    PresetUpdateRequest.prototype.curDeviceSerialNum = "";

    /**
     * Creates a new PresetUpdateRequest instance using the specified properties.
     * @function create
     * @memberof PresetUpdateRequest
     * @static
     * @param {IPresetUpdateRequest=} [properties] Properties to set
     * @returns {PresetUpdateRequest} PresetUpdateRequest instance
     */
    PresetUpdateRequest.create = function create(properties) {
        return new PresetUpdateRequest(properties);
    };

    /**
     * Encodes the specified PresetUpdateRequest message. Does not implicitly {@link PresetUpdateRequest.verify|verify} messages.
     * @function encode
     * @memberof PresetUpdateRequest
     * @static
     * @param {IPresetUpdateRequest} message PresetUpdateRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    PresetUpdateRequest.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.type != null && Object.hasOwnProperty.call(message, "type"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.type);
        if (message.position != null && Object.hasOwnProperty.call(message, "position"))
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.position);
        if (message.name != null && Object.hasOwnProperty.call(message, "name"))
            writer.uint32(/* id 3, wireType 2 =*/26).string(message.name);
        if (message.curDeviceSerialNum != null && Object.hasOwnProperty.call(message, "curDeviceSerialNum"))
            writer.uint32(/* id 4, wireType 2 =*/34).string(message.curDeviceSerialNum);
        return writer;
    };

    /**
     * Encodes the specified PresetUpdateRequest message, length delimited. Does not implicitly {@link PresetUpdateRequest.verify|verify} messages.
     * @function encodeDelimited
     * @memberof PresetUpdateRequest
     * @static
     * @param {IPresetUpdateRequest} message PresetUpdateRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    PresetUpdateRequest.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a PresetUpdateRequest message from the specified reader or buffer.
     * @function decode
     * @memberof PresetUpdateRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {PresetUpdateRequest} PresetUpdateRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    PresetUpdateRequest.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.PresetUpdateRequest();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.type = reader.int32();
                    break;
                }
            case 2: {
                    message.position = reader.int32();
                    break;
                }
            case 3: {
                    message.name = reader.string();
                    break;
                }
            case 4: {
                    message.curDeviceSerialNum = reader.string();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a PresetUpdateRequest message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof PresetUpdateRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {PresetUpdateRequest} PresetUpdateRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    PresetUpdateRequest.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a PresetUpdateRequest message.
     * @function verify
     * @memberof PresetUpdateRequest
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    PresetUpdateRequest.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.type != null && message.hasOwnProperty("type"))
            switch (message.type) {
            default:
                return "type: enum value expected";
            case 0:
            case 1:
            case 2:
            case 3:
                break;
            }
        if (message.position != null && message.hasOwnProperty("position"))
            if (!$util.isInteger(message.position))
                return "position: integer expected";
        if (message.name != null && message.hasOwnProperty("name"))
            if (!$util.isString(message.name))
                return "name: string expected";
        if (message.curDeviceSerialNum != null && message.hasOwnProperty("curDeviceSerialNum"))
            if (!$util.isString(message.curDeviceSerialNum))
                return "curDeviceSerialNum: string expected";
        return null;
    };

    /**
     * Creates a PresetUpdateRequest message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof PresetUpdateRequest
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {PresetUpdateRequest} PresetUpdateRequest
     */
    PresetUpdateRequest.fromObject = function fromObject(object) {
        if (object instanceof $root.PresetUpdateRequest)
            return object;
        let message = new $root.PresetUpdateRequest();
        switch (object.type) {
        default:
            if (typeof object.type === "number") {
                message.type = object.type;
                break;
            }
            break;
        case "ADD":
        case 0:
            message.type = 0;
            break;
        case "UPDATE":
        case 1:
            message.type = 1;
            break;
        case "DELETE":
        case 2:
            message.type = 2;
            break;
        case "RENAME":
        case 3:
            message.type = 3;
            break;
        }
        if (object.position != null)
            message.position = object.position | 0;
        if (object.name != null)
            message.name = String(object.name);
        if (object.curDeviceSerialNum != null)
            message.curDeviceSerialNum = String(object.curDeviceSerialNum);
        return message;
    };

    /**
     * Creates a plain object from a PresetUpdateRequest message. Also converts values to other types if specified.
     * @function toObject
     * @memberof PresetUpdateRequest
     * @static
     * @param {PresetUpdateRequest} message PresetUpdateRequest
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    PresetUpdateRequest.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.defaults) {
            object.type = options.enums === String ? "ADD" : 0;
            object.position = 0;
            object.name = "";
            object.curDeviceSerialNum = "";
        }
        if (message.type != null && message.hasOwnProperty("type"))
            object.type = options.enums === String ? $root.PresetUpdateRequest.PresetUpdateType[message.type] === undefined ? message.type : $root.PresetUpdateRequest.PresetUpdateType[message.type] : message.type;
        if (message.position != null && message.hasOwnProperty("position"))
            object.position = message.position;
        if (message.name != null && message.hasOwnProperty("name"))
            object.name = message.name;
        if (message.curDeviceSerialNum != null && message.hasOwnProperty("curDeviceSerialNum"))
            object.curDeviceSerialNum = message.curDeviceSerialNum;
        return object;
    };

    /**
     * Converts this PresetUpdateRequest to JSON.
     * @function toJSON
     * @memberof PresetUpdateRequest
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    PresetUpdateRequest.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for PresetUpdateRequest
     * @function getTypeUrl
     * @memberof PresetUpdateRequest
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    PresetUpdateRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/PresetUpdateRequest";
    };

    /**
     * PresetUpdateType enum.
     * @name PresetUpdateRequest.PresetUpdateType
     * @enum {number}
     * @property {number} ADD=0 ADD value
     * @property {number} UPDATE=1 UPDATE value
     * @property {number} DELETE=2 DELETE value
     * @property {number} RENAME=3 RENAME value
     */
    PresetUpdateRequest.PresetUpdateType = (function() {
        const valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "ADD"] = 0;
        values[valuesById[1] = "UPDATE"] = 1;
        values[valuesById[2] = "DELETE"] = 2;
        values[valuesById[3] = "RENAME"] = 3;
        return values;
    })();

    return PresetUpdateRequest;
})();

export const PresetUpdateResponse = $root.PresetUpdateResponse = (() => {

    /**
     * Properties of a PresetUpdateResponse.
     * @exports IPresetUpdateResponse
     * @interface IPresetUpdateResponse
     * @property {boolean|null} [success] PresetUpdateResponse success
     * @property {PresetUpdateResponse.FailureReason|null} [reason] PresetUpdateResponse reason
     * @property {DeviceInfoNotification.IDeviceInfo|null} [curDeviceInfo] PresetUpdateResponse curDeviceInfo
     */

    /**
     * Constructs a new PresetUpdateResponse.
     * @exports PresetUpdateResponse
     * @classdesc Represents a PresetUpdateResponse.
     * @implements IPresetUpdateResponse
     * @constructor
     * @param {IPresetUpdateResponse=} [properties] Properties to set
     */
    function PresetUpdateResponse(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * PresetUpdateResponse success.
     * @member {boolean} success
     * @memberof PresetUpdateResponse
     * @instance
     */
    PresetUpdateResponse.prototype.success = false;

    /**
     * PresetUpdateResponse reason.
     * @member {PresetUpdateResponse.FailureReason} reason
     * @memberof PresetUpdateResponse
     * @instance
     */
    PresetUpdateResponse.prototype.reason = 0;

    /**
     * PresetUpdateResponse curDeviceInfo.
     * @member {DeviceInfoNotification.IDeviceInfo|null|undefined} curDeviceInfo
     * @memberof PresetUpdateResponse
     * @instance
     */
    PresetUpdateResponse.prototype.curDeviceInfo = null;

    /**
     * Creates a new PresetUpdateResponse instance using the specified properties.
     * @function create
     * @memberof PresetUpdateResponse
     * @static
     * @param {IPresetUpdateResponse=} [properties] Properties to set
     * @returns {PresetUpdateResponse} PresetUpdateResponse instance
     */
    PresetUpdateResponse.create = function create(properties) {
        return new PresetUpdateResponse(properties);
    };

    /**
     * Encodes the specified PresetUpdateResponse message. Does not implicitly {@link PresetUpdateResponse.verify|verify} messages.
     * @function encode
     * @memberof PresetUpdateResponse
     * @static
     * @param {IPresetUpdateResponse} message PresetUpdateResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    PresetUpdateResponse.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.success != null && Object.hasOwnProperty.call(message, "success"))
            writer.uint32(/* id 1, wireType 0 =*/8).bool(message.success);
        if (message.reason != null && Object.hasOwnProperty.call(message, "reason"))
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.reason);
        if (message.curDeviceInfo != null && Object.hasOwnProperty.call(message, "curDeviceInfo"))
            $root.DeviceInfoNotification.DeviceInfo.encode(message.curDeviceInfo, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified PresetUpdateResponse message, length delimited. Does not implicitly {@link PresetUpdateResponse.verify|verify} messages.
     * @function encodeDelimited
     * @memberof PresetUpdateResponse
     * @static
     * @param {IPresetUpdateResponse} message PresetUpdateResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    PresetUpdateResponse.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a PresetUpdateResponse message from the specified reader or buffer.
     * @function decode
     * @memberof PresetUpdateResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {PresetUpdateResponse} PresetUpdateResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    PresetUpdateResponse.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.PresetUpdateResponse();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.success = reader.bool();
                    break;
                }
            case 2: {
                    message.reason = reader.int32();
                    break;
                }
            case 3: {
                    message.curDeviceInfo = $root.DeviceInfoNotification.DeviceInfo.decode(reader, reader.uint32());
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a PresetUpdateResponse message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof PresetUpdateResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {PresetUpdateResponse} PresetUpdateResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    PresetUpdateResponse.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a PresetUpdateResponse message.
     * @function verify
     * @memberof PresetUpdateResponse
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    PresetUpdateResponse.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.success != null && message.hasOwnProperty("success"))
            if (typeof message.success !== "boolean")
                return "success: boolean expected";
        if (message.reason != null && message.hasOwnProperty("reason"))
            switch (message.reason) {
            default:
                return "reason: enum value expected";
            case 0:
            case 1:
                break;
            }
        if (message.curDeviceInfo != null && message.hasOwnProperty("curDeviceInfo")) {
            let error = $root.DeviceInfoNotification.DeviceInfo.verify(message.curDeviceInfo);
            if (error)
                return "curDeviceInfo." + error;
        }
        return null;
    };

    /**
     * Creates a PresetUpdateResponse message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof PresetUpdateResponse
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {PresetUpdateResponse} PresetUpdateResponse
     */
    PresetUpdateResponse.fromObject = function fromObject(object) {
        if (object instanceof $root.PresetUpdateResponse)
            return object;
        let message = new $root.PresetUpdateResponse();
        if (object.success != null)
            message.success = Boolean(object.success);
        switch (object.reason) {
        default:
            if (typeof object.reason === "number") {
                message.reason = object.reason;
                break;
            }
            break;
        case "UNKNOW_FAILURE":
        case 0:
            message.reason = 0;
            break;
        case "LINK_DISCONNECTED":
        case 1:
            message.reason = 1;
            break;
        }
        if (object.curDeviceInfo != null) {
            if (typeof object.curDeviceInfo !== "object")
                throw TypeError(".PresetUpdateResponse.curDeviceInfo: object expected");
            message.curDeviceInfo = $root.DeviceInfoNotification.DeviceInfo.fromObject(object.curDeviceInfo);
        }
        return message;
    };

    /**
     * Creates a plain object from a PresetUpdateResponse message. Also converts values to other types if specified.
     * @function toObject
     * @memberof PresetUpdateResponse
     * @static
     * @param {PresetUpdateResponse} message PresetUpdateResponse
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    PresetUpdateResponse.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.defaults) {
            object.success = false;
            object.reason = options.enums === String ? "UNKNOW_FAILURE" : 0;
            object.curDeviceInfo = null;
        }
        if (message.success != null && message.hasOwnProperty("success"))
            object.success = message.success;
        if (message.reason != null && message.hasOwnProperty("reason"))
            object.reason = options.enums === String ? $root.PresetUpdateResponse.FailureReason[message.reason] === undefined ? message.reason : $root.PresetUpdateResponse.FailureReason[message.reason] : message.reason;
        if (message.curDeviceInfo != null && message.hasOwnProperty("curDeviceInfo"))
            object.curDeviceInfo = $root.DeviceInfoNotification.DeviceInfo.toObject(message.curDeviceInfo, options);
        return object;
    };

    /**
     * Converts this PresetUpdateResponse to JSON.
     * @function toJSON
     * @memberof PresetUpdateResponse
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    PresetUpdateResponse.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for PresetUpdateResponse
     * @function getTypeUrl
     * @memberof PresetUpdateResponse
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    PresetUpdateResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/PresetUpdateResponse";
    };

    /**
     * FailureReason enum.
     * @name PresetUpdateResponse.FailureReason
     * @enum {number}
     * @property {number} UNKNOW_FAILURE=0 UNKNOW_FAILURE value
     * @property {number} LINK_DISCONNECTED=1 LINK_DISCONNECTED value
     */
    PresetUpdateResponse.FailureReason = (function() {
        const valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "UNKNOW_FAILURE"] = 0;
        values[valuesById[1] = "LINK_DISCONNECTED"] = 1;
        return values;
    })();

    return PresetUpdateResponse;
})();

export const ToastNotification = $root.ToastNotification = (() => {

    /**
     * Properties of a ToastNotification.
     * @exports IToastNotification
     * @interface IToastNotification
     * @property {string|null} [curDeviceSerialNum] ToastNotification curDeviceSerialNum
     * @property {string|null} [content] ToastNotification content
     */

    /**
     * Constructs a new ToastNotification.
     * @exports ToastNotification
     * @classdesc Represents a ToastNotification.
     * @implements IToastNotification
     * @constructor
     * @param {IToastNotification=} [properties] Properties to set
     */
    function ToastNotification(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * ToastNotification curDeviceSerialNum.
     * @member {string} curDeviceSerialNum
     * @memberof ToastNotification
     * @instance
     */
    ToastNotification.prototype.curDeviceSerialNum = "";

    /**
     * ToastNotification content.
     * @member {string} content
     * @memberof ToastNotification
     * @instance
     */
    ToastNotification.prototype.content = "";

    /**
     * Creates a new ToastNotification instance using the specified properties.
     * @function create
     * @memberof ToastNotification
     * @static
     * @param {IToastNotification=} [properties] Properties to set
     * @returns {ToastNotification} ToastNotification instance
     */
    ToastNotification.create = function create(properties) {
        return new ToastNotification(properties);
    };

    /**
     * Encodes the specified ToastNotification message. Does not implicitly {@link ToastNotification.verify|verify} messages.
     * @function encode
     * @memberof ToastNotification
     * @static
     * @param {IToastNotification} message ToastNotification message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ToastNotification.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.curDeviceSerialNum != null && Object.hasOwnProperty.call(message, "curDeviceSerialNum"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.curDeviceSerialNum);
        if (message.content != null && Object.hasOwnProperty.call(message, "content"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.content);
        return writer;
    };

    /**
     * Encodes the specified ToastNotification message, length delimited. Does not implicitly {@link ToastNotification.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ToastNotification
     * @static
     * @param {IToastNotification} message ToastNotification message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ToastNotification.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a ToastNotification message from the specified reader or buffer.
     * @function decode
     * @memberof ToastNotification
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ToastNotification} ToastNotification
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ToastNotification.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.ToastNotification();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.curDeviceSerialNum = reader.string();
                    break;
                }
            case 2: {
                    message.content = reader.string();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a ToastNotification message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ToastNotification
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ToastNotification} ToastNotification
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ToastNotification.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a ToastNotification message.
     * @function verify
     * @memberof ToastNotification
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ToastNotification.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.curDeviceSerialNum != null && message.hasOwnProperty("curDeviceSerialNum"))
            if (!$util.isString(message.curDeviceSerialNum))
                return "curDeviceSerialNum: string expected";
        if (message.content != null && message.hasOwnProperty("content"))
            if (!$util.isString(message.content))
                return "content: string expected";
        return null;
    };

    /**
     * Creates a ToastNotification message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ToastNotification
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ToastNotification} ToastNotification
     */
    ToastNotification.fromObject = function fromObject(object) {
        if (object instanceof $root.ToastNotification)
            return object;
        let message = new $root.ToastNotification();
        if (object.curDeviceSerialNum != null)
            message.curDeviceSerialNum = String(object.curDeviceSerialNum);
        if (object.content != null)
            message.content = String(object.content);
        return message;
    };

    /**
     * Creates a plain object from a ToastNotification message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ToastNotification
     * @static
     * @param {ToastNotification} message ToastNotification
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ToastNotification.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.defaults) {
            object.curDeviceSerialNum = "";
            object.content = "";
        }
        if (message.curDeviceSerialNum != null && message.hasOwnProperty("curDeviceSerialNum"))
            object.curDeviceSerialNum = message.curDeviceSerialNum;
        if (message.content != null && message.hasOwnProperty("content"))
            object.content = message.content;
        return object;
    };

    /**
     * Converts this ToastNotification to JSON.
     * @function toJSON
     * @memberof ToastNotification
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ToastNotification.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for ToastNotification
     * @function getTypeUrl
     * @memberof ToastNotification
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    ToastNotification.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/ToastNotification";
    };

    return ToastNotification;
})();

export const Request = $root.Request = (() => {

    /**
     * Properties of a Request.
     * @exports IRequest
     * @interface IRequest
     * @property {boolean|null} [hasUvcRequest] Request hasUvcRequest
     * @property {boolean|null} [hasUvcExtendRequest] Request hasUvcExtendRequest
     * @property {boolean|null} [hasSwitchDeviceRequest] Request hasSwitchDeviceRequest
     * @property {boolean|null} [hasControlRequest] Request hasControlRequest
     * @property {boolean|null} [hasHeartbeatRequest] Request hasHeartbeatRequest
     * @property {boolean|null} [hasPresetUpdateRequest] Request hasPresetUpdateRequest
     * @property {boolean|null} [hasValueChangeNotify] Request hasValueChangeNotify
     * @property {IUVCRequest|null} [uvcRequest] Request uvcRequest
     * @property {IUVCExtendRequest|null} [uvcExtendRequest] Request uvcExtendRequest
     * @property {ISwitchDeviceRequest|null} [switchDeviceRequest] Request switchDeviceRequest
     * @property {IControlRequest|null} [controlRequest] Request controlRequest
     * @property {IHeartbeatRequest|null} [heartbeatRequest] Request heartbeatRequest
     * @property {IPresetUpdateRequest|null} [presetUpdateRequest] Request presetUpdateRequest
     * @property {IValueChangeNotification|null} [valueChangeNotify] Request valueChangeNotify
     */

    /**
     * Constructs a new Request.
     * @exports Request
     * @classdesc Represents a Request.
     * @implements IRequest
     * @constructor
     * @param {IRequest=} [properties] Properties to set
     */
    function Request(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Request hasUvcRequest.
     * @member {boolean} hasUvcRequest
     * @memberof Request
     * @instance
     */
    Request.prototype.hasUvcRequest = false;

    /**
     * Request hasUvcExtendRequest.
     * @member {boolean} hasUvcExtendRequest
     * @memberof Request
     * @instance
     */
    Request.prototype.hasUvcExtendRequest = false;

    /**
     * Request hasSwitchDeviceRequest.
     * @member {boolean} hasSwitchDeviceRequest
     * @memberof Request
     * @instance
     */
    Request.prototype.hasSwitchDeviceRequest = false;

    /**
     * Request hasControlRequest.
     * @member {boolean} hasControlRequest
     * @memberof Request
     * @instance
     */
    Request.prototype.hasControlRequest = false;

    /**
     * Request hasHeartbeatRequest.
     * @member {boolean} hasHeartbeatRequest
     * @memberof Request
     * @instance
     */
    Request.prototype.hasHeartbeatRequest = false;

    /**
     * Request hasPresetUpdateRequest.
     * @member {boolean} hasPresetUpdateRequest
     * @memberof Request
     * @instance
     */
    Request.prototype.hasPresetUpdateRequest = false;

    /**
     * Request hasValueChangeNotify.
     * @member {boolean} hasValueChangeNotify
     * @memberof Request
     * @instance
     */
    Request.prototype.hasValueChangeNotify = false;

    /**
     * Request uvcRequest.
     * @member {IUVCRequest|null|undefined} uvcRequest
     * @memberof Request
     * @instance
     */
    Request.prototype.uvcRequest = null;

    /**
     * Request uvcExtendRequest.
     * @member {IUVCExtendRequest|null|undefined} uvcExtendRequest
     * @memberof Request
     * @instance
     */
    Request.prototype.uvcExtendRequest = null;

    /**
     * Request switchDeviceRequest.
     * @member {ISwitchDeviceRequest|null|undefined} switchDeviceRequest
     * @memberof Request
     * @instance
     */
    Request.prototype.switchDeviceRequest = null;

    /**
     * Request controlRequest.
     * @member {IControlRequest|null|undefined} controlRequest
     * @memberof Request
     * @instance
     */
    Request.prototype.controlRequest = null;

    /**
     * Request heartbeatRequest.
     * @member {IHeartbeatRequest|null|undefined} heartbeatRequest
     * @memberof Request
     * @instance
     */
    Request.prototype.heartbeatRequest = null;

    /**
     * Request presetUpdateRequest.
     * @member {IPresetUpdateRequest|null|undefined} presetUpdateRequest
     * @memberof Request
     * @instance
     */
    Request.prototype.presetUpdateRequest = null;

    /**
     * Request valueChangeNotify.
     * @member {IValueChangeNotification|null|undefined} valueChangeNotify
     * @memberof Request
     * @instance
     */
    Request.prototype.valueChangeNotify = null;

    /**
     * Creates a new Request instance using the specified properties.
     * @function create
     * @memberof Request
     * @static
     * @param {IRequest=} [properties] Properties to set
     * @returns {Request} Request instance
     */
    Request.create = function create(properties) {
        return new Request(properties);
    };

    /**
     * Encodes the specified Request message. Does not implicitly {@link Request.verify|verify} messages.
     * @function encode
     * @memberof Request
     * @static
     * @param {IRequest} message Request message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Request.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.hasUvcRequest != null && Object.hasOwnProperty.call(message, "hasUvcRequest"))
            writer.uint32(/* id 1, wireType 0 =*/8).bool(message.hasUvcRequest);
        if (message.hasUvcExtendRequest != null && Object.hasOwnProperty.call(message, "hasUvcExtendRequest"))
            writer.uint32(/* id 2, wireType 0 =*/16).bool(message.hasUvcExtendRequest);
        if (message.hasSwitchDeviceRequest != null && Object.hasOwnProperty.call(message, "hasSwitchDeviceRequest"))
            writer.uint32(/* id 3, wireType 0 =*/24).bool(message.hasSwitchDeviceRequest);
        if (message.hasControlRequest != null && Object.hasOwnProperty.call(message, "hasControlRequest"))
            writer.uint32(/* id 4, wireType 0 =*/32).bool(message.hasControlRequest);
        if (message.hasHeartbeatRequest != null && Object.hasOwnProperty.call(message, "hasHeartbeatRequest"))
            writer.uint32(/* id 5, wireType 0 =*/40).bool(message.hasHeartbeatRequest);
        if (message.hasPresetUpdateRequest != null && Object.hasOwnProperty.call(message, "hasPresetUpdateRequest"))
            writer.uint32(/* id 6, wireType 0 =*/48).bool(message.hasPresetUpdateRequest);
        if (message.hasValueChangeNotify != null && Object.hasOwnProperty.call(message, "hasValueChangeNotify"))
            writer.uint32(/* id 7, wireType 0 =*/56).bool(message.hasValueChangeNotify);
        if (message.uvcRequest != null && Object.hasOwnProperty.call(message, "uvcRequest"))
            $root.UVCRequest.encode(message.uvcRequest, writer.uint32(/* id 10, wireType 2 =*/82).fork()).ldelim();
        if (message.uvcExtendRequest != null && Object.hasOwnProperty.call(message, "uvcExtendRequest"))
            $root.UVCExtendRequest.encode(message.uvcExtendRequest, writer.uint32(/* id 11, wireType 2 =*/90).fork()).ldelim();
        if (message.switchDeviceRequest != null && Object.hasOwnProperty.call(message, "switchDeviceRequest"))
            $root.SwitchDeviceRequest.encode(message.switchDeviceRequest, writer.uint32(/* id 12, wireType 2 =*/98).fork()).ldelim();
        if (message.controlRequest != null && Object.hasOwnProperty.call(message, "controlRequest"))
            $root.ControlRequest.encode(message.controlRequest, writer.uint32(/* id 13, wireType 2 =*/106).fork()).ldelim();
        if (message.heartbeatRequest != null && Object.hasOwnProperty.call(message, "heartbeatRequest"))
            $root.HeartbeatRequest.encode(message.heartbeatRequest, writer.uint32(/* id 14, wireType 2 =*/114).fork()).ldelim();
        if (message.presetUpdateRequest != null && Object.hasOwnProperty.call(message, "presetUpdateRequest"))
            $root.PresetUpdateRequest.encode(message.presetUpdateRequest, writer.uint32(/* id 15, wireType 2 =*/122).fork()).ldelim();
        if (message.valueChangeNotify != null && Object.hasOwnProperty.call(message, "valueChangeNotify"))
            $root.ValueChangeNotification.encode(message.valueChangeNotify, writer.uint32(/* id 16, wireType 2 =*/130).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified Request message, length delimited. Does not implicitly {@link Request.verify|verify} messages.
     * @function encodeDelimited
     * @memberof Request
     * @static
     * @param {IRequest} message Request message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Request.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a Request message from the specified reader or buffer.
     * @function decode
     * @memberof Request
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {Request} Request
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Request.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.Request();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.hasUvcRequest = reader.bool();
                    break;
                }
            case 2: {
                    message.hasUvcExtendRequest = reader.bool();
                    break;
                }
            case 3: {
                    message.hasSwitchDeviceRequest = reader.bool();
                    break;
                }
            case 4: {
                    message.hasControlRequest = reader.bool();
                    break;
                }
            case 5: {
                    message.hasHeartbeatRequest = reader.bool();
                    break;
                }
            case 6: {
                    message.hasPresetUpdateRequest = reader.bool();
                    break;
                }
            case 7: {
                    message.hasValueChangeNotify = reader.bool();
                    break;
                }
            case 10: {
                    message.uvcRequest = $root.UVCRequest.decode(reader, reader.uint32());
                    break;
                }
            case 11: {
                    message.uvcExtendRequest = $root.UVCExtendRequest.decode(reader, reader.uint32());
                    break;
                }
            case 12: {
                    message.switchDeviceRequest = $root.SwitchDeviceRequest.decode(reader, reader.uint32());
                    break;
                }
            case 13: {
                    message.controlRequest = $root.ControlRequest.decode(reader, reader.uint32());
                    break;
                }
            case 14: {
                    message.heartbeatRequest = $root.HeartbeatRequest.decode(reader, reader.uint32());
                    break;
                }
            case 15: {
                    message.presetUpdateRequest = $root.PresetUpdateRequest.decode(reader, reader.uint32());
                    break;
                }
            case 16: {
                    message.valueChangeNotify = $root.ValueChangeNotification.decode(reader, reader.uint32());
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a Request message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof Request
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {Request} Request
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Request.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a Request message.
     * @function verify
     * @memberof Request
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    Request.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.hasUvcRequest != null && message.hasOwnProperty("hasUvcRequest"))
            if (typeof message.hasUvcRequest !== "boolean")
                return "hasUvcRequest: boolean expected";
        if (message.hasUvcExtendRequest != null && message.hasOwnProperty("hasUvcExtendRequest"))
            if (typeof message.hasUvcExtendRequest !== "boolean")
                return "hasUvcExtendRequest: boolean expected";
        if (message.hasSwitchDeviceRequest != null && message.hasOwnProperty("hasSwitchDeviceRequest"))
            if (typeof message.hasSwitchDeviceRequest !== "boolean")
                return "hasSwitchDeviceRequest: boolean expected";
        if (message.hasControlRequest != null && message.hasOwnProperty("hasControlRequest"))
            if (typeof message.hasControlRequest !== "boolean")
                return "hasControlRequest: boolean expected";
        if (message.hasHeartbeatRequest != null && message.hasOwnProperty("hasHeartbeatRequest"))
            if (typeof message.hasHeartbeatRequest !== "boolean")
                return "hasHeartbeatRequest: boolean expected";
        if (message.hasPresetUpdateRequest != null && message.hasOwnProperty("hasPresetUpdateRequest"))
            if (typeof message.hasPresetUpdateRequest !== "boolean")
                return "hasPresetUpdateRequest: boolean expected";
        if (message.hasValueChangeNotify != null && message.hasOwnProperty("hasValueChangeNotify"))
            if (typeof message.hasValueChangeNotify !== "boolean")
                return "hasValueChangeNotify: boolean expected";
        if (message.uvcRequest != null && message.hasOwnProperty("uvcRequest")) {
            let error = $root.UVCRequest.verify(message.uvcRequest);
            if (error)
                return "uvcRequest." + error;
        }
        if (message.uvcExtendRequest != null && message.hasOwnProperty("uvcExtendRequest")) {
            let error = $root.UVCExtendRequest.verify(message.uvcExtendRequest);
            if (error)
                return "uvcExtendRequest." + error;
        }
        if (message.switchDeviceRequest != null && message.hasOwnProperty("switchDeviceRequest")) {
            let error = $root.SwitchDeviceRequest.verify(message.switchDeviceRequest);
            if (error)
                return "switchDeviceRequest." + error;
        }
        if (message.controlRequest != null && message.hasOwnProperty("controlRequest")) {
            let error = $root.ControlRequest.verify(message.controlRequest);
            if (error)
                return "controlRequest." + error;
        }
        if (message.heartbeatRequest != null && message.hasOwnProperty("heartbeatRequest")) {
            let error = $root.HeartbeatRequest.verify(message.heartbeatRequest);
            if (error)
                return "heartbeatRequest." + error;
        }
        if (message.presetUpdateRequest != null && message.hasOwnProperty("presetUpdateRequest")) {
            let error = $root.PresetUpdateRequest.verify(message.presetUpdateRequest);
            if (error)
                return "presetUpdateRequest." + error;
        }
        if (message.valueChangeNotify != null && message.hasOwnProperty("valueChangeNotify")) {
            let error = $root.ValueChangeNotification.verify(message.valueChangeNotify);
            if (error)
                return "valueChangeNotify." + error;
        }
        return null;
    };

    /**
     * Creates a Request message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof Request
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {Request} Request
     */
    Request.fromObject = function fromObject(object) {
        if (object instanceof $root.Request)
            return object;
        let message = new $root.Request();
        if (object.hasUvcRequest != null)
            message.hasUvcRequest = Boolean(object.hasUvcRequest);
        if (object.hasUvcExtendRequest != null)
            message.hasUvcExtendRequest = Boolean(object.hasUvcExtendRequest);
        if (object.hasSwitchDeviceRequest != null)
            message.hasSwitchDeviceRequest = Boolean(object.hasSwitchDeviceRequest);
        if (object.hasControlRequest != null)
            message.hasControlRequest = Boolean(object.hasControlRequest);
        if (object.hasHeartbeatRequest != null)
            message.hasHeartbeatRequest = Boolean(object.hasHeartbeatRequest);
        if (object.hasPresetUpdateRequest != null)
            message.hasPresetUpdateRequest = Boolean(object.hasPresetUpdateRequest);
        if (object.hasValueChangeNotify != null)
            message.hasValueChangeNotify = Boolean(object.hasValueChangeNotify);
        if (object.uvcRequest != null) {
            if (typeof object.uvcRequest !== "object")
                throw TypeError(".Request.uvcRequest: object expected");
            message.uvcRequest = $root.UVCRequest.fromObject(object.uvcRequest);
        }
        if (object.uvcExtendRequest != null) {
            if (typeof object.uvcExtendRequest !== "object")
                throw TypeError(".Request.uvcExtendRequest: object expected");
            message.uvcExtendRequest = $root.UVCExtendRequest.fromObject(object.uvcExtendRequest);
        }
        if (object.switchDeviceRequest != null) {
            if (typeof object.switchDeviceRequest !== "object")
                throw TypeError(".Request.switchDeviceRequest: object expected");
            message.switchDeviceRequest = $root.SwitchDeviceRequest.fromObject(object.switchDeviceRequest);
        }
        if (object.controlRequest != null) {
            if (typeof object.controlRequest !== "object")
                throw TypeError(".Request.controlRequest: object expected");
            message.controlRequest = $root.ControlRequest.fromObject(object.controlRequest);
        }
        if (object.heartbeatRequest != null) {
            if (typeof object.heartbeatRequest !== "object")
                throw TypeError(".Request.heartbeatRequest: object expected");
            message.heartbeatRequest = $root.HeartbeatRequest.fromObject(object.heartbeatRequest);
        }
        if (object.presetUpdateRequest != null) {
            if (typeof object.presetUpdateRequest !== "object")
                throw TypeError(".Request.presetUpdateRequest: object expected");
            message.presetUpdateRequest = $root.PresetUpdateRequest.fromObject(object.presetUpdateRequest);
        }
        if (object.valueChangeNotify != null) {
            if (typeof object.valueChangeNotify !== "object")
                throw TypeError(".Request.valueChangeNotify: object expected");
            message.valueChangeNotify = $root.ValueChangeNotification.fromObject(object.valueChangeNotify);
        }
        return message;
    };

    /**
     * Creates a plain object from a Request message. Also converts values to other types if specified.
     * @function toObject
     * @memberof Request
     * @static
     * @param {Request} message Request
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    Request.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.defaults) {
            object.hasUvcRequest = false;
            object.hasUvcExtendRequest = false;
            object.hasSwitchDeviceRequest = false;
            object.hasControlRequest = false;
            object.hasHeartbeatRequest = false;
            object.hasPresetUpdateRequest = false;
            object.hasValueChangeNotify = false;
            object.uvcRequest = null;
            object.uvcExtendRequest = null;
            object.switchDeviceRequest = null;
            object.controlRequest = null;
            object.heartbeatRequest = null;
            object.presetUpdateRequest = null;
            object.valueChangeNotify = null;
        }
        if (message.hasUvcRequest != null && message.hasOwnProperty("hasUvcRequest"))
            object.hasUvcRequest = message.hasUvcRequest;
        if (message.hasUvcExtendRequest != null && message.hasOwnProperty("hasUvcExtendRequest"))
            object.hasUvcExtendRequest = message.hasUvcExtendRequest;
        if (message.hasSwitchDeviceRequest != null && message.hasOwnProperty("hasSwitchDeviceRequest"))
            object.hasSwitchDeviceRequest = message.hasSwitchDeviceRequest;
        if (message.hasControlRequest != null && message.hasOwnProperty("hasControlRequest"))
            object.hasControlRequest = message.hasControlRequest;
        if (message.hasHeartbeatRequest != null && message.hasOwnProperty("hasHeartbeatRequest"))
            object.hasHeartbeatRequest = message.hasHeartbeatRequest;
        if (message.hasPresetUpdateRequest != null && message.hasOwnProperty("hasPresetUpdateRequest"))
            object.hasPresetUpdateRequest = message.hasPresetUpdateRequest;
        if (message.hasValueChangeNotify != null && message.hasOwnProperty("hasValueChangeNotify"))
            object.hasValueChangeNotify = message.hasValueChangeNotify;
        if (message.uvcRequest != null && message.hasOwnProperty("uvcRequest"))
            object.uvcRequest = $root.UVCRequest.toObject(message.uvcRequest, options);
        if (message.uvcExtendRequest != null && message.hasOwnProperty("uvcExtendRequest"))
            object.uvcExtendRequest = $root.UVCExtendRequest.toObject(message.uvcExtendRequest, options);
        if (message.switchDeviceRequest != null && message.hasOwnProperty("switchDeviceRequest"))
            object.switchDeviceRequest = $root.SwitchDeviceRequest.toObject(message.switchDeviceRequest, options);
        if (message.controlRequest != null && message.hasOwnProperty("controlRequest"))
            object.controlRequest = $root.ControlRequest.toObject(message.controlRequest, options);
        if (message.heartbeatRequest != null && message.hasOwnProperty("heartbeatRequest"))
            object.heartbeatRequest = $root.HeartbeatRequest.toObject(message.heartbeatRequest, options);
        if (message.presetUpdateRequest != null && message.hasOwnProperty("presetUpdateRequest"))
            object.presetUpdateRequest = $root.PresetUpdateRequest.toObject(message.presetUpdateRequest, options);
        if (message.valueChangeNotify != null && message.hasOwnProperty("valueChangeNotify"))
            object.valueChangeNotify = $root.ValueChangeNotification.toObject(message.valueChangeNotify, options);
        return object;
    };

    /**
     * Converts this Request to JSON.
     * @function toJSON
     * @memberof Request
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    Request.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for Request
     * @function getTypeUrl
     * @memberof Request
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    Request.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/Request";
    };

    return Request;
})();

export const Response = $root.Response = (() => {

    /**
     * Properties of a Response.
     * @exports IResponse
     * @interface IResponse
     * @property {boolean|null} [hasDeviceInfoNotify] Response hasDeviceInfoNotify
     * @property {boolean|null} [hasValueChangeNotify] Response hasValueChangeNotify
     * @property {boolean|null} [hasControlResponse] Response hasControlResponse
     * @property {boolean|null} [hasConnectionNotify] Response hasConnectionNotify
     * @property {boolean|null} [hasHeartbeatResponse] Response hasHeartbeatResponse
     * @property {boolean|null} [hasPresetUpdateResponse] Response hasPresetUpdateResponse
     * @property {boolean|null} [hasToastNotify] Response hasToastNotify
     * @property {IDeviceInfoNotification|null} [deviceInfoNotify] Response deviceInfoNotify
     * @property {IValueChangeNotification|null} [valueChangeNotify] Response valueChangeNotify
     * @property {IControlResponse|null} [controlResponse] Response controlResponse
     * @property {IConnectionNotification|null} [connectionNotify] Response connectionNotify
     * @property {IHeartbeatResponse|null} [heartbeatResponse] Response heartbeatResponse
     * @property {IPresetUpdateResponse|null} [presetUpdateResponse] Response presetUpdateResponse
     * @property {IToastNotification|null} [toastNotify] Response toastNotify
     */

    /**
     * Constructs a new Response.
     * @exports Response
     * @classdesc Represents a Response.
     * @implements IResponse
     * @constructor
     * @param {IResponse=} [properties] Properties to set
     */
    function Response(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Response hasDeviceInfoNotify.
     * @member {boolean} hasDeviceInfoNotify
     * @memberof Response
     * @instance
     */
    Response.prototype.hasDeviceInfoNotify = false;

    /**
     * Response hasValueChangeNotify.
     * @member {boolean} hasValueChangeNotify
     * @memberof Response
     * @instance
     */
    Response.prototype.hasValueChangeNotify = false;

    /**
     * Response hasControlResponse.
     * @member {boolean} hasControlResponse
     * @memberof Response
     * @instance
     */
    Response.prototype.hasControlResponse = false;

    /**
     * Response hasConnectionNotify.
     * @member {boolean} hasConnectionNotify
     * @memberof Response
     * @instance
     */
    Response.prototype.hasConnectionNotify = false;

    /**
     * Response hasHeartbeatResponse.
     * @member {boolean} hasHeartbeatResponse
     * @memberof Response
     * @instance
     */
    Response.prototype.hasHeartbeatResponse = false;

    /**
     * Response hasPresetUpdateResponse.
     * @member {boolean} hasPresetUpdateResponse
     * @memberof Response
     * @instance
     */
    Response.prototype.hasPresetUpdateResponse = false;

    /**
     * Response hasToastNotify.
     * @member {boolean} hasToastNotify
     * @memberof Response
     * @instance
     */
    Response.prototype.hasToastNotify = false;

    /**
     * Response deviceInfoNotify.
     * @member {IDeviceInfoNotification|null|undefined} deviceInfoNotify
     * @memberof Response
     * @instance
     */
    Response.prototype.deviceInfoNotify = null;

    /**
     * Response valueChangeNotify.
     * @member {IValueChangeNotification|null|undefined} valueChangeNotify
     * @memberof Response
     * @instance
     */
    Response.prototype.valueChangeNotify = null;

    /**
     * Response controlResponse.
     * @member {IControlResponse|null|undefined} controlResponse
     * @memberof Response
     * @instance
     */
    Response.prototype.controlResponse = null;

    /**
     * Response connectionNotify.
     * @member {IConnectionNotification|null|undefined} connectionNotify
     * @memberof Response
     * @instance
     */
    Response.prototype.connectionNotify = null;

    /**
     * Response heartbeatResponse.
     * @member {IHeartbeatResponse|null|undefined} heartbeatResponse
     * @memberof Response
     * @instance
     */
    Response.prototype.heartbeatResponse = null;

    /**
     * Response presetUpdateResponse.
     * @member {IPresetUpdateResponse|null|undefined} presetUpdateResponse
     * @memberof Response
     * @instance
     */
    Response.prototype.presetUpdateResponse = null;

    /**
     * Response toastNotify.
     * @member {IToastNotification|null|undefined} toastNotify
     * @memberof Response
     * @instance
     */
    Response.prototype.toastNotify = null;

    /**
     * Creates a new Response instance using the specified properties.
     * @function create
     * @memberof Response
     * @static
     * @param {IResponse=} [properties] Properties to set
     * @returns {Response} Response instance
     */
    Response.create = function create(properties) {
        return new Response(properties);
    };

    /**
     * Encodes the specified Response message. Does not implicitly {@link Response.verify|verify} messages.
     * @function encode
     * @memberof Response
     * @static
     * @param {IResponse} message Response message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Response.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.hasDeviceInfoNotify != null && Object.hasOwnProperty.call(message, "hasDeviceInfoNotify"))
            writer.uint32(/* id 1, wireType 0 =*/8).bool(message.hasDeviceInfoNotify);
        if (message.hasValueChangeNotify != null && Object.hasOwnProperty.call(message, "hasValueChangeNotify"))
            writer.uint32(/* id 2, wireType 0 =*/16).bool(message.hasValueChangeNotify);
        if (message.hasControlResponse != null && Object.hasOwnProperty.call(message, "hasControlResponse"))
            writer.uint32(/* id 3, wireType 0 =*/24).bool(message.hasControlResponse);
        if (message.hasConnectionNotify != null && Object.hasOwnProperty.call(message, "hasConnectionNotify"))
            writer.uint32(/* id 4, wireType 0 =*/32).bool(message.hasConnectionNotify);
        if (message.hasHeartbeatResponse != null && Object.hasOwnProperty.call(message, "hasHeartbeatResponse"))
            writer.uint32(/* id 5, wireType 0 =*/40).bool(message.hasHeartbeatResponse);
        if (message.hasPresetUpdateResponse != null && Object.hasOwnProperty.call(message, "hasPresetUpdateResponse"))
            writer.uint32(/* id 6, wireType 0 =*/48).bool(message.hasPresetUpdateResponse);
        if (message.hasToastNotify != null && Object.hasOwnProperty.call(message, "hasToastNotify"))
            writer.uint32(/* id 7, wireType 0 =*/56).bool(message.hasToastNotify);
        if (message.deviceInfoNotify != null && Object.hasOwnProperty.call(message, "deviceInfoNotify"))
            $root.DeviceInfoNotification.encode(message.deviceInfoNotify, writer.uint32(/* id 10, wireType 2 =*/82).fork()).ldelim();
        if (message.valueChangeNotify != null && Object.hasOwnProperty.call(message, "valueChangeNotify"))
            $root.ValueChangeNotification.encode(message.valueChangeNotify, writer.uint32(/* id 11, wireType 2 =*/90).fork()).ldelim();
        if (message.controlResponse != null && Object.hasOwnProperty.call(message, "controlResponse"))
            $root.ControlResponse.encode(message.controlResponse, writer.uint32(/* id 12, wireType 2 =*/98).fork()).ldelim();
        if (message.connectionNotify != null && Object.hasOwnProperty.call(message, "connectionNotify"))
            $root.ConnectionNotification.encode(message.connectionNotify, writer.uint32(/* id 13, wireType 2 =*/106).fork()).ldelim();
        if (message.heartbeatResponse != null && Object.hasOwnProperty.call(message, "heartbeatResponse"))
            $root.HeartbeatResponse.encode(message.heartbeatResponse, writer.uint32(/* id 14, wireType 2 =*/114).fork()).ldelim();
        if (message.presetUpdateResponse != null && Object.hasOwnProperty.call(message, "presetUpdateResponse"))
            $root.PresetUpdateResponse.encode(message.presetUpdateResponse, writer.uint32(/* id 15, wireType 2 =*/122).fork()).ldelim();
        if (message.toastNotify != null && Object.hasOwnProperty.call(message, "toastNotify"))
            $root.ToastNotification.encode(message.toastNotify, writer.uint32(/* id 16, wireType 2 =*/130).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified Response message, length delimited. Does not implicitly {@link Response.verify|verify} messages.
     * @function encodeDelimited
     * @memberof Response
     * @static
     * @param {IResponse} message Response message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Response.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a Response message from the specified reader or buffer.
     * @function decode
     * @memberof Response
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {Response} Response
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Response.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.Response();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.hasDeviceInfoNotify = reader.bool();
                    break;
                }
            case 2: {
                    message.hasValueChangeNotify = reader.bool();
                    break;
                }
            case 3: {
                    message.hasControlResponse = reader.bool();
                    break;
                }
            case 4: {
                    message.hasConnectionNotify = reader.bool();
                    break;
                }
            case 5: {
                    message.hasHeartbeatResponse = reader.bool();
                    break;
                }
            case 6: {
                    message.hasPresetUpdateResponse = reader.bool();
                    break;
                }
            case 7: {
                    message.hasToastNotify = reader.bool();
                    break;
                }
            case 10: {
                    message.deviceInfoNotify = $root.DeviceInfoNotification.decode(reader, reader.uint32());
                    break;
                }
            case 11: {
                    message.valueChangeNotify = $root.ValueChangeNotification.decode(reader, reader.uint32());
                    break;
                }
            case 12: {
                    message.controlResponse = $root.ControlResponse.decode(reader, reader.uint32());
                    break;
                }
            case 13: {
                    message.connectionNotify = $root.ConnectionNotification.decode(reader, reader.uint32());
                    break;
                }
            case 14: {
                    message.heartbeatResponse = $root.HeartbeatResponse.decode(reader, reader.uint32());
                    break;
                }
            case 15: {
                    message.presetUpdateResponse = $root.PresetUpdateResponse.decode(reader, reader.uint32());
                    break;
                }
            case 16: {
                    message.toastNotify = $root.ToastNotification.decode(reader, reader.uint32());
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a Response message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof Response
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {Response} Response
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Response.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a Response message.
     * @function verify
     * @memberof Response
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    Response.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.hasDeviceInfoNotify != null && message.hasOwnProperty("hasDeviceInfoNotify"))
            if (typeof message.hasDeviceInfoNotify !== "boolean")
                return "hasDeviceInfoNotify: boolean expected";
        if (message.hasValueChangeNotify != null && message.hasOwnProperty("hasValueChangeNotify"))
            if (typeof message.hasValueChangeNotify !== "boolean")
                return "hasValueChangeNotify: boolean expected";
        if (message.hasControlResponse != null && message.hasOwnProperty("hasControlResponse"))
            if (typeof message.hasControlResponse !== "boolean")
                return "hasControlResponse: boolean expected";
        if (message.hasConnectionNotify != null && message.hasOwnProperty("hasConnectionNotify"))
            if (typeof message.hasConnectionNotify !== "boolean")
                return "hasConnectionNotify: boolean expected";
        if (message.hasHeartbeatResponse != null && message.hasOwnProperty("hasHeartbeatResponse"))
            if (typeof message.hasHeartbeatResponse !== "boolean")
                return "hasHeartbeatResponse: boolean expected";
        if (message.hasPresetUpdateResponse != null && message.hasOwnProperty("hasPresetUpdateResponse"))
            if (typeof message.hasPresetUpdateResponse !== "boolean")
                return "hasPresetUpdateResponse: boolean expected";
        if (message.hasToastNotify != null && message.hasOwnProperty("hasToastNotify"))
            if (typeof message.hasToastNotify !== "boolean")
                return "hasToastNotify: boolean expected";
        if (message.deviceInfoNotify != null && message.hasOwnProperty("deviceInfoNotify")) {
            let error = $root.DeviceInfoNotification.verify(message.deviceInfoNotify);
            if (error)
                return "deviceInfoNotify." + error;
        }
        if (message.valueChangeNotify != null && message.hasOwnProperty("valueChangeNotify")) {
            let error = $root.ValueChangeNotification.verify(message.valueChangeNotify);
            if (error)
                return "valueChangeNotify." + error;
        }
        if (message.controlResponse != null && message.hasOwnProperty("controlResponse")) {
            let error = $root.ControlResponse.verify(message.controlResponse);
            if (error)
                return "controlResponse." + error;
        }
        if (message.connectionNotify != null && message.hasOwnProperty("connectionNotify")) {
            let error = $root.ConnectionNotification.verify(message.connectionNotify);
            if (error)
                return "connectionNotify." + error;
        }
        if (message.heartbeatResponse != null && message.hasOwnProperty("heartbeatResponse")) {
            let error = $root.HeartbeatResponse.verify(message.heartbeatResponse);
            if (error)
                return "heartbeatResponse." + error;
        }
        if (message.presetUpdateResponse != null && message.hasOwnProperty("presetUpdateResponse")) {
            let error = $root.PresetUpdateResponse.verify(message.presetUpdateResponse);
            if (error)
                return "presetUpdateResponse." + error;
        }
        if (message.toastNotify != null && message.hasOwnProperty("toastNotify")) {
            let error = $root.ToastNotification.verify(message.toastNotify);
            if (error)
                return "toastNotify." + error;
        }
        return null;
    };

    /**
     * Creates a Response message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof Response
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {Response} Response
     */
    Response.fromObject = function fromObject(object) {
        if (object instanceof $root.Response)
            return object;
        let message = new $root.Response();
        if (object.hasDeviceInfoNotify != null)
            message.hasDeviceInfoNotify = Boolean(object.hasDeviceInfoNotify);
        if (object.hasValueChangeNotify != null)
            message.hasValueChangeNotify = Boolean(object.hasValueChangeNotify);
        if (object.hasControlResponse != null)
            message.hasControlResponse = Boolean(object.hasControlResponse);
        if (object.hasConnectionNotify != null)
            message.hasConnectionNotify = Boolean(object.hasConnectionNotify);
        if (object.hasHeartbeatResponse != null)
            message.hasHeartbeatResponse = Boolean(object.hasHeartbeatResponse);
        if (object.hasPresetUpdateResponse != null)
            message.hasPresetUpdateResponse = Boolean(object.hasPresetUpdateResponse);
        if (object.hasToastNotify != null)
            message.hasToastNotify = Boolean(object.hasToastNotify);
        if (object.deviceInfoNotify != null) {
            if (typeof object.deviceInfoNotify !== "object")
                throw TypeError(".Response.deviceInfoNotify: object expected");
            message.deviceInfoNotify = $root.DeviceInfoNotification.fromObject(object.deviceInfoNotify);
        }
        if (object.valueChangeNotify != null) {
            if (typeof object.valueChangeNotify !== "object")
                throw TypeError(".Response.valueChangeNotify: object expected");
            message.valueChangeNotify = $root.ValueChangeNotification.fromObject(object.valueChangeNotify);
        }
        if (object.controlResponse != null) {
            if (typeof object.controlResponse !== "object")
                throw TypeError(".Response.controlResponse: object expected");
            message.controlResponse = $root.ControlResponse.fromObject(object.controlResponse);
        }
        if (object.connectionNotify != null) {
            if (typeof object.connectionNotify !== "object")
                throw TypeError(".Response.connectionNotify: object expected");
            message.connectionNotify = $root.ConnectionNotification.fromObject(object.connectionNotify);
        }
        if (object.heartbeatResponse != null) {
            if (typeof object.heartbeatResponse !== "object")
                throw TypeError(".Response.heartbeatResponse: object expected");
            message.heartbeatResponse = $root.HeartbeatResponse.fromObject(object.heartbeatResponse);
        }
        if (object.presetUpdateResponse != null) {
            if (typeof object.presetUpdateResponse !== "object")
                throw TypeError(".Response.presetUpdateResponse: object expected");
            message.presetUpdateResponse = $root.PresetUpdateResponse.fromObject(object.presetUpdateResponse);
        }
        if (object.toastNotify != null) {
            if (typeof object.toastNotify !== "object")
                throw TypeError(".Response.toastNotify: object expected");
            message.toastNotify = $root.ToastNotification.fromObject(object.toastNotify);
        }
        return message;
    };

    /**
     * Creates a plain object from a Response message. Also converts values to other types if specified.
     * @function toObject
     * @memberof Response
     * @static
     * @param {Response} message Response
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    Response.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.defaults) {
            object.hasDeviceInfoNotify = false;
            object.hasValueChangeNotify = false;
            object.hasControlResponse = false;
            object.hasConnectionNotify = false;
            object.hasHeartbeatResponse = false;
            object.hasPresetUpdateResponse = false;
            object.hasToastNotify = false;
            object.deviceInfoNotify = null;
            object.valueChangeNotify = null;
            object.controlResponse = null;
            object.connectionNotify = null;
            object.heartbeatResponse = null;
            object.presetUpdateResponse = null;
            object.toastNotify = null;
        }
        if (message.hasDeviceInfoNotify != null && message.hasOwnProperty("hasDeviceInfoNotify"))
            object.hasDeviceInfoNotify = message.hasDeviceInfoNotify;
        if (message.hasValueChangeNotify != null && message.hasOwnProperty("hasValueChangeNotify"))
            object.hasValueChangeNotify = message.hasValueChangeNotify;
        if (message.hasControlResponse != null && message.hasOwnProperty("hasControlResponse"))
            object.hasControlResponse = message.hasControlResponse;
        if (message.hasConnectionNotify != null && message.hasOwnProperty("hasConnectionNotify"))
            object.hasConnectionNotify = message.hasConnectionNotify;
        if (message.hasHeartbeatResponse != null && message.hasOwnProperty("hasHeartbeatResponse"))
            object.hasHeartbeatResponse = message.hasHeartbeatResponse;
        if (message.hasPresetUpdateResponse != null && message.hasOwnProperty("hasPresetUpdateResponse"))
            object.hasPresetUpdateResponse = message.hasPresetUpdateResponse;
        if (message.hasToastNotify != null && message.hasOwnProperty("hasToastNotify"))
            object.hasToastNotify = message.hasToastNotify;
        if (message.deviceInfoNotify != null && message.hasOwnProperty("deviceInfoNotify"))
            object.deviceInfoNotify = $root.DeviceInfoNotification.toObject(message.deviceInfoNotify, options);
        if (message.valueChangeNotify != null && message.hasOwnProperty("valueChangeNotify"))
            object.valueChangeNotify = $root.ValueChangeNotification.toObject(message.valueChangeNotify, options);
        if (message.controlResponse != null && message.hasOwnProperty("controlResponse"))
            object.controlResponse = $root.ControlResponse.toObject(message.controlResponse, options);
        if (message.connectionNotify != null && message.hasOwnProperty("connectionNotify"))
            object.connectionNotify = $root.ConnectionNotification.toObject(message.connectionNotify, options);
        if (message.heartbeatResponse != null && message.hasOwnProperty("heartbeatResponse"))
            object.heartbeatResponse = $root.HeartbeatResponse.toObject(message.heartbeatResponse, options);
        if (message.presetUpdateResponse != null && message.hasOwnProperty("presetUpdateResponse"))
            object.presetUpdateResponse = $root.PresetUpdateResponse.toObject(message.presetUpdateResponse, options);
        if (message.toastNotify != null && message.hasOwnProperty("toastNotify"))
            object.toastNotify = $root.ToastNotification.toObject(message.toastNotify, options);
        return object;
    };

    /**
     * Converts this Response to JSON.
     * @function toJSON
     * @memberof Response
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    Response.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for Response
     * @function getTypeUrl
     * @memberof Response
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    Response.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/Response";
    };

    return Response;
})();

export { $root as default };
