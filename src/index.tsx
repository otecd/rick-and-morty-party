import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import App from './App';
import * as serviceWorker from './serviceWorker';
import * as styleThemes from './style-themes';

const GlobalStyle = createGlobalStyle`
  html {
    font-size: 30px;

    @media (max-width: 820px) {
      font-size: 3.7vw;
    }
  }
  body {
    background-color: ${(props): string => props.theme.colors.secondary};
    color: ${(props): string => props.theme.colors.main};
    margin: 0;
    font: 300 1rem Roboto, sans-serif, 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', -apple-system, BlinkMacSystemFont, 'Segoe UI';
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
  }
`;
const apolloClient = new ApolloClient({
  uri: 'https://rickandmortyapi.com/graphql'
});

ReactDOM.render(
  <StrictMode>
    <ApolloProvider client={apolloClient}>
      <ThemeProvider theme={styleThemes.dark}>
        <GlobalStyle />
        <App />
      </ThemeProvider>
    </ApolloProvider>
  </StrictMode>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
