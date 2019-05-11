import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Arena } from '../models/arena/arena.model';

@Injectable()
export class ArenaService {
  private _baseUrl = "http://localhost:3000/";
  private _testUrl = "http://localhost:54264/api/values";
  constructor(private http: HttpClient) { }

  getArenas(): Observable<Arena[]> {
    return this.http
      .get<Arena[]>(this._baseUrl + 'arenas')
      .pipe(catchError((error: any) => throwError(error)));
  }

  getArenaById(id: number): Observable<Arena> {
    let params = new HttpParams().set('id', id.toString())
    return this.http
      .get<Arena>(this._baseUrl + 'arenas/', {params: params})
      .pipe(catchError((error: any) => throwError(error)));
  }

  createArena(arena: Arena): Observable<Arena> {
    return this.http
      .post<Arena>(this._baseUrl + 'arenas', arena)
      .pipe(catchError((error: any) => throwError(error)));
  }

  getValues(): Observable<any> {
    return this.http.get<any>(this._testUrl)
      .pipe(catchError((error: any) => throwError(error)));
  }

  getValue(id: number): Observable<string> {
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    let param = new HttpParams().set('id', id.toString())
    return this.http.get<string>(`http://localhost:54264/api/values/${id}`,{responseType: 'text' as 'json'})
      .pipe(catchError((error: any) => throwError(error)));
  }

}
