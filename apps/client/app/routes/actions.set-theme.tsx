import type { ActionFunctionArgs } from '@remix-run/node';
import { isTheme } from 'remix-themes';
import { themeSessionResolver } from '~/utils/theme.server';

export const action = async ({ request }: ActionFunctionArgs) => {
  try {
    const formData = await request.formData();
    const theme = formData.get('theme');

    if (!isTheme(theme)) {
      return new Response(
        JSON.stringify({
          success: false,
          message: `theme value ${theme} is not a valid theme`,
        }),
        {
          status: 400,
          headers: { 'Content-Type': 'application/json' },
        },
      );
    }

    const { setTheme } = await themeSessionResolver(request);
    await setTheme(theme);

    return new Response(null, { status: 204 });
  } catch {
    return new Response(null, { status: 204 });
  }
};
