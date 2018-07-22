import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { OfficiatingMaterialModule } from './officiatingmaterial.module';
//import { MatCardModule, MatButtonModule, MatTabsModule } from '@angular/material';
 import { FormsModule } from '@angular/forms';
// import { HttpModule } from '@angular/http';
//import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
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

// Import Services
import { ArenaService } from './services/arena.service';
import { AgeGroupService } from 'app/services/age-group.service';

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
    ArenaDetailsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    OfficiatingMaterialModule,
    // MatCardModule,
    // MatButtonModule,
    // MatTabsModule,
     FormsModule,
    // HttpModule,
    //NgbModule,
    AppRoutingModule
  ],
  providers: [
    ArenaService,
    AgeGroupService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
