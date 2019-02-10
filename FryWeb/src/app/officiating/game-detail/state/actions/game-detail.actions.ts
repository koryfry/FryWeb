import { Action } from '@ngrx/store';
import { GameDetail } from '../../../../models/gameDetail/gameDetail.model';

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
    OpenSelectedGameDetailFail = '[Game Detail] Open Selected Game Detail Fail'
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

export type GameDetailActions = 
    LoadGameDetailsRequest
    | LoadGameDetailsRequestSuccess
    | LoadGameDetailsRequestFail
    | CreateGameDetailRequest
    | CreateGameDetailRequestSuccess
    | CreateGameDetailRequestFail
    | OpenSelectedGameDetail
    | OpenSelectedGameDetailSuccess
    | OpenSelectedGameDetailFail;