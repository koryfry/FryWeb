import { Component, OnInit, ViewChild, EventEmitter, Output } from '@angular/core';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subject } from 'rxjs';

// Import model
import { Official } from '../../models/official/official.model';

// Import Services
import { OfficialsService } from '../../services/officials.service';
import { TableDisplayService } from "../../shared/services/table-display.service";

// Import State Items
import { OfficialsFacade } from './state';
import { takeUntil } from 'rxjs/internal/operators/takeUntil';
import { Subscription } from 'rxjs/internal/Subscription';

@Component({
  selector: 'fw-officials',
  templateUrl: './officials.component.html',
  styleUrls: ['./officials.component.scss']
})
export class OfficialsComponent implements OnInit {
  displayedColumns: string[] = [];
  officials: Official[];
  dataSource = new MatTableDataSource();
  officials$: Observable<Official[]>;
  off: Subscription;
  
  private _componentDestroyed$: Subject<boolean> = new Subject();
  @ViewChild(MatSort) sort: MatSort; 
  
  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  constructor(private route: ActivatedRoute, 
    private officialsService: OfficialsService, 
    private tableDisplayService: TableDisplayService,
    private officialsFacade: OfficialsFacade
  ) 
  {
    this.officialsFacade.loadOfficials();
    this.officials$ = this.officialsFacade.officials$;

    this.off = this.officials$.pipe(takeUntil(this._componentDestroyed$)).subscribe(offs => {
      const ofs = offs;
      this.officials = ofs ? ofs : new Array<Official>();

      this.displayedColumns = this.tableDisplayService.generateDisplayedColumns(this.officials);
      this.dataSource = new MatTableDataSource(this.officials);
      this.dataSource.sort = this.sort;

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

  logRow(row: any) {
    console.log('Row selected: ', row);
  }
}
