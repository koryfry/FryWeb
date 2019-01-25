import { Action } from '@ngrx/store';
import { Arena } from '../../../../models/arena/arena.model';

/**
 * For each action type in an action group, make a simple
 * enum object for all of this group's action types.
 */
export enum ArenaActionTypes {
    LoadArenasRequest = '[Arena] Load Arena Request',
    LoadArenasRequestSuccess = '[Arena] Load Arena Request Success',
    LoadArenasRequestFail = '[Arena] Load Arena Request Fail'
}

export class LoadArenasRequest implements Action {
	readonly type = ArenaActionTypes.LoadArenasRequest;
}

export class LoadArenasRequestSuccess implements Action {
	readonly type = ArenaActionTypes.LoadArenasRequestSuccess;
	constructor(public arenas: Arena[]) {}
}

export class LoadArenasRequestFail implements Action {
	readonly type = ArenaActionTypes.LoadArenasRequestFail;
	constructor(payload: any) {}
}


export type ArenaActions = 
    LoadArenasRequest
    | LoadArenasRequestSuccess
    | LoadArenasRequestFail;