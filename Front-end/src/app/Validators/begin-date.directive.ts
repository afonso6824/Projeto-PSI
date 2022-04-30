import { Directive, Input } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator, ValidatorFn } from '@angular/forms';

export function beginDateValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    let beginDate =control.value
    const valid = typeof(beginDate) === "object";
    return valid ? {valid: true} : null;
  };
}

@Directive({
  selector: '[appBeginDate]',
  providers: [{provide: NG_VALIDATORS, useExisting: beginDateValidator, multi: true}]
})
export class BeginDateValidatorDirective implements Validator{
  @Input('appBeginDate') valid = '';

  validate(control: AbstractControl): ValidationErrors | null {
    return this.valid ? beginDateValidator()(control) : null;
  }


}
