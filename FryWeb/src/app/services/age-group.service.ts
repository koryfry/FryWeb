import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { Observable, Subject, pipe, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

// Import model
import { AgeGroup } from '../models/ageGroup/age-group.model';

@Injectable()
export class AgeGroupService {
  private _baseUrl = "http://localhost:3000/ageGroups/";
  constructor(private http: HttpClient) { }

  getAgeGroups(): Observable<AgeGroup[]> {
    return this.http
      .get<AgeGroup[]>(this._baseUrl) //+ 'ageGroups')
      .pipe(catchError((error: any) => throwError(error)));
  }

  getAgeGroupById(id: number): Observable<AgeGroup> {
    let params = new HttpParams().set('id', id.toString())
    return this.http
      .get<AgeGroup>(this._baseUrl, {params: params})
      .pipe(catchError((error: any) => throwError(error)));
  }

  createAgeGroup(ageGroup: AgeGroup): Observable<AgeGroup> {
    return this.http
      .post<AgeGroup>(this._baseUrl, ageGroup)
      .pipe(catchError((error: any) => throwError(error)));
  }

  updateAgeGroup(id: number, ageGroup: Partial<AgeGroup>): Observable<AgeGroup> {
    return this.http.put<AgeGroup>(`${this._baseUrl}${ageGroup.id}`, ageGroup)
    .pipe(catchError((error: any) => throwError(error)));
  }
}
