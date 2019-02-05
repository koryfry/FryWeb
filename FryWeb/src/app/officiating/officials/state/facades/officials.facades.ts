import { Injectable } from '@angular/core';
import { OfficialState } from '../reducers/officials.reducer';
import { Store } from '@ngrx/store';
import * as officialQuery from '../selectors/officials.selectors';
import { LoadOfficialsRequest, CreateOfficialRequest, OpenSelectedOfficialDetails } from '../actions';
import { filter } from 'rxjs/internal/operators/filter';
import { Official } from 'app/models/official/official.model';

@Injectable()
export class OfficialsFacade {
    officials$ = this.store.select(officialQuery.getAllOfficials);
    selectedOfficial$ = this.store.select(officialQuery.getSelectedOfficial);

    constructor(private store: Store<OfficialState>) {
		
    }
    
    loadOfficials() {
        this.store.dispatch(new LoadOfficialsRequest());
    }

    createOfficial(official: Official){
        this.store.dispatch(new CreateOfficialRequest(official));
    }

    openSelectedOfficialDetails(selectedOfficial: Official, officialID: number) {
        this.store.dispatch(new OpenSelectedOfficialDetails(selectedOfficial, officialID));
    }
}