import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatSort } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';

// Import model
import { AgeGroup } from '../../models/ageGroup/age-group.model';

// Import Services
import { AgeGroupService } from '../../services/age-group.service';

@Component({
  selector: 'fw-age-group',
  templateUrl: './age-group.component.html',
  styleUrls: ['./age-group.component.scss']
})
export class AgeGroupComponent implements OnInit {
  displayedColumns: string[] = [];
  ageGroups: AgeGroup[];
  dataSource = new MatTableDataSource();
  @ViewChild(MatSort) sort: MatSort; 

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  constructor(private route: ActivatedRoute, private ageGroupService: AgeGroupService) { }

  ngOnInit() {
    this.ageGroupService.getAgeGroups().subscribe(res => {
      this.ageGroups = res;
      this.generateDisplayedColumns(res);
      this.dataSource = new MatTableDataSource(this.ageGroups);
      this.dataSource.sort = this.sort; 
      console.log('Age Groups: ', this.ageGroups);
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
            console.log('Column name: ', key);
            this.displayedColumns.push(key);
          }            
        }
      }
    }
  }
}
