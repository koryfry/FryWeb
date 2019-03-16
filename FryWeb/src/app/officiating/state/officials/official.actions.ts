import { Action } from '@ngrx/store';
import { Update } from '@ngrx/entity';
import { Official } from '../../../models/official/official.model';

export enum OfficialActionTypes {
    LoadOfficialsRequest = '[Official] Load Official Request',
    LoadOfficialsRequestSuccess = '[Official] Load Official Request Success',
    LoadOfficialsRequestFail = '[Official] Load Official Request Fail',
    AddOfficialRequest = '[Official] Create Official Request',
    AddOfficialRequestSuccess = '[Official] Create Official Request Success',
    AddOfficialRequestFail = '[Official] Create Official Request Fail',
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

export class AddOfficialRequest implements Action {
    readonly type = OfficialActionTypes.AddOfficialRequest;
    constructor(public official: Official) {}
}

export class AddOfficialRequestSuccess implements Action {
	readonly type = OfficialActionTypes.AddOfficialRequestSuccess;
	constructor(public official: Official) {}
}

export class AddOfficialRequestFail implements Action {
	readonly type = OfficialActionTypes.AddOfficialRequestFail;
	constructor(payload: any) {}
}

export class OpenSelectedOfficialDetails implements Action {
    readonly type = OfficialActionTypes.OpenSelectedOfficialDetails;
    constructor(public selectedOfficial: Official) {}
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
    | AddOfficialRequest
    | AddOfficialRequestSuccess
    | AddOfficialRequestFail
    | OpenSelectedOfficialDetails
    | OpenSelectedOfficialDetailsSuccess
    | OpenSelectedOfficialDetailsFail;