import { style } from '@vanilla-extract/css';
import { breakpoints } from '~/styles/breakpoints';
import { vars } from '~/styles/global.css';

export const wrapper = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '6rem',
  padding: '12rem 0',
  minHeight: '100vh',
  scrollSnapAlign: 'start',
  width: '100%',

  '@media': {
    [breakpoints.TABLET_MAX]: {
      padding: '8rem 0',
      gap: '4rem',
    },
    [breakpoints.MOBILE_MAX]: {
      padding: '6rem 0',
      gap: '3rem',
    },
  },
});

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '6rem',
  maxWidth: '140rem',
  margin: '0 auto',
  padding: '0 6rem',

  '@media': {
    [breakpoints.TABLET_MAX]: {
      padding: '0 4rem',
      gap: '4rem',
    },
    [breakpoints.MOBILE_MAX]: {
      padding: '0 2rem',
      gap: '3rem',
    },
  },
});

export const titleWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '1.6rem',

  '@media': {
    [breakpoints.TABLET_MAX]: {
      gap: '1.2rem',
    },
  },
});

export const description = style({
  textAlign: 'center',
  fontSize: '1.8rem',
  fontWeight: 400,
  lineHeight: '1.6',
  letterSpacing: '-0.01em',
  color: vars.themeColor.color.description,
  marginTop: '0.8rem',

  '@media': {
    [breakpoints.TABLET_MAX]: {
      fontSize: '1.6rem',
    },
    [breakpoints.MOBILE_MAX]: {
      fontSize: '1.4rem',
    },
  },
});

export const experienceList = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '2.8rem',

  '@media': {
    [breakpoints.TABLET_MAX]: {
      gap: '2.4rem',
    },
    [breakpoints.MOBILE_MAX]: {
      gap: '2rem',
    },
  },
});
