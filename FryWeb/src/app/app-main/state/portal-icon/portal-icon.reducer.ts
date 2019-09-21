import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Icon } from '@models/app/icon/icon';
import { PortalIconActions, PortalIconActionTypes } from './portal-icon.actions';
import { createSelector, createFeatureSelector } from '@ngrx/store';

export interface PortalIconsState extends EntityState<Icon> { 
  loaded: boolean;
  loading: boolean;
  portalIcons: Icon[];
  id: number;
}

export const portalIconAdapter = createEntityAdapter<Icon>({ selectId: icon => icon.id });

export const initialState: PortalIconsState = portalIconAdapter.getInitialState({
    loaded: false,
    loading: false,
    portalIcons: null,
    id: null
});

export function portalIconsReducer(state = initialState, action: PortalIconActions) : PortalIconsState {
  switch (action.type) {      
      case PortalIconActionTypes.LoadPortalIconsRequestSuccess:
          return portalIconAdapter.addAll(action.portalIcons, state)

      default:
          return state;
  }
}