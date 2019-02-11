import { Injectable } from '@angular/core';
import { AgeGroupState } from '../reducers/age-group.reducer';
import { Store } from '@ngrx/store';
import * as ageGroupQuery from '../selectors/age-group.selectors';
import { LoadAgeGroupsRequestRequest, CreateAgeGroupRequest, OpenSelectedAgeGroupDetails } from '../actions';
import { filter } from 'rxjs/internal/operators/filter';
import { AgeGroup } from 'app/models/ageGroup/age-group.model';

@Injectable()
export class AgeGroupFacade {
    ageGroups$ = this.store.select(ageGroupQuery.getAllAgeGroups);
    selectedAgeGroup$ = this.store.select(ageGroupQuery.getSelectedAgeGroup);

    constructor(private store: Store<AgeGroupState>) {
		
    }
    
    loadAgeGroups() {
        this.store.dispatch(new LoadAgeGroupsRequestRequest());
    }

    createAgeGroup(ageGroup: AgeGroup) {
        this.store.dispatch(new CreateAgeGroupRequest(ageGroup));
    }

    openSelectedAgeGroupDetails(selectedAgeGroup: AgeGroup, ageGroupID: number) {
        this.store.dispatch(new OpenSelectedAgeGroupDetails(selectedAgeGroup, ageGroupID));
    }
}