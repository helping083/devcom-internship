import { MonoTypeOperatorFunction, Observable, ObservableInput, OperatorFunction, pipe } from "rxjs";
import { debounceTime, map, distinctUntilChanged, tap, switchMap } from "rxjs/operators";
import { IRecipeSearch } from "src/app/core/data/models";

export function inputHelper<T>(cb: (q: string) => Observable<T>): MonoTypeOperatorFunction<any> {
  return pipe(
    debounceTime(400),
    map((val: string): string => val.trim()),
    distinctUntilChanged((prev: string, curr: string) => prev === curr),
    switchMap(cb)
  );
};