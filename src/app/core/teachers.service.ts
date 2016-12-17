import { TeachersObj } from './teachersObj';

import { MyActionsInterface } from './my-actions-interface';
import { Injectable } from '@angular/core';
import { Observable, Operator } from 'rxjs/Rx';
import 'rxjs/add/operator/map'
import { Http, Response, Headers } from '@angular/http'

@Injectable()
export class TeachersService implements MyActionsInterface{

   private teachersUrl = 'api/teachers';
    private headers = new Headers({ 'Content-Type': 'application/json' });

 constructor(private http: Http) { }


    createRecord(teachersObj: TeachersObj): Observable<TeachersObj> {
        return this.http
            .post(this.teachersUrl, JSON.stringify(teachersObj), { headers: this.headers })
            .map(res => res.json().data as TeachersObj)
    }


    listRecord(): Observable<TeachersObj[]> {
        return this.http.get(this.teachersUrl)
            .map((r: Response) => r.json().data as TeachersObj[])
    }

     updateRecord(teachersObj: TeachersObj): Observable<TeachersObj> {
        const url = `${this.teachersUrl}/${teachersObj.id}`;
        return this.http
            .put(url, JSON.stringify(teachersObj), { headers: this.headers })
            .map(() => teachersObj)
    }


        deleteRecord(id: string): Observable<boolean> {
        const url = `${this.teachersUrl}/${id}`;
        return this.http.delete(url, { headers: this.headers })
            .map((r: Response) => r.ok)
    }

    getRecordById(id: string): Observable<TeachersObj> {
        const url = `${this.teachersUrl}/${id}`;
        return this.http.get(url)
            .map((r: Response) => {return r.json().data  as TeachersObj})
    }
  getNextRecordId(){
   
  }
}
