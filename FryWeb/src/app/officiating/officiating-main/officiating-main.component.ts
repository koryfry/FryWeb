import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

export interface Tab {
  label: string,
  path: string
}


@Component({
  selector: 'fw-officiating-main',
  templateUrl: './officiating-main.component.html',
  styleUrls: ['./officiating-main.component.scss']
})
export class OfficiatingMainComponent implements OnInit {
  title = 'Welcome to Officiating';
  @Output() bannerTitle: EventEmitter<string> = new EventEmitter<string>();
  tabs: Tab[];
  routeConfigPath: string;

  constructor(private route: ActivatedRoute) { 
    this.routeConfigPath = route.snapshot.routeConfig.path;
    this.tabs = [
      { label: 'Arena Management', path: 'arena' },
      { label: 'Age Group Management', path: 'ageGroup' },
      { label: 'Officials Management', path: 'officials' } 
    ];
  }

  ngOnInit() {
  }

  setBannerTitle() {
    this.bannerTitle.emit('Welcome to Officiating');
  }
}
