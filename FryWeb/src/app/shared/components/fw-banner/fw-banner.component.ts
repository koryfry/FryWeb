import { Component, OnInit, Input } from '@angular/core';
import { Title } from '@angular/platform-browser/src/browser/title';

@Component({
  selector: 'fw-banner',
  templateUrl: './fw-banner.component.html',
  styleUrls: ['./fw-banner.component.scss']
})
export class FwBannerComponent implements OnInit {
  @Input() title: string;

  constructor() { }

  ngOnInit() {
    console.log("Title: " + this.title)
  }

}
