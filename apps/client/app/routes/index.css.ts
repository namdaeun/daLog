import { style } from '@vanilla-extract/css';
import { breakpoints } from '~/styles/breakpoints';
import { vars } from '~/styles/global.css';

export const pageWrapper = style({
  display: 'flex',
  height: '100%',
  flexDirection: 'column',
  gap: '6rem',
  overflow: 'hidden',
  position: 'relative',
});

export const progressRail = style({
  position: 'fixed',
  top: '11rem',
  bottom: '8rem',
  right: '1.2rem',
  width: '4px',
  background: 'rgba(255,255,255,0.08)',
  borderRadius: '99px',
  zIndex: 20,
  pointerEvents: 'none',

  '@media': {
    [breakpoints.TABLET_MAX]: {
      right: '0.8rem',
      width: '3px',
    },
    [breakpoints.MOBILE_MAX]: {
      display: 'none',
    },
  },
});

export const progressLine = style({
  width: '100%',
  height: '100%',
  borderRadius: '99px',
  transformOrigin: 'top',
  background: `linear-gradient(180deg, ${vars.themeColor.color.neutral_1} 0%, ${vars.themeColor.color.neutral_2} 100%)`,
  boxShadow: `0 0 12px ${vars.themeColor.color.neutral_3}`,
});
