import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'fw-arena-details',
  templateUrl: './arena-details.component.html',
  styleUrls: ['./arena-details.component.scss']
})
export class ArenaDetailsComponent implements OnInit {

  @Input() arena: any;

  constructor() { }

  ngOnInit() {
  }

}
