import { getOfficiatingState } from '../selectors/officiating.selectors';
import { createSelector, createFeatureSelector } from '@ngrx/store';
import * as fromOfficiating from '../../state';
import * as fromOfficial from './official.reducer';
import * as fromOfficials from './';


export const selectOfficialState = createFeatureSelector<fromOfficials.OfficialsState>('officials')

export const { selectIds, selectEntities, selectAll, selectTotal } = fromOfficial.officialAdapter.getSelectors();

export const getOfficialState = createSelector(fromOfficiating.getOfficiatingState, (state: fromOfficiating.OfficiatingState) => state.officials);
export const getOfficialEntities = createSelector(getOfficialState, selectEntities);

export const getAllOfficials = createSelector(getOfficialState, selectAll);
export const getSelectedOfficial = createSelector(getOfficialState, (state: fromOfficials.OfficialsState) => state.selectedOfficial);

export const getOfficialsLoading = createSelector(getOfficialState, state => state.loading);
export const getOfficialsLoaded = createSelector(getOfficialState, state => state.loaded);