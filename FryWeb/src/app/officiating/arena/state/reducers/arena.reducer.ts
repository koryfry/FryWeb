import { ArenaActions, ArenaActionTypes } from '../actions/arena.actions';
import { Arena } from 'app/models/Arena/arena.model';

export interface ArenaState {
    loaded: boolean;
    loading: boolean;
    arenas: Arena[];
}

const initialState: ArenaState = {
    loaded: false,
    loading: false,
    arenas: null
}

export function arenaReducer(state = initialState, action: ArenaActions): ArenaState {
    switch(action.type) {
        case ArenaActionTypes.LoadArenasRequestSuccess: {
            return {
                ...state,
                loaded: true,
                loading: false,
                arenas: action.arenas
            };
        }

        default: {
            return state;
        }
    }
}