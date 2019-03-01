import { getOfficiatingState } from '../selectors/officiating.selectors';
import { createSelector } from '@ngrx/store';
import * as fromArena from './arena.reducer';

export const getArenaState = createSelector(getOfficiatingState, state => state.arenas);
export const getArenas = createSelector(getArenaState, fromArena.selectAll);
export const getArenaEntities = createSelector(getArenaState, fromArena.selectEntities);