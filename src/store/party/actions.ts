import { useCallback, Dispatch } from 'react';

export const partyActionTypes = {
  MEMBER_ADMITED: 'MEMBER_ADMITED',
};

export default (dispatch: Dispatch<ReducerAction>): PartyActions => ({
  admitMember: useCallback((payload: {
    item: Item;
    role: PartyRole;
  }): void => {
    dispatch({ type: partyActionTypes.MEMBER_ADMITED, payload });
  }, [dispatch]),
});
