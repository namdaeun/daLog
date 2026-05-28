import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';
import { colors } from '~/styles/colors';

export const backgroundStyle = recipe({
  base: {
    position: 'relative',
    minWidth: '6.4rem',
    maxWidth: '6.4rem',
    height: '3.6rem',
    padding: '0.4rem',
    borderRadius: '9.9rem',
    transition: 'all 0.2s ease',
    cursor: 'pointer',
  },

  variants: {
    mode: {
      light: {
        backgroundColor: colors.blue,
      },
      dark: {
        backgroundColor: colors.neutral_700,
      },
    },
  },
});

export const switchStyle = style({
  position: 'absolute',
  top: '0.1rem',
  left: '0.6rem',
  width: '2.8rem',
  height: '2.8rem',
  padding: '0.7rem',
  borderRadius: '50%',
  border: 'none',
  transition: 'all 0.2s ease',
  transform: 'translateX(-0.4rem)',
  backgroundColor: colors.neutral_white,
  appearance: 'none',
  cursor: 'pointer',

  ':checked': {
    transform: 'translateX(2rem)',
  },
});

export const iconStyle = recipe({
  base: {
    position: 'absolute',
    width: '1.4rem',
    height: '1.4rem',
    top: '1.1rem',
    left: '1.6rem',
    pointerEvents: 'none',
    transition: 'all 0.2s ease',
  },
  variants: {
    mode: {
      light: {
        transform: 'translateX(2.1rem)',
      },
      dark: {
        transform: 'translateX(-0.3rem)',
      },
    },
  },
});
