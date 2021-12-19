import { MonoTypeOperatorFunction, Observable, ObservableInput, OperatorFunction, pipe } from "rxjs";
import { debounceTime, map, distinctUntilChanged, tap, switchMap } from "rxjs/operators";

export function inputHelper(source$: Observable<string>): Observable<string> {
  return source$.pipe(
    debounceTime(400),
    map((val: string): string => val.trim()),
    distinctUntilChanged((prev: string, curr: string) => prev === curr)
  );
};