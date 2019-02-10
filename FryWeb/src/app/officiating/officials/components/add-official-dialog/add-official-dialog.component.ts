import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { Observable, Subscription, Subject } from 'rxjs';
import { FormControl, FormGroup, Validators, FormBuilder, FormArray } from '@angular/forms';
import { startWith, map } from 'rxjs/operators';

import { OfficialsFacade } from '../../state';
import { Official } from 'app/models/official/official.model';

@Component({
  selector: 'fw-add-official-dialog',
  templateUrl: './add-official-dialog.component.html',
  styleUrls: ['./add-official-dialog.component.scss']
})
export class AddOfficialDialogComponent implements OnInit {

  addOfficialForm: FormGroup;
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
    private dialogRef: MatDialogRef<AddOfficialDialogComponent>,
    private fb: FormBuilder,
    private officialsFacade: OfficialsFacade
  )
  { 
    this.addOfficialForm = this.fb.group({
      firstName: [
        null,
        Validators.required
      ],  
      lastName: [
        null,
        Validators.required
      ], 
      level: [
        null,
        [Validators.required, Validators.min(1), Validators.max(4)]
      ],
      yearsExperience: [
        null,
        [Validators.required, Validators.min(0), Validators.max(45)]
      ],
      address: [
        null,
        Validators.required
      ],
      city: [
        null,
        Validators.required
      ],
      state: [
        null,
        Validators.required
      ],
      zipCode: [
        null,
        Validators.required
      ]
    });
  }

  ngOnInit() {
    this.filteredStates = this.addOfficialForm.get('state').valueChanges
    .pipe(
      startWith(''),
      map(value => this._filter(value))
    );
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  save() {
    const official = {
      'First Name': this.addOfficialForm.get('firstName').value,
      'Last Name': this.addOfficialForm.get('lastName').value,
      Level: this.addOfficialForm.get('level').value,
      'Years Experience': this.addOfficialForm.get('yearsExperience').value,
      Address: this.addOfficialForm.get('address').value,
      City: this.addOfficialForm.get('city').value,
      State: this.addOfficialForm.get('state').value,
      'Zip Code': this.addOfficialForm.get('zipCode').value
    }

    this.officialsFacade.createOfficial(official);
    this.dialogRef.close('Hello');
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.states.filter(option => option.toLowerCase().includes(filterValue));
  }

}
