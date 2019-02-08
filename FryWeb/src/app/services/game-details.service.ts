import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { GameDetail } from '../models/gameDetail/gameDetail.model';

@Injectable()
export class GameDetailService {

  private _baseUrl = "http://localhost:3000/";
  constructor(private http: HttpClient) { }

  getAllGameDetails(): Observable<GameDetail[]> {
    return this.http
    .get<GameDetail[]>(this._baseUrl + 'gameDetails')
    .pipe(catchError((error: any) => throwError(error)));
  }

}
