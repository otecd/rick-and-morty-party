import React, { useContext, ReactElement } from 'react';
import styled, {
  createGlobalStyle,
  ThemeProvider,
  DefaultTheme,
} from 'styled-components';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import {
  LazyCharactersFinder,
  CharactersCollection,
  Party,
  ThemeSelector,
} from './components';
import { AppStoreContext } from './store/app';
import {
  APP_THEME_LIGHT,
  APP_THEME_DARK,
  NAME_MORTY,
  NAME_RICK,
} from './const';
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
    transition: background-color 0.2s;
  }
  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
  }
`;
const StyledApp = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  padding-top: 141px;
  min-height: 100vh;
  align-items: center;
  font: inherit;
  user-select: none;
`;
const StyledFooter = styled.footer`
  font-size: .4rem;
  text-align: center;

  & > p {
    margin: 0;
  }

  & a {
    color: ${(props): string => props.theme.colors.main};
  }

  @media (max-width: 820px) {
    font-size: .5rem;
  }
`;
const apolloClient = new ApolloClient({
  uri: 'https://rickandmortyapi.com/graphql'
});

export default (): ReactElement => {
  const { state: appStoreState } = useContext(AppStoreContext);
  const themesMap = new Map<string, DefaultTheme>([
    [APP_THEME_LIGHT, styleThemes.light],
    [APP_THEME_DARK, styleThemes.dark],
  ]);

  return (
    <ApolloProvider client={apolloClient}>
      <ThemeProvider theme={themesMap.get(appStoreState.theme) || styleThemes.light}>
        <GlobalStyle />
        <StyledApp>
          <ThemeSelector />
          <LazyCharactersFinder />
          <CharactersCollection />
          <Party roles={[NAME_RICK, NAME_MORTY]} />
          <StyledFooter>
            <p>
              &copy;
              {' 2020 '}
              <a href="https://github.com/papadima" target="_blank" rel="noopener noreferrer">papadima</a>
              .
            </p>
            <p>
              {'Icons made by '}
              <a href="https://www.flaticon.com/free-icon/sunny_1420705?term=mode&page=2&position=75" title="monkik" target="_blank" rel="noopener noreferrer">monkik</a>
              {', '}
              <a href="https://icon54.com/" title="Pixel perfect" target="_blank" rel="noopener noreferrer">Pixel perfect</a>
              {' from '}
              <a href="https://www.flaticon.com/" title="Flaticon" target="_blank" rel="noopener noreferrer"> www.flaticon.com</a>
            </p>
          </StyledFooter>
        </StyledApp>
      </ThemeProvider>
    </ApolloProvider>
  );
};
