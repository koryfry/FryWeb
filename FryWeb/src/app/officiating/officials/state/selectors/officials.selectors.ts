import { OfficialState } from '../reducers/officials.reducer';
import { createSelector } from '@ngrx/store';
import * as fromOfficiating from '../../../state';
import { OfficiatingState } from '../../../state';

export const getOfficialsState = createSelector(
    fromOfficiating.getOfficiatingState,
    (state: OfficiatingState) => state.official
);

export const getOfficials = createSelector(
    getOfficialsState,
    (state: OfficialState) => state.officials
);