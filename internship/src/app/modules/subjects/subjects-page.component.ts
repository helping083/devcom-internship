import { ChangeDetectionStrategy, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { fromEvent, Observable, ReplaySubject } from 'rxjs';
import { switchMap, takeUntil } from 'rxjs/operators';
import { GithubUsers } from './shared/models/githubUsers.interface';
import { AsyncSubjectsService } from './shared/services/async-subjects.service';
import { ReplaySubjectService } from './shared/services/replay-subject.service';
import { SubjectsService } from './shared/services/subjects.service';

@Component({
  selector: 'app-subjects-page',
  templateUrl: './subjects-page.component.html',
  styleUrls: ['./subjects-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SubjectsPageComponent implements OnInit, OnDestroy {
  private _destroy$ = new ReplaySubject<void>(1);
  public latestRequests$!: Observable<GithubUsers[]>;
  public counter: number = 0;
  @ViewChild('button', { static: true, read: ElementRef }) private readonly button!: ElementRef;
  @ViewChild('async', { static: true, read: ElementRef }) private readonly asyncButton!: ElementRef;

  constructor(
    private readonly subjectService: SubjectsService,
    private readonly asyncSubjectsService: AsyncSubjectsService,
    private readonly _replaySubject: ReplaySubjectService
  ) { }

  ngOnInit(): void {
    this._initListeners();
    this._subscribeToSubjects();
  }

  private _initListeners(): void {
    fromEvent(this.button.nativeElement, 'click')
      .subscribe((_) => {
        this.subjectService.makeRequest(`https://api.github.com/users?per_page=5`);
      });

    fromEvent(this.asyncButton.nativeElement, 'click')
      .pipe(
        switchMap((_) => {
          return this._replaySubject.latestRequests.pipe(takeUntil(this._destroy$))
        }),
        takeUntil(this._destroy$)
      )
      .subscribe((val) => {
        console.log(val);
      });
  }

  private _subscribeToSubjects(): void {
    this.subjectService
      .getGithubUsers()
      .pipe(takeUntil(this._destroy$))
      .subscribe((users: GithubUsers[]) => {
        this.counter += 1;
        this._replaySubject.setLastRequest(users);
      });
  }

  ngOnDestroy() {
    this._replaySubject._latestRequests.complete()
    this._destroy$.next();
    this._destroy$.complete();
  }
}
