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
    OpenSelectedArenaDetails = '[Arena] Open Selected Arena Details',
    OpenSelectedArenaDetailsSuccess = '[Arena] Open Selected Arena Details Success',
    OpenSelectedArenaDetailsFail = '[Arena] Open Selected Arena Details Fail'
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

export class CreateArenaRequest implements Action {
    readonly type = ArenaActionTypes.CreateArenaRequest;
    constructor(public arena: Arena) {}
}

export class CreateArenaRequestSuccess implements Action {
	readonly type = ArenaActionTypes.CreateArenaRequestSuccess;
	constructor(public arena: Arena) {}
}

export class CreateArenaRequestFail implements Action {
	readonly type = ArenaActionTypes.CreateArenaRequestFail;
	constructor(payload: any) {}
}

export class OpenSelectedArenaDetails implements Action {
    readonly type = ArenaActionTypes.OpenSelectedArenaDetails;
    constructor(public selectedArena: Arena, public arenaID: number) {}
}

export class OpenSelectedArenaDetailsSuccess implements Action {
    readonly type = ArenaActionTypes.OpenSelectedArenaDetailsSuccess;
    constructor(public selectedArena: Arena) {}
}

export class OpenSelectedArenaDetailsFail implements Action {
    readonly type = ArenaActionTypes.OpenSelectedArenaDetailsFail;
    constructor(payload: any) {}
}

export type ArenaActions = 
    LoadArenasRequest
    | LoadArenasRequestSuccess
    | LoadArenasRequestFail
    | CreateArenaRequest
    | CreateArenaRequestSuccess
    | CreateArenaRequestFail
    | OpenSelectedArenaDetails
    | OpenSelectedArenaDetailsSuccess
    | OpenSelectedArenaDetailsFail;