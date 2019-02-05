import { OfficialActions, OfficialActionTypes } from '../actions/officials.actions';
import { Official } from '../../../../models/official/official.model';
import * as officialsActions from '../actions/officials.actions';

export interface OfficialState {
    loaded: boolean;
    loading: boolean;
    officials: {[id: number]: Official};
    selectedOfficial: Official;
}

const initialState: OfficialState = {
    loaded: false,
    loading: false,
    officials: null,
    selectedOfficial: null
}

export function officialReducer(state = initialState, action: OfficialActions): OfficialState {
    switch(action.type) {
        case OfficialActionTypes.LoadOfficialsRequestSuccess: {
            const ofs = action.officials;
            const officials = ofs.reduce(
                (officials: { [id: number]: Official }, official: Official) => {
                    return {
                        ...officials,
                        [official.id]: official,
                    };
                },
                {
                    ...state.officials,
                }
            );
            return {
                ...state,
                loading: false,
                loaded: true,
                officials
            }
        }

        case OfficialActionTypes.CreateOfficialRequestSuccess: {
            const official = action.official;
            const officials = {
                ...state.officials,
                [official.id]: official
            }
            return {
                ...state,
                officials: officials,
                loaded: false,
                loading: false
            }
        }

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

        default: {
            return state;
        }
    }
}