import { Action } from '@ngrx/store';
import { Official } from '../../../../models/official/official.model';

/**
 * For each action type in an action group, make a simple
 * enum object for all of this group's action types.
 */
export enum OfficialActionTypes {
    LoadOfficialsRequest = '[Official] Load Official Request',
    LoadOfficialsRequestSuccess = '[Official] Load Official Request Success',
    LoadOfficialsRequestFail = '[Official] Load Official Request Fail'
}

export class LoadOfficialsRequest implements Action {
	readonly type = OfficialActionTypes.LoadOfficialsRequest;
}

export class LoadOfficialsRequestSuccess implements Action {
	readonly type = OfficialActionTypes.LoadOfficialsRequestSuccess;
	constructor(public officials: Official[]) {}
}

export class LoadOfficialsRequestFail implements Action {
	readonly type = OfficialActionTypes.LoadOfficialsRequestFail;
	constructor(payload: any) {}
}


export type OfficialActions = 
    LoadOfficialsRequest
    | LoadOfficialsRequestSuccess
    | LoadOfficialsRequestFail;