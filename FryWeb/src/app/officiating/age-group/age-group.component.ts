import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { MatTableDataSource, MatSort, MatPaginator, MatDialog } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { Subscription } from 'rxjs/internal/Subscription';
import { takeUntil } from 'rxjs/internal/operators/takeUntil';

// Import model
import { AgeGroup } from '../../models/ageGroup/age-group.model';

// Import Services
import { AgeGroupService } from '../../services/age-group.service';
import { TableDisplayService } from "../../shared/services/table-display.service";

// Import State Items
import { AgeGroupFacade } from './state';

// Import Components
import { AddAgeGroupDialogComponent } from './components/add-age-group-dialog/add-age-group-dialog.component';

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
    private ageGroupFacade: AgeGroupFacade,
    private dialog: MatDialog
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

  ngOnDestroy() {
    this._componentDestroyed$.next(true);
		this._componentDestroyed$.complete();
  }

  ngOnInit() {}

  openAddAgeGroupDialog() {
    const dialogRef = this.dialog.open(AddAgeGroupDialogComponent, {
      width: '500px',
      autoFocus: false,
      panelClass: ['rounded-dialog-window']
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('You closed the add age group dialog');
    })
  }
}
