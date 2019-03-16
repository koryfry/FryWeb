import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Action, Store } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { OfficialActionTypes, LoadOfficialsRequest, LoadOfficialsRequestSuccess, LoadOfficialsRequestFail,
        AddOfficialRequest, AddOfficialRequestFail, AddOfficialRequestSuccess,
        OpenSelectedOfficialDetails, OpenSelectedOfficialDetailsSuccess, OpenSelectedOfficialDetailsFail } from './official.actions';
import * as OfficialsActions from './';
import { map, withLatestFrom, switchMap, catchError, tap } from 'rxjs/operators';

import { OfficialsService } from '../../../services/officials.service';
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
    createOfficial = this.actions$.ofType<AddOfficialRequest>(OfficialActionTypes.AddOfficialRequest)
        .pipe(
            map((action: OfficialsActions.AddOfficialRequest) => action.official),
            switchMap(official => {
                return this.officialsService.createOfficial(official).pipe(
                    switchMap(official => {
                        this.snackBarService.success('Official was successfully created', 'Dismiss', {
                            duration: 3000
                        });
                        return of(new AddOfficialRequestSuccess(official));
                    }),
                    catchError(error => {
                        this.snackBarService.error(error.stack || 'Oops! Official was not created successfully', 'Dismiss', {
                            duration: 6000
                        });
                        return of(new AddOfficialRequestFail(error));
                    })
                );
            })
        );

    @Effect()
    openSelectedOfficialDetails$ = this.actions$.
        ofType<OpenSelectedOfficialDetails>(OfficialActionTypes.OpenSelectedOfficialDetails)
        .pipe(
            switchMap((action) => {
                return this.officialsService.getOfficialById(action.selectedOfficial.id)
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