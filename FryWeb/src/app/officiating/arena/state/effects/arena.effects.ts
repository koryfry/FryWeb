import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Action, Store } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { ArenaActionTypes, LoadArenasRequestRequest, LoadArenasRequestRequestSuccess, LoadArenasRequestRequestFail } from '../actions';
import { map, withLatestFrom, switchMap, catchError, tap } from 'rxjs/operators';

import { ArenaService } from '../../../../services/arena.service';

@Injectable()
export class ArenaEffects {
   
   @Effect()
   LoadArenas$: Observable<Action> = this.actions$
    .ofType<LoadArenasRequestRequest>(
        ArenaActionTypes.LoadArenasRequest
    )
    .pipe(
        switchMap(() => {
            return this.arenaService
                .getArenas()
                .pipe(
                    map(arenas => new LoadArenasRequestRequestSuccess(arenas)),
                    catchError(e => of(new LoadArenasRequestRequestFail(e)))
                );
        })
    )
    
    constructor(
        private actions$: Actions,
        private arenaService: ArenaService
    ){}
}