import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Action, Store } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { ArenaActionTypes, LoadArenasRequest, LoadArenasRequestSuccess, LoadArenasRequestFail, AddArenaRequest, AddArenaRequestSuccess, AddArenaRequestFail,
            OpenSelectedArenaDetails, OpenSelectedArenaDetailsSuccess, OpenSelectedArenaDetailsFail } from './arena.actions';
import * as ArenaActions from './';
import { map, withLatestFrom, switchMap, catchError, tap } from 'rxjs/operators';

import { ArenaService } from '../../../services/arena.service';
import { Router } from '@angular/router';
import { FwSnackbarService } from '../../../shared/components/fw-snackbar/fw-snackbar.service';

@Injectable()
export class ArenaEffects {
   
   @Effect()
   LoadArenas$: Observable<Action> = this.actions$
    .ofType<LoadArenasRequest>(
        ArenaActionTypes.LoadArenasRequest
    )
    .pipe(
        switchMap(() => {
            return this.arenaService.getAllArenas()
                .pipe(
                    map(arenas => new LoadArenasRequestSuccess(arenas)),
                    catchError(e => of(new LoadArenasRequestFail(e)))
                );
        })
    )

    @Effect()
    createArena$ = this.actions$
        .ofType<AddArenaRequest>(ArenaActionTypes.AddArenaRequest)
        .pipe(
            map((action: ArenaActions.AddArenaRequest) => action.arena),
            switchMap(arena => {
                return this.arenaService.createArena(arena).pipe(                     
                    switchMap(arena => {
                        this.snackBarService.success('Arena was successfully created', 'Dismiss', {
                            duration: 3000
                        });    
                        
                        return of(new AddArenaRequestSuccess(arena));
                    }),
                    catchError(error => {
                        this.snackBarService.error(error.stack || 'Oops! Arena was not created successfully', 'Dismiss', {
                            duration: 6000
                        });

                        return of(new AddArenaRequestFail(error));
                    }) 
                );
            })
        );

    @Effect()
    openSelectedArenaDetails$ = this.actions$.
        ofType<OpenSelectedArenaDetails>(ArenaActionTypes.OpenSelectedArenaDetails)
        .pipe(
            switchMap((action) => {
                return this.arenaService.getSingleArena(action.selectedArena.id)
                    .pipe(
                        map(arenaDetailsPreview => {
                            return new OpenSelectedArenaDetailsSuccess(arenaDetailsPreview)
                        }),
                        catchError(error => of(new OpenSelectedArenaDetailsFail(error)))
                    )
            }
        )
             
    );
    
    constructor(
        private actions$: Actions,
        private arenaService: ArenaService,
        private snackBarService: FwSnackbarService
    ){}
}