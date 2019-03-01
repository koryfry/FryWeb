import { ArenaActions, ArenaActionTypes } from '../actions/arena.actions';
import * as arenaActions from '../actions/arena.actions';
import { Arena } from 'app/models/Arena/arena.model';

export interface ArenaState {
    loaded: boolean;
    loading: boolean;
    arenas: Arena[];//{ [id: number]: Arena };
    selectedArena: Arena;
    arenaID: number;
}

const initialState: ArenaState = {
    loaded: false,
    loading: false,
    arenas: null,
    selectedArena: null,
    arenaID: null
}

export function arenaReducer(state = initialState, action: ArenaActions): ArenaState {
    switch(action.type) {
        case ArenaActionTypes.LoadArenasRequestSuccess: {
            return {
                ...state,
                loading: false,
                loaded: true,
                arenas: action.arenas
            }
        }

        case ArenaActionTypes.CreateArenaRequestSuccess: {
            const arena = action.arena;
            const arenas = {
                ...state.arenas,
                [arena.id]: arena
            }
            return {
                ...state,
                arenas: arenas,
                loaded: false,
                loading: false
            }
        }

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

        default: {
            return state;
        }
    }
}