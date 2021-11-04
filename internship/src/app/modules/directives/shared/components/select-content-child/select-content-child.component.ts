import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { ISelectInput } from 'src/app/core/data/models';

@Component({
  selector: 'app-select-content-child',
  templateUrl: './select-content-child.component.html',
  styleUrls: ['./select-content-child.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SelectContentChildComponent implements OnInit, ISelectInput {
  @Input() public title!: string;
  @Input() public description!: string;

  constructor() { }

  ngOnInit(): void {
  }

}
