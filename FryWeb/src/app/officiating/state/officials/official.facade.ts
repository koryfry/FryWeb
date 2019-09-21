import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import * as officialQuery from './official.selectors';
import { LoadOfficialsRequest, AddOfficialRequest, OpenSelectedOfficialDetails, UpdateOfficialRequest } from './official.actions';
import { Official } from '@models/officiating/official/official.model';
import { Observable } from 'rxjs/internal/Observable';
import { OfficialsState } from 'app/officiating/state/officials';

@Injectable()
export class OfficialsFacade {
    loaded$ = this.store.select(officialQuery.getOfficialsLoaded);
    loading$ = this.store.select(officialQuery.getOfficialsLoading);
    allOfficials$: Observable<Official[]> = this.store.select(officialQuery.getAllOfficials);
    selectedOfficial$ = this.store.select(officialQuery.getSelectedOfficial);

    constructor(private store: Store<OfficialsState>) {
		
    }
    
    loadOfficials() {
        this.store.dispatch(new LoadOfficialsRequest());
    }

    createOfficial(official: Official){
        this.store.dispatch(new AddOfficialRequest(official));
    }

    openSelectedOfficialDetails(selectedOfficial: Official) {
        this.store.dispatch(new OpenSelectedOfficialDetails(selectedOfficial));
    }

    updateOfficial(official: Partial<Official>) {
        this.store.dispatch(new UpdateOfficialRequest(official.id, official));
    }
}