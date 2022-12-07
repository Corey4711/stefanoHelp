import { AppViewState } from './app.view.state';
import { LocationState } from './location.state';

export const INITIAL_APP_STATE: AppState = {
  appViewState: {
    mapViewActive: true,
  },
  locationState: {
    pins: null,

  },
};

export interface AppState {
  appViewState: AppViewState;
  locationState: LocationState;
}
