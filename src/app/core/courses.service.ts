import { TeachersService } from './teachers.service';
import { CoursesObj } from './../coursesObj';
import { MyActionsInterface } from './my-actions-interface';
import { Injectable } from '@angular/core';

@Injectable()
export class CoursesService implements MyActionsInterface{

 constructor(private teachersService: TeachersService) { }
coursesObjList :CoursesObj[]=  [
     new CoursesObj(1,"Angular2","32","2017-01-01", "1"),
     new CoursesObj(2,"Ionic","20","2016-12-01", "2"),
     new CoursesObj(3,"Test Automation","30","2016-15-05", "3"),
     new CoursesObj(4,"Machine Learning","45","2017-05-01", "4"),
     new CoursesObj(5,"Test Automation","30","2016-15-05", "5"),
     new CoursesObj(6,"Machine Learning","45","2017-05-01", "6")
   ] 
    createRecord(coursesObj: CoursesObj){
      this.coursesObjList.push(coursesObj);
    }
    listRecord():CoursesObj[]{
      return this.coursesObjList;
    }
    updateRecord(coursesObj: CoursesObj){
      this.getRecordById(""+coursesObj.id).name = coursesObj.name;
      this.getRecordById(""+coursesObj.id).hours = coursesObj.hours;
      this.getRecordById(""+coursesObj.id).startDate = coursesObj.startDate;
      this.getRecordById(""+coursesObj.id).teacher = coursesObj.teacher;
    }
    deleteRecord(id: string){
      var index = this.coursesObjList.indexOf(this.coursesObjList.find(value => value.id === +id));
      this.coursesObjList.splice(index, 1);
    }
    getRecordById(id: string):CoursesObj{
      console.log("ID "+id);
      return this.coursesObjList.find(value => value.id === +id);
   }

  getNextRecordId():string{
    return (this.coursesObjList.length + 1).toString();
  }
}
