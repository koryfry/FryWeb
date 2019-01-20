import { Injectable } from '@angular/core';
import { AgeGroupState } from '../reducers/age-group.reducer';
import { Store } from '@ngrx/store';
import * as ageGroupQuery from '../selectors/age-group.selectors';
import { LoadAgeGroupsRequestRequest } from '../actions';
import { filter } from 'rxjs/internal/operators/filter';

@Injectable()
export class AgeGroupFacade {
    ageGroups$ = this.store.select(ageGroupQuery.getAgeGroups);

    constructor(private store: Store<AgeGroupState>) {
		
    }
    
    loadAgeGroups() {
        this.store.dispatch(new LoadAgeGroupsRequestRequest());
    }
}