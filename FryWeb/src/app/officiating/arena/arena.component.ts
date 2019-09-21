import { Component, OnInit, ViewChild, EventEmitter, Output, OnDestroy } from '@angular/core';
import { MatTableDataSource, MatSort, MatPaginator, MatDialog } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subscription, Subject } from 'rxjs';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';

// Import model
import { Arena } from '@models/officiating/arena/arena.model';

// Import Services
import { ArenaService } from '../../services/arena.service';
import { TableDisplayService } from "../../shared/services/table-display.service";

// Import State items
import { ArenaFacade } from '../state/arena/arena.facade';
import { takeUntil } from 'rxjs/internal/operators/takeUntil';

// Import components
import { AddArenaDialogComponent } from './components/add-arena-dialog/add-arena-dialog.component';
import { ArenaDetailsComponent } from './components/arena-details/arena-details.component';

@Component({
  selector: 'fw-arena',
  templateUrl: './arena.component.html',
  styleUrls: ['./arena.component.scss']
})
export class ArenaComponent implements OnInit {
  displayedColumns: string[] = ['actions', 'name','address', 'city', 'state', 'zipCode'];
  arenas: Arena[];
  dataSource = new MatTableDataSource();
  preventSingleClick: boolean = false;
  preventSingleClickDelayId;
  values: any[] = [];
  value: string = '';
  
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
    this.arenaFacade.loadArenas();
    this.arenaFacade.allArenas$.pipe(takeUntil(this._componentDestroyed$)).subscribe(ars => {      
      const arenas = ars;
      //this.displayedColumns = this.tableDisplayService.generateDisplayedColumns(arenas);
      this.dataSource = new MatTableDataSource(arenas);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
      console.log('Arenas: ', arenas);
    }, err => {
      console.log('Error: ', err);
    });
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

  openArenaDetailsPreviewDialog(arena: Arena, $event: Event) {
    this.preventSingleClick = false;
    this.preventSingleClickDelayId = setTimeout(() => {
      if(this.preventSingleClick) {
        return;
      }

      this.arenaFacade.openSelectedArenaDetails(arena);
      const dialogRef = this.dialog.open(ArenaDetailsComponent, {
        width: '500px',
        autoFocus: false,
        panelClass: ['rounded-dialog-window'],
        data: arena
      });
  
      dialogRef.afterClosed().subscribe(result => {
        console.log('You closed the Arena Details dialog');
      })
    },200)
  }
}