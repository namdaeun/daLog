import { globalStyle, style } from '@vanilla-extract/css';
import { colors } from '~/styles/colors';
import { vars } from '~/styles/global.css';

export const markdownContent = style({
  fontSize: '2.5rem',
  lineHeight: '1.8',
  width: '100%',
});

globalStyle(`${markdownContent} h1`, {
  fontSize: '3.2rem',
  fontWeight: 'bold',
  marginTop: '3.2rem',
  marginBottom: '1.6rem',
  lineHeight: '1.3',
});

globalStyle(`${markdownContent} h2`, {
  fontSize: '2.4rem',
  fontWeight: 'bold',
  marginTop: '2.8rem',
  marginBottom: '1.2rem',
  lineHeight: '1.4',
});

globalStyle(`${markdownContent} h3`, {
  fontSize: '2rem',
  fontWeight: 'bold',
  marginTop: '2.4rem',
  marginBottom: '1rem',
  lineHeight: '1.4',
});

globalStyle(`${markdownContent} p`, {
  fontSize: '1.5rem',
  marginBottom: '1.6rem',
});

globalStyle(`${markdownContent} ul, ${markdownContent} ol`, {
  fontSize: '1.5rem',
  marginBottom: '1.6rem',
  paddingLeft: '2.4rem',
});

globalStyle(`${markdownContent} li`, {
  fontSize: '1.5rem',
  marginBottom: '0.8rem',
});

globalStyle(`${markdownContent} ul li`, {
  fontSize: '1.5rem',
  listStyleType: 'disc',
});

globalStyle(`${markdownContent} ol li`, {
  fontSize: '1.5rem',
  listStyleType: 'decimal',
});

globalStyle(`${markdownContent} a`, {
  fontSize: '1.5rem',
  color: colors.blue,
  textDecoration: 'underline',
});

globalStyle(`${markdownContent} a:hover`, {
  fontSize: '1.5rem',
  textDecoration: 'none',
});

globalStyle(`${markdownContent} blockquote`, {
  borderLeft: `4px solid ${vars.themeColor.color.border}`,
  paddingLeft: '1.6rem',
  marginBottom: '1.6rem',
  fontStyle: 'italic',
  color: vars.themeColor.color.description,
});

globalStyle(`${markdownContent} code *`, {
  fontFamily: "'Fira Code', 'Consolas', 'Monaco', monospace",
  padding: '0.3rem 0.6rem',
  borderRadius: '4px',
  fontSize: '1.4rem',
});

globalStyle(`${markdownContent} code`, {
  fontFamily: "'Fira Code', 'Consolas', 'Monaco', monospace",
  padding: '0.3rem 0.6rem',
  borderRadius: '4px',
  fontSize: '1.4rem',
  color: colors.blue,
  backgroundColor: vars.themeColor.color.article_bg,
});

globalStyle(`${markdownContent} pre`, {
  backgroundColor: '#1e1e1e',
  padding: '1.2rem',
  borderRadius: '8px',
  overflowX: 'auto',
  marginBottom: '1.6rem',
  border: `1px solid ${vars.themeColor.color.border}`,
});

globalStyle(`${markdownContent} pre code`, {
  backgroundColor: 'transparent',
  padding: 0,
  fontSize: '1.4rem',
  lineHeight: '1.5',
  color: '#d4d4d4',
  border: 'none',
});

globalStyle(`${markdownContent} pre code span:not([class])`, {
  color: '#d4d4d4',
});

globalStyle(`${markdownContent} pre code .hljs-function`, {
  color: '#dcdcaa',
});

globalStyle(`${markdownContent} pre code .hljs-property`, {
  color: '#d4d4d4',
});

globalStyle(`${markdownContent} pre code .hljs-params, .hljs-tag`, {
  color: '#9cdcfe',
});

globalStyle(`${markdownContent} table`, {
  width: '100%',
  borderCollapse: 'collapse',
  marginBottom: '1.6rem',
});

globalStyle(`${markdownContent} th, ${markdownContent} td`, {
  width: 'fit-content',
  border: `1px solid ${vars.themeColor.color.border}`,
  padding: '1rem',
  textAlign: 'left',
  fontSize: '1.4rem',
});

globalStyle(`${markdownContent} th`, {
  backgroundColor: colors.blue_alpha,
  fontWeight: 'bold',
});

globalStyle(`${markdownContent} hr`, {
  border: 'none',
  borderTop: `1px solid ${vars.themeColor.color.border}`,
  margin: '2.4rem 0',
});

globalStyle(`${markdownContent} img`, {
  maxWidth: '100%',
  height: 'auto',
  borderRadius: '8px',
  marginBottom: '1.6rem',
});

globalStyle(`${markdownContent} input[type="checkbox"]`, {
  marginRight: '0.8rem',
  width: 'auto',
});

globalStyle(`${markdownContent} strong`, {
  fontSize: '1.5rem',
  fontWeight: 'bold',
  backgroundColor: colors.blue_alpha,
});

globalStyle(`${markdownContent} em`, {
  fontSize: '1.5rem',
  fontStyle: 'italic',
});
