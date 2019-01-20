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
    (state: AgeGroupState) => state.ageGroups
);