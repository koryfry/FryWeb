import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { catchError } from 'rxjs/operators';
import 'rxjs/add/observable/throw';

// Import model
import { AgeGroup } from '../models/ageGroup/age-group.model';

@Injectable()
export class AgeGroupService {
  private _baseUrl = "http://localhost:3000/";
  constructor(private http: HttpClient) { }

  getAgeGroups(): Observable<AgeGroup[]> {
    return this.http
      .get(this._baseUrl + 'ageGroups')
      .pipe(catchError((error: any) => Observable.throw(error)));
  }

  getAgeGroupById(id: number): Observable<AgeGroup> {
    let params = new HttpParams().set('id', id.toString())
    return this.http
      .get(this._baseUrl + 'ageGroups/', {params: params})
      .pipe(catchError((error: any) => Observable.throw(error)));
  }

}
