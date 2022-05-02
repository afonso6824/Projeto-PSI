import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProjectComponent} from "./project/project.component";
import {ProjectDetailComponent} from "./project-detail/project-detail.component";
import {AutenticationComponent} from "./autentication/autentication.component";


const routes: Routes = [
  {path: 'projects', component: ProjectComponent},
  {path: 'detail/:id', component:ProjectDetailComponent},
  {path: '', redirectTo: '/authentication', pathMatch: 'full'},
  {path: 'authentication', component: AutenticationComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
