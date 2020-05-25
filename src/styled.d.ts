import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      main: string;
      secondary: string;
      cardPlaceholder: string;
      error: string;
      overlay: string;
      themeSelector: {
        background: string;
      };
    };
    sizes: {
      cardImage: {
        width: string;
        height: string;
      };
    };
  }
}
