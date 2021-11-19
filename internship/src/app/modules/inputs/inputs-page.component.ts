import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { FormErrorsEnum } from 'src/app/core/data/enums';
import { fileValidate } from './shared/validators/fileValidator';

@Component({
  selector: 'app-inputs-page',
  templateUrl: './inputs-page.component.html',
  styleUrls: ['./inputs-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InputsPageComponent implements OnInit {
  public formErrorsEnum = FormErrorsEnum;
  private _myForm!: FormGroup;
  constructor(private readonly _fb: FormBuilder) { }

  ngOnInit(): void {
    this._createForm();
  }

  private _createForm(): void {
    this._myForm = this._fb.group({
      files: [null, [fileValidate(['pdf'])]],
      size: [32, [Validators.min(16), Validators.max(64)]],
      rating: [3]
    });
  };

  get form(): FormGroup {
    return this._myForm
  }
}
