import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import * as applicationIconQuery from './application-icon.selectors';
import { LoadApplicationIconsRequest } from './application-icon.actions';
import { Icon } from 'app/models/icon/icon';
import { Observable } from 'rxjs/internal/Observable';
import { ApplicationIconsState } from 'app/app-main/state/application-icon';

@Injectable()
export class ApplicationIconFacade {
    constructor(private store: Store<ApplicationIconsState>) {}

    loaded$ = this.store.select(applicationIconQuery.getApplicationIconsLoaded);
    loading$ = this.store.select(applicationIconQuery.getApplicationIconsLoading);
    applicationIcons$: Observable<Icon[]> = this.store.select(applicationIconQuery.getAllApplicationIcons)
    
    loadApplicationIcons() {
        this.store.dispatch(new LoadApplicationIconsRequest());
    }
}