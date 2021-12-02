import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-observables',
  templateUrl: './observables.component.html',
  styleUrls: ['./observables.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ObservablesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
