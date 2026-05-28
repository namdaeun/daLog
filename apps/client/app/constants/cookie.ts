import { createCookie } from '@remix-run/node';
import type { Theme } from '~/styles/theme';

export const CLIENT_THEME_COOKIE_KEY = 'clientTheme';
export const SERVER_THEME_COOKIE_KEY = 'serverTheme';

export const clientThemeCookie = createCookie(CLIENT_THEME_COOKIE_KEY);

export const getClientTheme = async (request: Request) => {
  const cookieHeader = request.headers.get('cookie');
  const cookieValue = await clientThemeCookie.parse(cookieHeader);
  return cookieValue as Theme | undefined;
};
