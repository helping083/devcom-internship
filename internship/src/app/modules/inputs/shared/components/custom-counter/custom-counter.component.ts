import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-custom-counter',
  templateUrl: './custom-counter.component.html',
  styleUrls: ['./custom-counter.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: CustomCounterComponent
    }
  ]
})
export class CustomCounterComponent implements OnInit, ControlValueAccessor {
  public quantity: number = 0;

  @Input() public increment: number = 2;

  constructor() { }

  ngOnInit(): void {
  }
  public onIcrement(): void {
    this.quantity += this.increment;
    this.onChange(this.quantity)
  }

  public onDecrement(): void {
    this.quantity -= this.increment;
    this.onChange(this.quantity)
  }

  public onChange = (quantity: number) => {};

  public onTouched = () => { };

  public writeValue(quantity: number): void {
    this.quantity = quantity;
  };

  public registerOnChange(onChange: any) {
    this.onChange = onChange;
  }

  public registerOnTouched(onTouched: any) {
    this.onTouched = onTouched;
  }
}
