import { Component, OnInit, ViewChild, EventEmitter, Output, OnDestroy } from '@angular/core';
import { MatTableDataSource, MatSort, MatPaginator, MatDialog } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subscription, Subject } from 'rxjs';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { takeUntil } from 'rxjs/internal/operators/takeUntil';

// Import modeal
import { GameDetail } from '../../models/gameDetail/gameDetail.model';
import { Arena } from 'app/models/arena/arena.model';
import { AgeGroup } from 'app/models/ageGroup/age-group.model';
import { Official } from 'app/models/official/official.model';

// Import Services
import { GameDetailService } from 'app/services/game-detail.service';
import { TableDisplayService } from "../../shared/services/table-display.service";
import { ArenaService } from 'app/services/arena.service';
import { AgeGroupService } from 'app/services/age-group.service';
import { OfficialsService } from 'app/services/officials.service';

// Import State Items
import { GameDetailFacade } from './state';

// Import Components
import { AddGameDetailDialogComponent } from 'app/officiating/game-detail/components/add-game-detail-dialog/add-game-detail-dialog.component';


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
  arenasList: Arena[];
  ageGroupsList: AgeGroup[];
  officialsList: Official[];
  
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
    private dialog: MatDialog,
    private arenaService: ArenaService,
    private ageGroupService: AgeGroupService,
    private officialsService: OfficialsService
  ) 
  { 
    this.gameDetailFacade.loadArenas();
    this.gameDetailFacade.loadGameDetails();
    this.gameDetails$ = this.gameDetailFacade.gameDetails$;
    this.arenaService.getArenas().subscribe(result => {
      this.arenasList = result;
    })
    // this.ageGroupService.getAgeGroups().subscribe(result => {
    //   this.ageGroupsList = result;
    // })
    this.officialsService.getOfficials().subscribe(result => {
      this.officialsList = result;
    })

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

  openAddGameDetailDialog() {
    const dialogRef = this.dialog.open(AddGameDetailDialogComponent, {
      width: '1000px',
      autoFocus: false,
      panelClass: ['rounded-dialog-window'],
      data: {
        officials: this.officialsList,
        arenas: this.arenasList.sort((a,b) => {
          if(a.name.toLowerCase() < b.name.toLowerCase()) return -1;
          if(a.name.toLowerCase() > b.name.toLowerCase()) return 1
          return 0;
        }),
        ageGroups: this.ageGroupsList.sort((a,b) => {
          if(a.MinimumAge < b.MinimumAge) return -1;
          if(a.MinimumAge > b.MinimumAge) return 1
          return 0;
        })
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('You closed the add arena dialog');
    })
  }

}
