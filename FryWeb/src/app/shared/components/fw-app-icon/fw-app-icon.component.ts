import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'fw-app-icon',
  templateUrl: './fw-app-icon.component.html',
  styleUrls: ['./fw-app-icon.component.scss']
})
export class FwAppIconComponent implements OnInit {
  @Input() imageUrl: string;
  @Input() width: string;
  @Input() height: string;
  @Input() cssClass: string;
  @Input() float: string;
  @Input() marginLeft: string;
  @Input() marginRight: string;

  constructor() { }

  ngOnInit() {
  }

}
