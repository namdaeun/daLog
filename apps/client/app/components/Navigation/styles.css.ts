import { style } from '@vanilla-extract/css';
import { vars } from '~/styles/global.css';

export const navigation = style({
  display: 'flex',
  width: 'fit-content',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '1rem 1.8rem',
  gap: '1rem',
  borderRadius: '9.9rem',
  backgroundColor: vars.themeColor.color.neutral_5,
});

export const link = style({
  width: 'fit-content',
  textDecoration: 'none',
  color: vars.themeColor.color.neutral_1,
  fontSize: '1.6rem',
  fontWeight: 400,
  lineHeight: '120%',
});
