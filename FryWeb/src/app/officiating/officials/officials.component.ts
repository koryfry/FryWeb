import { Component, OnInit, ViewChild, EventEmitter, Output } from '@angular/core';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';

// Import model
import { Official } from '../../models/official/official.model';

// Import Services
import { OfficialsService } from '../../services/officials.service';
import { TableDisplayService } from "../../shared/services/table-display.service";

@Component({
  selector: 'fw-officials',
  templateUrl: './officials.component.html',
  styleUrls: ['./officials.component.scss']
})
export class OfficialsComponent implements OnInit {
  displayedColumns: string[] = [];
  officials: Official[];
  dataSource = new MatTableDataSource();
  title = 'Welcome to Officials Management';
  @ViewChild(MatSort) sort: MatSort; 
  @ViewChild(MatPaginator) paginator: MatPaginator;
  
  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  constructor(private route: ActivatedRoute, private officialsService: OfficialsService, private tableDisplayService: TableDisplayService) { }

  ngOnInit() {
    this.officialsService.getOfficials().subscribe(res => {
      this.officials = res;this.displayedColumns = this.tableDisplayService.generateDisplayedColumns(res);
      //this.generateDisplayedColumns(res);
      this.dataSource = new MatTableDataSource(this.officials);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
      console.log('Data: ', this.dataSource);
    }, err => {
      console.log('Error: ', err);
    });
  }

  logRow(row: any) {
    console.log('Row selected: ', row);
  }
}
