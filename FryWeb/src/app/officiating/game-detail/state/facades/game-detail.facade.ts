import { Injectable } from '@angular/core';
import { GameDetailState } from '../reducers/game-detail.reducer';
import { Store } from '@ngrx/store';
import * as gameDetailQuery from '../selectors/game-details.selectors';
import { LoadGameDetailsRequest, CreateGameDetailRequest, OpenSelectedGameDetail, LoadArenasRequest } from '../actions';
import { filter } from 'rxjs/internal/operators/filter';
import { GameDetail } from 'app/models/gameDetail/gameDetail.model';

@Injectable()
export class GameDetailFacade {
    gameDetails$ = this.store.select(gameDetailQuery.getAllGameDetails);
    selectedGameDetail$ = this.store.select(gameDetailQuery.getSelectedGameDetail);

    constructor(private store: Store<GameDetailState>) {
		
    }
    
    loadGameDetails() {
        this.store.dispatch(new LoadGameDetailsRequest());
    }

    createGameDetail(gameDetail: GameDetail) {
        this.store.dispatch(new CreateGameDetailRequest(gameDetail));
    }

    openSelectedGameDetailDetails(selectedGameDetail: GameDetail, gameDetailID: number) {
        this.store.dispatch(new OpenSelectedGameDetail(selectedGameDetail, gameDetailID));
    }

    loadArenas() {
        this.store.dispatch(new LoadArenasRequest());
    }
}