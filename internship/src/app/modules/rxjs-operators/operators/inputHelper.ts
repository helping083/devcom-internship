import { Observable } from "rxjs";
import { debounceTime, map, distinctUntilChanged, tap } from "rxjs/operators";

export function inputHelper(source$: Observable<string>): Observable<string> {
  return source$.pipe(
    debounceTime(400),
    map((val: string): string => val.trim()),
    distinctUntilChanged((prev: string, curr: string) => prev === curr),
    tap((val: string) => { console.log('works', val)})
  );
};