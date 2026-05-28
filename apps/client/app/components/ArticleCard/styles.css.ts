import { style } from '@vanilla-extract/css';
import { vars } from '~/styles/global.css';

export const articleStyle = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  width: '100%',
  maxWidth: '35rem',
  height: '35rem',
  padding: '2rem',
  gap: '2.4rem',
  border: `1px solid ${vars.themeColor.color.neutral_4}`,
  borderRadius: '2rem',
  backgroundColor: `${vars.themeColor.color.neutral_5}`,
  cursor: 'pointer',

  ':hover': {
    borderColor: `${vars.themeColor.color.neutral_4}`,
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
  },
});

export const imgStyle = style({
  width: '100%',
  height: '20rem',
  borderRadius: '1rem',
  objectFit: 'cover',
});

export const contentStyle = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  gap: '1.6rem',
});

export const titleStyle = style({
  fontSize: '2rem',
  fontWeight: 500,
  lineHeight: '120%',
  wordBreak: 'keep-all',
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
});

export const tagContainer = style({
  display: 'flex',
  gap: '0.8rem',
});

export const dateStyle = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  color: `${vars.themeColor.color.neutral_2}`,
  fontSize: '1.4rem',
  fontWeight: 400,
  lineHeight: '140%',
});
