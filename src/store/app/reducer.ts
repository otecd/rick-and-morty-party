import { appActionTypes as at } from './actions';
import { APP_THEME_LIGHT, APP_THEME_DARK } from '../../const';

const actionHandlers = new Map();

actionHandlers.set(
  at.THEME_CHANGED,
  (state: AppState) => ({
    ...state,
    theme: state.theme === APP_THEME_LIGHT ? APP_THEME_DARK : APP_THEME_LIGHT,
  }),
);
actionHandlers.set(undefined, () => undefined);

export default (
  state: AppState,
  action: ReducerAction,
): AppState => actionHandlers.get(action.type)(state, action.payload);
