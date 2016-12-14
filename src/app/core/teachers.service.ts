import { TeachersObj } from './../teachersObj';
import { MyActionsInterface } from './my-actions-interface';
import { Injectable } from '@angular/core';

@Injectable()
export class TeachersService implements MyActionsInterface{

teachersObjList :TeachersObj[]=  [
     new TeachersObj(1,"Horacio","Guerra"),
     new TeachersObj(2,"Jairo","Rios"),
     new TeachersObj(3,"Frank", "Ramirez"),
     new TeachersObj(4,"Fernando", "Velasquez"),
     new TeachersObj(5,"Anibal", "Arias"),
     new TeachersObj(6,"Nohora", "Quitero"),
     new TeachersObj(7,"Juaquin", "Alvarez"),
   ]
  constructor() { }
    createRecord(teachersObj: TeachersObj){
      this.teachersObjList.push(teachersObj);
    }
    listRecord():TeachersObj[]{
      return this.teachersObjList;
    }
    updateRecord(teachersObj: TeachersObj){
      this.getRecordById(""+teachersObj.id).name = teachersObj.name;
      this.getRecordById(""+teachersObj.id).lastName = teachersObj.lastName;
    }
    deleteRecord(id: string){
      var index = this.teachersObjList.indexOf(this.teachersObjList.find(value => value.id === +id));
      this.teachersObjList.splice(index, 1);
    }
    getRecordById(id: string):TeachersObj{
      return this.teachersObjList.find(value => value.id === +id);
   }

  getNextRecordId():string{
    return (this.teachersObjList.length + 1).toString();
  }
}
