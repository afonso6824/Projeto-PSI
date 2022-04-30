import {Directive, Input} from '@angular/core';
import {AbstractControl, NG_VALIDATORS, ValidationErrors, Validator, ValidatorFn} from '@angular/forms';
import {Schema} from "mongoose";



export function beginDateTodayValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    let beginDate = new Date(control.value).setHours(0,0,0,0)
    let now = new Date().setHours(0,0,0,0)
    const todayValid = beginDate < now;
    return todayValid ? {todayValid: true} : null;
  };
}

@Directive({
  selector: '[appBeginDateToday]',
  providers: [{provide: NG_VALIDATORS, useExisting: beginDateTodayValidator, multi: true}]
})
export class BeginDateTodayValidatorDirective implements Validator {
  @Input('appBeginDate') todayValid = '';

  validate(control: AbstractControl): ValidationErrors | null {
    return this.todayValid ? beginDateTodayValidator()(control) : null;
  }
}


