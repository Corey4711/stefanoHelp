import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { Store, StoreModule } from '@ngrx/store';
import { Action } from '..';
import { appReducers } from '../reducers/app.reducers';
import { AppState } from '../state/app.state';
import { AppViewActions } from './app-view.actions';

describe('AppViewActions', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, StoreModule.forRoot(appReducers)],
      providers: [AppViewActions],
    });
  });

  it('Should dispatch ENABLE_MAP_VIEW_STATE action', () => {
    const expectedAction: Action<void> = {
      payload: undefined,
      type: AppViewActions.ENABLE_MAP_VIEW_STATE.type,
    };

    const store = jasmine.createSpyObj<Store<AppState>>('store', ['dispatch']);
    const appViewActions = new AppViewActions(store);
    appViewActions.enableMapViewState();
    expect(store.dispatch).toHaveBeenCalledWith(expectedAction);
  });
});
