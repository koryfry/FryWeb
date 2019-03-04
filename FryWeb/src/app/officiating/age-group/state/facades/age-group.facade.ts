import { Injectable } from '@angular/core';
import { AgeGroupState } from '../reducers/age-group.reducer';
import { Store } from '@ngrx/store';
import * as ageGroupQuery from '../selectors/age-group.selectors';
import { LoadAgeGroupsRequest, CreateAgeGroupRequest, OpenSelectedAgeGroupDetails } from '../actions';
import { filter, withLatestFrom, map } from 'rxjs/operators';
import { AgeGroup } from 'app/models/ageGroup/age-group.model';
import * as fromAgeGroups from '../../../state/age-group/age-group.reducer';
import { Observable } from 'rxjs/internal/Observable';
import { AgeGroupsState } from 'app/officiating/state/age-group';

@Injectable()
export class AgeGroupFacade {
    constructor(private store: Store<AgeGroupsState>, private store2: Store<AgeGroupsState>) {
		
    }

    ageGroups$ = this.store.select(ageGroupQuery.getAllAgeGroups);
    selectedAgeGroup$ = this.store.select(ageGroupQuery.getSelectedAgeGroup);    
    loaded$ = this.store.select(ageGroupQuery.getAgeGroupState).pipe(map(state => state.loaded));
    ageGroup$ = this.store.select(ageGroupQuery.getAgeGroup).pipe(withLatestFrom(this.loaded$), filter(([ageGroup, loaded]) => loaded), map(([ageGroup, loaded]) => ageGroup));
    allAgeGroups$: Observable<AgeGroup[]> = this.store.select(ageGroupQuery.getAllAgeGroups);
    
    loadAgeGroups() {
        this.store.dispatch(new LoadAgeGroupsRequest());
    }

    createAgeGroup(ageGroup: AgeGroup) {
        this.store.dispatch(new CreateAgeGroupRequest(ageGroup));
    }

    openSelectedAgeGroupDetails(selectedAgeGroup: AgeGroup, ageGroupID: number) {
        this.store.dispatch(new OpenSelectedAgeGroupDetails(selectedAgeGroup, ageGroupID));
    }
}