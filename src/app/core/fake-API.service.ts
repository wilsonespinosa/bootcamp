import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
    createDb() {

      let courses = [
        { id: 1, name:'Angular2', hours:'32', startDate:'2017-01-01', teacher:'1'},
        { id: 2, name:'Ionic', hours:'20', startDate:'2016-12-01', teacher:'2'},
        { id: 3, name:'Test Automation', hours:'30', startDate:'2016-05-15', teacher:'3'},
        { id: 4, name:'Machine Learning', hours:'45', startDate:'2017-05-01', teacher:'4'},
        { id: 5, name:'Test Automation', hours:'30', startDate:'2016-05-15', teacher:'5'},
        { id: 6, name:'Machine Learning', hours:'45', startDate:'2017-05-01', teacher:'6'}
   ];

let teachers =  [
     { id: 1, name:'Horacio', lastName:'Guerra'},
     { id: 2, name:'Jairo', lastName:'Rios'},
     { id: 3, name:'Frank', lastName:'Ramirez'},
     { id: 4, name:'Fernando', lastName:'Velasquez'},
     { id: 5, name:'Anibal', lastName:'Arias'},
     { id: 6, name:'Nohora', lastName:'Quitero'},
     { id: 7, name:'Juaquin', lastName:'Alvarez'}
   ];
        return { courses, teachers };
    }
}