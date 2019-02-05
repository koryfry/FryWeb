import { Action } from '@ngrx/store';
import { AgeGroup } from '../../../../models/ageGroup/age-group.model';

/**
 * For each action type in an action group, make a simple
 * enum object for all of this group's action types.
 */
export enum AgeGroupActionTypes {
    LoadAgeGroupsRequest = '[Age Group] Load Age Group Request',
    LoadAgeGroupsRequestSuccess = '[Age Group] Load Age Group Request Success',
    LoadAgeGroupsRequestFail = '[Age Group] Load Age Group Request Fail',
    CreateAgeGroupRequest = '[AgeGroup] Create Age Group Request',
    CreateAgeGroupRequestSuccess = '[AgeGroup] Create Age Group Request Success',
    CreateAgeGroupRequestFail = '[AgeGroup] Create Age Group Request Fail',
    OpenSelectedAgeGroupDetails = '[AgeGroup] Open Selected AgeGroup Details',
    OpenSelectedAgeGroupDetailsSuccess = '[AgeGroup] Open Selected AgeGroup Details Success',
    OpenSelectedAgeGroupDetailsFail = '[AgeGroup] Open Selected AgeGroup Details Fail'
}

export class LoadAgeGroupsRequestRequest implements Action {
	readonly type = AgeGroupActionTypes.LoadAgeGroupsRequest;
}

export class LoadAgeGroupsRequestRequestSuccess implements Action {
	readonly type = AgeGroupActionTypes.LoadAgeGroupsRequestSuccess;
	constructor(public ageGroups: AgeGroup[]) {}
}

export class LoadAgeGroupsRequestRequestFail implements Action {
	readonly type = AgeGroupActionTypes.LoadAgeGroupsRequestFail;
	constructor(payload: any) {}
}

export class CreateAgeGroupRequest implements Action {
    readonly type = AgeGroupActionTypes.CreateAgeGroupRequest;
    constructor(public ageGroup: AgeGroup) {}
}

export class CreateAgeGroupRequestSuccess implements Action {
	readonly type = AgeGroupActionTypes.CreateAgeGroupRequestSuccess;
	constructor(public ageGroup: AgeGroup) {}
}

export class CreateAgeGroupRequestFail implements Action {
	readonly type = AgeGroupActionTypes.CreateAgeGroupRequestFail;
	constructor(payload: any) {}
}

export class OpenSelectedAgeGroupDetails implements Action {
    readonly type = AgeGroupActionTypes.OpenSelectedAgeGroupDetails;
    constructor(public selectedAgeGroup: AgeGroup, public ageGroupID: number) {}
}

export class OpenSelectedAgeGroupDetailsSuccess implements Action {
    readonly type = AgeGroupActionTypes.OpenSelectedAgeGroupDetailsSuccess;
    constructor(public selectedAgeGroup: AgeGroup) {}
}

export class OpenSelectedAgeGroupDetailsFail implements Action {
    readonly type = AgeGroupActionTypes.OpenSelectedAgeGroupDetailsFail;
    constructor(payload: any) {}
}

export type AgeGroupActions = 
    LoadAgeGroupsRequestRequest
    | LoadAgeGroupsRequestRequestSuccess
    | LoadAgeGroupsRequestRequestFail
    | CreateAgeGroupRequest
    | CreateAgeGroupRequestSuccess
    | CreateAgeGroupRequestFail
    | OpenSelectedAgeGroupDetails
    | OpenSelectedAgeGroupDetailsSuccess
    | OpenSelectedAgeGroupDetailsFail;