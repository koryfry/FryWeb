import { Component, OnInit, ViewChild, EventEmitter, Output } from '@angular/core';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
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
  //displayedColumns: string[] = ['id', 'Name', 'Address', 'City', 'State', 'ZipCode'];
  displayedColumns: string[] = [];
  data: Arena[];
  dataSource = new MatTableDataSource();
  title = 'Welcome to Arena Management'; 
  //@Output() bannerTitle: EventEmitter<string> = new EventEmitter(true);
  @ViewChild(MatSort) sort: MatSort; 
  @ViewChild(MatPaginator) paginator: MatPaginator;
  
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
      this.generateDisplayedColumns(res);
      this.dataSource = new MatTableDataSource(this.data);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
      console.log('Data: ', this.dataSource);
    }, err => {
      console.log('Error: ', err);
    });    
  }

  generateDisplayedColumns(res: any) {   
    var result = res;
    if (result.length > 0) {
      for (var i=0; i < 1; i++) {
        var columnsFound = result[i];
        for (var key in columnsFound) {
          if ( (!key.toString().toLowerCase().startsWith('avatar')) && (!key.toString().toLowerCase().startsWith('id')) ) {
            //console.log('Column name: ', key);
            this.displayedColumns.push(key);
          }            
        }
      }
    }
  }

  logRow(row: any) {
    console.log('Row selected: ', row);
  }
}