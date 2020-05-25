import { partyActionTypes as at } from './actions';

const actionHandlers = new Map();

actionHandlers.set(
  at.MEMBER_ADMITED,
  (state: PartyState, { item, role }: {
    item: Item;
    role: PartyRole;
  }) => {
    const membersByRoles = new Map(state.membersByRoles);

    membersByRoles.set(role, item);

    return { ...state, membersByRoles };
  },
);
actionHandlers.set(undefined, () => undefined);

export default (
  state: PartyState,
  action: ReducerAction,
): PartyState => actionHandlers.get(action.type)(state, action.payload);
