import { CoursesObj } from './coursesObj';
import { TeachersService } from './teachers.service';

import { MyActionsInterface } from './my-actions-interface';
import { Injectable } from '@angular/core';

import { Observable, Operator } from 'rxjs/Rx';
import 'rxjs/add/operator/map'
import { Http, Response, Headers } from '@angular/http'

@Injectable()
export class CoursesService implements MyActionsInterface{
    private coursesUrl = 'api/courses';
    private headers = new Headers({ 'Content-Type': 'application/json' });

 constructor(private http: Http, private teachersService: TeachersService) { }

    createRecord(coursesObj: CoursesObj): Observable<CoursesObj> {
        return this.http
            .post(this.coursesUrl, JSON.stringify(coursesObj), { headers: this.headers })
            .map(res => res.json().data as CoursesObj)
    }


    listRecord(): Observable<CoursesObj[]> {
        return this.http.get(this.coursesUrl)
            .map((r: Response) => r.json().data as CoursesObj[])
    }


     updateRecord(coursesObj: CoursesObj): Observable<CoursesObj> {
        const url = `${this.coursesUrl}/${coursesObj.id}`;
        return this.http
            .put(url, JSON.stringify(coursesObj), { headers: this.headers })
            .map(() => coursesObj)
    }

    deleteRecord(id: string): Observable<boolean> {
        const url = `${this.coursesUrl}/${id}`;
        return this.http.delete(url, { headers: this.headers })
            .map((r: Response) => r.ok)
    }

    getRecordById(id: string): Observable<CoursesObj> {
        const url = `${this.coursesUrl}/${id}`;
        return this.http.get(url)
            .map((r: Response) => {return r.json().data as CoursesObj})
    }

    getNextRecordId(){
      
    }
}
