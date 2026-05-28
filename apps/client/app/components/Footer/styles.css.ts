import { style } from '@vanilla-extract/css';
import { vars } from '~/styles/global.css';

export const footer = style({
  position: 'fixed',
  display: 'flex',
  width: '100%',
  height: '5.9rem',
  padding: '1rem 4rem',
  alignItems: 'center',
  justifyContent: 'space-between',
  background: 'rgba(0, 0, 0, 0.10)',
  backdropFilter: 'blur(2px)',
  bottom: 0,
  left: 0,
  right: 0,
  zIndex: 10,
  transform: 'translateY(0)',
  transition: 'transform 0.3s ease-in-out',
});

export const visible = style({
  transform: 'translateY(0)',
});

export const hidden = style({
  transform: 'translateY(100%)',
});

export const linkSection = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '1.5rem',
});

export const linkList = style({
  display: 'flex',
  gap: '3.2rem',
  alignItems: 'center',
  listStyleType: 'none',
});

export const linkItem = style({
  display: 'flex',
  width: 'fit-content',
  alignItems: 'center',
});

export const link = style({
  fontSize: '1.6rem',
  fontWeight: 400,
  lineHeight: '120%',
  textDecoration: 'none',
});

export const period = style({
  width: 'fit-content',
  color: vars.themeColor.color.neutral_2,
  fontSize: '1.6rem',
  fontWeight: 400,
  lineHeight: '120%',
  whiteSpace: 'nowrap',
});
