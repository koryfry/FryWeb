import { createFeatureSelector } from '@ngrx/store';
import { ApplicationState } from '../reducers/application.reducer';

export const getApplicationState = createFeatureSelector<ApplicationState>('application');