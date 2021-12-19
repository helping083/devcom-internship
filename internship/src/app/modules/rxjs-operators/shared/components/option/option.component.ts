import { Component, ElementRef, Input, OnInit } from '@angular/core';
import { Observable, fromEvent } from 'rxjs';
import { mapTo } from 'rxjs/operators';

@Component({
  selector: 'app-option',
  templateUrl: './option.component.html',
  styleUrls: ['./option.component.scss']
})
export class OptionComponent implements OnInit {
  get element() { return this.host.nativeElement; } 
  

  @Input() value!: string;
  click$!: Observable<string>;

  constructor(private host: ElementRef) { 
    
  }

  ngOnInit(): void {
    this.click$ = fromEvent(this.element, 'click').pipe(mapTo(this.value));
    console.log(this.host)
  }

}
