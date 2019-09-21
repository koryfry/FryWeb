import { GameDetailActions, GameDetailActionTypes } from '../actions/game-detail.actions';
import * as gameDetailActions from '../actions/game-detail.actions';
import { GameDetail } from '@models/officiating/GameDetail/gameDetail.model';
import { Arena } from '@models/officiating/arena/arena.model';
import { AgeGroup } from '@models/officiating/ageGroup/age-group.model';
import { Official } from '@models/officiating/official/official.model';

export interface GameDetailState {
    loaded: boolean;
    loading: boolean;
    gameDetails: { [id: number]: GameDetail };
    selectedGameDetail: GameDetail;
    arenas: Arena[];
    ageGroups: AgeGroup[];
    officials: Official[];
    arena: Arena;
}

const initialState: GameDetailState = {
    loaded: false,
    loading: false,
    gameDetails: null,
    selectedGameDetail: null,
    arenas: null,
    ageGroups: null,
    officials: null,
    arena: null
}

export function gameDetailReducer(state = initialState, action: GameDetailActions): GameDetailState {
    switch(action.type) {
        case GameDetailActionTypes.LoadGameDetailsRequestSuccess: {
            const ars = action.gameDetails;
            const gameDetails = ars.reduce(
                (gameDetails: { [id: number]: GameDetail }, gameDetail: GameDetail) => {
                    return {
                        ...gameDetails,
                        [gameDetail.id]: gameDetail,
                    };
                },
                {
                    ...state.gameDetails
                }
            );
            return {
                ...state,
                loading: false,
                loaded: true,
                gameDetails
            }
        }

        case GameDetailActionTypes.CreateGameDetailRequestSuccess: {
            const gameDetail = action.gameDetail;
            const gameDetails = {
                ...state.gameDetails,
                [gameDetail.id]: gameDetail
            }
            return {
                ...state,
                gameDetails: gameDetails,
                loaded: false,
                loading: false
            }
        }

        case GameDetailActionTypes.OpenSelectedGameDetail: {
            return {
                ...state,
                selectedGameDetail: null
            }
        }

        case GameDetailActionTypes.OpenSelectedGameDetailSuccess: {
            return {
                ...state,
                selectedGameDetail: action.selectedGameDetail
            }
        }

        case GameDetailActionTypes.LoadArenasRequestSuccess: {
            return {
                ...state,
                arenas: action.arenas
            }
        }

        default: {
            return state;
        }
    }
}