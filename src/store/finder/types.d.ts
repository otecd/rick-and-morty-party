declare interface State {
  name: string;
  nameTyped: string;
  excludedItems: Item[];
  resultsByPages: Item[][];
  error: string | null;
  loading: boolean;
}

declare interface Actions {
  updateName: Function;
  updateNameTyped: Function;
  writeResultsByPage: Function;
  throwError: Function;
  clearError: Function;
  startLoading: Function;
  stopLoading: Function;
  excludeItem: Function;
}
