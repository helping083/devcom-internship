import { ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { BehaviorSubject, interval, Observable, timer } from 'rxjs';
import { switchMap, take } from 'rxjs/operators';
import { evenFilter } from './operators/evenFilter';
import { inputHelper } from './operators/inputHelper';
import { logger } from './operators/logger';
import { viewUpdater } from './operators/viewUpdater';
import { CocktailService } from './shared/services/CocktailService.service';

@Component({
  selector: 'app-rxjs-operators',
  templateUrl: './rxjs-operators.component.html',
  styleUrls: ['./rxjs-operators.component.scss']
})
export class RxjsOperatorsComponent implements OnInit {
  public ingredientLoading$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public ingredients: Array<any> = [];
  public selectedIngredient: any;
  public inputSearch: FormControl = new FormControl('');

  @ViewChild('view', { static: true, read: ElementRef }) private readonly view!: ElementRef;

  constructor(private readonly _cocktailService: CocktailService, private _cdr: ChangeDetectorRef) { }

  ngOnInit(): void {
    const test$: Observable<number> = interval(500).pipe(evenFilter(), viewUpdater(this.view.nativeElement), logger);

    this.inputSearch.valueChanges
      .pipe(
        inputHelper,
        logger,
        switchMap((searchParam: string): Observable<any> => {
          return this._cocktailService.searchCoktail(searchParam);
        })
      )
      .subscribe((val: any) => {
        this.ingredients = val;
        this._cdr.detectChanges()
    })
  }

  public handleSearch(event: string): void {
    this._cocktailService.getRecipe(event)
      .pipe(
        take(1),
        logger
      )
      .subscribe((val: any) => {
        this.selectedIngredient = val;
        this._cdr.detectChanges();
      });
  }
}
