import { finderActionTypes as at } from './actions';

const actionHandlers = new Map();
const filterItemsWoExcluded = (items: Item[], excludedItems: Item[]): Item[] => {
  const stopIds = new Set(excludedItems.map(({ id }) => id));

  return items.filter(({ id }) => !stopIds.has(id));
};

actionHandlers.set(
  at.NAME_UPDATED,
  (state: State, name: string) => ({ ...state, name: name.toLowerCase() }),
);
actionHandlers.set(
  at.NAME_TYPED_UPDATED,
  (state: State, nameTyped: string) => ({ ...state, nameTyped: nameTyped.toLowerCase() }),
);
actionHandlers.set(
  at.ITEM_EXCLUDED,
  (state: State, item: Item) => {
    const excludedItems = state.excludedItems.concat(item);

    return {
      ...state,
      excludedItems,
      resultsByPages: state.resultsByPages.map(results => filterItemsWoExcluded(
        results,
        excludedItems,
      )),
    };
  },
);
actionHandlers.set(
  at.RESULTS_UPDATED,
  (state: State, { currentPage, results }: {
    currentPage: number;
    results: Item[];
  }) => {
    if (!results) {
      return state;
    }

    const resultsByPages: Item[][] = currentPage === 1 ? [] : state.resultsByPages;

    if (resultsByPages.length < currentPage) {
      resultsByPages.push(filterItemsWoExcluded(results, state.excludedItems));
    }

    return { ...state, resultsByPages };
  },
);
actionHandlers.set(
  at.ERROR_THROWN,
  (state: State, message: string) => ({
    ...state,
    error: message,
    resultsByPages: [],
  }),
);
actionHandlers.set(
  at.ERROR_CLEARED,
  (state: State) => ({ ...state, error: null }),
);
actionHandlers.set(
  at.LOADING_STARTED,
  (state: State) => ({ ...state, loading: true }),
);
actionHandlers.set(
  at.LOADING_ENDED,
  (state: State) => ({ ...state, loading: false }),
);
actionHandlers.set(undefined, () => undefined);

export default (
  state: State,
  action: ReducerAction,
): State => actionHandlers.get(action.type)(state, action.payload);
