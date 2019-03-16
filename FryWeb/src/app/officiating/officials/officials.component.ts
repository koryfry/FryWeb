import { Component, OnInit, ViewChild, EventEmitter, Output } from '@angular/core';
import { MatTableDataSource, MatSort, MatPaginator, MatDialog } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subject } from 'rxjs';

// Import model
import { Official } from '../../models/official/official.model';

// Import Services
import { OfficialsService } from '../../services/officials.service';
import { TableDisplayService } from "../../shared/services/table-display.service";

// Import State Items
import { OfficialsFacade } from '../state/officials/official.facade';
import { takeUntil } from 'rxjs/internal/operators/takeUntil';
import { Subscription } from 'rxjs/internal/Subscription';

// Import Components
import { AddOfficialDialogComponent } from 'app/officiating/officials/components/add-official-dialog/add-official-dialog.component';
import { OfficialsDetailsComponent } from '../officials/components/officials-details/officials-details.component';
import { UpdateOfficialDialogComponent } from '../officials/components/update-official-dialog/update-official-dialog.component';

@Component({
  selector: 'fw-officials',
  templateUrl: './officials.component.html',
  styleUrls: ['./officials.component.scss']
})
export class OfficialsComponent implements OnInit {
  displayedColumns: string[] = ['FirstName', 'LastName', 'Level', 'YearsExperience', 'Address', 'City', 'State','ZipCode'];
  officials: Official[];
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
    private officialsService: OfficialsService, 
    private tableDisplayService: TableDisplayService,
    private officialsFacade: OfficialsFacade,
    private dialog: MatDialog
  ) 
  {
    this.officialsFacade.loadOfficials();

    this.officialsFacade.allOfficials$.pipe(takeUntil(this._componentDestroyed$)).subscribe(offs => {
      const officials = offs;

      this.displayedColumns = this.tableDisplayService.generateDisplayedColumns(officials);
      this.dataSource = new MatTableDataSource(officials);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;

      console.log('Data: ', this.dataSource);
    }, err => {
      console.log('Error: ', err);
    });
  }

  ngOnDestroy() {
    this._componentDestroyed$.next(true);
		this._componentDestroyed$.complete();
  }

  ngOnInit() {}

  openPreviewDialog(row: any, $event: Event) {
    this.preventSingleClick = false;

    this.preventSingleClickDelayId = setTimeout(() => {
      if(this.preventSingleClick) {
        return;
      }
      this.officialsFacade.openSelectedOfficialDetails(row);
      const dialogRef = this.dialog.open(OfficialsDetailsComponent, {
        width: '500px',
        autoFocus: false,
        panelClass: ['rounded-dialog-window'],
        data: row
      });
  
      dialogRef.afterClosed().subscribe(result => {
        console.log('You closed the Official Details dialog');
      })
    }, 200)
  }

  openAddOfficialDialog() {
    const dialogRef = this.dialog.open(AddOfficialDialogComponent, {
      width: '500px',
      autoFocus: false,
      panelClass: ['rounded-dialog-window']
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('You closed the add arena dialog');
    })
  }

  openUpdateOfficialDialog(official: Official, $event: Event) {
    $event.stopPropagation();
    this.preventSingleClick = true;
    clearTimeout(this.preventSingleClickDelayId);

    this.officialsFacade.openSelectedOfficialDetails(official);
    const dialogRef = this.dialog.open(UpdateOfficialDialogComponent, {
      width: '500px',
      autoFocus: false,
      panelClass: ['rounded-dialog-window'],
      data: official
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('You closed the update age group dialog');
    })
  }
}
