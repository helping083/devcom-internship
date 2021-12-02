import { ChangeDetectionStrategy, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { BehaviorSubject, fromEvent, Observable, ReplaySubject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { GithubUsers } from './shared/models/githubUsers.interface';
import { AsyncSubjectsService } from './shared/services/async-subjects.service';
import { SubjectsService } from './shared/services/subjects.service';

@Component({
  selector: 'app-subjects-page',
  templateUrl: './subjects-page.component.html',
  styleUrls: ['./subjects-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SubjectsPageComponent implements OnInit, OnDestroy {
  public loading$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public showLogged$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public counter: number = 0;
  public githubPageInput = new FormControl(0);
  public lastLogged!: Observable<Date>;
  
  private _destroy$ = new ReplaySubject<void>(1);

  @ViewChild('button', { static: true, read: ElementRef }) private readonly button!: ElementRef;

  constructor(
    private readonly subjectService: SubjectsService,
    private readonly asyncSubjectsService: AsyncSubjectsService,
  ) { }

  ngOnInit(): void {
    this._initListeners();
    this._subscribeToSubjects();
    this.asyncSubjectsService.setLastLogged(new Date());
  }

  private _initListeners(): void {
    fromEvent(this.button.nativeElement, 'click')
      .subscribe((_) => {
        this.loading$.next(true);
        this.subjectService.makeRequest(`https://api.github.com/users?per_page=${this.counter}`);
      });
  }

  private _subscribeToSubjects(): void {
    this.subjectService
      .getGithubUsers()
      .pipe(takeUntil(this._destroy$))
      .subscribe((users: GithubUsers[]) => {
        this.loading$.next(false);
      });

    this.githubPageInput
      .valueChanges
      .pipe(
        takeUntil(this._destroy$)
      ).subscribe((val) => {
        this.counter = val;
      });

    this.lastLogged = this.asyncSubjectsService.lastredirect;
  }

  public handlePageEnterTime(): void {
    this.asyncSubjectsService.showLastLogged();
    this.showLogged$.next(true);
  }

  ngOnDestroy() {
    this._destroy$.next();
    this._destroy$.complete();
  }
}
