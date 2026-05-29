import { createCookieSessionStorage } from '@remix-run/node';
import { createThemeSessionResolver } from 'remix-themes';

const sessionStorage = createCookieSessionStorage({
  cookie: {
    name: '__theme',
    path: '/',
    httpOnly: true,
    sameSite: 'lax',
    secrets: [process.env.SESSION_SECRET ?? 'dev-theme-secret'],
    secure: process.env.NODE_ENV === 'production',
  },
});

export const themeSessionResolver = createThemeSessionResolver(sessionStorage);
