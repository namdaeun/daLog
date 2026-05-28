import { style } from '@vanilla-extract/css';
import { breakpoints } from '~/styles/breakpoints';
import { vars } from '~/styles/global.css';

export const wrapper = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  marginTop: '5rem',
  padding: '10rem 6rem',
  height: 'calc(100vh - 15rem)',
  gap: '5rem',
  scrollSnapAlign: 'start',
  maxWidth: '120rem',
  margin: '5rem auto 0',

  '@media': {
    [breakpoints.TABLET_MAX]: {
      padding: '8rem 4rem',
      gap: '3.5rem',
      height: 'auto',
      minHeight: 'calc(100vh - 20rem)',
    },
    [breakpoints.MOBILE_MAX]: {
      padding: '6rem 2rem',
      gap: '2.5rem',
    },
  },
});

export const titleWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  marginBottom: '2rem',
  width: 'fit-content',

  '@media': {
    [breakpoints.TABLET_MAX]: {
      gap: '1.2rem',
      marginBottom: '1.5rem',
    },
  },
});

export const title = style({
  color: vars.themeColor.color.neutral_3,
  fontSize: '4.8rem',
  fontWeight: '500',
  lineHeight: '160%',

  '@media': {
    [breakpoints.TABLET_MAX]: {
      fontSize: '4.8rem',
    },
    [breakpoints.MOBILE_MAX]: {
      fontSize: '3.2rem',
    },
  },
});

export const subTitle = style({
  color: vars.themeColor.color.neutral_3,
  fontSize: '4.8rem',
  fontWeight: '500',
  lineHeight: '160%',
  wordBreak: 'keep-all',

  '@media': {
    [breakpoints.TABLET_MAX]: {
      fontSize: '4.8rem',
    },
    [breakpoints.MOBILE_MAX]: {
      fontSize: '3.2rem',
    },
  },
});

export const name = style({
  color: vars.themeColor.color.neutral_1,
  fontSize: '4.8rem',
  fontWeight: '500',
  lineHeight: '160%',
  wordBreak: 'keep-all',

  '@media': {
    [breakpoints.TABLET_MAX]: {
      fontSize: '4.8rem',
    },
    [breakpoints.MOBILE_MAX]: {
      fontSize: '3.2rem',
    },
  },
});

export const description = style({
  marginTop: '2.4rem',
  whiteSpace: 'pre-line',
  color: vars.themeColor.color.neutral_3,
  fontSize: '2rem',
  fontWeight: '500',
  lineHeight: '160%',
  wordBreak: 'keep-all',
});
