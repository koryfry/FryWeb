import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'fw-avatar',
  templateUrl: './fw-avatar.component.html',
  styleUrls: ['./fw-avatar.component.scss']
})
export class FwAvatarComponent implements OnInit {
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