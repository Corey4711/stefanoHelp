import { Injectable } from "@angular/core";
import { MemoizedSelector, createSelector, Store, select } from "@ngrx/store";
import { Observable } from "rxjs";
import { locationPins } from "src/app/models/locatinon-pins.model";
import { AppState } from "../state/app.state";
import { LocationState } from "../state/location.state";
import { getAppStoreState } from "./app.selector";

export const getLocationState: MemoizedSelector<AppState, LocationState> = createSelector(getAppStoreState, (state) =>
    state ? state.locationState : null
);
export const getAllPins: MemoizedSelector<AppState, locationPins[]> = createSelector(getLocationState, (state: LocationState) =>
    state ? state.pins : null
);

@Injectable({ providedIn: 'root' })
export class LocationSelectors {
    constructor(private _store: Store<AppState>) {}

    public getAllPins(): Observable<locationPins[]> {
        return this._store.pipe(select(getAllPins));
    }
}