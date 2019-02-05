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
    (state: OfficialState) => state.officials || []
);

export const getAllOfficials = createSelector(getOfficials, entities => {
    return Object.keys(entities).map(id => entities[parseInt(id, 10)])
});

export const getSelectedOfficial = createSelector(
    getOfficialsState,
    (state: OfficialState) => state.selectedOfficial
)