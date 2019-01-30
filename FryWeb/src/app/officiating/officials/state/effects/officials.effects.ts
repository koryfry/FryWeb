import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Action, Store } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { OfficialActionTypes, LoadOfficialsRequest, LoadOfficialsRequestSuccess, LoadOfficialsRequestFail,
            CreateOfficialRequest, CreateOfficialRequestFail, CreateOfficialRequestSuccess } from '../actions';
import * as OfficialsActions from '../actions';
import { map, withLatestFrom, switchMap, catchError, tap } from 'rxjs/operators';

import { OfficialsService } from '../../../../services/officials.service';

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
    createOfficial = this.actions$
        .ofType<CreateOfficialRequest>(OfficialActionTypes.CreateOfficialRequest)
        .pipe(
            map((action: OfficialsActions.CreateOfficialRequest) => action.official),
            switchMap(official => {
                return this.officialsService.createOfficial(official)
                    .pipe(
                        map(official => new CreateOfficialRequestSuccess(official)),
                        catchError(e => of(new CreateOfficialRequestFail(e)))
                    )
            })
        );
    
    constructor(
        private actions$: Actions,
        private officialsService: OfficialsService
    ){}
}