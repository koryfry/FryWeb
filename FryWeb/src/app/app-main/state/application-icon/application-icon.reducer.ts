import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Icon } from '../../../models/icon/icon';
import { ApplicationIconActions, ApplicationIconActionTypes } from './application-icon.actions';
import { createSelector, createFeatureSelector } from '@ngrx/store';

export interface ApplicationIconsState extends EntityState<Icon> { 
  loaded: boolean;
  loading: boolean;
  applicationIcons: Icon[];
  id: number;
}

export const applicationIconAdapter = createEntityAdapter<Icon>({ selectId: icon => icon.id });

export const initialState: ApplicationIconsState = applicationIconAdapter.getInitialState({
    loaded: false,
    loading: false,
    applicationIcons: null,
    id: null
});

export function applicationIconsReducer(state = initialState, action: ApplicationIconActions) : ApplicationIconsState {
  switch (action.type) {      
      case ApplicationIconActionTypes.LoadApplicationIconsRequestSuccess:
          return applicationIconAdapter.addAll(action.applicationIcons, state)

      default:
          return state;
  }
}