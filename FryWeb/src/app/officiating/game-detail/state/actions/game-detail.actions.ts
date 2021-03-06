import { Action } from '@ngrx/store';
import { GameDetail } from '@models/officiating/gameDetail/gameDetail.model';
import { Arena } from '@models/officiating/arena/arena.model';

/**
 * For each action type in an action group, make a simple
 * enum object for all of this group's action types.
 */
export enum GameDetailActionTypes {
    LoadGameDetailsRequest = '[Game Detail] Load Game Detail Request',
    LoadGameDetailsRequestSuccess = '[Game Detail] Load Game Detail Request Success',
    LoadGameDetailsRequestFail = '[Game Detail] Load Game Detail Request Fail',
    CreateGameDetailRequest = '[Game Detail] Create Game Detail Request',
    CreateGameDetailRequestSuccess = '[Game Detail] Create Game Detail Request Success',
    CreateGameDetailRequestFail = '[Game Detail] Create Game Detail Request Fail',
    OpenSelectedGameDetail = '[Game Detail] Open Selected Game Detail',
    OpenSelectedGameDetailSuccess = '[Game Detail] Open Selected Game Detail Success',
    OpenSelectedGameDetailFail = '[Game Detail] Open Selected Game Detail Fail',
    LoadArenasRequest = '[Game Detail] Load Arena Request',
    LoadArenasRequestSuccess = '[Game Detail] Load Arena Request Success',
    LoadArenasRequestFail = '[Game Detail] Load Arena Request Fail'
}

export class LoadGameDetailsRequest implements Action {
	readonly type = GameDetailActionTypes.LoadGameDetailsRequest;
}

export class LoadGameDetailsRequestSuccess implements Action {
	readonly type = GameDetailActionTypes.LoadGameDetailsRequestSuccess;
	constructor(public gameDetails: GameDetail[]) {}
}

export class LoadGameDetailsRequestFail implements Action {
	readonly type = GameDetailActionTypes.LoadGameDetailsRequestFail;
	constructor(payload: any) {}
}

export class CreateGameDetailRequest implements Action {
    readonly type = GameDetailActionTypes.CreateGameDetailRequest;
    constructor(public gameDetail: GameDetail) {}
}

export class CreateGameDetailRequestSuccess implements Action {
	readonly type = GameDetailActionTypes.CreateGameDetailRequestSuccess;
	constructor(public gameDetail: GameDetail) {}
}

export class CreateGameDetailRequestFail implements Action {
	readonly type = GameDetailActionTypes.CreateGameDetailRequestFail;
	constructor(payload: any) {}
}

export class OpenSelectedGameDetail implements Action {
    readonly type = GameDetailActionTypes.OpenSelectedGameDetail;
    constructor(public selectedGameDetail: GameDetail, public gameDetailID: number) {}
}

export class OpenSelectedGameDetailSuccess implements Action {
    readonly type = GameDetailActionTypes.OpenSelectedGameDetailSuccess;
    constructor(public selectedGameDetail: GameDetail) {}
}

export class OpenSelectedGameDetailFail implements Action {
    readonly type = GameDetailActionTypes.OpenSelectedGameDetailFail;
    constructor(payload: any) {}
}

// Load Arena Requests
export class LoadArenasRequest implements Action {
	readonly type = GameDetailActionTypes.LoadArenasRequest;
}

export class LoadArenasRequestSuccess implements Action {
	readonly type = GameDetailActionTypes.LoadArenasRequestSuccess;
	constructor(public arenas: Arena[]) {}
}

export class LoadArenasRequestFail implements Action {
	readonly type = GameDetailActionTypes.LoadArenasRequestFail;
	constructor(payload: any) {}
}

export type GameDetailActions = 
    LoadGameDetailsRequest
    | LoadGameDetailsRequestSuccess
    | LoadGameDetailsRequestFail
    | CreateGameDetailRequest
    | CreateGameDetailRequestSuccess
    | CreateGameDetailRequestFail
    | OpenSelectedGameDetail
    | OpenSelectedGameDetailSuccess
    | OpenSelectedGameDetailFail
    | LoadArenasRequest
    | LoadArenasRequestSuccess
    | LoadArenasRequestFail;