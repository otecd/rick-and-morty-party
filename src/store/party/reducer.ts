import { partyActionTypes as at } from './actions';

const actionHandlers = new Map();

actionHandlers.set(
  at.MEMBER_ADMITED,
  (state: PartyState, member: {
    item: Item;
    role: PartyRole;
  }) => {
    const memberWithRoleIndex = state.membersByRoles.findIndex(({ role }) => role === member.role);
    const membersByRoles = state.membersByRoles.slice();

    if (memberWithRoleIndex === -1) {
      membersByRoles.push(member);
    } else {
      membersByRoles[memberWithRoleIndex] = member;
    }

    return { ...state, membersByRoles };
  },
);
actionHandlers.set(undefined, () => undefined);

export default (
  state: PartyState,
  action: ReducerAction,
): PartyState => actionHandlers.get(action.type)(state, action.payload);
