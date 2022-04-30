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

  constructor(private http: HttpClient) { }

  /** POST: add a new project to the server */
  //TODO alterar parametros para um objeto project
  addNewProject( project: Project) {
    console.log(project);
  }

  isAcronymTaken(value: any): Observable<boolean> {
    //TODO is taken
    const isTaken = false;
    return of(isTaken).pipe(delay(400));
  }
}
