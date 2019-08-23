import { Component, OnInit } from '@angular/core';
import swal from 'sweetalert2';
import { ActivatedRoute } from '@angular/router';
import { Overlay, OverlayConfig, OverlayRef, CdkOverlayOrigin } from '@angular/cdk/overlay';
import { ComponentPortal, Portal, TemplatePortalDirective } from '@angular/cdk/portal';
import { LandingPageComponent } from '../shared/components/landing-page/landing-page.component';

export interface Tab {
  label: string,
  path: string
}

@Component({
  selector: 'fw-app-main',
  templateUrl: './app-main.component.html',
  styleUrls: ['./app-main.component.scss']
})
export class AppMainComponent implements OnInit {
  title = 'Fry Web';
  message = "App Component Footer";
  officiatingImageUrl = "/assets/images/Kory_Cropped.jpg";
  officiatingImageWidth = "100px";
  officiatingImageHeight = "110px";

  shootingImageUrl = "/assets/images/Kory Shooting - Copy.jpg";
  shootingImageWidth = "100px";
  shootingImageHeight = "110px";

  events: string[] = [];
  opened: boolean = true;

  tabs: Tab[];
  routeConfigPath: string;
  isOverlayOpen: boolean = false;
  applicationLoaderOverlay: OverlayRef;

  constructor(
    private route: ActivatedRoute,
    public overlay: Overlay
  ) 
  {
    this.routeConfigPath = route.snapshot.routeConfig.path;
    this.tabs = [
      { label: 'Officiating', path: 'officiating' }
    ];
  }

  ngOnInit() {

  }

  showOfficiatingSweetAlert() {
    swal({
      title: 'Success',
      text: 'Officiating Sweet Alert is working',
      type: 'success'
    })
  }

  setBannerTitle(bannerTitle: string) {
    alert("Title is: " + bannerTitle);
    this.title = bannerTitle;
  }

  openApplicationAreaOverlay() {
    let config = new OverlayConfig();
    config.positionStrategy = this.overlay.position()
      .global()
      .centerHorizontally()
      .centerVertically();

    this.applicationLoaderOverlay = this.overlay.create(config);
    //const applicationAreaPortal = new ComponentPortal();
    //this.applicationLoaderOverlay.attach()
  }
}
