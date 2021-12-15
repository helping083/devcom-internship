import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { interval, Observable, timer } from 'rxjs';
import { evenFilter } from './operators/evenFilter';
import { inputHelper } from './operators/inputHelper';
import { logger } from './operators/logger';
import { viewUpdater } from './operators/viewUpdater';

@Component({
  selector: 'app-rxjs-operators',
  templateUrl: './rxjs-operators.component.html',
  styleUrls: ['./rxjs-operators.component.scss']
})
export class RxjsOperatorsComponent implements OnInit {
  public inputTest: FormControl = new FormControl('');

  @ViewChild('test', { static: true, read: ElementRef }) private readonly view!: ElementRef;

  constructor() { }

  ngOnInit(): void {
    const test$: Observable<number> = interval(500).pipe(evenFilter(), viewUpdater(this.view.nativeElement), logger);
    test$.subscribe();
    this.inputTest.valueChanges.pipe(inputHelper).subscribe((val: string) => {
      console.log(val)
    })
  }

}
