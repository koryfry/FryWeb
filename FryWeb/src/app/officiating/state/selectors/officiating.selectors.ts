import { createFeatureSelector } from '@ngrx/store';
import { OfficiatingState } from '../reducers/officiating.reducer';

export const getOfficiatingState = createFeatureSelector<OfficiatingState>(
    'officiating'
);