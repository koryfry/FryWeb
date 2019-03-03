import { Action } from '@ngrx/store';
import { Update } from '@ngrx/entity';
import { AgeGroup } from '../../../models/ageGroup/age-group.model';

export enum AgeGroupActionTypes {
    LoadAgeGroupsRequestSuccess = '[AgeGroup] Load Age Groups',
    AddAgeGroup = '[AgeGroup] Create Age Group'
}

export class LoadAgeGroupsRequestSuccess implements Action {
    readonly type = AgeGroupActionTypes.LoadAgeGroupsRequestSuccess;

    constructor(public payload: { ageGroups: AgeGroup[] }) {}
}

export class AddAgeGroup implements Action {
    readonly type = AgeGroupActionTypes.AddAgeGroup;
    constructor(public ageGroup: AgeGroup) { }
}

export type AgeGroupActions = 
    LoadAgeGroupsRequestSuccess
    | AddAgeGroup;