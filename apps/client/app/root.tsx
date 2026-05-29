import { type LinksFunction, type LoaderFunctionArgs, json } from '@remix-run/node';
import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from '@remix-run/react';
import { useEffect } from 'react';
import { type Theme, ThemeProvider, useTheme } from 'remix-themes';
import Footer from '~/components/Footer/Footer';
import Header from '~/components/Header/Header';
import '~/styles/fonts/fonts.css';
import { darkTheme, lightTheme } from '~/styles/global.css';
import '~/styles/global.css';
import '~/styles/reset.css';
import { themeSessionResolver } from '~/utils/theme.server';

export const links: LinksFunction = () => [
  {
    rel: 'stylesheet',
    href: 'https://cdnjs.cloudflare.com/ajax/libs/pretendard/1.3.9/static/pretendard.min.css',
  },
  { rel: 'icon', href: '/assets/icon/ic_favicon.svg', type: 'image/svg+xml' },
  {
    rel: 'stylesheet',
    href: 'https://cdn.jsdelivr.net/npm/remixicon@4.2.0/fonts/remixicon.css',
  },
  {
    rel: 'stylesheet',
    href: 'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/styles/github-dark.min.css',
  },
];

export const loader = async ({ request }: LoaderFunctionArgs) => {
  try {
    const { getTheme } = await themeSessionResolver(request);
    return json({ theme: getTheme() });
  } catch (error) {
    console.error('[root loader] theme resolve failed, fallback to null', error);
    return json(
      { theme: null },
      {
        headers: {
          'Set-Cookie': 'theme=; Max-Age=0; Path=/; SameSite=Lax',
        },
      },
    );
  }
};

const getThemeScript = () => `
  (function() {
    let LIGHT = '${lightTheme}';
    let DARK = '${darkTheme}';
    let root = document.documentElement;
    let cookieMatch = document.cookie.match(/theme=(light|dark)/);
    let prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    let theme = cookieMatch ? cookieMatch[1] : (prefersDark ? 'dark' : 'light');

    root.classList.remove(LIGHT, DARK);
    root.classList.add(theme === 'dark' ? DARK : LIGHT);
  })();
`;

function ThemeScript({ isThemeSet }: { isThemeSet: boolean }) {
  if (isThemeSet) return null;

  return (
    <script
      // biome-ignore lint/security/noDangerouslySetInnerHtml: Blocking script for theme flash prevention
      dangerouslySetInnerHTML={{ __html: getThemeScript() }}
    />
  );
}

function useThemeSync() {
  const [theme] = useTheme();

  useEffect(() => {
    const root = document.documentElement;
    root.classList.remove(lightTheme, darkTheme);
    root.classList.add(theme === 'dark' ? darkTheme : lightTheme);
  }, [theme]);
}

function App({ isThemeSet }: { isThemeSet: boolean }) {
  useThemeSync();

  return (
    <html lang="ko" className={lightTheme} suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <ThemeScript isThemeSet={isThemeSet} />
        <Links />
      </head>
      <body>
        <div
          style={{
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <Header />
          <main>
            <Outlet />
          </main>
          <Footer />
        </div>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function AppWithProviders() {
  const { theme } = useLoaderData<typeof loader>();
  const isThemeSet = Boolean(theme);

  return (
    <ThemeProvider
      specifiedTheme={theme as Theme | null}
      themeAction="/actions/set-theme"
    >
      <App isThemeSet={isThemeSet} />
    </ThemeProvider>
  );
}
