import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { AgeGroup } from '../../../models/ageGroup/age-group.model';
import { AgeGroupActions, AgeGroupActionTypes } from './age-group.actions';
import { createSelector, createFeatureSelector } from '@ngrx/store';

export interface AgeGroupsState extends EntityState<AgeGroup> {
    loaded: boolean;
    loading: boolean;
    ageGroups: AgeGroup[];
    selectedAgeGroup: AgeGroup;
    ageGroupID: number;
}

export const ageGroupAdapter = createEntityAdapter<AgeGroup>({ selectId: (ageGroup: AgeGroup) => ageGroup.id });

export const initialState: AgeGroupsState = ageGroupAdapter.getInitialState({
    loaded: false,
    loading: false,
    ageGroups: null,
    selectedAgeGroup: null,
    ageGroupID: null
});

export function ageGroupsReducer(state = initialState, action: AgeGroupActions) : AgeGroupsState {
    switch (action.type) {
        
        case AgeGroupActionTypes.AddAgeGroupRequestSuccess:
            return ageGroupAdapter.addOne(action.ageGroup, state);

        case AgeGroupActionTypes.LoadAgeGroupsRequestSuccess:
            return ageGroupAdapter.addAll(action.ageGroups, state)

        case AgeGroupActionTypes.OpenSelectedAgeGroupDetails: {
            return {
                ...state,
                selectedAgeGroup: null
            }
        }

        case AgeGroupActionTypes.OpenSelectedAgeGroupDetailsSuccess: {
            return {
                ...state,
                selectedAgeGroup: action.selectedAgeGroup
            }
        }

        default:
            return state;
    }
}

function sortAgeGroups(ag1: AgeGroup, ag2: AgeGroup) {
    return ag1.MinimumAge - ag2.MinimumAge;
}