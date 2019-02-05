import { Component, OnInit, Input, Inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subject } from 'rxjs';

// Import model
import { Arena } from '../../../../models/arena/arena.model';

// Import Services
import { ArenaService } from '../../../../services/arena.service';

// Import State items
import { ArenaFacade } from '../../state';
import { take, takeUntil } from 'rxjs/internal/operators';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'fw-arena-details',
  templateUrl: './arena-details.component.html',
  styleUrls: ['./arena-details.component.scss']
})
export class ArenaDetailsComponent implements OnInit {

  arena: Arena;
  arenaID: number;
  selectedArena$: Observable<Arena>;
  
  private _componentDestroyed$: Subject<boolean> = new Subject();

  constructor(
    private route: ActivatedRoute,
    private arenaService: ArenaService,
    private arenaFacade: ArenaFacade,
    private dialogRef: MatDialogRef<ArenaDetailsComponent>, 
    @Inject(MAT_DIALOG_DATA)
    private data: Arena
  ) { }

  ngOnInit() {
    this.selectedArena$ = this.arenaFacade.selectedArena$;
  }
  
  onNoClick(): void {
    this.dialogRef.close();
  }

}
