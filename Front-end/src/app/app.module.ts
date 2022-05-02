import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { ProjectComponent } from './project/project.component';
import { AppRoutingModule } from './app-routing.module';
import { UniqueAcronymValidatorDirective} from './Validators/acronym.directive';
import { EndDateValidatorDirective } from './Validators/end-date.directive';
import { BeginDateValidatorDirective } from './Validators/begin-date.directive';
import { BeginDateTodayValidatorDirective } from './Validators/begin-date-today.directive';
import { ProjectDetailComponent } from './project-detail/project-detail.component';
import { AutenticationComponent } from './autentication/autentication.component';
import { MainMenuComponent } from './main-menu/main-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    ProjectComponent,
    UniqueAcronymValidatorDirective,
    EndDateValidatorDirective,
    BeginDateValidatorDirective,
    BeginDateTodayValidatorDirective,
    ProjectDetailComponent,
    AutenticationComponent,
    MainMenuComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
