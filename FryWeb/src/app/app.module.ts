import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { OfficiatingMaterialModule } from './officiatingmaterial.module';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { OfficiatingStateModule } from 'app/officiating/state/state.module';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import swal from 'sweetalert2';

// Import Components
import { AppComponent } from './app.component';
import { AppMainComponent } from './app-main/app-main.component';
import { FwBannerComponent } from './shared/components/fw-banner/fw-banner.component';
import { FwFooterComponent } from './shared/components/fw-footer/fw-footer.component';
import { FwAvatarComponent } from './shared/components/fw-avatar/fw-avatar.component';
import { OfficiatingMainComponent } from './officiating/officiating-main/officiating-main.component';
import { FwAppIconComponent } from './shared/components/fw-app-icon/fw-app-icon.component';
import { ArenaComponent } from './officiating/arena/arena.component';
import { AgeGroupComponent } from './officiating/age-group/age-group.component';
import { OfficialsComponent } from './officiating/officials/officials.component';
import { ArenaDetailsComponent } from './officiating/arena/arena-details/arena-details.component';
import { AddressDisplayComponent } from './shared/components/address-display/address-display.component';
import { CardComponent } from './shared/components/card/card.component';
import { FwTabGroupComponent } from './shared/components/fw-tab-group/fw-tab-group.component';

// Import Services
import { ArenaService } from './services/arena.service';
import { AgeGroupService } from 'app/services/age-group.service';
import { TableDisplayService } from 'app/shared/services/table-display.service';
import { OfficialsService } from 'app/services/officials.service';

// Import State Related Items
import { AgeGroupFacade } from './officiating/age-group/state/facades/age-group.facade';
import { ArenaFacade } from './officiating/arena/state/facades/arena.facade';

@NgModule({
  declarations: [
    AppComponent,
    FwBannerComponent,
    FwFooterComponent,
    FwAvatarComponent,
    OfficiatingMainComponent,
    AppMainComponent,
    FwAppIconComponent,
    ArenaComponent,
    AgeGroupComponent,
    OfficialsComponent,
    ArenaDetailsComponent,
    AddressDisplayComponent,
    CardComponent,
    FwTabGroupComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    OfficiatingMaterialModule,
    FormsModule,
    AppRoutingModule,
    OfficiatingStateModule,
    StoreDevtoolsModule.instrument()
  ],
  providers: [
    ArenaService,
    AgeGroupService,
    TableDisplayService,
    OfficialsService,
    AgeGroupFacade,
    ArenaFacade
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
