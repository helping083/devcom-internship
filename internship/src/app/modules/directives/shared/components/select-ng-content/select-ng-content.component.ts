import { Component, OnInit,  ChangeDetectionStrategy, Input } from '@angular/core';
import { ISelectInput } from 'src/app/core/data/models';

@Component({
  selector: 'app-select-ng-content',
  templateUrl: './select-ng-content.component.html',
  styleUrls: ['./select-ng-content.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SelectNgContentComponent implements OnInit, ISelectInput {
  @Input() public title!: string;
  @Input() public description!: string;

  constructor() { }

  ngOnInit(): void {
  }

}
