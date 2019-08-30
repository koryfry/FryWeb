import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Action, Store } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { ApplicationIconActionTypes, LoadApplicationIconsRequest, LoadApplicationIconsRequestSuccess, LoadApplicationIconsRequestFail } from './application-icon.actions';
import { map, withLatestFrom, switchMap, catchError, tap } from 'rxjs/operators';

import { IconService } from '../../../services/icon.service';
import { Router } from '@angular/router';
import { FwSnackbarService } from '../../../shared/components/fw-snackbar/fw-snackbar.service';

@Injectable()
export class ApplicationIconEffects {

  @Effect()
  LoadApplicationIcons$: Observable<Action> = this.actions$
   .ofType<LoadApplicationIconsRequest>(
       ApplicationIconActionTypes.LoadApplicationIconsRequest
   )
   .pipe(
       switchMap(() => {
           return this.iconService.getApplicationIcons()
               .pipe(
                   map(icons => new LoadApplicationIconsRequestSuccess(icons)),
                   catchError(e => of(new LoadApplicationIconsRequestFail(e)))
               );
       })
   );

   constructor(
    private actions$: Actions,
    private iconService: IconService,
    private snackBarService: FwSnackbarService
  ){}
}