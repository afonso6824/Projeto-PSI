import { Directive } from '@angular/core';
import { AbstractControl, FormGroup, NG_VALIDATORS, ValidationErrors, Validator, ValidatorFn } from '@angular/forms';

/** A hero's name can't match the hero's alter ego */
export const endDateValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
  const beginDate = control.get('beginDate');
  const endDate = control.get('endDate');
  if (beginDate?.value === null || endDate?.value === null)
    return null;
  return  beginDate && endDate && new Date(beginDate.value) >= new Date(endDate.value) ? { endDateValid: true } : null;
};

@Directive({
  selector: '[appIdentityRevealed]',
  providers: [{ provide: NG_VALIDATORS, useExisting:  EndDateValidatorDirective,
  multi: true }]
})
export class EndDateValidatorDirective implements Validator {
  validate(control: AbstractControl): ValidationErrors | null {
    return endDateValidator(control);
  }
}
