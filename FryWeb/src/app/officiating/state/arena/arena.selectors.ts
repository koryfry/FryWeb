import { getOfficiatingState } from '../selectors/officiating.selectors';
import { createSelector, createFeatureSelector } from '@ngrx/store';
import * as fromOfficiating from '../../state';
import * as fromArena from './arena.reducer';
import * as fromArenas from './';

export const selectArenaGroupState = createFeatureSelector<fromArenas.ArenasState>('arenas')

export const { selectIds, selectEntities, selectAll, selectTotal } = fromArena.arenaAdapter.getSelectors();

export const getArenaState = createSelector(fromOfficiating.getOfficiatingState, (state: fromOfficiating.OfficiatingState) => state.arenas);
export const getArenaEntities = createSelector(getArenaState, selectEntities);

export const getAllArenas = createSelector(getArenaState, selectAll);
export const getSelectedArena = createSelector(getArenaState, (state: fromArenas.ArenasState) => state.selectedArena);

export const getArenasLoading = createSelector(getArenaState, state => state.loading);
export const getArenasLoaded = createSelector(getArenaState, state => state.loaded);

//export const getArenaState = createSelector(getOfficiatingState, state => state.arenas);
//export const getArenas = createSelector(getArenaState, fromArena.selectAll);
//export const getArenaEntities = createSelector(getArenaState, fromArena.selectEntities);