/* @flow */

import { Platform } from 'react-native';
import { NavigationActions } from 'react-navigation'

const _getInitialState = (AppNavigator, actions) => {
  return AppNavigator.router.getStateForAction(
    NavigationActions.reset({
      index: actions.length - 1,
      actions: actions.map(action => NavigationActions.navigate(action)),
    })
  );
};

const prefix = Platform.OS === 'android' ? 'navigation://navigation/' : 'navigation://';

const createReducer = (AppNavigator) => {
  // Initial route we want for our app
  const initialState = _getInitialState(AppNavigator, [{ routeName: 'Home' }]);

  return (state = initialState, action) => {
    // We handle special deep linking cases
    if(action.type === 'LINKING' && action.url.includes(`${prefix}home/detail/`)) {
      const id = action.url.split(`${prefix}home/detail/`)[1];
      return _getInitialState(
        AppNavigator,
        [{ routeName: 'Home' }, { routeName: 'Detail', params: { id }}]
      );
    }
    // Otherwise default
    const newState = AppNavigator.router.getStateForAction(action, state);
    return newState || state;
  };
};

export default createReducer;
