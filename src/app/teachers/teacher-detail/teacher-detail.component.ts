import { TeachersService } from './../core/teachers.service';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { TeachersObj } from './../core/teachersObj';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-teacher-detail',
  templateUrl: './teacher-detail.component.html',
  styleUrls: ['./teacher-detail.component.css']
})
export class TeacherDetailComponent implements OnInit {

  teacherId: string;
  teacher: TeachersObj;
  
  constructor( private route: ActivatedRoute, private router: Router, private teacherService : TeachersService) { }  

  ngOnInit() {
      this.route.params.forEach((params: Params) => this.teacherId = params["id"]);
    if(this.teacherId === "add"){
      this.teacher = new TeachersObj(+this.teacherService.getNextRecordId());
    }else{
      this.teacher = this.teacherService.getRecordById(this.teacherId);
    }
  }



  onSubmit() {
    if(this.teacherId === "add"){
      this.teacherService.createRecord(this.teacher);
      this.router.navigateByUrl('/teachers');
    }
    else{
      this.teacherService.updateRecord(this.teacher);
      this.router.navigateByUrl('/teachers');
    }
  }

}
