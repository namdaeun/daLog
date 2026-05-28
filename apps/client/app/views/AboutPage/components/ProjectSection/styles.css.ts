import { style } from '@vanilla-extract/css';
import { breakpoints } from '~/styles/breakpoints';
import { vars } from '~/styles/global.css';

export const wrapper = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '6rem',
  padding: '12rem 6rem',
  minHeight: '100vh',
  scrollSnapAlign: 'start',
  maxWidth: '140rem',
  margin: '0 auto',

  '@media': {
    [breakpoints.TABLET_MAX]: {
      padding: '8rem 4rem',
      gap: '4rem',
    },
    [breakpoints.MOBILE_MAX]: {
      padding: '6rem 2rem',
      gap: '3rem',
    },
  },
});

export const titleWrapper = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  gap: '1.6rem',

  '@media': {
    [breakpoints.TABLET_MAX]: {
      gap: '1.2rem',
    },
  },
});

export const description = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  fontSize: '1.8rem',
  fontWeight: 400,
  lineHeight: '1.6',
  letterSpacing: '-0.01em',
  color: vars.themeColor.color.description,
  textAlign: 'center',
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

export const projectsContainer = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  gap: '4rem',
  width: '100%',

  '@media': {
    [breakpoints.TABLET_MAX]: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
    },
    [breakpoints.MOBILE_MAX]: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
    },
  },
});
