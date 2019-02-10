import { Component, OnInit, ViewChild, EventEmitter, Output, OnDestroy } from '@angular/core';
import { MatTableDataSource, MatSort, MatPaginator, MatDialog } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subscription, Subject } from 'rxjs';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { takeUntil } from 'rxjs/internal/operators/takeUntil';

// Import modeal
import { GameDetail } from '../../models/gameDetail/gameDetail.model';

// Import Services
import { GameDetailService } from 'app/services/game-detail.service';
import { TableDisplayService } from "../../shared/services/table-display.service";

// Import State Items
import { GameDetailFacade } from './state';


@Component({
  selector: 'fw-game-detail',
  templateUrl: './game-detail.component.html',
  styleUrls: ['./game-detail.component.scss']
})
export class GameDetailComponent implements OnInit {
  displayedColumns: string[] = [];
  gameDetails: GameDetail[];
  dataSource = new MatTableDataSource();
  gameDetails$: Observable<GameDetail[]>;
  gd: Subscription;
  
  private _componentDestroyed$: Subject<boolean> = new Subject();

  @ViewChild(MatSort) sort: MatSort; 
  @ViewChild(MatPaginator) paginator: MatPaginator;
  
  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  constructor(
    private route: ActivatedRoute,
    private gameDetailService: GameDetailService,
    private tableDisplayService: TableDisplayService,
    private gameDetailFacade: GameDetailFacade,
    private dialog: MatDialog
  ) 
  { 
    this.gameDetailFacade.loadGameDetails();
    this.gameDetails$ = this.gameDetailFacade.gameDetails$;

    this.gameDetails$.pipe(takeUntil(this._componentDestroyed$)).subscribe(gds => {
      const gameDetails = gds;
      this.gameDetails = gameDetails ? gameDetails : new Array<GameDetail>();
      this.displayedColumns = this.tableDisplayService.generateDisplayedColumns(this.gameDetails);
      this.dataSource = new MatTableDataSource(this.gameDetails);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
      console.log('Game Details: ', this.dataSource);
    }, err => {
      console.log('Error: ', err);
    });
  }

  ngOnInit() {
  }

  logRow(row: any, rowID: number) {
    console.log('Row selected: ', row);
  } 
  
  ngOnDestroy() {
    this._componentDestroyed$.next(true);
		this._componentDestroyed$.complete();
  }

}
