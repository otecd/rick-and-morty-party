import { Dispatch } from 'react';
import actions, { partyActionTypes } from './actions';
import { NAME_MORTY } from '../../const';

let dispatch: Dispatch<ReducerAction>;
const payload: {
  item: Item;
  role: PartyRole;
} = {
  item: {
    __typename: 'Character',
    id: 'id',
    name: 'name',
    image: 'image',
  },
  role: NAME_MORTY,
};

beforeEach(() => {
  dispatch = jest.fn();
});

test('should have correct methods names', () => {
  expect(actions).toMatchObject({
    admitMember: expect.any(Function),
  });
});
test('should dispatch correct reducer actions on admitMember', () => {
  expect(actions.admitMember(dispatch, payload)).toBeUndefined();
  expect(dispatch).toBeCalledTimes(1);
  expect(dispatch).toBeCalledWith({ type: partyActionTypes.MEMBER_ADMITED, payload });
});
