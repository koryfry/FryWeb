import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { AgeGroup } from '../../../models/ageGroup/age-group.model';
//import { AgeGroupActions, AgeGroupActionTypes } from '../ageGroup/ageGroup.actions';
import { AgeGroupActions, AgeGroupActionTypes } from '../../age-group/state/actions/age-group.actions';
import { createSelector, createFeatureSelector } from '@ngrx/store';

export interface AgeGroupsState extends EntityState<AgeGroup> { 
    // additional entities state properties
}

export const ageGroupAdapter = createEntityAdapter<AgeGroup>({ selectId: ageGroup => ageGroup.id });

export const initialState: AgeGroupsState = ageGroupAdapter.getInitialState({

});

export function ageGroupsReducer(state = initialState, action: AgeGroupActions) : AgeGroupsState {
    switch (action.type) {
        
        case AgeGroupActionTypes.CreateAgeGroupRequestSuccess:
            return ageGroupAdapter.addOne(action.ageGroup, state);

        case AgeGroupActionTypes.LoadAgeGroupsRequestSuccess:
            return ageGroupAdapter.addAll(action.ageGroups, state)

        default:
            return state;
    }
}

export const { 
    selectIds, 
    selectEntities, 
    selectAll, 
    selectTotal 
} = ageGroupAdapter.getSelectors();

export const selectAgeGroupIds = selectIds;
export const selectAgeGroupEntities = selectEntities;
export const selectAllAgeGroups = selectAll;
export const selectAgeGroupTotal = selectTotal;