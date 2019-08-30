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
import { ApplicationIconFacade } from '../../../app-main/state/application-icon/application-icon.facade';

@Component({
  selector: 'fw-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {
  applicationIcons$: Observable<Icon[]>;  
  private _componentDestroyed$: Subject<boolean> = new Subject();
  applicationIcons: Icon[];


  constructor(
    private overlayService: OverlayService,
    private router: Router,
    private iconService: IconService,
    private applicationIconFacade: ApplicationIconFacade
  ) { 
    this.applicationIconFacade.loadApplicationIcons();
  }

  ngOnInit() {
    this.applicationIcons$ = this.applicationIconFacade.applicationIcons$;
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
