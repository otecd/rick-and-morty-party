import React, {
  memo,
  useContext,
  ReactElement,
} from 'react';
import styled from 'styled-components';
import { AppStoreContext } from '../../store/app';
import { APP_THEME_LIGHT } from '../../const';
import { ReactComponent as LightModeIcon } from '../../icons/light-mode.svg';
import { ReactComponent as DarkModeIcon } from '../../icons/dark-mode.svg';

const StyledWrapper = styled.div<{ mode: string }>`
  position: fixed;
  display: flex;
  justify-content: ${(props): string => (props.mode === APP_THEME_LIGHT ? 'flex-start' : 'flex-end')};
  top: 1rem;
  right: 1rem;
  width: 2rem;
  height: .8rem;
  background-color: ${(props): string => props.theme.colors.themeSelector.background};
  border: 2px solid transparent;
  border-radius: 1rem;
`;
const StyledButton = styled.button<{ mode: string }>`
  position: relative;
  display: flex;
  width: .8rem;
  height: .8rem;
  background-color: ${(props): string => props.theme.colors.secondary};
  border-radius: 50%;
  color: ${(props): string => props.theme.colors.main};
  border: none;
  outline: none;
  transition: 0.1s;

  & > svg {
    position: relative;
    height: inherit;
  }
`;

export default memo((): ReactElement => {
  const { state: appStoreState, actions: appStoreActions } = useContext(AppStoreContext);

  return (
    <StyledWrapper
      mode={appStoreState.theme}
      onClick={() => {
        appStoreActions.toggleTheme();
      }}
    >
      <StyledButton mode={appStoreState.theme}>
        {appStoreState.theme === APP_THEME_LIGHT ? (<LightModeIcon />) : (<DarkModeIcon />)}
      </StyledButton>
    </StyledWrapper>
  );
});
