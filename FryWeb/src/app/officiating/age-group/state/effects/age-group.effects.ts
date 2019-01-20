import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Action, Store } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { AgeGroupActionTypes, LoadAgeGroupsRequestRequest, LoadAgeGroupsRequestRequestSuccess, LoadAgeGroupsRequestRequestFail } from '../actions';
import { map, withLatestFrom, switchMap, catchError, tap } from 'rxjs/operators';

import { AgeGroupService } from '../../../../services/age-group.service';

@Injectable()
export class AgeGroupEffects {
   
   @Effect()
   LoadAgeGroups$: Observable<Action> = this.actions$
    .ofType<LoadAgeGroupsRequestRequest>(
        AgeGroupActionTypes.LoadAgeGroupsRequest
    )
    .pipe(
        switchMap(() => {
            return this.ageGroupService
                .getAgeGroups()
                .pipe(
                    map(ageGroups => new LoadAgeGroupsRequestRequestSuccess(ageGroups)),
                    catchError(e => of(new LoadAgeGroupsRequestRequestFail(e)))
                );
        })
    )
    
    constructor(
        private actions$: Actions,
        private ageGroupService: AgeGroupService
    ){}
}