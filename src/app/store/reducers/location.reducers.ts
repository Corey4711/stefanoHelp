import { locationPins } from "src/app/models/locatinon-pins.model";
import { Action, isAction } from "..";
import { LocationActions } from "../actions/location.actions";
import { INITIAL_APP_STATE } from "../state/app.state";
import { LocationState } from "../state/location.state";

export function locationReducer(state = INITIAL_APP_STATE.locationState, action: Action<any>): LocationState {
    if (isAction(action, LocationActions.GetAllLocationPinsSuccess)) {
        return {
            ...state,
            pins: action.payload.data,
        };
    }
    

    if (isAction(action, LocationActions.GetAllLocationPinsSuccess)) {
        addIndex(action.payload.data);
        return {
            ...state,
        };
    }

    return state;
}

export function addIndex(pins: locationPins[]): locationPins[] {
    let i = 1;
    const newPins = pins.map((pin) => {
        const x = { ...pin, index: i };
        i++;
        return x;
    });
    return newPins;
}