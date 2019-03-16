import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { OfficiatingMaterialModule } from './officiatingmaterial.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
import { ArenaDetailsComponent } from './officiating/arena/components/arena-details/arena-details.component';
import { AddressDisplayComponent } from './shared/components/address-display/address-display.component';
import { CardComponent } from './shared/components/card/card.component';
import { FwTabGroupComponent } from './shared/components/fw-tab-group/fw-tab-group.component';
import { FwSnackbarComponent } from './shared/components/fw-snackbar/fw-snackbar.component';
import { AddArenaDialogComponent } from './officiating/arena/components/add-arena-dialog/add-arena-dialog.component';
import { CustomDialogComponent } from './shared/components/custom-dialog/custom-dialog.component';
import { AddAgeGroupDialogComponent } from './officiating/age-group/components/add-age-group-dialog/add-age-group-dialog.component';
import { AddOfficialDialogComponent } from './officiating/officials/components/add-official-dialog/add-official-dialog.component'; 
import { GameDetailComponent } from './officiating/game-detail/game-detail.component';
import { AgeGroupDetailsComponent } from './officiating/age-group/components/age-group-details/age-group-details.component';
import { OfficialsDetailsComponent } from './officiating/officials/components/officials-details/officials-details.component';
import { AddGameDetailDialogComponent } from './officiating/game-detail/components/add-game-detail-dialog/add-game-detail-dialog.component';
import { UpdateAgeGroupDialogComponent } from './officiating/age-group/components/update-age-group-dialog/update-age-group-dialog.component';

// Import Services
import { ArenaService } from './services/arena.service';
import { AgeGroupService } from 'app/services/age-group.service';
import { TableDisplayService } from 'app/shared/services/table-display.service';
import { OfficialsService } from 'app/services/officials.service';
import { GameDetailService } from './services/game-detail.service';
import { FwSnackbarService } from './shared/components/fw-snackbar/fw-snackbar.service';

// Import State Related Items
import { AgeGroupFacade } from './officiating/state/age-group/age-group.facade';
import { ArenaFacade } from './officiating/state/arena/arena.facade';
import { OfficialsFacade } from './officiating/officials/state/facades/officials.facades';
import { GameDetailFacade } from './officiating/game-detail/state/facades/game-detail.facade';


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
    FwTabGroupComponent,
    AddArenaDialogComponent,
    CustomDialogComponent,
    FwSnackbarComponent,
    AddAgeGroupDialogComponent,
    AddOfficialDialogComponent,
    AgeGroupDetailsComponent,
    OfficialsDetailsComponent,
    GameDetailComponent,
    AddGameDetailDialogComponent,
    UpdateAgeGroupDialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    OfficiatingMaterialModule,
    FormsModule,
    ReactiveFormsModule,
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
    ArenaFacade,
    OfficialsFacade,
    FwSnackbarService,
    GameDetailService,
    GameDetailFacade
  ],
  entryComponents:[
    AddArenaDialogComponent, 
    FwSnackbarComponent, 
    AddAgeGroupDialogComponent, 
    AddOfficialDialogComponent,
    AgeGroupDetailsComponent,
    OfficialsDetailsComponent,
    AddGameDetailDialogComponent,
    UpdateAgeGroupDialogComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
