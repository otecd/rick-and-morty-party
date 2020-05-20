import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import App from './App';
import * as serviceWorker from './serviceWorker';
import * as styleThemes from './style-themes';

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${(props): string => props.theme.colors.secondary};
    color: ${(props): string => props.theme.colors.main};
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
  }
`;

ReactDOM.render(
  <StrictMode>
    <ThemeProvider theme={styleThemes.light}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </StrictMode>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
