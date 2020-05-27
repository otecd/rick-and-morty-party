import { useCallback, Dispatch } from 'react';

export default <T>({ actions, dispatch }: {
  actions: T | any;
  dispatch: Dispatch<ReducerAction>;
}): any => Object.entries<Function>(actions)
  .reduce((r, [key, handler]) => ({
    ...r,
    [key]: useCallback((...args: any[]) => handler(dispatch, ...args), [handler]),
  }), {});
