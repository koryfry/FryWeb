import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { catchError } from 'rxjs/operators';
import 'rxjs/add/observable/throw';

import { Arena } from '../models/arena/arena.model';

@Injectable()
export class ArenaService {
  private _baseUrl = "http://localhost:3000/";
  constructor(private http: HttpClient) { }

  getArenas(): Observable<Arena[]> {
    return this.http
      .get(this._baseUrl + 'arenas')
      .pipe(catchError((error: any) => Observable.throw(error)));
  }

  getArenaById(id: number): Observable<Arena> {
    let params = new HttpParams().set('id', id.toString())
    return this.http
      .get(this._baseUrl + 'arenas/', {params: params})
      .pipe(catchError((error: any) => Observable.throw(error)));
  }

}
