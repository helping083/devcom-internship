import { Observable } from "rxjs";
import { tap } from "rxjs/operators";

export function logger<T>(source$: Observable<T>): Observable<T> {
  return source$.pipe(tap((val: any) => {console.log(val)}));
}