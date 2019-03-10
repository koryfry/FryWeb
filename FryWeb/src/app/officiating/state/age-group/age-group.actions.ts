import { Action } from '@ngrx/store';
import { Update } from '@ngrx/entity';
import { AgeGroup } from '../../../models/ageGroup/age-group.model';

export enum AgeGroupActionTypes {
    LoadAgeGroupsRequest = '[Age Group] Load Age Group Request',
    LoadAgeGroupsRequestSuccess = '[Age Group] Load Age Group Request Success',
    LoadAgeGroupsRequestFail = '[Age Group] Load Age Group Request Fail',
    AddAgeGroupRequest = '[AgeGroup] Add Age Group',
    AddAgeGroupRequestSuccess = '[AgeGroup] Add Age Group Request Success',
    AddAgeGroupRequestFail = '[AgeGroup] Add Age Group Request Fail',
    OpenSelectedAgeGroupDetails = '[AgeGroup] Open Selected AgeGroup Details',
    OpenSelectedAgeGroupDetailsSuccess = '[AgeGroup] Open Selected AgeGroup Details Success',
    OpenSelectedAgeGroupDetailsFail = '[AgeGroup] Open Selected AgeGroup Details Fail',
    UpdateAgeGroupRequest = '[AgeGroup] Update Age Group',
    UpdateAgeGroupRequestSuccess = '[AgeGroup] Update Age Group Request Success',
    UpdateAgeGroupRequestFail = '[AgeGroup] Update Age Group Request Fail',
}

export class LoadAgeGroupsRequest implements Action {
	readonly type = AgeGroupActionTypes.LoadAgeGroupsRequest;
}

export class LoadAgeGroupsRequestSuccess implements Action {
    readonly type = AgeGroupActionTypes.LoadAgeGroupsRequestSuccess;

    constructor(public ageGroups: AgeGroup[]) {}
}

export class LoadAgeGroupsRequestFail implements Action {
	readonly type = AgeGroupActionTypes.LoadAgeGroupsRequestFail;
	constructor(payload: any) {}
}

export class AddAgeGroupRequest implements Action {
    readonly type = AgeGroupActionTypes.AddAgeGroupRequest;
    constructor(public ageGroup: AgeGroup) { }
}

export class AddAgeGroupRequestSuccess implements Action {
	readonly type = AgeGroupActionTypes.AddAgeGroupRequestSuccess;
	constructor(public ageGroup: AgeGroup) {}
}

export class AddAgeGroupRequestFail implements Action {
	readonly type = AgeGroupActionTypes.AddAgeGroupRequestFail;
	constructor(payload: any) {}
}

export class OpenSelectedAgeGroupDetails implements Action {
    readonly type = AgeGroupActionTypes.OpenSelectedAgeGroupDetails;
    constructor(public selectedAgeGroup: AgeGroup) {}
}

export class OpenSelectedAgeGroupDetailsSuccess implements Action {
    readonly type = AgeGroupActionTypes.OpenSelectedAgeGroupDetailsSuccess;
    constructor(public selectedAgeGroup: AgeGroup) {}
}

export class OpenSelectedAgeGroupDetailsFail implements Action {
    readonly type = AgeGroupActionTypes.OpenSelectedAgeGroupDetailsFail;
    constructor(payload: any) {}
}

export class UpdateAgeGroupRequest implements Action {
    readonly type = AgeGroupActionTypes.UpdateAgeGroupRequest;
    constructor(public ageGroupId: number, public changes: AgeGroup) { }
}

export class UpdateAgeGroupRequestSuccess implements Action {
	readonly type = AgeGroupActionTypes.UpdateAgeGroupRequestSuccess;
	constructor(public ageGroup: AgeGroup) {}
}

export class UpdateAgeGroupRequestFail implements Action {
	readonly type = AgeGroupActionTypes.UpdateAgeGroupRequestFail;
	constructor(payload: any) {}
}

export type AgeGroupActions = 
    LoadAgeGroupsRequest
    | LoadAgeGroupsRequestSuccess
    | LoadAgeGroupsRequestFail
    | AddAgeGroupRequest
    | AddAgeGroupRequestSuccess
    | AddAgeGroupRequestFail
    | OpenSelectedAgeGroupDetails
    | OpenSelectedAgeGroupDetailsSuccess
    | OpenSelectedAgeGroupDetailsFail
    | UpdateAgeGroupRequest
    | UpdateAgeGroupRequestSuccess
    | UpdateAgeGroupRequestFail;