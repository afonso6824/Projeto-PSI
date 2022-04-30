import { Directive, forwardRef, Injectable } from '@angular/core';
import {
  AsyncValidator,
  AbstractControl,
  NG_ASYNC_VALIDATORS,
  ValidationErrors
} from '@angular/forms';
import { catchError, map } from 'rxjs/operators';
import { ProjectService } from '../project.service';
import { Observable, of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class UniqueAcronymValidator implements AsyncValidator {
  constructor(private projectService: ProjectService) {}
  validate(
    control: AbstractControl
  ): Observable<ValidationErrors | null> {
    return this.projectService.isAcronymTaken(control.value).pipe(
      map(isTaken => (isTaken ? { uniqueAcronym : true} : null)),catchError(() => of(null))
    );
  }
}

@Directive({
  selector: '[appUniqueAcronym]',
  providers: [
    {
      provide: NG_ASYNC_VALIDATORS,
      useExisting: forwardRef(() => UniqueAcronymValidatorDirective),
      multi: true
    }
  ]
})
export class UniqueAcronymValidatorDirective implements AsyncValidator {
  constructor(private validator: UniqueAcronymValidator) {}

  validate(
    control: AbstractControl
  ): Observable<ValidationErrors | null> {
    return this.validator.validate(control);
  }
}
