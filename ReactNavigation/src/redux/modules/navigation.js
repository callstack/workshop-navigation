/* @flow */

import { NavigationActions } from 'react-navigation'

const createReducer = (AppNavigator) => {
  const initialState = AppNavigator.router.getStateForAction(
    NavigationActions.reset({
      index: 0,
      actions: [
        NavigationActions.navigate({ routeName: 'Home' }),
      ]}
    )
  );

  return (state = initialState, action) => {
    const newState = AppNavigator.router.getStateForAction(action, state);
    return newState || state;
  };
};

export default createReducer;
