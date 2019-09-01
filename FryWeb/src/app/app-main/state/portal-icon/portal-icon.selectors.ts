import { getPortalState } from '../selectors/portal.selectors';
import { createSelector, createFeatureSelector } from '@ngrx/store';
import * as fromPortalIcon from '../../state';
import * as fromPortal from './portal-icon.reducer';
import * as fromPortals from './';

export const selectArenaGroupState = createFeatureSelector<fromPortals.PortalIconsState>('portalIcons')

export const { selectIds, selectEntities, selectAll, selectTotal } = fromPortal.portalIconAdapter.getSelectors();

export const getPortalIconState = createSelector(fromPortalIcon.getPortalState, (state: fromPortalIcon.PortalState) => state.portalIcons);
export const getPortalIconEntities = createSelector(getPortalIconState, selectEntities);

export const getAllPortalIcons = createSelector(getPortalIconState, selectAll);

export const getPortalIconsLoading = createSelector(getPortalIconState, state => state.loading);
export const getPortalIconsLoaded = createSelector(getPortalIconState, state => state.loaded);