import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { EMPTY, fromEvent, iif, merge, Observable, ReplaySubject,Subscription, timer } from 'rxjs';
import { mapTo, repeat, scan, startWith, switchMap, takeWhile } from 'rxjs/operators';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class TimerComponent implements OnInit, OnDestroy {
  public start: number = 10;
  public val: number = 10;
  public isTimerStart: boolean = false;

  @Input() public set time(time: number) {
    this.start = time;
    this.val = time;
    this._cdr.detectChanges();
  };

  private _mergeSub!: Subscription;
  private readonly _destroy$: ReplaySubject<void> = new ReplaySubject<void>(1);

  @ViewChild('start', { static: true, read: ElementRef }) private readonly buttonStart!: ElementRef;
  @ViewChild('pause', { static: true, read: ElementRef }) private readonly buttonPause!: ElementRef;

  constructor(private readonly _cdr: ChangeDetectorRef) { }

  ngOnInit(): void {
    const countdown$: Observable<number> = timer(0, 1000);

    const startButton$: Observable<boolean> = fromEvent(this.buttonStart.nativeElement, 'click').pipe(mapTo(true))
    const pauseButton$: Observable<boolean> = fromEvent(this.buttonPause.nativeElement, 'click').pipe(mapTo(false));

    const main$: Subscription = merge(startButton$, pauseButton$)
      .pipe(
        switchMap((val: boolean): Observable<number> | Observable<never> => {
          return iif(() => val, countdown$, EMPTY)
        }),
        mapTo(-1),
        scan((acc: number, curr: number) => acc + curr, this.val),
        startWith(this.val),
        takeWhile((val: number) => val >= 0),
        repeat()
      )
      .subscribe(
        (left: number) => {
          this.val = left;
          this._cdr.detectChanges()
        }
      );
    this._mergeSub = main$
  }

  ngOnDestroy() {
    this._mergeSub.unsubscribe();
    this._destroy$.next();
    this._destroy$.complete();
  }
}
