import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { interval, Observable, ReplaySubject } from 'rxjs';
import { switchMap, take, takeUntil, tap } from 'rxjs/operators';
import { IRecipe, IRecipeSearch } from 'src/app/core/data/models';
import { stopWatch } from './operators';
import { inputHelper } from './operators/';
import { viewUpdater } from './operators/';
import { RecipelService } from './shared/services/recipeService.service';

@Component({
  selector: 'app-rxjs-operators',
  templateUrl: './rxjs-operators.component.html',
  styleUrls: ['./rxjs-operators.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RxjsOperatorsComponent implements OnInit, OnDestroy {
  public ingredients: Array<IRecipeSearch> = [];
  public selectedIngredient!: IRecipe;
  public inputSearch: FormControl = new FormControl('');

  @ViewChild('timer', { static: true, read: ElementRef }) private readonly timer!: ElementRef;

  private readonly _destroy$ = new ReplaySubject(1);

  constructor(private readonly _recipelService: RecipelService, private _cdr: ChangeDetectorRef) { }

  public ngOnInit(): void {
    const timer$: Observable<number> = interval(1000).pipe(stopWatch(10, 2, 20), viewUpdater(this.timer.nativeElement));
      timer$.subscribe()

    this.inputSearch.valueChanges
      .pipe(
        inputHelper(this._recipelService.searchRecipe),
        tap((_: string): void => {
          this.selectedIngredient = undefined as unknown as IRecipe;
          this._cdr.detectChanges();
        }),
        takeUntil(this._destroy$)
      )
      .subscribe((val: any) => {
        this.ingredients = val as IRecipeSearch[];
        this._cdr.detectChanges()
      });
  };

  public handleSearch(event: string): void {
    this._recipelService.getRecipe(event)
      .pipe(
        take(1)
      )
      .subscribe((recipe: IRecipe) => {
        this.selectedIngredient = recipe;
        this._cdr.detectChanges();
      });
  };

  public ngOnDestroy(): void { 
    this._destroy$.next(null);
    this._destroy$.complete();
  }
}
