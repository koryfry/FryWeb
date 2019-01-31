import { Injectable } from '@angular/core';
import { ArenaState } from '../reducers/arena.reducer';
import { Store } from '@ngrx/store';
import * as arenaQuery from '../selectors/arena.selectors';
import { LoadArenasRequest, CreateArenaRequest, OpenSelectedArenaDetails } from '../actions';
import { filter } from 'rxjs/internal/operators/filter';
import { Arena } from 'app/models/arena/arena.model';

@Injectable()
export class ArenaFacade {
    arenas$ = this.store.select(arenaQuery.getAllArenas);
    selectedArena$ = this.store.select(arenaQuery.getSelectedArena);

    constructor(private store: Store<ArenaState>) {
		
    }
    
    loadArenas() {
        this.store.dispatch(new LoadArenasRequest());
    }

    createArena(arena: Arena) {
        this.store.dispatch(new CreateArenaRequest(arena));
    }

    openSelectedArenaDetails(selectedArena: Arena, arenaID: number) {
        this.store.dispatch(new OpenSelectedArenaDetails(selectedArena, arenaID));
    }
}