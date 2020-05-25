import { finderActionTypes as at } from './actions';

const actionHandlers = new Map();

actionHandlers.set(
  at.NAME_UPDATED,
  (state: FinderState, name: string) => ({ ...state, name: name.toLowerCase() }),
);
actionHandlers.set(
  at.NAME_TYPED_UPDATED,
  (state: FinderState, nameTyped: string) => ({ ...state, nameTyped: nameTyped.toLowerCase() }),
);
actionHandlers.set(
  at.ERROR_THROWN,
  (state: FinderState, message: string) => ({
    ...state,
    error: message,
    resultsByPages: [], // REMOVE
  }),
);
actionHandlers.set(
  at.ERROR_CLEARED,
  (state: FinderState) => ({ ...state, error: null }),
);
actionHandlers.set(
  at.LOADING_STARTED,
  (state: FinderState) => ({ ...state, loading: true }),
);
actionHandlers.set(
  at.LOADING_ENDED,
  (state: FinderState) => ({ ...state, loading: false }),
);
actionHandlers.set(undefined, () => undefined);

export default (
  state: FinderState,
  action: ReducerAction,
): FinderState => actionHandlers.get(action.type)(state, action.payload);
