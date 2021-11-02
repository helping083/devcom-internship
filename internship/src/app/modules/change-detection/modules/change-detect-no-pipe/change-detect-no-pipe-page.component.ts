import { ChangeDetectorRef, Component, OnInit, ChangeDetectionStrategy, OnDestroy, Input } from '@angular/core';
import { ReplaySubject } from 'rxjs';
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
  public isModalOpen: boolean = false

  private readonly _destroy$: ReplaySubject<void> = new ReplaySubject<void>(1);

  constructor(private readonly _changeDetectionService: ChangeDetectionService, private readonly _cdr: ChangeDetectorRef) { }

  ngOnInit(): void {
    this._changeDetectionService
      .getComments()
      .pipe(takeUntil(this._destroy$))
      .subscribe((comments: IComment[]) => {
        this.comments = comments;
        this._cdr.detectChanges();
      });
  }

  // not very effective in my opinion
  // always goes through the whole array of comments
  public handleChange(event: any): void {
    const findByIdx = this.comments.findIndex((comment: IComment) => comment.id === this.commentDetail.id);
    this.commentDetail.name = (event.target as HTMLInputElement).value;
    this.comments[findByIdx] = {...this.commentDetail};
  }

  public handleCloseModal(): void {
    this.isModalOpen = false
  }

  public handleOpenModal(comment: IComment): void {
    this.commentDetail = comment;
    this.isModalOpen = true
  }

  ngOnDestroy(): void {
    this._destroy$.next();
    this._destroy$.complete();
  }
}

