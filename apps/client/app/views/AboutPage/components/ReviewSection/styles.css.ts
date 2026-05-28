import { style } from '@vanilla-extract/css';
import { breakpoints } from '~/styles/breakpoints';

export const wrapper = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '6rem',
  padding: '12rem 6rem 10rem 6rem',
  minHeight: '100vh',
  scrollSnapAlign: 'start',
  justifyContent: 'center',
  // maxWidth: '140rem',
  margin: '0 auto',

  '@media': {
    [breakpoints.TABLET_MAX]: {
      padding: '8rem 4rem 12rem 4rem',
      gap: '4rem',
    },
    [breakpoints.MOBILE_MAX]: {
      padding: '6rem 2rem 8rem 2rem',
      gap: '3rem',
    },
  },
});

export const reviewListLayout = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 30rem)',
  justifyContent: 'center',
  gap: '2rem',

  '@media': {
    [breakpoints.TABLET_MAX]: {
      gridTemplateColumns: 'repeat(2, 30rem)',
    },
    [breakpoints.MOBILE_MAX]: {
      gridTemplateColumns: 'repeat(1, 30rem)',
    },
  },
});
