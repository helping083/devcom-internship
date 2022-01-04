import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent implements OnInit {
  public form!: FormGroup;
  public name: FormControl = new FormControl('');

  constructor(private readonly _fb: FormBuilder) { 

  }

  ngOnInit(): void {
    this.updateName();
    this._createForm();
  }

  updateName() {
    this.name.setValue('Nancy');
  }

  private _createForm(): void {
    this.form = this._fb.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.min(10), Validators.required]]
    })
  }

  public onSubmit(): void {
    const val: any = this.form.getRawValue();
    console.log(val);
  }

  get f(): FormGroup {
    return this.form;
  }
}
