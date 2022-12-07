import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { StoreModule } from '@ngrx/store';
import { Action } from '..';
import { AppViewActions } from '../actions/app-view.actions';
import { appReducers } from '../reducers/app.reducers';
import { INITIAL_APP_STATE } from '../state/app.state';
import { appViewReducer } from './app-view.reducers';

describe('AppViewReducer', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, StoreModule.forRoot(appReducers)],
    });
  });

  it('should return initial state', () => {
    const nullAction: Action<string[]> = {
      payload: null,
      type: null,
    };
    const result = appViewReducer(undefined, nullAction);
    expect(result).toBe(INITIAL_APP_STATE.appViewState);
  });

  it('should enable map view state', () => {
    const enableMapViewStateAction: Action<void> = {
      type: AppViewActions.ENABLE_MAP_VIEW_STATE.type,
      payload: null,
    };
    const result = appViewReducer(
      INITIAL_APP_STATE.appViewState,
      enableMapViewStateAction
    );
    expect(result.mapViewActive).toBe(true);
  });
});
