import { ActionReducerMap } from '@ngrx/store';
import { applicationIconsReducer, ApplicationIconsState } from '../../state/application-icon/application-icon.reducer';

export interface ApplicationState {
    // Entities
    applicationIcons: ApplicationIconsState;
}

export const reducers: ActionReducerMap<ApplicationState> = {
    // Entities
    applicationIcons: applicationIconsReducer
};