import { Action, TypedActionCreator } from '..';
import { MonoTypeOperatorFunction } from 'rxjs';
import { filter } from 'rxjs/operators';

// Custom RXJS Operator
export function isAction<T extends Action<F>, F>(...actionCreators: TypedActionCreator<F>[]): MonoTypeOperatorFunction<Action<F>> {
    return filter((action: Action<F>): action is T => {
        return actionCreators.some((fn) => fn.type === action.type);
    });
}
