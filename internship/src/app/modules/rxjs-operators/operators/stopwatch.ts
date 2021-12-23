import { MonoTypeOperatorFunction, pipe } from "rxjs";
import { mapTo, scan, startWith, takeWhile } from "rxjs/operators";
import { evenFilter, logger } from ".";

export function stopWatch(startValue: number, step: number, endVal: number): MonoTypeOperatorFunction<number> {
  return pipe(
    mapTo(step),
    scan((acc: number, curr: number) => acc + curr, startValue),
    evenFilter(),
    takeWhile(((val: number) => val <= endVal)),
    logger
  )
}