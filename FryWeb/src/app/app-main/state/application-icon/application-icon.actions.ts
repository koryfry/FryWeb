import { Action } from '@ngrx/store';
import { Update } from '@ngrx/entity';
import { Icon } from '../../../models/icon/icon';

export enum ApplicationIconActionTypes {
  LoadApplicationIconsRequest = '[Application Icon] Load Application Icons Request',
  LoadApplicationIconsRequestSuccess = '[Application Icon] Load Application Icons Request Success',
  LoadApplicationIconsRequestFail = '[Application Icon] Load Application Icons Request Fail'
}

export class LoadApplicationIconsRequest implements Action {
	readonly type = ApplicationIconActionTypes.LoadApplicationIconsRequest;
}

export class LoadApplicationIconsRequestSuccess implements Action {
    readonly type = ApplicationIconActionTypes.LoadApplicationIconsRequestSuccess;

    constructor(public applicationIcons: Icon[]) {}
}

export class LoadApplicationIconsRequestFail implements Action {
	readonly type = ApplicationIconActionTypes.LoadApplicationIconsRequestFail;
	constructor(payload: any) {}
}

export type ApplicationIconActions = 
  LoadApplicationIconsRequest
  | LoadApplicationIconsRequestSuccess
  | LoadApplicationIconsRequestFail