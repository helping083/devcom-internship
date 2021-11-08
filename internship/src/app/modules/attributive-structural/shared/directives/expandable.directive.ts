import { AfterViewInit, Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

//do i have to create a module for each directive here
@Directive({
  selector: '[appExpandable]'
})
export class ExpandableDirective implements AfterViewInit{
  @Input() public expectedClassList: Array<string> = [];
  private _element!: HTMLElement;
  
  constructor(private readonly _el: ElementRef, private readonly _renderer: Renderer2) { 
  }

  ngAfterViewInit() {
    this._element = this._el.nativeElement;
  }

  @HostListener('focus')
  public onFocus(): void {
    this.expectedClassList.forEach(cssClass => this._renderer.addClass(this._element, cssClass));
  }

  @HostListener('blur')
  public onBlur(): void {
    this.expectedClassList.forEach(cssClass => this._renderer.removeClass(this._element, cssClass));
  }
}
