import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Action, Store } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { ArenaActionTypes, LoadArenasRequest, LoadArenasRequestSuccess, LoadArenasRequestFail, CreateArenaRequest, CreateArenaRequestSuccess, CreateArenaRequestFail,
            OpenSelectedArenaDetails } from '../actions';
import * as ArenaActions from '../actions';
import { map, withLatestFrom, switchMap, catchError, tap } from 'rxjs/operators';
import { getArenaState } from '../selectors';
import { ArenaState } from '../reducers';

import { ArenaService } from '../../../../services/arena.service';
import { Router } from '@angular/router';
import { FwSnackbarService } from '../../../../shared/components/fw-snackbar/fw-snackbar.service';

@Injectable()
export class ArenaEffects {
   
   @Effect()
   LoadArenas$: Observable<Action> = this.actions$
    .ofType<LoadArenasRequest>(
        ArenaActionTypes.LoadArenasRequest
    )
    .pipe(
        switchMap(() => {
            return this.arenaService
                .getArenas()
                .pipe(
                    map(arenas => new LoadArenasRequestSuccess(arenas)),
                    catchError(e => of(new LoadArenasRequestFail(e)))
                );
        })
    )

    @Effect()
    createArena$ = this.actions$
        .ofType<CreateArenaRequest>(ArenaActionTypes.CreateArenaRequest)
        .pipe(
            map((action: ArenaActions.CreateArenaRequest) => action.arena),
            switchMap(arena => {
                return this.arenaService.createArena(arena).pipe(                     
                    switchMap(arena => {
                        this.snackBarService.success('Arena was successfully created', 'Dismiss', {
                            duration: 3000
                        });    
                        
                        return of(new CreateArenaRequestSuccess(arena));
                    }),
                    catchError(error => {
                        this.snackBarService.error(error.stack || 'Oops! Arena was not created successfully', 'Dismiss', {
                            duration: 6000
                        });

                        return of(new CreateArenaRequestFail(error));
                    }) 
                );
            })
        );

    @Effect()
    openSelectedArenaDetails$ = this.actions$.pipe(
        ofType<OpenSelectedArenaDetails>(ArenaActionTypes.OpenSelectedArenaDetails),
        map(
            action => this.router.navigate([`arena/${action.arenaID}`])
        )        
    );
        
    // .pipe(
    //     map((action: ArenaActions.OpenSelectedArenaDetails) =>
    //     tap(() => this.router.navigate([`arena/${action.arenaID}`]))
    // )
    
    constructor(
        private actions$: Actions,
        private arenaService: ArenaService,
        private store$: Store<ArenaState>,
        private router: Router,
        private snackBarService: FwSnackbarService
    ){}
}