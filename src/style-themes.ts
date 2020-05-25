import { DefaultTheme } from 'styled-components';

export const light: DefaultTheme = {
  colors: {
    main: '#000',
    secondary: '#fff',
    shadowCard: '#dadada',
    error: '#999',
    overlay: 'rgba(255, 255, 255, 0.5)',
  },
};
export const dark: DefaultTheme = {
  ...light,
  colors: {
    ...light.colors,
    main: '#ccc',
    secondary: '#222',
    error: '#666',
    overlay: 'rgba(34, 34, 34, 0.5)',
  },
};

export default { light, dark };
