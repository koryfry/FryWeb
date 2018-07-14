import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material';

export interface Arena {
  ID: number;
  Name: string;  
  Address: string;
  City: string;
  State: string;
  ZipCode: string
}

const ARENA_DATA: Arena[] = [
  {ID: 1, Name: 'Griffs West', Address: '1235 Holland Ave', City: 'Holland', State: 'MI', ZipCode: '49424'},
  {ID: 2, Name: 'Griffs Georgetown', Address: '1111 48th Ave', City: 'Hudsonville', State: 'MI', ZipCode: '49426'},
  {ID: 3, Name: 'Walker Ice and Fitness', Address: '1234 Remembrance Rd', City: 'Walker', State: 'MI', ZipCode: '49417'},
  {ID: 4, Name: 'Griffs Ice House', Address: '8987 Coldbrook St', City: 'Grand Rapids', State: 'MI', ZipCode: '49503'},
  {ID: 5, Name: 'Patterson Ice Arena', Address: '23235 Patterson Ave SE', City: 'Grand Rapids', State: 'MI', ZipCode: '49546'},
];

@Component({
  selector: 'fw-arena',
  templateUrl: './arena.component.html',
  styleUrls: ['./arena.component.scss']
})
export class ArenaComponent implements OnInit {
  displayedColumns: string[] = ['ID', 'Name', 'Address', 'City', 'State', 'ZipCode'];
  dataSource = new MatTableDataSource(ARENA_DATA);
  
  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  // constructor() { }

  ngOnInit() {
    console.log('Data: ', this.dataSource);
  }
}
