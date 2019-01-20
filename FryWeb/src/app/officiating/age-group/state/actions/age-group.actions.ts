import { Action } from '@ngrx/store';
import { AgeGroup } from '../../../../models/ageGroup/age-group.model';

/**
 * For each action type in an action group, make a simple
 * enum object for all of this group's action types.
 */
export enum AgeGroupActionTypes {
    LoadAgeGroupsRequest = '[Age Group] Load Age Group Request',
    LoadAgeGroupsRequestSuccess = '[Age Group] Load Age Group Request Success',
    LoadAgeGroupsRequestFail = '[Age Group] Load Age Group Request Fail'
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


export type AgeGroupActions = 
    LoadAgeGroupsRequestRequest
    | LoadAgeGroupsRequestRequestSuccess
    | LoadAgeGroupsRequestRequestFail;