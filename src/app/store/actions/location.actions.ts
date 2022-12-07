import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { ApiResponse } from "src/app/models/api.response.model";
import { locationPins } from "src/app/models/locatinon-pins.model";
import { createActionCreator, createBoundActionCreator, createType } from "..";
import { AppState } from "../state/app.state";

@Injectable({ providedIn: 'root' })
export class LocationActions {
    static GET_ALL_PINS = createType('[Location Actions] Get All Location Pins');
    static GET_ALL_PINS_SUCCESS = createType('[Location Actions] Get All Location Pins Success');
    static GET_ALL_PINS_FAIL = createType('[Location Actions] Get All Location Pins Fail');

    static GetAllLocationPins = createActionCreator<any>(LocationActions.GET_ALL_PINS);
    static GetAllLocationPinsSuccess = createActionCreator<ApiResponse<any>>(LocationActions.GET_ALL_PINS_SUCCESS);
    static GetAllLocationPinsFail = createActionCreator<ApiResponse<any>>(LocationActions.GET_ALL_PINS_FAIL);

    constructor(private store: Store<AppState>) {}

    getAllLocationPins = createBoundActionCreator(LocationActions.GetAllLocationPins, this.store.dispatch.bind(this.store));

}