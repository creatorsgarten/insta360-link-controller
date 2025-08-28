# Insta360 Link Controller Protocol Changes (v1.4.1 to v2.0)

## Overview
The Insta360 Link Controller protocol has undergone significant changes between version 1.4.1 and version 2.0. These changes affect how commands are sent to the camera and may explain why existing code no longer works.

## Major Changes

### 1. ParamType Enum Restructuring

The ParamType enum has been completely reorganized. The numbering scheme has changed significantly:

#### Old v1.4.1 Values:
- PARAM_ZOOM = 1
- PARAM_BRIGHTNESS = 2
- PARAM_CONTRAST = 3
- ... (sequential numbering)

#### New v2.0 Values:
The enum now has two ranges:
- Values 1-52 for newer parameters
- Values 100-108 for what appear to be legacy/important parameters

Key mapping changes:
- PARAM_ZOOM: 1 → 4
- PARAM_BRIGHTNESS: 2 → 22
- PARAM_CONTRAST: 3 → 23
- PARAM_SATURATION: 4 → 24
- PARAM_SHARPNESS: 5 → 25
- PARAM_WHITE_BALANCE_TEMP: 6 → 21
- PARAM_ROLL: 7 → 100
- PARAM_PAN_TILT_ABSOLUTE: 11 → 101
- PARAM_PAN_TILT_RELATIVE: 12 → 102
- PARAM_PRESET_POSITION: 15 → 103

### 2. New Parameters Added

Many new parameters have been added in v2:
- Virtual background controls (blur, replace)
- Gesture controls
- Image filters and presets
- Fine tuning controls
- Privacy mode settings
- Screen lock features

### 3. VideoModeType Extended

New video modes added:
- AUTOFRAMEING_MODE = 7 (Note: typo in original)
- SMARTWHITEBOARD_MODE = 8
- REGIONALTRACK_MODE = 9
- SMARTWHITEBOARD_QUERY = 10
- SMARTWHITEBOARD_CONFIG = 11

### 4. New Message Types

- `ImageParamPresetUpdateRequest` / `ImageParamPresetUpdateResponse`
- `ImageParamPreset` and `ImageFilter` for image parameter management
- Extended `PTZParam` with additional fields

### 5. DeviceSettingInfo Expanded

The DeviceSettingInfo message now includes many more fields for:
- Image parameter presets
- Image filters
- Virtual camera support
- Gesture controls
- Privacy settings
- Fine tuning values

## Migration Guide

To update your code from v1.4.1 to v2.0:

1. **Update ParamType values**: All parameter type values have changed. Update your constants to use the new values.

2. **Handle new fields**: The response messages may contain new fields that need to be handled.

3. **Check for typos**: The protocol contains several typos (PATAM_PTZ_HOST, AUTI_FLICK, etc.) that must be used exactly as specified.

4. **Test incrementally**: Start with basic commands like zoom and pan/tilt to verify connectivity before moving to more complex features.

## Common Issues

1. **Commands not working**: Most likely due to using old ParamType values. For example, sending PARAM_ZOOM=1 will now be interpreted as PARAM_MIRROR_VER.

2. **Connection issues**: The protocol handshake may have changed. Ensure you're handling the new message types in responses.

3. **Feature availability**: Some features may be camera model-specific (Link vs PUC2 vs PUC3).

## Recommendations

1. Use the new protobuf schema (`insta360linkcontroller_v2.proto`) to regenerate your protocol buffer classes.
2. Create a mapping table for converting old parameter values to new ones if maintaining backward compatibility.
3. Implement proper error handling for unknown message types and parameters.
4. Test thoroughly with the actual camera hardware as the protocol may have undocumented behaviors.
