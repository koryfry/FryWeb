import { AgeGroupState } from '../reducers/age-group.reducer';
import { createSelector, createFeatureSelector } from '@ngrx/store';
import * as fromOfficiating from '../../../state';
import { OfficiatingState } from '../../../state';
import * as fromAgeGroups from '../../../state/age-group';

export const selectAgeGroupState = createFeatureSelector<fromAgeGroups.AgeGroupsState>('ageGroups')

export const getAgeGroupState = createSelector(
    fromOfficiating.getOfficiatingState,
    (state: OfficiatingState) => state.ageGroup
);

export const getAgeGroups = createSelector(
    getAgeGroupState,
    (state: AgeGroupState) => state.ageGroups || []
);

export const getAllAgeGroups = createSelector(getAgeGroups, entities => {
    return Object.keys(entities).map(id => entities[parseInt(id, 10)])
});

export const getSelectedAgeGroup = createSelector(
    getAgeGroupState,
    (state: AgeGroupState) => state.selectedAgeGroup
)

export const getAgeGroup = createSelector(
    getAgeGroupState,
    fromAgeGroups.getAgeGroupEntities,
    (state: AgeGroupState, ageGroupEntities) => ageGroupEntities[state.ageGroupID]
)

export const selectAgeGroupEntities = createSelector(
    selectAgeGroupState,
    fromAgeGroups.selectEntities
)

export const selectAllAgeGroups = createSelector(
    selectAgeGroupState,
    fromAgeGroups.selectAll
)