import { ChangeDetectionStrategy, Component, Input, OnInit, TemplateRef } from '@angular/core';
import { ISelectInput } from 'src/app/core/data/models';

@Component({
  selector: 'app-select-template-ref',
  templateUrl: './select-template-ref.component.html',
  styleUrls: ['./select-template-ref.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SelectTemplateRefComponent implements OnInit, ISelectInput{
  @Input() public title!: string;
  @Input() public selectsRef!: TemplateRef<any>
  @Input() public description!: string;

  constructor() { }

  ngOnInit(): void {
  }

}
