import { collectionActionTypes as at } from './actions';

const actionHandlers = new Map();
const filterItemsWoExcluded = (items: Item[], excludedItems: Item[]): Item[] => {
  const stopIds = new Set(excludedItems.map(({ id }) => id));

  return items.filter(({ id }) => !stopIds.has(id));
};

actionHandlers.set(
  at.ITEM_EXCLUDED,
  (state: CollectionState, item: Item) => {
    const excludedItems = state.excludedItems.concat(item);

    return {
      ...state,
      excludedItems,
      itemsByPages: state.itemsByPages
        .map(results => filterItemsWoExcluded(
          results,
          excludedItems,
        ))
        .filter(results => results.length),
    };
  },
);
actionHandlers.set(
  at.ITEMS_PAGE_ADDED,
  (state: CollectionState, { currentPage, results }: {
    currentPage: number;
    results: Item[];
  }) => {
    if (!results) {
      return state;
    }

    const itemsByPages: Item[][] = currentPage === 1 ? [] : state.itemsByPages;

    if (itemsByPages.length < currentPage) {
      itemsByPages.push(filterItemsWoExcluded(results, state.excludedItems));
    }

    return { ...state, itemsByPages };
  },
);
actionHandlers.set(
  at.ITEMS_CLEARED,
  (state: CollectionState) => ({ ...state, itemsByPages: [] }),
);
actionHandlers.set(undefined, () => undefined);

export default (
  state: CollectionState,
  action: ReducerAction,
): CollectionState => actionHandlers.get(action.type)(state, action.payload);
