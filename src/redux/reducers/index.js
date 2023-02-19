// eslint-disable-next-line import/no-extraneous-dependencies
import { combineReducers } from 'redux';

const test = (state = {}, action) => state;

export const reducer = combineReducers({
  test,
});