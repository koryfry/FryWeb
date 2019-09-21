import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Arena } from '@models/officiating/arena/arena.model';
import { ArenaActions, ArenaActionTypes } from './arena.actions';
import { createSelector, createFeatureSelector } from '@ngrx/store';

export interface ArenasState extends EntityState<Arena> { 
    loaded: boolean;
    loading: boolean;
    arenas: Arena[];
    selectedArena: Arena;
    id: number;
}

export const arenaAdapter = createEntityAdapter<Arena>({ selectId: arena => arena.id });

export const initialState: ArenasState = arenaAdapter.getInitialState({
    loaded: false,
    loading: false,
    arenas: null,
    selectedArena: null,
    id: null
});

export function arenasReducer(state = initialState, action: ArenaActions) : ArenasState {
    switch (action.type) {
        
        case ArenaActionTypes.AddArenaRequestSuccess:
            return arenaAdapter.addOne(action.arena, state);

        case ArenaActionTypes.LoadArenasRequestSuccess:
            return arenaAdapter.addAll(action.arenas, state)

        case ArenaActionTypes.OpenSelectedArenaDetails: {
            return {
                ...state,
                selectedArena: null
            }
        }

        case ArenaActionTypes.OpenSelectedArenaDetailsSuccess: {
            return {
                ...state,
                selectedArena: action.selectedArena
            }
        }

        default:
            return state;
    }
}

// export const { selectIds, selectEntities, selectAll, selectTotal } = arenaAdapter.getSelectors();