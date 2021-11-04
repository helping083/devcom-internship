import { Component, OnInit, ChangeDetectionStrategy, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { BehaviorSubject, Observable, ReplaySubject } from 'rxjs';
import { delay, take, takeUntil } from 'rxjs/operators';
import { IUser } from 'src/app/core/data/models';
import { DirectivesService } from 'src/app/core/data/services/directives.service';

@Component({
  selector: 'app-directives-page',
  templateUrl: './directives-page.component.html',
  styleUrls: ['./directives-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DirectivesPageComponent implements OnInit, OnDestroy {
  public isLoading$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true)
  public readonly usersData$: BehaviorSubject<IUser[]> = new BehaviorSubject<IUser[]>([]);
  public _usersData!: Array<IUser>;

  private readonly _destroy$ = new ReplaySubject<void>(1);
  
  constructor(private readonly _directivesService: DirectivesService, private readonly cdr: ChangeDetectorRef) { }

  ngOnInit(): void {
    this
      ._directivesService
      .getUsers()
      .pipe(
        takeUntil(this._destroy$)
      )
      .subscribe((data: IUser[]) => {
        this._usersData = data;
        this.usersData$.next([...data]);
        this.isLoading$.next(false)
        this.cdr.detectChanges()
      });
  }

  ngOnDestroy() {
    this._destroy$.next();
    this._destroy$.complete();
  }
}
