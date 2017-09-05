/* @flow */

import { createStore, combineReducers } from 'redux';

import createNavReducer from './modules/navigation';

export default function configureStore(AppNavigator) {
  return createStore(combineReducers({
    nav: createNavReducer(AppNavigator),
  }));
}
