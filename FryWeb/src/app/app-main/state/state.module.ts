import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';

import * as fromPortal from './reducers';
import { PortalIconEffects } from './portal-icon/portal-icon.effects';

import { EffectsModule } from '@ngrx/effects';


@NgModule({
    imports:[
        StoreModule.forRoot({}),
        StoreModule.forFeature('portal', fromPortal.reducers),
        EffectsModule.forRoot([]),
        EffectsModule.forFeature([PortalIconEffects])
    ],
    providers: []
})

export class PortalStateModule {}