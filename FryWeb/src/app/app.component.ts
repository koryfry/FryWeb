import { Component } from '@angular/core';
import swal from 'sweetalert2';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Welcome to Fry Web!';
  message = "App Component Footer";
  officiatingImageUrl = "/assets/images/KoryFaceoff.jpg";
  officiatingImageWidth = "100px";
  officiatingImageHeight = "110px";

  shootingImageUrl = "/assets/images/Kory Shooting - Copy.jpg";
  shootingImageWidth = "100px";
  shootingImageHeight = "110px";

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
      type: 'success'
    })
  }
}