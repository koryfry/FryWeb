import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Action, Store } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { AgeGroupActionTypes, LoadAgeGroupsRequestRequest, LoadAgeGroupsRequestRequestSuccess, LoadAgeGroupsRequestRequestFail, 
            CreateAgeGroupRequest, CreateAgeGroupRequestSuccess, CreateAgeGroupRequestFail} from '../actions';
import * as AgeGroupActions from '../actions';
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

    @Effect()
    createAgeGroup$ = this.actions$
    .ofType<CreateAgeGroupRequest>(AgeGroupActionTypes.CreateAgeGroupRequest)
    .pipe(
        map((action: AgeGroupActions.CreateAgeGroupRequest) => action.ageGroup),
        switchMap(ageGroup => {
            return this.ageGroupService
                .createAgeGroup(ageGroup)
                .pipe(
                    map(ageGroup => new CreateAgeGroupRequestSuccess(ageGroup)),
                    catchError(e => of(new CreateAgeGroupRequestFail(e)))
                )
        })        
    );
    
    constructor(
        private actions$: Actions,
        private ageGroupService: AgeGroupService
    ){}
}