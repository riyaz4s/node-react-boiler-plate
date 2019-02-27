import { combineReducers } from 'redux';
import sub from './sub-reducer';
import chap from './chap-reducer';
import { routerReducer } from 'react-router-redux';

export const reducers = {
  routing: routerReducer,
  sub,
  chap
};

export default combineReducers(reducers);