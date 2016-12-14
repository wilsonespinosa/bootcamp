import { TeachersObj } from './teachersObj';

export class CoursesObj{

    constructor(
        public id: number,
         public name: string ="" ,
         public hours: string ="" ,
         public startDate: string ="" ,
         public teacher: string = ""
    ){}
}