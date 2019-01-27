import { Component, OnInit, ViewChild, EventEmitter, Output, OnDestroy } from '@angular/core';
import { MatTableDataSource, MatSort, MatPaginator, MatDialog } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subscription, Subject } from 'rxjs';

// Import model
import { Arena } from '../../models/arena/arena.model';

// Import Services
import { ArenaService } from '../../services/arena.service';
import { TableDisplayService } from "../../shared/services/table-display.service";

// Import State items
import { ArenaFacade } from './state';
import { takeUntil } from 'rxjs/internal/operators/takeUntil';

// Import components
import { AddArenaDialogComponent } from './components/add-arena-dialog/add-arena-dialog.component';

@Component({
  selector: 'fw-arena',
  templateUrl: './arena.component.html',
  styleUrls: ['./arena.component.scss']
})
export class ArenaComponent implements OnInit {
  displayedColumns: string[] = [];
  arenas: Arena[];
  dataSource = new MatTableDataSource();
  arenas$: Observable<Arena[]>;
  ar: Subscription;
  
  private _componentDestroyed$: Subject<boolean> = new Subject();


  title = 'Welcome to Arena Management';
  @ViewChild(MatSort) sort: MatSort; 
  @ViewChild(MatPaginator) paginator: MatPaginator;
  
  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  constructor(private route: ActivatedRoute, 
    private arenaService: ArenaService, 
    private tableDisplayService: TableDisplayService,
    private arenaFacade: ArenaFacade,
    private dialog: MatDialog
  )
  {
    this.arenaFacade.loadAgeGroups();
    this.arenas$ = this.arenaFacade.arenas$;

    this.ar = this.arenas$.pipe(takeUntil(this._componentDestroyed$)).subscribe(ars => {      
      const arenas = ars;
      this.arenas = arenas ? arenas : new Array<Arena>();

      this.displayedColumns = this.tableDisplayService.generateDisplayedColumns(this.arenas);
      this.dataSource = new MatTableDataSource(this.arenas);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
      console.log('Arenas: ', this.dataSource);
    }, err => {
      console.log('Error: ', err);
    });  
  }

  logRow(row: any) {
    console.log('Row selected: ', row);
  } 
  
  ngOnDestroy() {
    this._componentDestroyed$.next(true);
		this._componentDestroyed$.complete();
  }

  ngOnInit() {}

  openAddArenaDialog() {
    const dialogRef = this.dialog.open(AddArenaDialogComponent, {
      width: '500px',
      autoFocus: false,
      panelClass: ['rounded-dialog-window']
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('You closed the add arena dialog');
    })
  }
}