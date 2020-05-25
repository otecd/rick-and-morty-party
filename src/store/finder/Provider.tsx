import React, {
  useReducer,
  PropsWithChildren,
  ReactElement,
} from 'react';
import Context from './context';
import reducer from './reducer';
import initialState from './initial-state';
import actionsBuilder from './actions';

export default ({ children }: PropsWithChildren<{}>): ReactElement => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <Context.Provider value={{ state, actions: actionsBuilder(dispatch) }}>
      {children}
    </Context.Provider>
  );
};
