import { ChangeDetectionStrategy, Component, ElementRef, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Observable, fromEvent, ReplaySubject } from 'rxjs';
import { map, mapTo, takeUntil, tap } from 'rxjs/operators';

@Component({
  selector: 'app-option',
  templateUrl: './option.component.html',
  styleUrls: ['./option.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OptionComponent implements OnInit, OnDestroy {
  get element() { return this._host.nativeElement; };

  @Input() public value!: number;

  @Output() public readonly chooseOption: EventEmitter<string> = new EventEmitter<string>();

  public click$!: Observable<string>;

  private readonly _destroy$: ReplaySubject<void> = new ReplaySubject<void>(1);

  constructor(private readonly _host: ElementRef){}

  public ngOnInit(): void {
    this.click$ = fromEvent<MouseEvent>(this.element, 'click')
      .pipe(
        mapTo(this.value),
        map((val: number) => val.toString(10)),
        takeUntil(this._destroy$),
        tap(
          (val: string) => { 
            this.chooseOption.emit(val);
          }
        )
      );
  };

  public ngOnDestroy(): void {
    this._destroy$.next();
    this._destroy$.complete();
  };
}
