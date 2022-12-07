import { createFeatureSelector, MemoizedSelector } from '@ngrx/store';
import { AppState } from '../state/app.state';

export const getAppStoreState: MemoizedSelector<any, AppState> =
  createFeatureSelector<AppState>('appStateFeature');
