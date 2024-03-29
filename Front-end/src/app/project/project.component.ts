import {Component, OnInit,} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ProjectService} from '../project.service'
import {Project} from '../project';
import {uniqueAcronymValidator} from "../Validators/acronym.directive";
import {endDateValidator} from "../Validators/end-date.directive";
import {beginDateValidator} from "../Validators/begin-date.directive";
import {beginDateTodayValidator} from "../Validators/begin-date-today.directive";

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
  projectForm!: FormGroup;
  project = {name: "", acronym: "", beginDate: "dd/mm/aaaa", endDate: "dd/mm/aaaa"};
  currentUser = history.state;
  //todo alterar true
  hiddenvar = false;



  constructor(private projectService: ProjectService) {
  }

  ngOnInit(): void {
    if (this.currentUser.adm) {
      this.hiddenvar = false;
      this.projectForm = new FormGroup({
        name: new FormControl(this.project.name, [
          Validators.required,
          Validators.minLength(4),
          Validators.pattern("[a-zA-Z0-9]+")
        ]),
        //TODO VER SE É PRECISO O UTILIZADOR POR acro, SE SIM FALTA VALIDAÇOES, MIN E MAX E REQUIRED
        acronym: new FormControl(this.project.acronym, [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(3)
        ], uniqueAcronymValidator(this.projectService)),
        beginDate: new FormControl(new Date(this.project.beginDate), [
          beginDateValidator(),
          beginDateTodayValidator(),
        ]),
        endDate: new FormControl(this.project.endDate,)

      }, {validators: endDateValidator});
    }
  }

  get name() {
    return this.projectForm.get("name")!;
  }

  get acronym() {
    return this.projectForm.get("acronym")!;
  }

  get beginDate() {
    return this.projectForm.get("beginDate")!;
  }

  get endDate() {
    return this.projectForm.get("endDate")!;
  }

  createProject() {
    //pop out ou muda de html/ css
  }

  addProject(name: string, acronym: string, beginDate: string, endDate: string) {
    //TODO VER SE É PRECISO INICIALIZAR let tasks: task[] = [];
    if (endDate !== this.project.endDate) {
      //this.projectService.addNewProject({name,acronym,beginDate,endDate,tasks} as Project);
      return false;
    }
    //this.projectService.addNewProject({name,acronym,beginDate,tasks} as Project);
    return false;
  }

}
