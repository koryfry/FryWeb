import { Injectable } from '@angular/core';
import { ArenaState } from '../reducers/arena.reducer';
import { Store } from '@ngrx/store';
import * as arenaQuery from '../selectors/arena.selectors';
import { LoadArenasRequest, CreateArenaRequest } from '../actions';
import { filter } from 'rxjs/internal/operators/filter';
import { Arena } from 'app/models/arena/arena.model';

@Injectable()
export class ArenaFacade {
    arenas$ = this.store.select(arenaQuery.getAllArenas);

    constructor(private store: Store<ArenaState>) {
		
    }
    
    loadArenas() {
        this.store.dispatch(new LoadArenasRequest());
    }

    createArena(arena: Arena) {
        this.store.dispatch(new CreateArenaRequest(arena));
    }
}