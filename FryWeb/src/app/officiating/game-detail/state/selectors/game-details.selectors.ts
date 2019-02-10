import { GameDetailState } from '../reducers/game-detail.reducer';
import { createSelector } from '@ngrx/store';
import * as fromOfficiating from '../../../state';
import { OfficiatingState } from '../../../state';

export const getGameDetailState = createSelector(
    fromOfficiating.getOfficiatingState,
    (state: OfficiatingState) => state.gameDetail
);

export const getGameDetails = createSelector(
    getGameDetailState,
    (state: GameDetailState) => state.gameDetails || []
);

export const getAllGameDetails = createSelector(getGameDetails, entities => {
    return Object.keys(entities).map(id => entities[parseInt(id, 10)])
});

export const getSelectedGameDetail = createSelector(
    getGameDetailState,
    (state: GameDetailState) => state.selectedGameDetail
);