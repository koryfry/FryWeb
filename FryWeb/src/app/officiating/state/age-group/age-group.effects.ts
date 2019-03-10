import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Action, Store } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { AgeGroupActionTypes, LoadAgeGroupsRequest, LoadAgeGroupsRequestSuccess, LoadAgeGroupsRequestFail, 
            AddAgeGroupRequest, AddAgeGroupRequestSuccess, AddAgeGroupRequestFail, OpenSelectedAgeGroupDetails,
            OpenSelectedAgeGroupDetailsSuccess, OpenSelectedAgeGroupDetailsFail} from './age-group.actions';
import * as AgeGroupActions from './';
import { map, withLatestFrom, switchMap, catchError, tap } from 'rxjs/operators';

import { AgeGroupService } from '../../../services/age-group.service';
import { FwSnackbarService } from '../../../shared/components/fw-snackbar/fw-snackbar.service';

@Injectable()
export class AgeGroupEffects {
   
   @Effect()
   LoadAgeGroups$: Observable<Action> = this.actions$
    .ofType<LoadAgeGroupsRequest>(
        AgeGroupActionTypes.LoadAgeGroupsRequest
    )
    .pipe(
        switchMap(() => {
            return this.ageGroupService
                .getAgeGroups()
                .pipe(
                    map(ageGroups => new LoadAgeGroupsRequestSuccess(ageGroups)),
                    catchError(e => of(new LoadAgeGroupsRequestFail(e)))
                );
        })
    )

    @Effect()
    createAgeGroup$ = this.actions$
    .ofType<AddAgeGroupRequest>(AgeGroupActionTypes.AddAgeGroupRequest)
    .pipe(
        map((action: AgeGroupActions.AddAgeGroupRequest) => action.ageGroup),
        switchMap(ageGroup => {
            return this.ageGroupService.createAgeGroup(ageGroup).pipe(
                switchMap(ageGroup => {
                    this.snackBarService.success('Age Group was successfully created', 'Dismiss', {
                        duration: 3000
                    });
                    return of(new AddAgeGroupRequestSuccess(ageGroup));
                }),
                catchError(error => {
                    this.snackBarService.error(error.stack || 'Oops! Age Group was not created successfully', 'Dismiss', {
                        duration: 6000
                    });

                    return of(new AddAgeGroupRequestFail(error));
                })
            );
        })       
    );

    @Effect()
    openSelectedArenaDetails$ = this.actions$.
        ofType<OpenSelectedAgeGroupDetails>(AgeGroupActionTypes.OpenSelectedAgeGroupDetails)
        .pipe(
            switchMap((action) => {
                return this.ageGroupService.getAgeGroupById(action.ageGroupID)
                    .pipe(
                        map(ageGroupDetailsPreview => {
                            return new OpenSelectedAgeGroupDetailsSuccess(ageGroupDetailsPreview)
                        }),
                        catchError(error => of(new OpenSelectedAgeGroupDetailsFail(error)))
                    )
            }
        )
             
    );
    
    constructor(
        private actions$: Actions,
        private ageGroupService: AgeGroupService,
        private snackBarService: FwSnackbarService
    ){}
}