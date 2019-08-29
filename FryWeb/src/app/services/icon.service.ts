import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Icon } from '../models/icon/icon';
import { environment } from 'environments/environment';

@Injectable()
export class IconService {
  private _iconsUrl = environment.apiUrl + '/icon/'
  
  options = new HttpHeaders({
    'Content-Type':'application/json; charset=utf-8;',
    'Accept':'*/*'
  })

  constructor(private http: HttpClient) { }

  getApplicationIcons(): Observable<Icon[]> {
    return this.http.get<Icon[]>(this._iconsUrl + 'getApplicationIcons', {headers: this.options})
      .pipe(catchError((error: any) => throwError(error)));
  }
}
