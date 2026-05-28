import { recipe } from '@vanilla-extract/recipes';
import { colors } from '~/styles/colors';

export const backgroundStyle = recipe({
  base: {
    display: 'flex',
    width: 'fit-content',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '0.8rem',
    backgroundColor: colors.blue_alpha,
    transition: 'all 0.2s ease',
  },
  variants: {
    size: {
      sm: {
        padding: '0.6rem 1rem',
      },
      lg: {
        padding: '0.8rem 1.2rem',
      },
    },
  },
});

export const textStyle = recipe({
  base: {
    color: colors.blue,
    fontWeight: 400,
    lineHeight: '120%',
    whiteSpace: 'nowrap',
  },
  variants: {
    size: {
      sm: {
        fontSize: '1.3rem',
      },
      lg: {
        fontSize: '2rem',
      },
    },
  },
});
