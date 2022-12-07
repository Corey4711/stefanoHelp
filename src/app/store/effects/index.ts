import { Action, TypedActionCreator } from '..';
import { OperatorFunction } from 'rxjs';
import { filter } from 'rxjs/operators';

// Custom RXJS Operator
export function isAction<T extends Action<F>, F>(...actionCreators: TypedActionCreator<F>[]): OperatorFunction<any, T> {
    return filter((action: Action<F>): action is T => {
        return actionCreators.some((fn) => fn.type === action.type);
    });
}
