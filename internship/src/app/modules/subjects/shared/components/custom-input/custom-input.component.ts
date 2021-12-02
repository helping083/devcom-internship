import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-custom-input',
  templateUrl: './custom-input.component.html',
  styleUrls: ['./custom-input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: CustomInputComponent
    }
  ]
})
export class CustomInputComponent implements ControlValueAccessor {
  @Input() label!: string;
  public page!: number;

  constructor(private readonly _cdr: ChangeDetectorRef) { }

  public onChange = (page: number) => { };
  
  public onTouched = () => { };

  public writeValue(page: number): void {
    this.page = page;
    this.onChange(this.page);
    this._cdr.detectChanges();
  };

  public registerOnChange(onChange: any) {
    this.onChange = onChange;
  }

  public registerOnTouched(onTouched: any) {
    this.onTouched = onTouched;
  }

  public onInputChange(ev: any): void {
    const control = ev.target.value;
    this.writeValue(control);
  }
}
