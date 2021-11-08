import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

//do i have to create a module for each directive here
@Directive({
  selector: '[appExpandable]'
})
export class ExpandableDirective {
  @Input() expectedClassList: Array<string> = [];

  constructor(private readonly _el: ElementRef, private readonly _renderer: Renderer2) { 
  }

  @HostListener('focus')
  public onFocus(): void {
    const element = this._el.nativeElement;
    this.expectedClassList.forEach(cssClass => this._renderer.addClass(element, cssClass));
  }

  @HostListener('blur')
  public onBlur(): void {
    const element = this._el.nativeElement;
    this.expectedClassList.forEach(cssClass => this._renderer.removeClass(element, cssClass));
  }
}
