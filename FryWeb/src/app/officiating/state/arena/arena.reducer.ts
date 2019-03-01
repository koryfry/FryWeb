import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Arena } from '../../../models/arena/arena.model';
//import { ArenaActions, ArenaActionTypes } from '../arena/arena.actions';
import { ArenaActions, ArenaActionTypes } from '../../arena/state/actions/arena.actions';

export interface ArenasState extends EntityState<Arena> { 
    // additional entities state properties
}

export const arenaAdapter = createEntityAdapter<Arena>({ selectId: arena => arena.id });

export const initialState: ArenasState = arenaAdapter.getInitialState({

});

export function arenasReducer(state = initialState, action: ArenaActions) : ArenasState {
    switch (action.type) {
        
        case ArenaActionTypes.CreateArenaRequestSuccess:
            return arenaAdapter.addOne(action.arena, state);

        case ArenaActionTypes.LoadArenasRequestSuccess:
            return arenaAdapter.addAll(action.arenas, state)

        default:
            return state;
    }
}

export const { selectIds, selectEntities, selectAll, selectTotal } = arenaAdapter.getSelectors();