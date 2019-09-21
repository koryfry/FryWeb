import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { GameDetail } from '@models/officiating/gameDetail/gameDetail.model';

@Injectable()
export class GameDetailService {

  private _baseUrl = "http://localhost:3000/";
  constructor(private http: HttpClient) { }

  getAllGameDetails(): Observable<GameDetail[]> {
    return this.http
    .get<GameDetail[]>(this._baseUrl + 'gameDetails')
    .pipe(catchError((error: any) => throwError(error)));
  }

  getGameDetailById(id: number): Observable<GameDetail> {
    let params = new HttpParams().set('id', id.toString())
    return this.http
      .get<GameDetail>(this._baseUrl + 'gameDetails/', {params: params})
      .pipe(catchError((error: any) => throwError(error)));
  }

  createGameDetail(arena: GameDetail): Observable<GameDetail> {
    return this.http
      .post<GameDetail>(this._baseUrl + 'gameDetails', arena)
      .pipe(catchError((error: any) => throwError(error)));
  }

}
