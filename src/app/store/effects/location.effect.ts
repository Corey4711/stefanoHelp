import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Observable, of } from "rxjs";
import { catchError, map, switchMap } from 'rxjs/operators';
import { LocationPinsService } from "src/app/services/location-pins.services";
import { isAction } from ".";
import { Action } from "..";
import { LocationActions } from "../actions/location.actions";


@Injectable()
export class LocationEffects {

    getAllPins$ = createEffect(() => this._actions$.pipe(
        isAction(LocationActions.GetAllLocationPins),
        switchMap(() =>
             this._locationPins.getAllPins().pipe(
                map((response) => LocationActions.GetAllLocationPinsSuccess(response)),
                catchError((response) => of(LocationActions.GetAllLocationPinsFail(response)))
            )
        )
    ));

constructor(private _locationPins: LocationPinsService, private _actions$: Actions) {}
}