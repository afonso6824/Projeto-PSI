import {Component, OnInit,} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProjectService } from '../project.service'
import { Project } from '../project';
import {Schema} from "mongoose";
import {UniqueAcronymValidator} from "../Validators/acronym.directive";
import {endDateValidator} from "../Validators/end-date.directive";
import {beginDateValidator} from "../Validators/begin-date.directive";
import {beginDateTodayValidator} from  "../Validators/begin-date-today.directive";

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
  projectForm!: FormGroup;
  project = {name : "name", acronym: "acr", beginDate: "dd/mm/aaaa", endDate: "dd/mm/aaaa"};
  constructor(private projectService: ProjectService, private uniqueAcronymValidator: UniqueAcronymValidator) { }

  ngOnInit(): void {
    this.projectForm = new FormGroup({
      name: new FormControl(this.project.name, [
        Validators.required,
        Validators.minLength(4),
        Validators.pattern("[a-zA-Z0-9]+")
      ]),
      //TODO VER SE É PRECISO O UTILIZADOR POR, SE SIM FALTA VALIDAÇOES, MIN E MAX E REQUIRED
      acronym: new FormControl(this.project.acronym,  {
        asyncValidators: [this.uniqueAcronymValidator.validate.bind(this.uniqueAcronymValidator)],
        updateOn: "blur"
      }),
      beginDate: new FormControl(new Date(this.project.beginDate), [
        beginDateValidator(),
        beginDateTodayValidator(),
      ]),
      endDate: new FormControl(this.project.endDate,)

    }, {validators: endDateValidator});
  }

  get name() {return this.projectForm.get("name")!; }

  get acronym() {return this.projectForm.get("acronym")!; }

  get beginDate() {return this.projectForm.get("beginDate")!; }

  get endDate() {return this.projectForm.get("endDate")!; }

  createProject() {
    //pop out ou muda de html/ css
  }

  addProject(name: string, acronym: string, beginDate: string, endDate: string) {
    let date = new Date(beginDate)
    console.log();

    if ( endDate !== "0000-00-00") {
      this.projectService.addNewProject({name,acronym,beginDate,endDate} as Project);
      return false;
    }
    this.projectService.addNewProject({name,acronym,beginDate} as Project);
    return false;
  }

  /*
  checkBeginDate(begin: string) {
   let beginDate = new Date(begin);
   let now = new Date();
    if (beginDate < now){

      return false;
    }
    return true;
  }
  */

}
