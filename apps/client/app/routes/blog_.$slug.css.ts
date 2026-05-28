import { style } from '@vanilla-extract/css';
import { vars } from '~/styles/global.css';

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '3.2rem',
  padding: '10rem 4rem',
  maxWidth: '100rem',
  margin: '0 auto',
});

export const header = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '3rem',
  borderBottom: `1px solid ${vars.themeColor.color.border}`,
  paddingBottom: '2.4rem',
});

export const backLink = style({
  display: 'flex',
  alignItems: 'center',
  gap: '0.4rem',
  fontSize: '1.4rem',
  color: vars.themeColor.color.description,
  textDecoration: 'none',
  width: 'fit-content',
  ':hover': {
    color: vars.themeColor.color.font,
  },
});

export const thumbnail = style({
  width: '100%',
  height: '45rem',
  borderRadius: '1rem',
  objectFit: 'cover',
});

export const title = style({
  fontSize: '3rem',
  fontWeight: 'bold',
  lineHeight: '1.3',
});

export const meta = style({
  display: 'flex',
  alignItems: 'center',
  gap: '1.2rem',
});

export const date = style({
  fontSize: '1.4rem',
  color: vars.themeColor.color.description,
});
