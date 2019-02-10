import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Action, Store } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { GameDetailActionTypes, LoadGameDetailsRequest, LoadGameDetailsRequestSuccess, LoadGameDetailsRequestFail, CreateGameDetailRequest, CreateGameDetailRequestSuccess, CreateGameDetailRequestFail,
            OpenSelectedGameDetail, OpenSelectedGameDetailSuccess, OpenSelectedGameDetailFail } from '../actions';
import * as GameDetailActions from '../actions';
import { map, withLatestFrom, switchMap, catchError, tap } from 'rxjs/operators';
import { getGameDetailState } from '../selectors';
import { GameDetailState } from '../reducers';

import { GameDetailService } from '../../../../services/game-detail.service';
import { Router } from '@angular/router';
import { FwSnackbarService } from '../../../../shared/components/fw-snackbar/fw-snackbar.service';

@Injectable()
export class GameDetailEffects {
   
   @Effect()
   LoadGameDetails$: Observable<Action> = this.actions$
    .ofType<LoadGameDetailsRequest>(
        GameDetailActionTypes.LoadGameDetailsRequest
    )
    .pipe(
        switchMap(() => {
            return this.gameDetailService
                .getAllGameDetails()
                .pipe(
                    map(gameDetails => new LoadGameDetailsRequestSuccess(gameDetails)),
                    catchError(e => of(new LoadGameDetailsRequestFail(e)))
                );
        })
    )

    @Effect()
    createGameDetail$ = this.actions$
        .ofType<CreateGameDetailRequest>(GameDetailActionTypes.CreateGameDetailRequest)
        .pipe(
            map((action: GameDetailActions.CreateGameDetailRequest) => action.gameDetail),
            switchMap(gameDetail => {
                return this.gameDetailService.createGameDetail(gameDetail).pipe(                     
                    switchMap(gameDetail => {
                        this.snackBarService.success('GameDetail was successfully created', 'Dismiss', {
                            duration: 3000
                        });    
                        
                        return of(new CreateGameDetailRequestSuccess(gameDetail));
                    }),
                    catchError(error => {
                        this.snackBarService.error(error.stack || 'Oops! GameDetail was not created successfully', 'Dismiss', {
                            duration: 6000
                        });

                        return of(new CreateGameDetailRequestFail(error));
                    }) 
                );
            })
        );

    @Effect()
    openSelectedGameDetailDetails$ = this.actions$.
        ofType<OpenSelectedGameDetail>(GameDetailActionTypes.OpenSelectedGameDetail)
        .pipe(
            switchMap((action) => {
                return this.gameDetailService.getGameDetailById(action.gameDetailID)
                    .pipe(
                        map(gameDetailDetailsPreview => {
                            return new OpenSelectedGameDetailSuccess(gameDetailDetailsPreview)
                        }),
                        catchError(error => of(new OpenSelectedGameDetailFail(error)))
                    )
            }
        )
             
    );
    
    constructor(
        private actions$: Actions,
        private gameDetailService: GameDetailService,
        private store$: Store<GameDetailState>,
        private router: Router,
        private snackBarService: FwSnackbarService
    ){}
}