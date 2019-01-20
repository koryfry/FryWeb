import { AgeGroupActions, AgeGroupActionTypes } from '../actions/age-group.actions';
import { AgeGroup } from 'app/models/ageGroup/age-group.model';

export interface AgeGroupState {
    loaded: boolean;
    loading: boolean;
    ageGroups: AgeGroup[];
}

const initialState: AgeGroupState = {
    loaded: false,
    loading: false,
    ageGroups: null
}

export function ageGroupReducer(state = initialState, action: AgeGroupActions): AgeGroupState {
    switch(action.type) {
        case AgeGroupActionTypes.LoadAgeGroupsRequestSuccess: {
            return {
                ...state,
                loaded: true,
                loading: false,
                ageGroups: action.ageGroups
            };
        }

        default: {
            return state;
        }
    }
}