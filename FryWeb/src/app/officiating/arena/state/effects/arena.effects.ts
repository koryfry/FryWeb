import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Action, Store } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { ArenaActionTypes, LoadArenasRequest, LoadArenasRequestSuccess, LoadArenasRequestFail, CreateArenaRequest, CreateArenaRequestSuccess, CreateArenaRequestFail } from '../actions';
import * as ArenaActions from '../actions';
import { map, withLatestFrom, switchMap, catchError, tap } from 'rxjs/operators';
import { getArenaState } from '../selectors';
import { ArenaState } from '../reducers';

import { ArenaService } from '../../../../services/arena.service';

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
            return this.arenaService
                .createArena(arena)
                .pipe(
                    map(arena => new CreateArenaRequestSuccess(arena)),
                    catchError(e => of(new CreateArenaRequestFail(e)))
                )
        })        
    );
    
    constructor(
        private actions$: Actions,
        private arenaService: ArenaService,
        private store$: Store<ArenaState>
    ){}
}