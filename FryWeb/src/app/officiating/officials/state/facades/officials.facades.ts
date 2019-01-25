import { Injectable } from '@angular/core';
import { OfficialState } from '../reducers/officials.reducer';
import { Store } from '@ngrx/store';
import * as officialQuery from '../selectors/officials.selectors';
import { LoadOfficialsRequest } from '../actions';
import { filter } from 'rxjs/internal/operators/filter';

@Injectable()
export class OfficialsFacade {
    arenas$ = this.store.select(officialQuery.getOfficials);

    constructor(private store: Store<OfficialState>) {
		
    }
    
    loadOfficials() {
        this.store.dispatch(new LoadOfficialsRequest());
    }
}