import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fw-officiating-main',
  templateUrl: './officiating-main.component.html',
  styleUrls: ['./officiating-main.component.scss']
})
export class OfficiatingMainComponent implements OnInit {
  title = 'Welcome to Officiating';

  links = [
    { label: 'Arena Management', routerLink: 'arena' },
    { label: 'Age Group Management', routerLink: 'ageGroup' },
    { label: 'Officials Management', routerLink: 'officials' }
  ];

  constructor() { }

  ngOnInit() {
  }

}
