import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { createActionCreator, createBoundActionCreator, createType } from '..';
import { AppState } from '../state/app.state';

@Injectable({ providedIn: 'root' })
export class AppViewActions {
  static ENABLE_MAP_VIEW_STATE = createType('[App View Actions] Enable Map View State');

  static EnableMapViewState = createActionCreator<void>(AppViewActions.ENABLE_MAP_VIEW_STATE);

  constructor(private store: Store<AppState>) {}

  enableMapViewState = createBoundActionCreator(AppViewActions.EnableMapViewState,this.store.dispatch.bind(this.store)
  );
}
