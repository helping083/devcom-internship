import { Observable } from "rxjs";
import { tap } from "rxjs/operators";

export function logger<T>(source$: Observable<T>): Observable<T> {
  return source$.pipe(tap(
    (val: any) => {
      console.log(`%c[Next: value]`, "background: #009688; color: #fff; padding: 3px; font-size: 12px;", val);
    },
    (err) => { 
      console.log(`%[Error]`, "background: #E91E63; color: #fff; padding: 3px; font-size: 9px;", err)
    },
    () => { 
      console.log(`%c[Complete]`, "background: #00BCD4; color: #fff; padding: 3px; font-size: 9px;")
    }
  ));
}