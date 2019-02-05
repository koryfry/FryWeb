import { Component, OnInit, Input, Inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subject } from 'rxjs';

// Import model
import { Official } from '../../../../models/official/official.model';

// Import Services
import { OfficialsService } from '../../../../services/officials.service';

// Import State items
import { OfficialsFacade } from '../../state';
import { take, takeUntil } from 'rxjs/internal/operators';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'fw-officials-details',
  templateUrl: './officials-details.component.html',
  styleUrls: ['./officials-details.component.scss']
})
export class OfficialsDetailsComponent implements OnInit {
  official: Official;
  officialID: number;
  selectedOfficial$: Observable<Official>;
  
  private _componentDestroyed$: Subject<boolean> = new Subject();


  constructor(
    private officialService: OfficialsService,
    private officialFacade: OfficialsFacade,
    private dialogRef: MatDialogRef<OfficialsDetailsComponent>, 
    @Inject(MAT_DIALOG_DATA)
    private data: Official
  ) { }

  ngOnInit() {
    this.selectedOfficial$ = this.officialFacade.selectedOfficial$;
  }
  
  onNoClick(): void {
    this.dialogRef.close();
  }

}
