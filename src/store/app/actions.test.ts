import { Dispatch } from 'react';
import actions, { appActionTypes } from './actions';

test('should have correct methods names', () => {
  expect(actions).toMatchObject({
    toggleTheme: expect.any(Function),
  });
});
describe('should dispatch correct reducer actions on method call', () => {
  let dispatch: Dispatch<ReducerAction>;

  beforeEach(() => {
    dispatch = jest.fn();
  });

  test('toggleTheme', () => {
    expect(actions.toggleTheme(dispatch)).toBeUndefined();
    expect(dispatch).toBeCalledTimes(1);
    expect(dispatch).toBeCalledWith({ type: appActionTypes.THEME_CHANGED });
  });
});
