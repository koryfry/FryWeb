import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';

import { reducers } from './reducers';
import { AgeGroupEffects } from '../age-group/state/effects/age-group.effects';
import { ArenaEffects } from '../arena/state/effects/arena.effects';
import { OfficialEffects } from '../officials/state/effects/officials.effects';

import { EffectsModule } from '@ngrx/effects';


@NgModule({
    imports:[
        StoreModule.forRoot({}),
        StoreModule.forFeature('officiating', reducers),
        EffectsModule.forRoot([]),
        EffectsModule.forFeature([AgeGroupEffects, ArenaEffects, OfficialEffects])
    ],
    providers: []
})

export class OfficiatingStateModule {}