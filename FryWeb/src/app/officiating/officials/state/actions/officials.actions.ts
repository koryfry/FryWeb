import { Action } from '@ngrx/store';
import { Official } from '../../../../models/official/official.model';

/**
 * For each action type in an action group, make a simple
 * enum object for all of this group's action types.
 */
export enum OfficialActionTypes {
    LoadOfficialsRequest = '[Official] Load Official Request',
    LoadOfficialsRequestSuccess = '[Official] Load Official Request Success',
    LoadOfficialsRequestFail = '[Official] Load Official Request Fail',
    CreateOfficialRequest = '[Official] Create Official Request',
    CreateOfficialRequestSuccess = '[Official] Create Official Request Success',
    CreateOfficialRequestFail = '[Official] Create Official Request Fail',
    OpenSelectedOfficialDetails = '[Official] Open Selected Official Details',
    OpenSelectedOfficialDetailsSuccess = '[Official] Open Selected Official Details Success',
    OpenSelectedOfficialDetailsFail = '[Official] Open Selected Official Details Fail'
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

export class CreateOfficialRequest implements Action {
    readonly type = OfficialActionTypes.CreateOfficialRequest;
    constructor(public official: Official) {}
}

export class CreateOfficialRequestSuccess implements Action {
	readonly type = OfficialActionTypes.CreateOfficialRequestSuccess;
	constructor(public official: Official) {}
}

export class CreateOfficialRequestFail implements Action {
	readonly type = OfficialActionTypes.CreateOfficialRequestFail;
	constructor(payload: any) {}
}

export class OpenSelectedOfficialDetails implements Action {
    readonly type = OfficialActionTypes.OpenSelectedOfficialDetails;
    constructor(public selectedOfficial: Official, public officialID: number) {}
}

export class OpenSelectedOfficialDetailsSuccess implements Action {
    readonly type = OfficialActionTypes.OpenSelectedOfficialDetailsSuccess;
    constructor(public selectedOfficial: Official) {}
}

export class OpenSelectedOfficialDetailsFail implements Action {
    readonly type = OfficialActionTypes.OpenSelectedOfficialDetailsFail;
    constructor(payload: any) {}
}

export type OfficialActions = 
    LoadOfficialsRequest
    | LoadOfficialsRequestSuccess
    | LoadOfficialsRequestFail
    | CreateOfficialRequest
    | CreateOfficialRequestSuccess
    | CreateOfficialRequestFail
    | OpenSelectedOfficialDetails
    | OpenSelectedOfficialDetailsSuccess
    | OpenSelectedOfficialDetailsFail;