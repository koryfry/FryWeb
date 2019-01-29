import { Action } from '@ngrx/store';
import { Arena } from '../../../../models/arena/arena.model';

/**
 * For each action type in an action group, make a simple
 * enum object for all of this group's action types.
 */
export enum ArenaActionTypes {
    LoadArenasRequest = '[Arena] Load Arena Request',
    LoadArenasRequestSuccess = '[Arena] Load Arena Request Success',
    LoadArenasRequestFail = '[Arena] Load Arena Request Fail',
    CreateArenaRequest = '[Arena] Create Arena Request',
    CreateArenaRequestSuccess = '[Arena] Create Arena Request Success',
    CreateArenaRequestFail = '[Arena] Create Arena Request Fail',
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

export class CreateArenasRequest implements Action {
    readonly type = ArenaActionTypes.CreateArenaRequest;
    constructor(public arena: Arena) {}
}

export class CreateArenasRequestSuccess implements Action {
	readonly type = ArenaActionTypes.CreateArenaRequestSuccess;
	constructor(public arena: Arena) {}
}

export class CreateArenasRequestFail implements Action {
	readonly type = ArenaActionTypes.CreateArenaRequestFail;
	constructor(payload: any) {}
}


export type ArenaActions = 
    LoadArenasRequest
    | LoadArenasRequestSuccess
    | LoadArenasRequestFail
    | CreateArenasRequest
    | CreateArenasRequestSuccess
    | CreateArenasRequestFail;