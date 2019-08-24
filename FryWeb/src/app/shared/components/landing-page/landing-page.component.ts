import { Component, OnInit } from '@angular/core';
import swal from 'sweetalert2';
import { OverlayService } from 'app/services/overlay.service';
import { Router } from '@angular/router';

@Component({
  selector: 'fw-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  constructor(
    private overlayService: OverlayService,
    private router: Router  
  ) { }

  ngOnInit() {
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
