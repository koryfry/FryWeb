import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'fw-officiating-main',
  templateUrl: './officiating-main.component.html',
  styleUrls: ['./officiating-main.component.scss']
})
export class OfficiatingMainComponent implements OnInit {
  title = 'Welcome to Officiating';
  @Output() bannerTitle: EventEmitter<string> = new EventEmitter<string>();

  links = [
    { label: 'Arena Management', routerLink: 'arena' },
    { label: 'Age Group Management', routerLink: 'ageGroup' },
    { label: 'Officials Management', routerLink: 'officials' }    
  ];

  events: string[] = [];
  opened: boolean = false;

  constructor(private route: ActivatedRoute) { 
    
  }

  ngOnInit() {
  }

  setBannerTitle() {
    this.bannerTitle.emit('Welcome to Officiating');
  }
}
