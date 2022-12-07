import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Store } from '@ngrx/store';
import { provideMockStore } from '@ngrx/store/testing';
import { AppState, INITIAL_APP_STATE } from '../state/app.state';
import { initTestScheduler, addMatchers } from 'jasmine-marbles';
import { AppViewSelectors, getAppViewState } from './app-view.selector';
import { AppViewState } from '../state/app.view.state';

describe('AppViewSelectors', () => {
    let selectors: AppViewSelectors;
    let store: Store<AppState>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [
                provideMockStore<AppState>({
                    initialState: INITIAL_APP_STATE,
                }),
                AppViewSelectors,
            ],
        });
        store = TestBed.inject(Store);
        selectors = TestBed.inject(AppViewSelectors);
    });

    it('should call the getAppViewState function', () => {
        selectors.getAppViewState().subscribe((data) => {
            expect(data).toEqual(null);
        });
    });

    it('should get the app view state', () => {
        const appState: AppState = {
            ...INITIAL_APP_STATE,
            appViewState: {
                mapViewActive: true,
            },
        };

        const result: AppViewState = getAppViewState.projector(appState);
        expect(result).toEqual(appState.appViewState);
    });
});