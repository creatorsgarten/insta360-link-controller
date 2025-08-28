import { atom } from "nanostores";

export type ProtocolVersion = "v1" | "v2";

// Default to v2 as requested
export const $protocolVersion = atom<ProtocolVersion>("v2");

// Parameter mapping from v1 to v2 based on migration document
export const PARAM_MAPPING_V1_TO_V2: Record<number, number> = {
  1: 4,   // PARAM_ZOOM
  2: 22,  // PARAM_BRIGHTNESS  
  3: 23,  // PARAM_CONTRAST
  4: 24,  // PARAM_SATURATION
  5: 25,  // PARAM_SHARPNESS
  6: 21,  // PARAM_WHITE_BALANCE_TEMP
  7: 100, // PARAM_ROLL
  11: 101, // PARAM_PAN_TILT_ABSOLUTE
  12: 102, // PARAM_PAN_TILT_RELATIVE
  15: 103, // PARAM_PRESET_POSITION
};

// Reverse mapping for v2 to v1
export const PARAM_MAPPING_V2_TO_V1: Record<number, number> = Object.fromEntries(
  Object.entries(PARAM_MAPPING_V1_TO_V2).map(([v1, v2]) => [v2, Number(v1)])
);
