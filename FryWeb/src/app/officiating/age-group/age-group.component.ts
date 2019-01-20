import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subject } from 'rxjs';

// Import model
import { AgeGroup } from '../../models/ageGroup/age-group.model';

// Import Services
import { AgeGroupService } from '../../services/age-group.service';
import { TableDisplayService } from "../../shared/services/table-display.service";
import { AgeGroupFacade } from './state';
import { Subscription } from 'rxjs/internal/Subscription';
import { takeUntil } from 'rxjs/internal/operators/takeUntil';

@Component({
  selector: 'fw-age-group',
  templateUrl: './age-group.component.html',
  styleUrls: ['./age-group.component.scss']
})
export class AgeGroupComponent implements OnInit {
  displayedColumns: string[] = [];
  ageGroups: AgeGroup[];
  dataSource = new MatTableDataSource();
  ageGroups$: Observable<AgeGroup[]>;
  ag: Subscription;
  
  private _componentDestroyed$: Subject<boolean> = new Subject();

  @ViewChild(MatSort) sort: MatSort; 
  @ViewChild(MatPaginator) paginator: MatPaginator;

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  constructor(private route: ActivatedRoute, 
    private ageGroupService: AgeGroupService, 
    private tableDisplayService: TableDisplayService,
    private ageGroupFacade: AgeGroupFacade
  ) 
  { 
    this.ageGroupFacade.loadAgeGroups();

    this.ageGroups$ = this.ageGroupFacade.ageGroups$;

    this.ag = this.ageGroups$.pipe(takeUntil(this._componentDestroyed$)).subscribe(ags => {
      const ageGroups = ags;
      this.ageGroups = ageGroups ? ageGroups : new Array<AgeGroup>();

      this.displayedColumns = this.tableDisplayService.generateDisplayedColumns(this.ageGroups);
      this.dataSource = new MatTableDataSource(this.ageGroups);
      this.dataSource.sort = this.sort; 
      this.dataSource.paginator = this.paginator;
      console.log('Age Groups: ', this.ageGroups);
    }, err => {
      console.log('Error: ', err);
    });
  }

  ngOnInit() {
    // this.ageGroupService.getAgeGroups().subscribe(res => {
    //   this.ageGroups = res;
    //   this.displayedColumns = this.tableDisplayService.generateDisplayedColumns(res);
    //   this.dataSource = new MatTableDataSource(this.ageGroups);
    //   this.dataSource.sort = this.sort; 
    //   this.dataSource.paginator = this.paginator;
    //   console.log('Age Groups: ', this.ageGroups);
    // }, err => {
    //   console.log('Error: ', err);
    // });
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
