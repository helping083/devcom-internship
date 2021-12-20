import { Component, ElementRef, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable, fromEvent } from 'rxjs';
import { map, mapTo, tap } from 'rxjs/operators';

@Component({
  selector: 'app-option',
  templateUrl: './option.component.html',
  styleUrls: ['./option.component.scss']
})
export class OptionComponent implements OnInit {
  get element() { return this.host.nativeElement; } 

  @Input() value!: number;
  @Output() chooseOption: EventEmitter<string> = new EventEmitter<string>();

  public click$!: Observable<string>;

  constructor(private host: ElementRef){}

  ngOnInit(): void {
    this.click$ = fromEvent(this.element, 'click')
      .pipe(
        mapTo(this.value),
        map((val: number) => val.toString(10)),
        tap(
          (val: string) => { 
            this.chooseOption.emit(val);
          }
        )
      );
  }

}
