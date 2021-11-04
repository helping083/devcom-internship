import { Directive } from '@angular/core';

//do i have to create a module for each directive here
@Directive({
  selector: '[appExpandable]'
})
export class ExpandableDirective {

  constructor() { }

}
