import { Component, OnInit, ViewChild, EventEmitter, Output } from '@angular/core';
import { MatTableDataSource, MatSort } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';

// Import model
import { Arena } from '../../models/arena/arena.model';

// Import Services
import { ArenaService } from '../../services/arena.service';

@Component({
  selector: 'fw-arena',
  templateUrl: './arena.component.html',
  styleUrls: ['./arena.component.scss']
})
export class ArenaComponent implements OnInit {
  displayedColumns: string[] = ['id', 'Name', 'Address', 'City', 'State', 'ZipCode'];
  data: Arena[];
  dataSource = new MatTableDataSource();
  title = 'Welcome to Arena Management'; 
  //@Output() bannerTitle: EventEmitter<string> = new EventEmitter(true);

  @ViewChild(MatSort) sort: MatSort; 
  
  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  constructor(private route: ActivatedRoute, private arenaService: ArenaService) 
  { 
    //this.bannerTitle.emit(this.title);
  }

  ngOnInit() {
    this.arenaService.getArenas().subscribe(res => {      
      this.data = res;
      this.dataSource = new MatTableDataSource(this.data);
      this.dataSource.sort = this.sort;
      console.log('Data: ', this.dataSource);
    }, err => {
      console.log('Error: ', err);
    });    
  }

  logRow(row: any) {
    console.log('Row selected: ', row);
  }
}