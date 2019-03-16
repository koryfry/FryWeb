import { Component, OnInit, Input, Inject, OnDestroy } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

// Import model
import { AgeGroup } from '../../../../models/ageGroup/age-group.model';

// Import State items
import { AgeGroupFacade } from '../../../state/age-group/age-group.facade';
import { AgeGroupsState } from '../../../state/age-group/age-group.reducer';

import { take, takeUntil } from 'rxjs/internal/operators';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'fw-update-age-group-dialog',
  templateUrl: './update-age-group-dialog.component.html',
  styleUrls: ['./update-age-group-dialog.component.scss']
})
export class UpdateAgeGroupDialogComponent implements OnInit, OnDestroy {
  ageGroup: AgeGroup;
  ageGroupID: number;
  selectedAgeGroup$: Observable<AgeGroup>;
  updateAgeGroupForm: FormGroup;
  private _componentDestroyed$: Subject<boolean> = new Subject();

  constructor(
    private ageGroupFacade: AgeGroupFacade,
    private dialogRef: MatDialogRef<UpdateAgeGroupDialogComponent>, 
    @Inject(MAT_DIALOG_DATA)
    private data: AgeGroup,
    private fb: FormBuilder
  ) 
  { 
    this.updateAgeGroupForm = this.fb.group({
      minimumAge: [
        null,
        [Validators.required, Validators.min(8), Validators.max(18)]
      ],
      maximumAge: [
        null,
        [Validators.required, Validators.min(9), Validators.max(21)]
      ]
    })

    this.ageGroupFacade.selectedAgeGroup$.pipe(takeUntil(this._componentDestroyed$)).subscribe(sag => {
      if(sag)
        this.updateFormData(sag);
    })
  }

  ngOnInit() {
    this.selectedAgeGroup$ = this.ageGroupFacade.selectedAgeGroup$;
  }
  
  onNoClick(): void {
    this.dialogRef.close();
  }

  updateFormData(selectedAgeGroup: AgeGroup) {
    this.updateAgeGroupForm.patchValue({
      minimumAge: selectedAgeGroup[0].MinimumAge,
      maximumAge: selectedAgeGroup[0].MaximumAge
    }, 
    { emitEvent: false }
  )}
  
  ngOnDestroy() {
    this._componentDestroyed$.next(true);
    this._componentDestroyed$.complete();
  }

  save() {
    const ageGroup: Partial<AgeGroup> = {};
    var sag = this.selectedAgeGroup$.pipe(take(1)).subscribe(s => {
      ageGroup.id = s[0].id;
      ageGroup.Name = s[0].Name;
      ageGroup.Tier = s[0].Tier;
      ageGroup.MinimumAge = parseInt(this.updateAgeGroupForm.get('minimumAge').value);
      ageGroup.MaximumAge = parseInt(this.updateAgeGroupForm.get('maximumAge').value);
    })
    
    this.ageGroupFacade.updateAgeGroup(ageGroup);
    this.dialogRef.close();
  }
}
