import { ActionReducerMap } from '@ngrx/store';
import { ageGroupReducer, AgeGroupState } from '../../age-group/state/reducers/age-group.reducer';

export interface OfficiatingState {
    // List of features
    ageGroup: AgeGroupState; 
}

export const reducers: ActionReducerMap<OfficiatingState> = {
    // List of features
    ageGroup: ageGroupReducer
};