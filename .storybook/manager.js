import { themes } from '@storybook/theming';
import { addons } from '@storybook/addons';

addons.setConfig({
  theme: {
    ...themes.dark,
    brandImage: 'https://hamishw.com/icon.svg',
    brandTitle: 'Hamish Williams Components',
    brandUrl: 'https://mss-mjcet-website-3-js.vercel.app/',
  },
});
