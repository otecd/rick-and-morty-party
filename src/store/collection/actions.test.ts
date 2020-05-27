import { Dispatch } from 'react';
import { item } from '../../test-utils/fixtures';
import actions, { collectionActionTypes } from './actions';

test('should have correct methods names', () => {
  expect(actions).toMatchObject({
    writeItemsByPage: expect.any(Function),
    excludeItem: expect.any(Function),
    clearItems: expect.any(Function),
  });
});
describe('should dispatch correct reducer actions on method call', () => {
  let dispatch: Dispatch<ReducerAction>;

  beforeEach(() => {
    dispatch = jest.fn();
  });

  test('writeItemsByPage', () => {
    const payload: {
      currentPage: number;
      results: Item[];
    } = {
      currentPage: 1,
      results: [item],
    };

    expect(actions.writeItemsByPage(dispatch, payload)).toBeUndefined();
    expect(dispatch).toBeCalledTimes(1);
    expect(dispatch).toBeCalledWith({ type: collectionActionTypes.ITEMS_PAGE_ADDED, payload });
  });
  test('excludeItem', () => {
    const payload = item;

    expect(actions.excludeItem(dispatch, payload)).toBeUndefined();
    expect(dispatch).toBeCalledTimes(1);
    expect(dispatch).toBeCalledWith({ type: collectionActionTypes.ITEM_EXCLUDED, payload });
  });
  test('clearItems', () => {
    expect(actions.clearItems(dispatch)).toBeUndefined();
    expect(dispatch).toBeCalledTimes(1);
    expect(dispatch).toBeCalledWith({ type: collectionActionTypes.ITEMS_CLEARED });
  });
});
