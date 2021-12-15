import { MonoTypeOperatorFunction, pipe } from "rxjs";
import { tap } from "rxjs/operators";

export function viewUpdater<T>(el: HTMLElement): MonoTypeOperatorFunction<T> {
  return pipe(
    tap((v: any) => {
      el.innerHTML = v;
    })
  )
}