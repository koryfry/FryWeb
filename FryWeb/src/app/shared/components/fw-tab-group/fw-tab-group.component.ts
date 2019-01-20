import { Component, OnInit, Input } from '@angular/core';


export interface ITab {
  label: string,
  path: string
}

@Component({
  selector: 'fw-tab-group',
  templateUrl: './fw-tab-group.component.html',
  styleUrls: ['./fw-tab-group.component.scss']
})
export class FwTabGroupComponent implements OnInit {
  @Input() tabs: ITab[];


  constructor() { }

  ngOnInit() {
  }

}
