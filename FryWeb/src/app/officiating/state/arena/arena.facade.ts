import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import * as arenaQuery from './arena.selectors';
import { LoadArenasRequest, AddArenaRequest, OpenSelectedArenaDetails } from './arena.actions';
import { Arena } from 'app/models/arena/arena.model';
import { Observable } from 'rxjs/internal/Observable';
import { ArenasState } from 'app/officiating/state/arena';

@Injectable()
export class ArenaFacade {
    constructor(private store: Store<ArenasState>) {
		
    }

    loaded$ = this.store.select(arenaQuery.getArenasLoaded);
    loading$ = this.store.select(arenaQuery.getArenasLoading);
    allArenas$: Observable<Arena[]> = this.store.select(arenaQuery.getAllArenas)
    selectedArena$ = this.store.select(arenaQuery.getSelectedArena);
    
    loadArenas() {
        this.store.dispatch(new LoadArenasRequest());
    }

    createArena(arena: Arena) {
        this.store.dispatch(new AddArenaRequest(arena));
    }

    openSelectedArenaDetails(selectedArena: Arena) {
        this.store.dispatch(new OpenSelectedArenaDetails(selectedArena));
    }
}