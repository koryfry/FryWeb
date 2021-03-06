import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import * as ageGroupQuery from './age-group.selectors';
import { LoadAgeGroupsRequest, AddAgeGroupRequest, OpenSelectedAgeGroupDetails, UpdateAgeGroupRequest } from './age-group.actions';
import { AgeGroup } from '@models/officiating/ageGroup/age-group.model';
import { Observable } from 'rxjs/internal/Observable';
import { AgeGroupsState } from 'app/officiating/state/age-group';

@Injectable()
export class AgeGroupFacade {
    constructor(private store: Store<AgeGroupsState>) {
		
    }

    loaded$ = this.store.select(ageGroupQuery.getAgeGroupsLoading);
    loading$ = this.store.select(ageGroupQuery.getAgeGroupsLoading);
    allAgeGroups$: Observable<AgeGroup[]> = this.store.select(ageGroupQuery.getAllAgeGroups);
    selectedAgeGroup$ = this.store.select(ageGroupQuery.getSelectedAgeGroup);    
    
    loadAgeGroups() {
        this.store.dispatch(new LoadAgeGroupsRequest());
    }

    createAgeGroup(ageGroup: AgeGroup) {
        this.store.dispatch(new AddAgeGroupRequest(ageGroup));
    }

    openSelectedAgeGroupDetails(selectedAgeGroup: AgeGroup) {
        this.store.dispatch(new OpenSelectedAgeGroupDetails(selectedAgeGroup));
    }

    updateAgeGroup(ageGroup: Partial<AgeGroup>) {
        this.store.dispatch(new UpdateAgeGroupRequest(ageGroup.id, ageGroup));
    }
}