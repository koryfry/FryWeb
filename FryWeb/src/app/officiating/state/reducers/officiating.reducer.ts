import { ActionReducerMap } from '@ngrx/store';
import { ageGroupReducer, AgeGroupState } from '../../age-group/state/reducers/age-group.reducer';
import { arenaReducer, ArenaState } from '../../arena/state/reducers/arena.reducer';
import { officialReducer, OfficialState } from '../../officials/state/reducers/officials.reducer';

export interface OfficiatingState {
    // List of features
    ageGroup: AgeGroupState;
    arena: ArenaState; 
    official: OfficialState
}

export const reducers: ActionReducerMap<OfficiatingState> = {
    // List of features
    ageGroup: ageGroupReducer,
    arena: arenaReducer,
    official: officialReducer
};