declare interface FinderState {
  name: string;
  nameTyped: string;
  error: string | null;
  loading: boolean;
}

declare interface FinderActions {
  updateName: Function;
  updateNameTyped: Function;
  throwError: Function;
  clearError: Function;
  startLoading: Function;
  stopLoading: Function;
}

declare interface CollectionState {
  excludedItems: Item[];
  itemsByPages: Item[][];
}

declare interface CollectionActions {
  writeItemsByPage: Function;
  excludeItem: Function;
  clearItems: Function;
}

declare interface PartyState {
  membersByRoles: {
    item: Item;
    role: PartyRole;
  }[];
}

declare interface PartyActions {
  admitMember: Function;
}
