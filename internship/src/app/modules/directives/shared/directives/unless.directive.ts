import { Directive, Input, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appUnless]'
})
export class UnlessDirective implements OnInit{

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef) { }
  
  ngOnInit() {
    console.log('template ref', this.templateRef.elementRef.nativeElement);
    console.log('view container', this.viewContainer);
    //this.viewContainer.createEmbeddedView(this.templateRef)
  }
}
