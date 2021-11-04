import { ChangeDetectorRef, ComponentFactoryResolver, ComponentRef, Directive, ElementRef, Input, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appUnless]'
})
export class UnlessDirective implements OnInit{

  constructor(
    private _host: ElementRef,
    private readonly _templateRef: TemplateRef<any>,
    private readonly _viewContainer: ViewContainerRef,
    private readonly _resolver: ComponentFactoryResolver,
    private readonly _cdr: ChangeDetectorRef
  ) { }
  
  ngOnInit() {
    console.log(this._templateRef)
    let a = this._viewContainer.createEmbeddedView(this._templateRef)
  }
}
