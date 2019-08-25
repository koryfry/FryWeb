import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Arena } from '../models/arena/arena.model';
import { environment } from 'environments/environment';

@Injectable()
export class ArenaService {
  private _baseUrl = "http://localhost:3000/";
  private _valuesUrl = "http://localhost:54264/api/values";
  private _arenasUrl = environment.apiUrl + '/arena/'

  options = new HttpHeaders({
    'Content-Type':'application/json; charset=utf-8;',
    'Accept':'*/*'
  })

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
    return this.http.get<any>(this._valuesUrl)
      .pipe(catchError((error: any) => throwError(error)));
  }

  getValue(id: number): Observable<string> {
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    let param = new HttpParams().set('id', id.toString())
    return this.http.get<string>(`http://localhost:54264/api/values/${id}`,{responseType: 'text' as 'json'})
      .pipe(catchError((error: any) => throwError(error)));
  }

  getAllArenas(): Observable<any> {
    return this.http.get<any>(this._arenasUrl + 'getAllArenas', {headers: this.options})
      .pipe(catchError((error: any) => throwError(error)));
  }

  getSingleArena(arenaID: number): Observable<Arena> {
    const arena = this.http.get<Arena>(this._arenasUrl + 'getArenaById/' + `${arenaID}`, {headers: this.options})
      .pipe(catchError((error: any) => throwError(error)));
    return arena;
  }

}
