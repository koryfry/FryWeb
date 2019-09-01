import { ActionReducerMap } from '@ngrx/store';
import { portalIconsReducer, PortalIconsState } from '../../state/portal-icon/portal-icon.reducer';

export interface PortalState {
    // Entities
    portalIcons: PortalIconsState;
}

export const reducers: ActionReducerMap<PortalState> = {
    // Entities
    portalIcons: portalIconsReducer
};