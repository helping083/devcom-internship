import { Component, OnInit, ChangeDetectionStrategy, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { IPost } from 'src/app/core/data/models';
import { ChangeDetectionService } from 'src/app/core/data/services/change-detection.service';

@Component({
  selector: 'app-change-detection-page',
  templateUrl: './change-detection-page.component.html',
  styleUrls: ['./change-detection-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChangeDetectionPageComponent implements OnInit, OnDestroy {
  public posts: Array<IPost> = [];

  private readonly _destroy$ = new ReplaySubject<void>(1);

  constructor(private readonly _changeDetectionService: ChangeDetectionService, private readonly _cdr: ChangeDetectorRef) { }

  ngOnInit(): void {
    this._changeDetectionService
      .getPosts()
      .pipe(takeUntil(this._destroy$))
      .subscribe((postData: IPost[]) => {
        this.posts = postData;
        this._cdr.detectChanges();
      });
  };

  ngOnDestroy() {
    this._destroy$.next();
    this._destroy$.complete();
  }

  public handleNewPostAddition(post: IPost): void {
    this.posts.unshift(post);
  }
};
