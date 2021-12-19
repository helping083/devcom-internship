import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { interval, Observable, timer } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { ICocktail } from 'src/app/core/data/models';
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
  public inputSearch: FormControl = new FormControl('');

  @ViewChild('view', { static: true, read: ElementRef }) private readonly view!: ElementRef;

  constructor(private readonly _cocktailService: CocktailService) { }

  ngOnInit(): void {
    const test$: Observable<number> = interval(500).pipe(evenFilter(), viewUpdater(this.view.nativeElement), logger);

    this.inputSearch.valueChanges
      .pipe(
        inputHelper,
        switchMap((searchParam: string): Observable<ICocktail[]> => {
          return this._cocktailService.searchCoktail(searchParam);
        })
      )
      .subscribe((val: ICocktail[]) => {
        console.log(val)
    })
  }

}
