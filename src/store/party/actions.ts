import { Dispatch } from 'react';

export const partyActionTypes = {
  MEMBER_ADMITED: 'MEMBER_ADMITED',
};
export default {
  admitMember: (dispatch: Dispatch<ReducerAction>, payload: {
    item: Item;
    role: PartyRole;
  }): void => {
    dispatch({ type: partyActionTypes.MEMBER_ADMITED, payload });
  },
};
