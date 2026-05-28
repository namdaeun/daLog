import { style } from '@vanilla-extract/css';

export const wrapper = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '2rem',
  padding: '10rem 4rem',
});

export const title = style({
  fontSize: '2.5rem',
  fontWeight: 'bold',
  marginBottom: '1.6rem',
});

export const articleListContainer = style({
  display: 'flex',
  width: '100%',
  alignItems: 'center',
  justifyContent: 'center',
});

export const articleList = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 30rem), 1fr))',
  width: '100%',
  gap: '3rem',
});

export const articleItem = style({
  width: '100%',
});
