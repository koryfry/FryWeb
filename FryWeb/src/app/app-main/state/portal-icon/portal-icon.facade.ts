import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import * as portalIconQuery from './portal-icon.selectors';
import { LoadPortalIconsRequest } from './portal-icon.actions';
import { Icon } from 'app/models/icon/icon';
import { Observable } from 'rxjs/internal/Observable';
import { PortalIconsState } from 'app/app-main/state/portal-icon';

@Injectable()
export class PortalIconFacade {
    constructor(private store: Store<PortalIconsState>) {}

    loaded$ = this.store.select(portalIconQuery.getPortalIconsLoaded);
    loading$ = this.store.select(portalIconQuery.getPortalIconsLoading);
    portalIcons$: Observable<Icon[]> = this.store.select(portalIconQuery.getAllPortalIcons)
    
    loadPortalIcons() {
        this.store.dispatch(new LoadPortalIconsRequest());
    }
}