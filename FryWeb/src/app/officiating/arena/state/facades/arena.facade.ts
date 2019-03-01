import { Injectable } from '@angular/core';
import { ArenaState } from '../reducers/arena.reducer';
import { Store } from '@ngrx/store';
import * as arenaQuery from '../selectors/arena.selectors';
import { LoadArenasRequest, CreateArenaRequest, OpenSelectedArenaDetails } from '../actions';
import { filter, withLatestFrom, map } from 'rxjs/operators';
import { Arena } from 'app/models/arena/arena.model';
import { LoadArenasRequestSuccess, AddArena } from '../../../state/arena/arena.actions';
import * as fromArenas from '../../../state/arena/arena.reducer';
import { Observable } from 'rxjs/internal/Observable';
import { ArenasState } from 'app/officiating/state/arena';

@Injectable()
export class ArenaFacade {
    arenas$ = this.store.select(arenaQuery.getAllArenas);
    selectedArena$ = this.store.select(arenaQuery.getSelectedArena);
    loaded$ = this.store.select(arenaQuery.getArenaState).pipe(map(state => state.loaded));
    arena$ = this.store.select(arenaQuery.getArena).pipe(withLatestFrom(this.loaded$), filter(([arena, loaded]) => loaded), map(([arena, loaded]) => arena));
    allArenas$ = this.store2.select(fromArenas.selectAll);

    constructor(private store: Store<ArenaState>, private store2: Store<ArenasState>) {
		
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