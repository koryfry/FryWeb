import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';

import * as fromOfficiating from './reducers';
import { AgeGroupEffects } from './age-group/age-group.effects';
import { ArenaEffects } from './arena/arena.effects';
import { OfficialEffects } from './officials/official.effects';
import { GameDetailEffects } from '../game-detail/state/effects/game-detail.effects';

import { EffectsModule } from '@ngrx/effects';


@NgModule({
    imports:[
        StoreModule.forRoot({}),
        StoreModule.forFeature('officiating', fromOfficiating.reducers),
        EffectsModule.forRoot([]),
        EffectsModule.forFeature([AgeGroupEffects, ArenaEffects, OfficialEffects, GameDetailEffects])
    ],
    providers: []
})

export class OfficiatingStateModule {}