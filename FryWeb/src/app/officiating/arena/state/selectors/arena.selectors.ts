import { ArenaState } from '../reducers/arena.reducer';
import { createSelector } from '@ngrx/store';
import * as fromOfficiating from '../../../state';
import { OfficiatingState } from '../../../state';

export const getArenaState = createSelector(
    fromOfficiating.getOfficiatingState,
    (state: OfficiatingState) => state.arena
);

export const getArenas = createSelector(
    getArenaState,
    (state: ArenaState) => state.arenas || []
);

export const getAllArenas = createSelector(getArenas, entities => {
    return Object.keys(entities).map(id => entities[parseInt(id, 10)])
});

export const getSelectedArena = createSelector(
    getArenaState,
    (state: ArenaState) => state.selectedArena
);