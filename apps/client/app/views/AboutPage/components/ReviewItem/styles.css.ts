import { style } from '@vanilla-extract/css';
import { breakpoints } from '~/styles/breakpoints';
import { colors } from '~/styles/colors';
import { darkTheme, vars } from '~/styles/global.css';

export const wrapper = style({
  display: 'flex',
  flexDirection: 'column',
  width: '30rem',
  height: '53rem',
  alignItems: 'flex-start',
  justifyContent: 'center',

  selectors: {
    '&:last-child': {
      justifyContent: 'flex-start',
    },
  },
  gap: '2rem',
  padding: '6rem 3.2rem 4.8rem 3.2rem',
  borderRadius: '1.6rem',
  backgroundColor: vars.themeColor.color.neutral_5,
  border: `1px solid ${vars.themeColor.color.neutral_4}`,
  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',

  ':hover': {
    backgroundColor: vars.themeColor.color.neutral_4,
  },

  '@media': {
    [breakpoints.TABLET_MAX]: {
      width: '30rem',
    },
    [breakpoints.MOBILE_MAX]: {
      width: '30rem',
    },
  },
});

export const icon = style({
  width: '4.8rem',
  fontSize: '4.8rem',
  color: colors.neutral_500,
  transition: 'all 0.3s ease',
  alignSelf: 'flex-start',

  '@media': {
    [breakpoints.TABLET_MAX]: {
      width: '4.4rem',
    },
    [breakpoints.MOBILE_MAX]: {
      width: '4rem',
    },
  },

  selectors: {
    [`${darkTheme} &`]: {
      color: colors.neutral_600,
    },
  },
});

export const description = style({
  fontSize: '1.8rem',
  fontWeight: 400,
  color: vars.themeColor.color.neutral_1,
  lineHeight: '140%',
  wordBreak: 'keep-all',
  whiteSpace: 'pre-line',
});

export const infoLayout = style({
  display: 'flex',
  width: '100%',
  flexDirection: 'column',
  textAlign: 'left',
  gap: '0.8rem',
  marginTop: 'auto',

  '@media': {
    [breakpoints.TABLET_MAX]: {
      gap: '0.6rem',
    },
    [breakpoints.MOBILE_MAX]: {
      gap: '0.4rem',
    },
  },
});

export const name = style({
  fontSize: '2.3rem',
  fontWeight: 500,
  lineHeight: '120%',
  color: vars.themeColor.color.neutral_1,

  '@media': {
    [breakpoints.TABLET_MAX]: {
      fontSize: '1.8rem',
    },
    [breakpoints.MOBILE_MAX]: {
      fontSize: '1.6rem',
    },
  },
});

export const info = style({
  fontSize: '1.8rem',
  fontWeight: 500,
  lineHeight: '120%',
  wordBreak: 'keep-all',
  color: vars.themeColor.color.neutral_2,

  '@media': {
    [breakpoints.MOBILE_MAX]: {
      fontSize: '1.3rem',
      lineHeight: '1.8rem',
    },
  },
});
