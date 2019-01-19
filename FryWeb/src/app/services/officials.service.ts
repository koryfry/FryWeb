import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Official } from '../models/official/official.model';

@Injectable()
export class OfficialsService {

  private _baseUrl = "http://localhost:3000/";
  constructor(private http: HttpClient) { }

  getOfficials(): Observable<Official[]> {
    return this.http
      .get<Official[]>(this._baseUrl + 'officials')
      .pipe(catchError((error: any) => throwError(error)));
  }

  getOfficialById(id: number): Observable<Official> {
    let params = new HttpParams().set('id', id.toString())
    return this.http
      .get<Official>(this._baseUrl + 'officials/', {params: params})
      .pipe(catchError((error: any) => throwError(error)));
  }

}