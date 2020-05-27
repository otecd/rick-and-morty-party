import React, {
  useReducer,
  PropsWithChildren,
  ReactElement,
} from 'react';
import actionsBuilder from '../actions-builder';
import Context from './context';
import reducer from './reducer';
import initialState from './initial-state';
import actions from './actions';

export default ({ children }: PropsWithChildren<any>): ReactElement => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <Context.Provider
      value={{ state, actions: actionsBuilder<FinderActions>({ actions, dispatch }) }}
    >
      {children}
    </Context.Provider>
  );
};
