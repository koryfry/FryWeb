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
import { AgeGroupFacade } from '../state/age-group/age-group.facade';

// Import Components
import { AddAgeGroupDialogComponent } from './components/add-age-group-dialog/add-age-group-dialog.component';
import { AgeGroupDetailsComponent } from 'app/officiating/age-group/components/age-group-details/age-group-details.component';
import { UpdateAgeGroupDialogComponent } from 'app/officiating/age-group/components/update-age-group-dialog/update-age-group-dialog.component';

@Component({
  selector: 'fw-age-group',
  templateUrl: './age-group.component.html',
  styleUrls: ['./age-group.component.scss']
})
export class AgeGroupComponent implements OnInit {
  displayedColumns: string[] = [];
  dataSource = new MatTableDataSource();
  preventSingleClick: boolean = false;
	preventSingleClickDelayId;
  
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

    this.ageGroupFacade.allAgeGroups$.pipe(takeUntil(this._componentDestroyed$)).subscribe(ags => {
      const ageGroups = ags;
      this.displayedColumns = this.tableDisplayService.generateDisplayedColumns(ageGroups);
      this.dataSource = new MatTableDataSource(ageGroups);
      this.dataSource.sort = this.sort; 
      this.dataSource.paginator = this.paginator;
      console.log('Age Groups: ', ageGroups);
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

  openUpdateAgeGroupDialog(ageGroup: AgeGroup, $event: Event) {
    $event.stopPropagation();
    this.preventSingleClick = true;
    clearTimeout(this.preventSingleClickDelayId);

    const dialogRef = this.dialog.open(UpdateAgeGroupDialogComponent, {
      width: '500px',
      autoFocus: false,
      panelClass: ['rounded-dialog-window'],
      data: ageGroup
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('You closed the update age group dialog');
    })
  }

  openPreviewDialog(row: any, $event: Event) {
    this.preventSingleClick = false;

    this.preventSingleClickDelayId = setTimeout(() => {
      if(this.preventSingleClick) {
        return;
      }

      this.ageGroupFacade.openSelectedAgeGroupDetails(row);
      const dialogRef = this.dialog.open(AgeGroupDetailsComponent, {
        width: '500px',
        autoFocus: false,
        panelClass: ['rounded-dialog-window'],
        data: row
      });

      dialogRef.afterClosed().subscribe(result => {
        console.log('You closed the Age Group Details dialog');
      })
    }, 250)
  }
}
