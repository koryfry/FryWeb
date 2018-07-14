import { Component, OnInit } from '@angular/core';

// export interface PeriodicElement {
//   name: string;
//   position: number;
//   weight: number;
//   symbol: string;
// }

export interface Arena {
  ID: number;
  Name: string;  
  Address: string;
  City: string;
  State: string;
  ZipCode: string
}

// const ELEMENT_DATA: PeriodicElement[] = [
//   {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
//   {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
//   {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
//   {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
//   {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
//   {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
//   {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
//   {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
//   {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
//   {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
// ];

const ARENA_DATA: Arena[] = [
  {ID: 1, Name: 'Griffs West', Address: '4444 Holland Ave', City: 'Holland', State: 'MI', ZipCode: '49424'},
  {ID: 2, Name: 'Griffs Georgetown', Address: '8500 48th Ave', City: 'Hudsonville', State: 'MI', ZipCode: '49426'},
  {ID: 3, Name: 'Walker Ice and Fitness', Address: '1234 Remembrance Rd', City: 'Walker', State: 'MI', ZipCode: '49417'},
  {ID: 4, Name: 'Griffs Ice House', Address: '30 Coldbrook St', City: 'Grand Rapids', State: 'MI', ZipCode: '49503'},
  {ID: 5, Name: 'Patterson Ice Arena', Address: '2550 Patterson Ave SE', City: 'Grand Rapids', State: 'MI', ZipCode: '49546'},
];

@Component({
  selector: 'fw-arena',
  templateUrl: './arena.component.html',
  styleUrls: ['./arena.component.scss']
})
export class ArenaComponent implements OnInit {
  displayedColumns: string[] = ['ID', 'Name', 'Address', 'City', 'State', 'ZipCode'];
  dataSource = ARENA_DATA;
  
  // constructor() { }

  ngOnInit() {
    console.log('Data: ', this.dataSource);
  }

  
  
}
