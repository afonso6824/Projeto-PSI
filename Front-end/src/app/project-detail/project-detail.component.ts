import {Component, Input, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProjectService } from '../project.service';
import {Project} from "../project";

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.css']
})
export class ProjectDetailComponent implements OnInit {
  @Input() project?: Project;


  constructor(private route: ActivatedRoute,private projectService: ProjectService) { }

  ngOnInit(): void {
      this.getProject();
  }

  private getProject(): void {
    const id = '' + this.route.snapshot.paramMap.get('id');
    this.projectService.getProject(id)
      .subscribe(project => this.project = project);
  }

  save(): void {
    if (this.project) {
      this.projectService.updateProject(this.project);
    }
  }
}
