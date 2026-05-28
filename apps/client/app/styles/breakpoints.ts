export const TABLET_WIDTH = 960;
export const MOBILE_WIDTH = 480;

export const breakpoints = {
  TABLET_MAX: `screen and (max-width: ${TABLET_WIDTH}px)`,
  MOBILE_MAX: `screen and (max-width: ${MOBILE_WIDTH}px)`,
} as const;
