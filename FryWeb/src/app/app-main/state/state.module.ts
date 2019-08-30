import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';

import * as fromApplication from './reducers';
import { ApplicationIconEffects } from './application-icon/application-icon.effects';

import { EffectsModule } from '@ngrx/effects';


@NgModule({
    imports:[
        StoreModule.forRoot({}),
        StoreModule.forFeature('application', fromApplication.reducers),
        EffectsModule.forRoot([]),
        EffectsModule.forFeature([ApplicationIconEffects])
    ],
    providers: []
})

export class ApplicationStateModule {}