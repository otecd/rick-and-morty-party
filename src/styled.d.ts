import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      main: string;
      secondary: string;
      cardPlaceholder: string;
      error: string;
      overlay: string;
    };
    sizes: {
      cardImage: {
        width: string;
        height: string;
      };
    };
  }
}
