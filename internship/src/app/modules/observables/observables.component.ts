import { ChangeDetectionStrategy, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { fromEvents, map } from './shared/abstract/Observable';


@Component({
  selector: 'app-observables',
  templateUrl: './observables.component.html',
  styleUrls: ['./observables.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ObservablesComponent implements OnInit {
  @ViewChild('test', { static: true,read: ElementRef }) private readonly test!: ElementRef;

  constructor() { }

  ngOnInit(): void {
    fromEvents(this.test.nativeElement, 'click')
      .pipe(
        map((val: any) => {
          console.log('test', val)
        })
      )
      .subscribe((val) => {

      });
  }

}
