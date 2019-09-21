import { Action } from '@ngrx/store';
import { Update } from '@ngrx/entity';
import { Icon } from '@models/app/icon/icon';

export enum PortalIconActionTypes {
  LoadPortalIconsRequest = '[Portal Icon] Load Portal Icons Request',
  LoadPortalIconsRequestSuccess = '[Portal Icon] Load Portal Icons Request Success',
  LoadPortalIconsRequestFail = '[Portal Icon] Load Portal Icons Request Fail'
}

export class LoadPortalIconsRequest implements Action {
	readonly type = PortalIconActionTypes.LoadPortalIconsRequest;
}

export class LoadPortalIconsRequestSuccess implements Action {
    readonly type = PortalIconActionTypes.LoadPortalIconsRequestSuccess;

    constructor(public portalIcons: Icon[]) {}
}

export class LoadPortalIconsRequestFail implements Action {
	readonly type = PortalIconActionTypes.LoadPortalIconsRequestFail;
	constructor(payload: any) {}
}

export type PortalIconActions = 
  LoadPortalIconsRequest
  | LoadPortalIconsRequestSuccess
  | LoadPortalIconsRequestFail