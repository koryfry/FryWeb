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
    (state: ArenaState) => state.arenas
);