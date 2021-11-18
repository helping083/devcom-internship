import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export const fileValidate = (fileExtensions: string[]): ValidatorFn => {
  return (formControl: AbstractControl): ValidationErrors | null => {
    const fileFormat: string = formControl.value?.name.split('.').pop() as string;
    console.log('form control', fileFormat);
    return null;
  };
};
