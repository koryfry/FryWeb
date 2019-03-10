import { getOfficiatingState } from '../selectors/officiating.selectors';
import { createSelector, createFeatureSelector } from '@ngrx/store';
import * as fromOfficiating from '../../state';
import * as fromAgeGroup from './age-group.reducer';
import * as fromAgeGroups from './';

export const selectAgeGroupState = createFeatureSelector<fromAgeGroups.AgeGroupsState>('ageGroups')

export const { selectIds, selectEntities, selectAll, selectTotal } = fromAgeGroup.ageGroupAdapter.getSelectors();

export const getAgeGroupState = createSelector(fromOfficiating.getOfficiatingState, (state: fromOfficiating.OfficiatingState) => state.ageGroups);
export const getAgeGroupEntities = createSelector(getAgeGroupState, selectEntities);

export const getAllAgeGroups = createSelector(getAgeGroupState, selectAll);
export const getSelectedAgeGroup = createSelector(getAgeGroupState, (state: fromAgeGroups.AgeGroupsState) => state.selectedAgeGroup);

export const getAgeGroupsLoading = createSelector(getAgeGroupState, state => state.loading);
export const getAgeGroupsLoaded = createSelector(getAgeGroupState, state => state.loaded);