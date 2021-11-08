import { Directive, Input, OnChanges, OnInit, SimpleChanges, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appIfElse]'
})
export class IfelseDirective implements OnChanges {
  private _context: { [fieldName: string]: any } = {
    name: ''
  };
  private _elseTemplate!: TemplateRef<any>;
  private _isTemplate!: boolean;

  @Input()
  public set appIfElseName(name: string) {
    this._context.name = name;
  }

  @Input() 
  public set appIfElse(isTemplate: boolean) {
    this._isTemplate = isTemplate;
  }

  @Input() 
  public set appIfElseElse(elseTemplate: TemplateRef<any>) {
    this._elseTemplate = elseTemplate;
  };

  constructor(private readonly _tmp: TemplateRef<any>, private readonly _vcr: ViewContainerRef) { 
  }
  
  public ngOnChanges(changes: SimpleChanges): void {
    if (changes?.appIfElse.currentValue) {
      this._createView(this._tmp);
    } else {
      if(this._elseTemplate) {
        this._createView(this._elseTemplate);
      }
    }
  }

  private _createView(tmp: TemplateRef<any>): void {
    this._vcr.clear();
    this._vcr.createEmbeddedView(tmp, this._context);
  }
}
