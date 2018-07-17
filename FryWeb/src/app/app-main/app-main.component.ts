import { Component, OnInit } from '@angular/core';
import swal from 'sweetalert2';

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

  constructor() { }

  ngOnInit() {
  }

  showOfficiatingSweetAlert() {
    swal({
      title: 'Success',
      text: 'Officiating Sweet Alert is working',
      type: 'success'
    })
  }

  showShootingSweetAlert() {
    swal({
      title: 'Success',
      text: 'Shooting Sweet Alert is working',
      type: 'success',
      timer: 2000
    })
  }
}
