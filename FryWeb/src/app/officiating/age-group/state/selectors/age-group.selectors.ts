import { AgeGroupState } from '../reducers/age-group.reducer';
import { createSelector } from '@ngrx/store';
import * as fromOfficiating from '../../../state';
import { OfficiatingState } from '../../../state';

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