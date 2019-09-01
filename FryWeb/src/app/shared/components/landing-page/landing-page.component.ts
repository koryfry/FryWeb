import { Component, OnInit } from '@angular/core';
import swal from 'sweetalert2';
import { OverlayService } from 'app/services/overlay.service';
import { Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { take, takeUntil } from 'rxjs/internal/operators';

// Import model
import { Icon } from '../../../models/icon/icon';

// Import Services
import { IconService } from '../../../services/icon.service';
import { PortalIconFacade } from '../../../app-main/state/portal-icon/portal-icon.facade';

@Component({
  selector: 'fw-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {
  portalIcons$: Observable<Icon[]>;  
  private _componentDestroyed$: Subject<boolean> = new Subject();
  portalIcons: Icon[];


  constructor(
    private overlayService: OverlayService,
    private router: Router,
    private iconService: IconService,
    private portalIconFacade: PortalIconFacade
  ) { 
    this.portalIconFacade.loadPortalIcons();
  }

  ngOnInit() {
    this.portalIcons$ = this.portalIconFacade.portalIcons$;
  }

  ngOnDestroy() {
    this._componentDestroyed$.next(true);
		this._componentDestroyed$.complete();
  }
  
  showShootingSweetAlert() {
    swal({
      title: 'Success',
      text: 'Shooting Sweet Alert is working',
      type: 'success',
      timer: 2000
    })
  }

  navigateToApplicationArea(areaName: string) {
    this.overlayService.pushUpdatedLandingPageOverlayClosedStatus(true);
    if(areaName === 'Officiating')
      this.router.navigate(['home/officiating']);
    else
      this.showShootingSweetAlert();
  }
}
