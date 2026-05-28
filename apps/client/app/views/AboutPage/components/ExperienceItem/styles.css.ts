import { style } from '@vanilla-extract/css';
import { breakpoints } from '~/styles/breakpoints';
import { vars } from '~/styles/global.css';

export const wrapper = style({
  display: 'flex',
  flexDirection: 'column',
  maxWidth: '91rem',
  padding: '3.2rem 3.2rem 4.8rem 3.2rem',
  justifyContent: 'center',
  gap: '3.2rem',
  borderRadius: '2rem',
  backgroundColor: vars.themeColor.color.neutral_5,
  border: `1px solid ${vars.themeColor.color.neutral_4}`,

  ':hover': {
    backgroundColor: vars.themeColor.color.neutral_4,
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
  },
});

export const logo = style({
  width: '100%',
  height: '20rem',
  objectFit: 'cover',
  borderRadius: '1.2rem',
});

export const contentLayout = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  gap: '1.6rem',

  '@media': {
    [breakpoints.TABLET_MAX]: {
      gap: '1.2rem',
      alignItems: 'center',
      justifyContent: 'start',
    },
    [breakpoints.MOBILE_MAX]: {
      gap: '0.8rem',
      alignItems: 'center',
      justifyContent: 'start',
    },
  },
});

export const titleLayout = style({
  display: 'flex',
  alignItems: 'center',
  gap: '1.2rem',
  whiteSpace: 'nowrap',

  '@media': {
    [breakpoints.TABLET_MAX]: {
      whiteSpace: 'wrap',
    },
    [breakpoints.MOBILE_MAX]: {
      whiteSpace: 'wrap',
    },
  },
});

export const position = style({
  width: 'max-content',
  color: vars.themeColor.color.neutral_1,
  fontSize: '3.2rem',
  fontWeight: 500,
  lineHeight: '120%',
});

export const descriptionList = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'start',
});

export const description = style({
  color: vars.themeColor.color.neutral_3,
  fontSize: '1.6rem',
  fontWeight: 400,
  listStyle: 'inside',
  lineHeight: '140%',
});

export const date = style({
  fontSize: '2.4rem',
  fontWeight: 500,
  color: vars.themeColor.color.neutral_2,
});
