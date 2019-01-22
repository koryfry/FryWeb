import { ActionReducerMap } from '@ngrx/store';
import { ageGroupReducer, AgeGroupState } from '../../age-group/state/reducers/age-group.reducer';
import { arenaReducer, ArenaState } from '../../arena/state/reducers/arena.reducer';

export interface OfficiatingState {
    // List of features
    ageGroup: AgeGroupState;
    arena: ArenaState; 
}

export const reducers: ActionReducerMap<OfficiatingState> = {
    // List of features
    ageGroup: ageGroupReducer,
    arena: arenaReducer
};