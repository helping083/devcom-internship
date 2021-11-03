import { Component, ContentChild, ElementRef, Input, TemplateRef } from '@angular/core';
import { ISelectInput } from 'src/app/core/data/models';

@Component({
  selector: 'app-select-content-children',
  templateUrl: './select-content-children.component.html',
  styleUrls: ['./select-content-children.component.scss']
})
export class SelectContentChildrenComponent implements  ISelectInput {
  @Input() public title!: string;
  @Input() public description!: string;

  @ContentChild('food') selectItemsTemplate!: TemplateRef<ElementRef>;
 
}
