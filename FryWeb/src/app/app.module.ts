import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import swal from 'sweetalert2';

import { AppComponent } from './app.component';
import { AppMainComponent } from './app-main/app-main.component';
import { FwBannerComponent } from './shared/components/fw-banner/fw-banner.component';
import { FwFooterComponent } from './shared/components/fw-footer/fw-footer.component';
import { FwAvatarComponent } from './shared/components/fw-avatar/fw-avatar.component';
import { OfficiatingMainComponent } from './officiating/officiating-main/officiating-main.component';
import { FwAppIconComponent } from './shared/components/fw-app-icon/fw-app-icon.component';

@NgModule({
  declarations: [
    AppComponent,
    FwBannerComponent,
    FwFooterComponent,
    FwAvatarComponent,
    OfficiatingMainComponent,
    AppMainComponent,
    FwAppIconComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgbModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
