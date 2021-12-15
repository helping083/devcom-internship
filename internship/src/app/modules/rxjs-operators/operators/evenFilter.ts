import { MonoTypeOperatorFunction, pipe } from "rxjs";
import { filter } from "rxjs/operators";

export function evenFilter(): MonoTypeOperatorFunction<number> {
  return pipe(filter(v => v % 2 === 0));
};