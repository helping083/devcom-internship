import { ChangeDetectorRef, Component, OnInit, ChangeDetectionStrategy, OnDestroy, Input } from '@angular/core';
import {BehaviorSubject, ReplaySubject} from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { IComment } from 'src/app/core/data/models';
import { ChangeDetectionService } from 'src/app/core/data/services/change-detection.service';

@Component({
  selector: 'app-change-detect-no-pipe-page',
  templateUrl: './change-detect-no-pipe-page.component.html',
  styleUrls: ['./change-detect-no-pipe-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChangeDetectNoPipePageComponent implements OnInit, OnDestroy {
  public comments: IComment[] = [];
  public commentDetail!: IComment;
  public isModalOpen: boolean = false;

  public comments$ = new BehaviorSubject<IComment[]>([]);

  private readonly _destroy$: ReplaySubject<void> = new ReplaySubject<void>(1);

  constructor(private readonly _changeDetectionService: ChangeDetectionService, private readonly _cdr: ChangeDetectorRef) { }

  ngOnInit(): void {
    this._changeDetectionService
      .getComments()
      .pipe(takeUntil(this._destroy$))
      .subscribe((comments: IComment[]) => {
        this.comments = comments;
        this.comments$.next(comments);
        // this._cdr.detectChanges();
      });
  }

  // not very effective in my opinion
  // always goes through the whole array of comments
  public handleChange(event: Event): void {
    const newComments = [...this.comments$.getValue()];
    const findByIdx = newComments.findIndex((comment: IComment) => comment.id === this.commentDetail.id);

    // const findByIdx = this.comments.findIndex((comment: IComment) => comment.id === this.commentDetail.id);
    const newComment = {...this.commentDetail, name: (event.target as HTMLInputElement).value};
    // this.commentDetail.name = (event.target as HTMLInputElement).value;
    // this.comments[findByIdx] = {...this.commentDetail};
    newComments[findByIdx] = {...newComment};
    this.comments$.next(newComments);
    console.log('old', this.comments);
    console.log('new', this.comments$.getValue());
  }

  public handleCloseModal(): void {
    this.isModalOpen = false
  }

  public handleOpenModal(comment: IComment): void {
    console.log(comment);
    this.commentDetail = comment;
    this.isModalOpen = true
  }

  ngOnDestroy(): void {
    this._destroy$.next();
    this._destroy$.complete();
  }
}

