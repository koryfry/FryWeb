import { Action } from '@ngrx/store';
import { Update } from '@ngrx/entity';
import { Arena } from '@models/officiating/arena/arena.model';

export enum ArenaActionTypes {
    LoadArenasRequest = '[Arena] Load Arena Request',
    LoadArenasRequestSuccess = '[Arena] Load Arena Request Success',
    LoadArenasRequestFail = '[Arena] Load Arena Request Fail',
    AddArenaRequest = '[Arena] Add Arena Request',
    AddArenaRequestSuccess = '[Arena] Add Arena Request Success',
    AddArenaRequestFail = '[Arena] Add Arena Request Fail',
    OpenSelectedArenaDetails = '[Arena] Open Selected Arena Details',
    OpenSelectedArenaDetailsSuccess = '[Arena] Open Selected Arena Details Success',
    OpenSelectedArenaDetailsFail = '[Arena] Open Selected Arena Details Fail',
    UpdateArenaRequest = '[Arena] Update Age Group',
    UpdateArenaRequestSuccess = '[Arena] Update Age Group Request Success',
    UpdateArenaRequestFail = '[Arena] Update Age Group Request Fail',
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

export class AddArenaRequest implements Action {
    readonly type = ArenaActionTypes.AddArenaRequest;
    constructor(public arena: Arena) { }
}

export class AddArenaRequestSuccess implements Action {
	readonly type = ArenaActionTypes.AddArenaRequestSuccess;
	constructor(public arena: Arena) {}
}

export class AddArenaRequestFail implements Action {
	readonly type = ArenaActionTypes.AddArenaRequestFail;
	constructor(payload: any) {}
}

export class OpenSelectedArenaDetails implements Action {
    readonly type = ArenaActionTypes.OpenSelectedArenaDetails;
    constructor(public selectedArena: Arena) {}
}

export class OpenSelectedArenaDetailsSuccess implements Action {
    readonly type = ArenaActionTypes.OpenSelectedArenaDetailsSuccess;
    constructor(public selectedArena: Arena) {}
}

export class OpenSelectedArenaDetailsFail implements Action {
    readonly type = ArenaActionTypes.OpenSelectedArenaDetailsFail;
    constructor(payload: any) {}
}

export class UpdateArenaRequest implements Action {
    readonly type = ArenaActionTypes.UpdateArenaRequest;
    constructor(public arenaId: number, public changes: Partial<Arena>) { }
}

export class UpdateArenaRequestSuccess implements Action {
	readonly type = ArenaActionTypes.UpdateArenaRequestSuccess;
	constructor(public arena: Arena) {}
}

export class UpdateArenaRequestFail implements Action {
	readonly type = ArenaActionTypes.UpdateArenaRequestFail;
	constructor(payload: any) {}
}

export type ArenaActions = 
    LoadArenasRequest
    | LoadArenasRequestSuccess
    | LoadArenasRequestFail
    | AddArenaRequest
    | AddArenaRequestSuccess
    | AddArenaRequestFail
    | OpenSelectedArenaDetails
    | OpenSelectedArenaDetailsSuccess
    | OpenSelectedArenaDetailsFail
    | UpdateArenaRequest
    | UpdateArenaRequestSuccess
    | UpdateArenaRequestFail;