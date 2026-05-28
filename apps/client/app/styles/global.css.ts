import {
  createTheme,
  createThemeContract,
  globalStyle,
} from '@vanilla-extract/css';
import { colors } from './colors';
import { Pretendard } from './fonts/fonts.css';

const themeColor = createThemeContract({
  color: {
    font: null,
    subTitle: null,
    description: null,
    background: null,
    article_bg: null,
    border: null,

    neutral_1: null,
    neutral_2: null,
    neutral_3: null,
    neutral_4: null,
    neutral_5: null,
    neutral_6: null,
  },
});

export const lightTheme = createTheme(themeColor, {
  color: {
    font: colors.neutral_900,
    subTitle: colors.neutral_600,
    description: colors.neutral_500,
    background: colors.neutral_white,
    article_bg: colors.neutral_100,
    border: colors.neutral_200,

    neutral_1: colors.neutral_black,
    neutral_2: colors.neutral_600,
    neutral_3: colors.neutral_500,
    neutral_4: colors.neutral_200,
    neutral_5: colors.neutral_100,
    neutral_6: colors.neutral_white,
  },
});

export const darkTheme = createTheme(themeColor, {
  color: {
    font: colors.neutral_white,
    subTitle: colors.neutral_300,
    description: colors.neutral_400,
    background: colors.neutral_900,
    article_bg: colors.neutral_800,
    border: colors.neutral_700,

    neutral_1: colors.neutral_white,
    neutral_2: colors.neutral_300,
    neutral_3: colors.neutral_400,
    neutral_4: colors.neutral_700,
    neutral_5: colors.neutral_800,
    neutral_6: colors.neutral_900,
  },
});

export const vars = { themeColor };

globalStyle(`.${lightTheme}, .${darkTheme}`, {
  backgroundColor: vars.themeColor.color.background,
  minHeight: '100vh',
});

globalStyle('html', {
  fontSize: '62.5%',
});

globalStyle('*', {
  width: '100%',
  boxSizing: 'border-box',
  color: `${vars.themeColor.color.font}`,
  fontFamily: Pretendard,
});

globalStyle('body', {
  paddingTop: '5rem',
  scrollBehavior: 'smooth',
  lineHeight: '1.6',
  letterSpacing: '-0.01em',
  WebkitFontSmoothing: 'antialiased',
  MozOsxFontSmoothing: 'grayscale',
});
