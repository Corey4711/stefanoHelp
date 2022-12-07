import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { Observable } from 'rxjs';
import { LocationPinsService } from 'src/app/services/location-pins.services';
import { appReducers } from '../reducers/app.reducers';
import { LocationEffects } from './location.effect';
import { provideMockActions } from '@ngrx/effects/testing';
import { hot, cold } from 'jasmine-marbles';
import { ApiResponse } from 'src/app/models/api.response.model';
import { LocationActions } from '../actions/location.actions';
import { locationPins } from 'src/app/models/locatinon-pins.model';

describe('LocationEffects', () => {
  let actions$: Observable<any>;
  let effects: LocationEffects;
  let service: jasmine.SpyObj<LocationPinsService>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        StoreModule.forRoot(appReducers),
        EffectsModule.forRoot([LocationEffects]),
      ],
      providers: [
        LocationEffects,
        provideMockActions(() => actions$),
        {
          provide: LocationPinsService,
          useValue: jasmine.createSpyObj<LocationPinsService>('service', [
            'getAllPins',
          ]),
        },
      ],
    });

    effects = TestBed.inject(LocationEffects);
    service = TestBed.inject(
      LocationPinsService
    ) as jasmine.SpyObj<LocationPinsService>;
  });

  it('getAllPins$ should succeed', () => {
    // Setup action
    const action = LocationActions.GetAllLocationPins();
    actions$ = hot('-a', { a: action });

    // Setup response
    const data: ApiResponse<locationPins[]> = {
            success: true,
            error: null,
            data: null,
    };
    const response = cold('-a|', { a: data });
    service.getAllPins.and.returnValue(response);

    // Setup expected outcome
    const outcome = LocationActions.GetAllLocationPinsSuccess(data);
    const expected = cold('--b', { b: outcome });

    expect(effects.getAllPins$).toBeObservable(expected);
  });
});
