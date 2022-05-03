import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Project } from './project';
import {delay, Observable, of} from "rxjs";
@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  private projectsUrl = 'http://localhost:30013/';
  constructor(private http: HttpClient) { }

  /** POST: add a new project to the server */
  //TODO alterar parametros para um objeto project
  addNewProject( project: Project) {
    this.http.post(this.projectsUrl + 'project', project, this.httpOptions );
  }


  getProject(id: string): Observable<Project> {
    const url = `${this.projectsUrl}project/${id}`;
    return this.http.get<Project>(url);
  }

  /** PUT*/
  updateProject(project: Project) {
    const url = `${this.projectsUrl}project/${project._id}`;
    return this.http.put(url,project,this.httpOptions);
  }


  getProjectByAcronym(acronym: string): Observable<Project>{
    const url = `${this.projectsUrl}project/${acronym}`;
    return this.http.get<Project>(url);
  }
}
