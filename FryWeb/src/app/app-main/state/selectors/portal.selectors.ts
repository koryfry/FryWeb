import { createFeatureSelector } from '@ngrx/store';
import { PortalState } from '../reducers/portal.reducer';

export const getPortalState = createFeatureSelector<PortalState>('portal');