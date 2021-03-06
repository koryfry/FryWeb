import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Official } from '@models/officiating/official/official.model';

@Injectable()
export class OfficialsService {

  private _baseUrl = "http://localhost:3000/officials/";
  constructor(private http: HttpClient) { }

  getOfficials(): Observable<Official[]> {
    return this.http
      .get<Official[]>(this._baseUrl)// + 'officials')
      .pipe(catchError((error: any) => throwError(error)));
  }

  getOfficialById(id: number): Observable<Official> {
    let params = new HttpParams().set('id', id.toString())
    return this.http
      .get<Official>(this._baseUrl, {params: params})
      .pipe(catchError((error: any) => throwError(error)));
  }

  createOfficial(official: Official): Observable<Official> {
    return this.http
      .post<Official>(this._baseUrl, official)
      .pipe(catchError((error: any) => throwError(error)));
  }

  updateOfficial(id: number, official: Partial<Official>): Observable<Official> {
    return this.http.put<Official>(`${this._baseUrl}${official.id}`, official)
    .pipe(catchError((error: any) => throwError(error)));
  }

}
