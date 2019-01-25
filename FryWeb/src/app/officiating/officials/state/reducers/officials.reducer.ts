import { OfficialActions, OfficialActionTypes } from '../actions/officials.actions';
import { Official } from '../../../../models/official/official.model';

export interface OfficialState {
    loaded: boolean;
    loading: boolean;
    officials: Official[];
}

const initialState: OfficialState = {
    loaded: false,
    loading: false,
    officials: null
}

export function officialReducer(state = initialState, action: OfficialActions): OfficialState {
    switch(action.type) {
        case OfficialActionTypes.LoadOfficialsRequestSuccess: {
            return {
                ...state,
                loaded: true,
                loading: false,
                officials: action.officials
            };
        }

        default: {
            return state;
        }
    }
}