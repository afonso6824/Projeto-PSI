import { Directive } from '@angular/core';
import {
  AsyncValidator,
  AbstractControl,
  NG_ASYNC_VALIDATORS,
  ValidationErrors, AsyncValidatorFn
} from '@angular/forms';
import { map} from 'rxjs/operators';
import { ProjectService } from '../project.service';
import { Observable } from 'rxjs';
import {Project} from "../project";



export function uniqueAcronymValidator(projectService: ProjectService): AsyncValidatorFn {
  return (control: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> => {
  return projectService.getProjectByAcronym(control.value).pipe(map(
(project: Project) => {
  return (project) ? {"acronymExists": true} : null;
}
));
};

}

@Directive({
  selector: '[appUniqueAcronym]',
  providers: [{provide: NG_ASYNC_VALIDATORS, useExisting:uniqueAcronymValidator, multi:true}]
})
export class UniqueAcronymValidatorDirective implements AsyncValidator {
  constructor(private projectService: ProjectService) { }

  validate(control: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {
    return uniqueAcronymValidator(this.projectService)(control);
  }
}
