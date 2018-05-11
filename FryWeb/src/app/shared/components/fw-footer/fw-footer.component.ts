import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'fw-footer',
  templateUrl: './fw-footer.component.html',
  styleUrls: ['./fw-footer.component.scss']
})
export class FwFooterComponent implements OnInit {
  @Input() message: string;

  constructor() { }

  ngOnInit() {
  }

}
