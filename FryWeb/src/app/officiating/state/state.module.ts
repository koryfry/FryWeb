import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';

import { reducers } from './reducers';
import { AgeGroupEffects } from '../age-group/state/effects/age-group.effects';

import { EffectsModule } from '@ngrx/effects';


@NgModule({
    imports:[
        StoreModule.forRoot({}),
        StoreModule.forFeature('officiating', reducers),
        EffectsModule.forRoot([]),
        EffectsModule.forFeature([AgeGroupEffects])
    ],
    providers: []
})

export class OfficiatingStateModule {}