import { ReducerState, actionTypes } from '../finder';

export default (state: ReducerState, action: ReducerAction): ReducerState => {
  const newState = { ...state };

  switch (action.type) {
    case actionTypes.UPDATE_NAME:
      newState.name = action.payload.toLowerCase();
      break;
    case actionTypes.UPDATE_EXCLUDED_ITEMS:
      newState.excludedItems = action.payload;
      break;
    case actionTypes.WRITE_RESULTS_BY_PAGE: {
      const { currentPage, results } = action.payload || {};
      const resultsByPages: Item[][] = currentPage === 1 ? [] : newState.resultsByPages;
      const noIds = newState.excludedItems.map(item => item.id);

      if (resultsByPages.length < currentPage) {
        resultsByPages.push(results.filter((item: Item) => !noIds.includes(item.id)));
      }
      newState.resultsByPages = resultsByPages;
      break;
    }
    default:
      break;
  }

  return newState;
};
