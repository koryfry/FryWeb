import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'fw-address-display',
  templateUrl: './address-display.component.html',
  styleUrls: ['./address-display.component.scss']
})
export class AddressDisplayComponent implements OnInit {
  @Input() object: any

  constructor() { }

  ngOnInit() {
    console.log('Object input: ', this.object);
  }

}
