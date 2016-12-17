import { Observable } from 'rxjs/Rx';
import { CoursesObj } from './../core/coursesObj';
import { CoursesService } from './../core/courses.service';

import { TeachersService } from './../core/teachers.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, Attribute } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
 private fecha;

 courses: Observable<CoursesObj[]>;
activeHome:string="";
activeTeacher:string="";
activeCourse:string="active";

_courses : CoursesObj[];
  constructor(@Attribute("format") format,private route: ActivatedRoute, private coursesService : CoursesService) {
    
   }

  ngOnInit() {
     this.fecha =  new Date();
     this.courses = this.coursesService.listRecord();
  }
  
  deleteRecord(id: string){
     this.coursesService.deleteRecord(id).subscribe(ok => this.courses = this.coursesService.listRecord());
  }

}
