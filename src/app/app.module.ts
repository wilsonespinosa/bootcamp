import { TeacherDetailComponent } from './teachers/teacher-detail/teacher-detail.component';

import { CourseDetailComponent } from './courses/course-detail/course-detail.component';
import { StartDateIconComponent } from './share/start-date/start-date.component';
import { TeachersService } from './core/teachers.service';
import { CoursesService } from './core/courses.service';

import { TeachersComponent } from './teachers/teachers.component';
import { CoursesComponent } from './courses/courses.component';
import { HomeComponent } from './home/home.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { RouterModule} from '@angular/router';
import { NavTabComponent } from './share/nav-tab/nav-tab.component';

import {DataTableModule} from "angular2-datatable";

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './core/fake-API.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CoursesComponent,
    TeachersComponent,
    NavTabComponent,
    CourseDetailComponent,
    TeacherDetailComponent,
    StartDateIconComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    DataTableModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    RouterModule.forRoot([
    {
        path: 'teachers/:id',
        component: TeacherDetailComponent
      },
      {
        path: 'teachers/add',
        component: TeacherDetailComponent
      },
      {
        path: 'courses/:id',
        component: CourseDetailComponent
      },
      {
        path: 'courses/add',
        component: CourseDetailComponent
      },{
        path: 'teachers',
        component: TeachersComponent
      },
      {
        path: 'courses',
        component: CoursesComponent
      },
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      },
      {
        path: '**',
        redirectTo: 'home',
        pathMatch: 'full'
      }
    ]),
  ],
  providers: [CoursesService,TeachersService],
  bootstrap: [AppComponent],

})
export class AppModule { }
