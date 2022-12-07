import { Injectable } from '@angular/core';
import { createSelector, MemoizedSelector, select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from '../state/app.state';
import { AppViewState } from '../state/app.view.state';
import { getAppStoreState } from './app.selector';

export const getAppViewState: MemoizedSelector<AppState, AppViewState> =
  createSelector(getAppStoreState, (state) =>
    state ? state.appViewState : null
  );

@Injectable({ providedIn: 'root' })
export class AppViewSelectors {
  constructor(private store: Store<AppState>) {}

  public getAppViewState(): Observable<AppViewState> {
    return this.store.pipe(select(getAppViewState));
  }
}
