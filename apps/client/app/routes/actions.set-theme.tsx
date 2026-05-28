import type { ActionFunctionArgs } from '@remix-run/node';
import { isTheme } from 'remix-themes';
import { themeSessionResolver } from '~/utils/theme.server';

export const action = async ({ request }: ActionFunctionArgs) => {
  const { setTheme } = await themeSessionResolver(request);
  const formData = await request.formData();
  const theme = formData.get('theme');

  if (!isTheme(theme)) {
    return {
      success: false,
      message: `theme value ${theme} is not a valid theme`,
    };
  }

  return {
    headers: {
      'Set-Cookie': await setTheme(theme),
    },
  };
};
