import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Official } from '../../../models/official/official.model';
import { OfficialActions, OfficialActionTypes } from './official.actions';
import { createSelector, createFeatureSelector } from '@ngrx/store';

export interface OfficialsState extends EntityState<Official>{
    loaded: boolean;
    loading: boolean;
    officials: Official[];
    selectedOfficial: Official;
    officialID: number;
}

export const officialAdapter = createEntityAdapter<Official>({ selectId: (official: Official) => official.id });

export const initialState: OfficialsState = officialAdapter.getInitialState({
    loaded: false,
    loading: false,
    officials: null,
    selectedOfficial: null,
    officialID: null
});

export function officialsReducer(state = initialState, action: OfficialActions) : OfficialsState {
    switch (action.type) {
        
        case OfficialActionTypes.AddOfficialRequestSuccess:
            return officialAdapter.addOne(action.official, state);

        case OfficialActionTypes.LoadOfficialsRequestSuccess:
            return officialAdapter.addAll(action.officials, state)

        case OfficialActionTypes.OpenSelectedOfficialDetails: {
            return {
                ...state,
                selectedOfficial: null
            }
        }

        case OfficialActionTypes.OpenSelectedOfficialDetailsSuccess: {
            return {
                ...state,
                selectedOfficial: action.selectedOfficial
            }
        }

        // case OfficialActionTypes.UpdateOfficialRequest: {
        //     return officialAdapter.updateOne({
        //         id: action.officialId,
        //         changes: action.changes
        //     }, state)
        // }

        default:
            return state;
    }
}