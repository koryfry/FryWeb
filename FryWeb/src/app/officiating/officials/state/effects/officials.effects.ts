import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Action, Store } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { OfficialActionTypes, LoadOfficialsRequest, LoadOfficialsRequestSuccess, LoadOfficialsRequestFail,
        CreateOfficialRequest, CreateOfficialRequestFail, CreateOfficialRequestSuccess,
        OpenSelectedOfficialDetails, OpenSelectedOfficialDetailsSuccess, OpenSelectedOfficialDetailsFail } from '../actions';
import * as OfficialsActions from '../actions';
import { map, withLatestFrom, switchMap, catchError, tap } from 'rxjs/operators';

import { OfficialsService } from '../../../../services/officials.service';
import { FwSnackbarService } from 'app/shared/components/fw-snackbar/fw-snackbar.service';

@Injectable()
export class OfficialEffects {
   
   @Effect()
   LoadOfficials$: Observable<Action> = this.actions$
    .ofType<LoadOfficialsRequest>(
        OfficialActionTypes.LoadOfficialsRequest
    )
    .pipe(
        switchMap(() => {
            return this.officialsService
                .getOfficials()
                .pipe(
                    map(officials => new LoadOfficialsRequestSuccess(officials)),
                    catchError(e => of(new LoadOfficialsRequestFail(e)))
                );
        })
    )

    @Effect()
    createOfficial = this.actions$.ofType<CreateOfficialRequest>(OfficialActionTypes.CreateOfficialRequest)
        .pipe(
            map((action: OfficialsActions.CreateOfficialRequest) => action.official),
            switchMap(official => {
                return this.officialsService.createOfficial(official).pipe(
                    switchMap(official => {
                        this.snackBarService.success('Official was successfully created', 'Dismiss', {
                            duration: 3000
                        });
                        return of(new CreateOfficialRequestSuccess(official));
                    }),
                    catchError(error => {
                        this.snackBarService.error(error.stack || 'Oops! Official was not created successfully', 'Dismiss', {
                            duration: 6000
                        });
                        return of(new CreateOfficialRequestFail(error));
                    })
                );
            })
        );

    @Effect()
    openSelectedOfficialDetails$ = this.actions$.
        ofType<OpenSelectedOfficialDetails>(OfficialActionTypes.OpenSelectedOfficialDetails)
        .pipe(
            switchMap((action) => {
                return this.officialsService.getOfficialById(action.officialID)
                    .pipe(
                        map(officialDetailsPreview => {
                            return new OpenSelectedOfficialDetailsSuccess(officialDetailsPreview)
                        }),
                        catchError(error => of(new OpenSelectedOfficialDetailsFail(error)))
                    )
            }
        )
                
    );
    
    constructor(
        private actions$: Actions,
        private officialsService: OfficialsService,
        private snackBarService: FwSnackbarService
    ){}
}