import { Component, OnInit, Input, Inject, OnDestroy } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

// Import Model
import { Official } from '../../../../models/official/official.model';

// Import State items
import { OfficialsFacade } from '../../../state/officials/official.facade';
import { OfficialsState } from '../../../state/officials/official.reducer';

import { take, takeUntil, startWith, map } from 'rxjs/internal/operators';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

// Import components
import { UpdateAgeGroupDialogComponent } from 'app/officiating/age-group/components/update-age-group-dialog/update-age-group-dialog.component';

@Component({
  selector: 'fw-update-official-dialog',
  templateUrl: './update-official-dialog.component.html',
  styleUrls: ['./update-official-dialog.component.scss']
})
export class UpdateOfficialDialogComponent implements OnInit {
  official: Official;
  selectedOfficial$: Observable<Official>;
  updateOfficialForm: FormGroup;
  private _componentDestroyed$: Subject<boolean> = new Subject();
  states: string[] = [
    'Alabama','Alaska','Arizona','Arkansas',
    'California','Colorado','Connecticut','Delaware','District of Columbia',
    'Florida','Georgia','Idaho','Illinois','Indiana','Iowa','Kansas','Kentucky',
    'Louisiana','Maine','Maryland','Massachusetts','Michigan','Minnesota','Mississippi',
    'Missouri','Montana','Nebraska','Nevada','New Hampshire','New Jersey','New Mexico',
    'New York','North Carolina','North Dakota', 'Ohio','Oklahoma','Oregon','Pennsylvania',
    'Rhode Island','South Carolina','South Dakota','Tennessee','Texas','Utah','Vermont',
    'Virginia','Washington','West Virginia','Wisconsin','Wyoming'
  ]; 
  filteredStates: Observable<string[]>;

  constructor(
    private officialsFacade: OfficialsFacade,
    private dialogRef: MatDialogRef<UpdateAgeGroupDialogComponent>, 
    @Inject(MAT_DIALOG_DATA) 
    public data: Official,
    private fb: FormBuilder 
  ) 
  { 
    this.updateOfficialForm = this.fb.group({
      level: [
        null,
        [Validators.required, Validators.min(1), Validators.max(4)]
      ],
      yearsExperience: [
        null,
        [Validators.required, Validators.min(1), Validators.max(45)]
      ],
      address: [
        null,
        [Validators.required, Validators.minLength(1), Validators.maxLength(50)]
      ],
      city: [
        null,
        [Validators.required, Validators.minLength(1), Validators.maxLength(50)]
      ],
      state: [
        null,
        [Validators.required, Validators.minLength(2), Validators.maxLength(2)]
      ],
      zipCode: [
        null,
        [Validators.required, Validators.minLength(5), Validators.maxLength(5)]
      ]
    })

    this.officialsFacade.selectedOfficial$.pipe(takeUntil(this._componentDestroyed$)).subscribe(o => {
      if(o) 
        this.updateFormData(o);
    })
  }

  ngOnInit() {
    this.selectedOfficial$ = this.officialsFacade.selectedOfficial$;
    this.filteredStates = this.updateOfficialForm.get('state').valueChanges
    .pipe(
      startWith(''),
      map(value => this._filter(value))
    );
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  updateFormData(selectedOfficial: Official) {
    this.updateOfficialForm.patchValue({
      level: selectedOfficial[0].Level,
      yearsExperience: selectedOfficial[0].YearsExperience,
      address: selectedOfficial[0].Address,
      city: selectedOfficial[0].City,
      state: selectedOfficial[0].State,
      zipCode: selectedOfficial[0].ZipCode
    }, 
    { emitEvent: false }
  )}

  ngOnDestroy() {
    this._componentDestroyed$.next(true);
    this._componentDestroyed$.complete();
  }

  save() {
    const official: Partial<Official> = {};
    var o = this.selectedOfficial$.pipe(take(1)).subscribe(off => {
      official.id = off[0].id,
      official.FirstName = off[0].FirstName,
      official.LastName = off[0].LastName,
      official.Level = parseInt(this.updateOfficialForm.get('level').value),
      official.YearsExperience = parseInt(this.updateOfficialForm.get('yearsExperience').value),
      official.Address = this.updateOfficialForm.get('address').value,
      official.City = this.updateOfficialForm.get('city').value,
      official.State = this.updateOfficialForm.get('state').value,
      official.ZipCode = this.updateOfficialForm.get('zipCode').value
    })

    this.officialsFacade.updateOfficial(official);
    this.dialogRef.close();
  }
  
  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.states.filter(option => option.toLowerCase().includes(filterValue));
  }
}
