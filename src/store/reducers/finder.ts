import { ReducerState, actionTypes } from '../finder';

export default (state: ReducerState, action: ReducerAction): ReducerState => {
  const newState = { ...state };

  switch (action.type) {
    case actionTypes.UPDATE_NAME:
      newState.name = action.payload.toLowerCase();
      newState.loading = true;
      newState.error = null;
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
    case actionTypes.SET_ERROR:
      newState.error = action.payload;
      newState.resultsByPages = [];
      newState.loading = false;
      break;
    case actionTypes.STOP_LOADING:
      newState.loading = false;
      break;
    default:
      break;
  }

  return newState;
};
