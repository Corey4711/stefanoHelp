import { ActionReducerMap } from '@ngrx/store';
import { AppState } from '../state/app.state';
import { appViewReducer } from './app-view.reducers';
import { locationReducer } from './location.reducers';

export const appReducers: ActionReducerMap<AppState, any> = {
  appViewState: appViewReducer,
  locationState: locationReducer,
};
