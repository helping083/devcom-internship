import { ChangeDetectionStrategy, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { fromEvent, ReplaySubject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { AsyncSubjectsService } from './shared/services/async-subjects.service';
import { SubjectsService } from './shared/services/subjects.service';

@Component({
  selector: 'app-subjects-page',
  templateUrl: './subjects-page.component.html',
  styleUrls: ['./subjects-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SubjectsPageComponent implements OnInit, OnDestroy {
  private _destroy$ = new ReplaySubject<void>(1);

  @ViewChild('button', { static: true, read: ElementRef }) private readonly button!: ElementRef;
  @ViewChild('async', { static: true, read: ElementRef }) private readonly asyncButton!: ElementRef;

  constructor(private readonly subjectService: SubjectsService, private readonly asyncSubjectsService: AsyncSubjectsService) { }

  ngOnInit(): void {
    this._initListeners();
    this._subscribeToSubjects();
    this.asyncSubjectsService.makeAsyncRequest(`https://api.github.com/users?per_page=5`);
  }

  private _initListeners(): void {
    fromEvent(this.button.nativeElement, 'click')
      .subscribe((_) => {
        this.subjectService.makeRequest(`https://api.github.com/users?per_page=5`);
      });

    fromEvent(this.asyncButton.nativeElement, 'click')
      .subscribe((_) => {
        this.asyncSubjectsService.completeLoading();
      });
  }

  private _subscribeToSubjects(): void {
    this.subjectService.getGithubUsers().pipe(takeUntil(this._destroy$)).subscribe();

    // this.asyncSubjectsService.asyncDataLoader.pipe(takeUntil(this._destroy$)).subscribe((loader: boolean) => {
    //   console.log('loader', loader);
    // });
    // this.asyncSubjectsService.preloadedData.pipe(takeUntil(this._destroy$)).subscribe((l: any) => {
    //   console.log(l);
    // });
  }

  ngOnDestroy() {
    this._destroy$.next();
    this._destroy$.complete();
  }
}
