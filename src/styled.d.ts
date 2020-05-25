import 'styled-components';
import { StoreReaderConfig } from 'apollo-boost';

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
      input: {
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
