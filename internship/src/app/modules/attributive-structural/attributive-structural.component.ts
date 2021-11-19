import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { BehaviorSubject, Subscription } from 'rxjs';
import { delay } from 'rxjs/operators';
import { IPost } from 'src/app/core/data/models';
import { DirectivesService } from 'src/app/core/data/services/directives.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-attributive-structural',
  templateUrl: './attributive-structural.component.html',
  styleUrls: ['./attributive-structural.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AttributiveStructuralComponent implements OnInit, OnDestroy {
  public readonly isDataLoading$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);
  public posts!: IPost[];
  public filterControl: FormControl = new FormControl('');

  private _directivesServiceSub!: Subscription;
  private _searchFormSub!: Subscription;
  private _originalPosts!: IPost[];

  constructor(private readonly _directivesService: DirectivesService, private readonly _cdr: ChangeDetectorRef) { }

  ngOnInit(): void {
    this._directivesServiceSub = this._directivesService.getPosts().pipe(delay(1000)).subscribe((posts: IPost[]) => {
      this.posts = posts;
      this._originalPosts = posts;
      this.isDataLoading$.next(false);
      this._cdr.detectChanges()
    });

    this._searchFormSub = this.filterControl.valueChanges.subscribe(value => {
      this._onFilterPosts(value);
    });
  }

  private _onFilterPosts(name: string): void {
    this.posts = this._originalPosts.filter((post: IPost) => post.title.includes(name));
  }

  ngOnDestroy() {
    this._directivesServiceSub.unsubscribe();
    this._searchFormSub.unsubscribe();
  }
}
