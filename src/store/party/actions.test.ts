import { Dispatch } from 'react';
import { item, role } from '../../test-utils/fixtures';
import actions, { partyActionTypes } from './actions';

let dispatch: Dispatch<ReducerAction>;

test('should have correct methods names', () => {
  expect(actions).toMatchObject({
    admitMember: expect.any(Function),
  });
});

describe('should dispatch correct reducer actions on method call', () => {
  beforeEach(() => {
    dispatch = jest.fn();
  });

  test('admitMember', () => {
    const payload = { item, role };

    expect(actions.admitMember(dispatch, payload)).toBeUndefined();
    expect(dispatch).toBeCalledTimes(1);
    expect(dispatch).toBeCalledWith({ type: partyActionTypes.MEMBER_ADMITED, payload });
  });
});
