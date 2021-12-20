import { ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { BehaviorSubject, interval, Observable } from 'rxjs';
import { switchMap, take, tap } from 'rxjs/operators';
import { IRecipe, IRecipeSearch } from 'src/app/core/data/models';
import { evenFilter } from './operators/evenFilter';
import { inputHelper } from './operators/inputHelper';
import { logger } from './operators/logger';
import { viewUpdater } from './operators/viewUpdater';
import { RecipelService } from './shared/services/recipeService.service';

@Component({
  selector: 'app-rxjs-operators',
  templateUrl: './rxjs-operators.component.html',
  styleUrls: ['./rxjs-operators.component.scss']
})
export class RxjsOperatorsComponent implements OnInit {
  public ingredientLoading$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public ingredients: Array<IRecipeSearch> = [];
  public selectedIngredient!: IRecipe;
  public inputSearch: FormControl = new FormControl('');

  @ViewChild('view', { static: true, read: ElementRef }) private readonly view!: ElementRef;

  constructor(private readonly _recipelService: RecipelService, private _cdr: ChangeDetectorRef) { }

  ngOnInit(): void {
    const test$: Observable<number> = interval(500).pipe(evenFilter(), viewUpdater(this.view.nativeElement), logger);

    this.inputSearch.valueChanges
      .pipe(
        inputHelper,
        logger,
        tap((val: any) => {
          this.selectedIngredient = undefined as unknown as IRecipe
        }),
        switchMap((searchParam: string): Observable<IRecipeSearch[]> => {
          return this._recipelService.searchCoktail(searchParam);
        })
      )
      .subscribe((val: IRecipeSearch[]) => {
        this.ingredients = val;
        this._cdr.detectChanges()
    })
  }

  public handleSearch(event: string): void {
    this._recipelService.getRecipe(event)
      .pipe(
        take(1)
      )
      .subscribe((val: any) => {
        this.selectedIngredient = val;
        this._cdr.detectChanges();
      });
  }
}
