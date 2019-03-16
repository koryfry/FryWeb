import { ActionReducerMap } from '@ngrx/store';
//import { arenaReducer, ArenaState } from '../../arena/state/reducers/arena.reducer';
//import { officialReducer, OfficialState } from '../../officials/state/reducers/officials.reducer';
import { gameDetailReducer, GameDetailState } from '../../game-detail/state/reducers/game-detail.reducer';

import { ArenasState, arenasReducer } from '../arena/arena.reducer';
import { AgeGroupsState, ageGroupsReducer } from '../age-group/age-group.reducer';
import { OfficialsState, officialsReducer } from '../officials/official.reducer';

export interface OfficiatingState {
    // List of features
    //official: OfficialState;
    gameDetail: GameDetailState;

    // Entities
    arenas: ArenasState;
    ageGroups: AgeGroupsState
    officials: OfficialsState
}

export const reducers: ActionReducerMap<OfficiatingState> = {
    // List of features
    //official: officialReducer,
    gameDetail: gameDetailReducer,

    // Entities
    arenas: arenasReducer,
    ageGroups: ageGroupsReducer,
    officials: officialsReducer
};