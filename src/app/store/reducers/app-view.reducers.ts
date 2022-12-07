import { Action, isAction } from '..';
import { AppViewActions } from '../actions/app-view.actions';
import { INITIAL_APP_STATE } from '../state/app.state';
import { AppViewState } from '../state/app.view.state';

export function appViewReducer(
  state = INITIAL_APP_STATE.appViewState,
  action: Action<any>,
): AppViewState {
  if (isAction(action, AppViewActions.EnableMapViewState)) {
    return {
      ...state,
      mapViewActive: true,
    };
  }

  return state;
}
