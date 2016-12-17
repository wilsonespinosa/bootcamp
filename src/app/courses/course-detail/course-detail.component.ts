import { TeachersService } from './../../core/teachers.service';
import { CoursesService } from './../../core/courses.service';
import { TeachersObj } from './../../core/teachersObj';
import { CoursesObj } from './../../core/coursesObj';

import { ActivatedRoute, Router, Params } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.css']
})
export class CourseDetailComponent implements OnInit {
 

  courseId: string;
  course : CoursesObj;  
  teachers: Observable<TeachersObj[]>;
  constructor( private route: ActivatedRoute, private router: Router, private coursesService : CoursesService, private teacherService : TeachersService) { }

  ngOnInit() {
      this.teachers = this.teacherService.listRecord();
      this.route.params.forEach((params: Params) => this.courseId = params["id"]);
    if(this.courseId === "add"){
       this.course = new CoursesObj(+this.coursesService.getNextRecordId());
    }else{
      this.coursesService.getRecordById(this.courseId).subscribe(course => {this.course = course});
    }
  } 



  onSubmit() {
    if(this.courseId === "add"){
      this.coursesService.createRecord(this.course).subscribe(courso => this.router.navigateByUrl('/courses') );
    }
    else{
      this.coursesService.updateRecord(this.course).subscribe(courso => this.router.navigateByUrl('/courses') );
    }
  }

}
