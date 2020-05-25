import { DefaultTheme } from 'styled-components';

export const light: DefaultTheme = {
  colors: {
    main: '#000',
    secondary: '#fff',
    cardPlaceholder: '#dadada',
    error: '#999',
    overlay: 'rgba(255, 255, 255, 0.5)',
    themeSelector: { background: 'rgba(20, 20, 20, 0.2)' },
    input: { background: 'rgba(255, 255, 255, 0.5)' },
  },
  sizes: {
    cardImage: {
      width: '180px',
      height: '220px',
    },
  },
};
export const dark: DefaultTheme = {
  ...light,
  colors: {
    ...light.colors,
    main: '#ccc',
    secondary: '#333',
    cardPlaceholder: '#444',
    error: '#666',
    overlay: 'rgba(34, 34, 34, 0.5)',
    // input: { background: '#555' },
  },
};

export default { light, dark };
