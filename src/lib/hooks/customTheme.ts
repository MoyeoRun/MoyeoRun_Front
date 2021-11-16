import { extendTheme } from 'native-base';

const customTheme = extendTheme({
  fontConfig: {
    Apple: {
      100: {
        normal: 'apple-sd-gothic-neo-light',
      },
      200: {
        normal: 'apple-sd-gothic-neo-light',
      },
      300: {
        normal: 'apple-sd-gothic-neo-light',
      },
      400: {
        normal: 'apple-sd-gothic-neo-medium',
      },
      500: {
        normal: 'apple-sd-gothic-neo-medium',
      },
      600: {
        normal: 'apple-sd-gothic-neo-medium',
      },
      700: {
        normal: 'apple-sd-gothic-neo-bold',
      },
      800: {
        normal: 'apple-sd-gothic-neo-bold',
      },
      900: {
        normal: 'apple-sd-gothic-neo-bold',
      },
    },
    Compact: {
      100: {
        normal: 'sf-compact-display-light',
      },
      200: {
        normal: 'sf-compact-display-light',
      },
      300: {
        normal: 'sf-compact-display-light',
      },
      400: {
        normal: 'sf-compact-display',
      },
      500: {
        normal: 'sf-compact-display',
      },
      600: {
        normal: 'sf-compact-display',
      },
      700: {
        normal: 'sf-compact-display-bold',
      },
      800: {
        normal: 'sf-compact-display-bold',
      },
      900: {
        normal: 'sf-compact-display-bold',
      },
    },
  },
  fonts: {
    text: 'Apple',
    number: 'Compact',
  },
});

type CustomThemeType = typeof customTheme;

declare module 'native-base' {
  interface ICustomTheme extends CustomThemeType {}
}

export default customTheme;
