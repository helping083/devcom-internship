import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import { FormErrorsEnum } from 'src/app/core/data/enums';

export const fileValidate = (fileExtensions: string[]): ValidatorFn => {
  return (formControl: AbstractControl): ValidationErrors | null => {
    if (!formControl.value) {
      return null
    }
    const fileFormat: string = formControl.value.name.split('.').pop() as string;
    const isValidFileFormat: boolean = fileExtensions.indexOf(fileFormat.toLowerCase()) > -1;
    if (!isValidFileFormat) {
      return{ [FormErrorsEnum.fileFormatError]: `allowed formats: ${fileExtensions.join(' ')}` };
    }
    return null;
  };
};
