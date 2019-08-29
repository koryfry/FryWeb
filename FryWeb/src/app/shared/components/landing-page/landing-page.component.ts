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
    private iconService: IconService
  ) { }

  ngOnInit() {
    this.iconService.getApplicationIcons().pipe().subscribe(data => {
      this.applicationIcons = data;
    });
  }
  
  showShootingSweetAlert() {
    swal({
      title: 'Success',
      text: 'Shooting Sweet Alert is working',
      type: 'success',
      timer: 2000
    })
  }

  navigateToOfficiaingArea() {
    this.overlayService.pushUpdatedLandingPageOverlayClosedStatus(true);
    this.router.navigate(['home/officiating']);
  }

}
