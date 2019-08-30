import { getApplicationState } from '../selectors/application.selectors';
import { createSelector, createFeatureSelector } from '@ngrx/store';
import * as fromApplicationIcon from '../../state';
import * as fromApplication from './application-icon.reducer';
import * as fromApplications from './';

export const selectArenaGroupState = createFeatureSelector<fromApplications.ApplicationIconsState>('applicationIcons')

export const { selectIds, selectEntities, selectAll, selectTotal } = fromApplication.applicationIconAdapter.getSelectors();

export const getApplicationIconState = createSelector(fromApplicationIcon.getApplicationState, (state: fromApplicationIcon.ApplicationState) => state.applicationIcons);
export const getApplicationIconEntities = createSelector(getApplicationIconState, selectEntities);

export const getAllApplicationIcons = createSelector(getApplicationIconState, selectAll);

export const getApplicationIconsLoading = createSelector(getApplicationIconState, state => state.loading);
export const getApplicationIconsLoaded = createSelector(getApplicationIconState, state => state.loaded);