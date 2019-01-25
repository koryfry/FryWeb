import { Injectable } from '@angular/core';
import { ArenaState } from '../reducers/arena.reducer';
import { Store } from '@ngrx/store';
import * as arenaQuery from '../selectors/arena.selectors';
import { LoadArenasRequest } from '../actions';
import { filter } from 'rxjs/internal/operators/filter';

@Injectable()
export class ArenaFacade {
    arenas$ = this.store.select(arenaQuery.getArenas);

    constructor(private store: Store<ArenaState>) {
		
    }
    
    loadAgeGroups() {
        this.store.dispatch(new LoadArenasRequest());
    }
}