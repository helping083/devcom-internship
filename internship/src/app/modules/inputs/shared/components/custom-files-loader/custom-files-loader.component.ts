import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { ControlContainer, ControlValueAccessor, FormControl, FormGroup, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-custom-files-loader',
  templateUrl: './custom-files-loader.component.html',
  styleUrls: ['./custom-files-loader.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: CustomFilesLoaderComponent
    }
  ]
})
export class CustomFilesLoaderComponent implements OnInit, ControlValueAccessor {
  @Input() public filesId!: string;
  @Input() public label!: string;
  @Input() public formControlName!: string;
  @Output() public readonly fileName: EventEmitter<string> = new EventEmitter<string>();
  public files: any;

  constructor(private readonly _cdr: ChangeDetectorRef, private readonly controlContainer: ControlContainer) { }

  ngOnInit(): void {
  }

  get form(): FormGroup {
    return this.controlContainer.control as FormGroup;
  }

  get control(): FormControl {
    return this.form.get(this.formControlName) as FormControl;
  }

  public onFileUpload(event: Event): void {
    const file: File = (event.target! as HTMLInputElement).files![0];
    this.onChange(file);
    this.fileName.emit(file.name);
    this._cdr.detectChanges();
  }

  public onChange = (v: File): void => {};

  public onTouched = (): void => {};

  public registerOnChange(fn: () => void): void {
    this.onChange = fn;
  }

  public registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  public writeValue(value: any): void {
    this.files = value;
  }
}
