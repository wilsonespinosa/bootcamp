import { TeachersService } from './../../core/teachers.service';
import { TeachersObj } from './../../core/teachersObj';

import { ActivatedRoute, Router, Params } from '@angular/router';

import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'app-teacher-detail',
  templateUrl: './teacher-detail.component.html',
  styleUrls: ['./teacher-detail.component.css']
})
export class TeacherDetailComponent implements OnInit {

  teacherId: string;
  teacher: TeachersObj;
   teachers: Observable<TeachersObj[]>;
  constructor( private route: ActivatedRoute, private router: Router, private teacherService : TeachersService) { }  

  ngOnInit() {
      this.route.params.forEach((params: Params) => this.teacherId = params["id"]);
    if(this.teacherId === "add"){
      this.teacher = new TeachersObj(null);
    }else{
    this.teacherService.getRecordById(this.teacherId).subscribe(teacher => {this.teacher = teacher});

    }
  }



  onSubmit() {
    if(this.teacherId === "add"){
      this.teacherService.createRecord(this.teacher).subscribe(courso => this.router.navigateByUrl('/teachers') );
    }
    else{
      this.teacherService.updateRecord(this.teacher).subscribe(courso => this.router.navigateByUrl('/teachers') );
    }
  }

}
