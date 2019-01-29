import { Injectable } from '@angular/core';
import { ArenaState } from '../reducers/arena.reducer';
import { Store } from '@ngrx/store';
import * as arenaQuery from '../selectors/arena.selectors';
import { LoadArenasRequest, CreateArenasRequest } from '../actions';
import { filter } from 'rxjs/internal/operators/filter';
import { Arena } from 'app/models/arena/arena.model';

@Injectable()
export class ArenaFacade {
    arenas$ = this.store.select(arenaQuery.getArenas);

    constructor(private store: Store<ArenaState>) {
		
    }
    
    loadAgeGroups() {
        this.store.dispatch(new LoadArenasRequest());
    }

    createArena(arena: Arena) {
        this.store.dispatch(new CreateArenasRequest(arena));
    }
}