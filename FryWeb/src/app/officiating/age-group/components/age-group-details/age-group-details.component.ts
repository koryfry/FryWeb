import { Component, OnInit, Input, Inject } from '@angular/core';
import { Observable, Subject } from 'rxjs';

// Import model
import { AgeGroup } from '../../../../models/ageGroup/age-group.model';

// Import Services
import { AgeGroupService } from '../../../../services/age-group.service';

// Import State items
import { AgeGroupFacade } from '../../../state/age-group/age-group.facade';
import { take, takeUntil } from 'rxjs/internal/operators';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'fw-age-group-details',
  templateUrl: './age-group-details.component.html',
  styleUrls: ['./age-group-details.component.scss']
})
export class AgeGroupDetailsComponent implements OnInit {
  ageGroup: AgeGroup;
  ageGroupID: number;
  selectedAgeGroup$: Observable<AgeGroup>;
  
  private _componentDestroyed$: Subject<boolean> = new Subject();

  constructor(
    private ageGroupService: AgeGroupService,
    private ageGroupFacade: AgeGroupFacade,
    private dialogRef: MatDialogRef<AgeGroupDetailsComponent>, 
    @Inject(MAT_DIALOG_DATA)
    private data: AgeGroup
  ) { }

  ngOnInit() {
    this.selectedAgeGroup$ = this.ageGroupFacade.selectedAgeGroup$;
  }
  
  onNoClick(): void {
    this.dialogRef.close();
  }

}
