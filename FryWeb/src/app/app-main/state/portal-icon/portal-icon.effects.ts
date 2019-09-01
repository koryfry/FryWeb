import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Action, Store } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { PortalIconActionTypes, LoadPortalIconsRequest, LoadPortalIconsRequestSuccess, LoadPortalIconsRequestFail } from './portal-icon.actions';
import { map, withLatestFrom, switchMap, catchError, tap } from 'rxjs/operators';

import { IconService } from '../../../services/icon.service';
import { Router } from '@angular/router';
import { FwSnackbarService } from '../../../shared/components/fw-snackbar/fw-snackbar.service';

@Injectable()
export class PortalIconEffects {

  @Effect()
  LoadPortalIcons$: Observable<Action> = this.actions$
   .ofType<LoadPortalIconsRequest>(
       PortalIconActionTypes.LoadPortalIconsRequest
   )
   .pipe(
       switchMap(() => {
           return this.iconService.getPortalIcons()
               .pipe(
                   map(icons => new LoadPortalIconsRequestSuccess(icons)),
                   catchError(e => of(new LoadPortalIconsRequestFail(e)))
               );
       })
   );

   constructor(
    private actions$: Actions,
    private iconService: IconService,
    private snackBarService: FwSnackbarService
  ){}
}