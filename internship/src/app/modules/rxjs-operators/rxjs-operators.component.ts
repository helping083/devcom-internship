import { Component, OnInit } from '@angular/core';
import { interval, Observable, timer } from 'rxjs';
import { logger } from './operators/logger';

@Component({
  selector: 'app-rxjs-operators',
  templateUrl: './rxjs-operators.component.html',
  styleUrls: ['./rxjs-operators.component.scss']
})
export class RxjsOperatorsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const timer$: Observable<number> = timer(1000)
    const test$: Observable<number> = interval(1000).pipe(logger);
    test$.subscribe()
  }

}
