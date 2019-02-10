import { GameDetailActions, GameDetailActionTypes } from '../actions/game-detail.actions';
import * as gameDetailActions from '../actions/game-detail.actions';
import { GameDetail } from 'app/models/GameDetail/gameDetail.model';

export interface GameDetailState {
    loaded: boolean;
    loading: boolean;
    gameDetails: { [id: number]: GameDetail };
    selectedGameDetail: GameDetail;
}

const initialState: GameDetailState = {
    loaded: false,
    loading: false,
    gameDetails: null,
    selectedGameDetail: null
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
                    ...state.gameDetails,
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

        default: {
            return state;
        }
    }
}