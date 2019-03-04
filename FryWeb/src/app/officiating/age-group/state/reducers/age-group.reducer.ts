import { AgeGroupActions, AgeGroupActionTypes } from '../actions/age-group.actions';
import { AgeGroup } from 'app/models/ageGroup/age-group.model';

export interface AgeGroupState {
    loaded: boolean;
    loading: boolean;
    ageGroups: AgeGroup[];//{[id: number]: AgeGroup};
    selectedAgeGroup: AgeGroup;
    ageGroupID: number;
}

const initialState: AgeGroupState = {
    loaded: false,
    loading: false,
    ageGroups: null,
    selectedAgeGroup: null,
    ageGroupID: null
}

export function ageGroupReducer(state = initialState, action: AgeGroupActions): AgeGroupState {
    switch(action.type) {
        case AgeGroupActionTypes.LoadAgeGroupsRequestSuccess: {
            // const ags = action.ageGroups;
            // const ageGroups = ags.reduce(
            //     (ageGroups: { [id: number]: AgeGroup }, ageGroup: AgeGroup) => {
            //         return {
            //             ...ageGroups,
            //             [ageGroup.id]: ageGroup
            //         };
            //     },
            //     {
            //         ...state.ageGroups
            //     }
            // );

            return {
                ...state,
                loaded: true,
                loading: false,
                ageGroups: action.ageGroups
            }
        }

        case AgeGroupActionTypes.CreateAgeGroupRequestSuccess: {
            const ageGroup = action.ageGroup;
            const ageGroups = {
                ...state.ageGroups,
                [ageGroup.ageGroupID]: ageGroup
            }
            return {
                ...state,
                ageGroups: ageGroups,
                loaded: false,
                loading: false
            }
        }

        // case AgeGroupActionTypes.OpenSelectedAgeGroupDetails: {
        //     return {
        //         ...state,
        //         selectedAgeGroup: null
        //     }
        // }

        // case AgeGroupActionTypes.OpenSelectedAgeGroupDetailsSuccess: {
        //     return {
        //         ...state,
        //         selectedAgeGroup: action.selectedAgeGroup
        //     }
        // }

        default: {
            return state;
        }
    }
}