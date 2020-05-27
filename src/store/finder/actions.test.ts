import { Dispatch } from 'react';
import { name, errorMessage } from '../../test-utils/fixtures';
import actions, { finderActionTypes } from './actions';

test('should have correct methods names', () => {
  expect(actions).toMatchObject({
    updateName: expect.any(Function),
    updateNameTyped: expect.any(Function),
    throwError: expect.any(Function),
    clearError: expect.any(Function),
    startLoading: expect.any(Function),
    stopLoading: expect.any(Function),
  });
});

describe('should dispatch correct reducer actions on method call', () => {
  let dispatch: Dispatch<ReducerAction>;

  beforeEach(() => {
    dispatch = jest.fn();
  });

  test('should dispatch correct reducer actions on updateName', () => {
    const payload = name;

    expect(actions.updateName(dispatch, payload)).toBeUndefined();
    expect(dispatch).toBeCalledTimes(2);
    expect(dispatch).toBeCalledWith({ type: finderActionTypes.NAME_UPDATED, payload });
    expect(dispatch).toBeCalledWith({ type: finderActionTypes.LOADING_STARTED });
  });
  test('should dispatch correct reducer actions on updateNameTyped', () => {
    const payload = name;

    expect(actions.updateNameTyped(dispatch, payload)).toBeUndefined();
    expect(dispatch).toBeCalledTimes(2);
    expect(dispatch).toBeCalledWith({ type: finderActionTypes.NAME_TYPED_UPDATED, payload });
    expect(dispatch).toBeCalledWith({ type: finderActionTypes.ERROR_CLEARED });
  });
  test('should dispatch correct reducer actions on throwError', () => {
    const payload = errorMessage;

    expect(actions.throwError(dispatch, payload)).toBeUndefined();
    expect(dispatch).toBeCalledTimes(3);
    expect(dispatch).toBeCalledWith({ type: finderActionTypes.ERROR_THROWN, payload });
    expect(dispatch).toBeCalledWith({ type: finderActionTypes.NAME_UPDATED, payload: '' });
    expect(dispatch).toBeCalledWith({ type: finderActionTypes.LOADING_ENDED });
  });
  test('should dispatch correct reducer actions on clearError', () => {
    expect(actions.clearError(dispatch)).toBeUndefined();
    expect(dispatch).toBeCalledTimes(1);
    expect(dispatch).toBeCalledWith({ type: finderActionTypes.ERROR_CLEARED });
  });
  test('should dispatch correct reducer actions on startLoading', () => {
    expect(actions.startLoading(dispatch)).toBeUndefined();
    expect(dispatch).toBeCalledTimes(1);
    expect(dispatch).toBeCalledWith({ type: finderActionTypes.LOADING_STARTED });
  });
  test('should dispatch correct reducer actions on stopLoading', () => {
    expect(actions.stopLoading(dispatch)).toBeUndefined();
    expect(dispatch).toBeCalledTimes(1);
    expect(dispatch).toBeCalledWith({ type: finderActionTypes.LOADING_ENDED });
  });
});
