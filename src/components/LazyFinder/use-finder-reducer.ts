import { useReducer, Dispatch } from 'react';
import {
  ReducerState,
  initialState,
} from '../../store/finder';
import finderReducer from '../../store/reducers/finder';

export default (): [ReducerState, Dispatch<ReducerAction>] => useReducer(
  finderReducer,
  initialState
);
