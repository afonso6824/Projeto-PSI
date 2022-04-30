
import {
  AbstractControl,
  AsyncValidatorFn,
  ValidationErrors,
} from '@angular/forms';
import {Observable, of} from 'rxjs';
import {catchError, map} from 'rxjs/operators';
import { ProjectService } from '../project.service';

export class AcronymValidator {

  static createValidator(projectService: ProjectService): AsyncValidatorFn {
    return (control: AbstractControl): Observable<ValidationErrors> => {
      return projectService.isAcronymTaken(control.value).pipe(
        map(isTaken => (isTaken ? { uniqueAcronym : true} : null)),catchError(() => of(null))
      );
    };
  }
}



