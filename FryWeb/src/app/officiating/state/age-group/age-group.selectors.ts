import { getOfficiatingState } from '../selectors/officiating.selectors';
import { createSelector } from '@ngrx/store';
import * as fromAgeGroup from './age-group.reducer';

export const { selectIds, selectEntities, selectAll, selectTotal } = fromAgeGroup.ageGroupAdapter.getSelectors();

export const getAgeGroupState = createSelector(getOfficiatingState, state => state.ageGroups);
export const getAgeGroups = createSelector(getAgeGroupState, selectAll);
export const getAgeGroupEntities = createSelector(getAgeGroupState, selectEntities);