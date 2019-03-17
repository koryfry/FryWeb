import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { Observable, Subscription, Subject } from 'rxjs';
import { FormControl, FormGroup, Validators, FormBuilder, FormArray } from '@angular/forms';
import { startWith, map } from 'rxjs/operators';

import { ArenaFacade } from '../../../state/arena/arena.facade';
import { Arena } from 'app/models/arena/arena.model';

export interface State {
  name: string,
  abbreviation: string
}

@Component({
  selector: 'fw-add-arena-dialog',
  templateUrl: './add-arena-dialog.component.html',
  styleUrls: ['./add-arena-dialog.component.scss']
})
export class AddArenaDialogComponent implements OnInit {

  addArenaForm: FormGroup;
  arena: Arena;
  
  states: State[] = [
    {name: 'Alabama', abbreviation: 'AL'},
    {name: 'Alaska', abbreviation: 'AK'},
    {name: 'Arizona', abbreviation: 'AZ'},
    {name: 'Arkansas', abbreviation: 'AR' },
    {name: 'California', abbreviation: 'CA' },
    {name: 'Colorado', abbreviation: 'CO'},
    {name: 'Connecticut', abbreviation: 'CT'},
    {name: 'Delaware', abbreviation: 'DE'},
    {name: 'District Of Columbia', abbreviation: 'DC'},
    {name: 'Florida', abbreviation: 'FL'},
    {name: 'Georgia', abbreviation: 'GA'},
    {name: 'Idaho', abbreviation: 'ID'},
    {name: 'Illinois', abbreviation: 'IL'},
    {name: 'Indiana', abbreviation: 'IN'},
    {name: 'Iowa', abbreviation: 'IA'},
    {name: 'Kansas', abbreviation: 'KS'},
    {name: 'Kentucky', abbreviation: 'KY'},
    {name: 'Louisiana', abbreviation: 'LA'},
    {name: 'Maine', abbreviation: 'ME'},
    {name: 'Maryland', abbreviation: 'MD'},
    {name: 'Massachusetts', abbreviation: 'MA'},
    {name: 'Michigan', abbreviation: 'MI'},
    {name: 'Minnesota', abbreviation: 'MN'},
    {name: 'Mississippi', abbreviation: 'MS'},
    {name: 'Missouri', abbreviation: 'MO'},
    {name: 'Montana', abbreviation: 'MT'},
    {name: 'Nebraska', abbreviation: 'NE'},
    {name: 'Nevada', abbreviation: 'NV'},
    {name: 'New Hampshire', abbreviation: 'NH'},
    {name: 'New Jersey', abbreviation: 'NJ'},
    {name: 'New Mexico', abbreviation: 'NM'},
    {name: 'New York', abbreviation: 'NY'},
    {name: 'North Carolina', abbreviation: 'NC'},
    {name: 'North Dakota', abbreviation: 'ND'},
    {name: 'Ohio', abbreviation: 'OH'},
    {name: 'Oklahoma', abbreviation: 'OK'},
    {name: 'Oregon', abbreviation: 'OR'},
    {name: 'Pennsylvania', abbreviation: 'PA'},
    {name: 'Rhode Island', abbreviation: 'RI'},
    {name: 'South Carolina', abbreviation: 'SC'},
    {name: 'South Dakota', abbreviation: 'SD'},
    {name: 'Tennessee', abbreviation: 'TN'},
    {name: 'Texas', abbreviation: 'TX'},
    {name: 'Utah', abbreviation: 'UT'},
    {name: 'Vermont', abbreviation: 'VT'},
    {name: 'Virginia', abbreviation: 'VA'},
    {name: 'Washington', abbreviation: 'WA'},
    {name: 'West Virginia', abbreviation: 'WV'},
    {name: 'Wisconsin', abbreviation: 'WI'},
    {name: 'Wyoming', abbreviation: 'WY'}
  ]
  filteredStates: Observable<any[]>;

  constructor(
    private dialogRef: MatDialogRef<AddArenaDialogComponent>,
    private fb: FormBuilder,
    private arenaFacade: ArenaFacade,
  ) 
  { 
    this.addArenaForm = this.fb.group({
      arenaName: [
        null,
        Validators.required
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
    this.filteredStates = this.addArenaForm.get('state').valueChanges
    .pipe(
      startWith<string | State>(''),
      map(value => typeof value === 'string' ? value : value.name),
      map(name => name ? this._filter(name) : this.states.slice())
    );
    console.log('Filtered States: ', this.filteredStates);
  }

  displayFn(state?: string): string | undefined {
    return state ? state : undefined;
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  save() {
    this.arena = {
      Name: this.addArenaForm.get('arenaName').value,
      Address: this.addArenaForm.get('address').value,
      City: this.addArenaForm.get('city').value,
      State: this.addArenaForm.get('state').value,
      ZipCode: this.addArenaForm.get('zipCode').value
    }

    this.arenaFacade.createArena(this.arena);
    this.dialogRef.close('Hello');
  }

  private _filter(name: string): State[] {
    const filterValue = name.toLowerCase();

    return this.states.filter(option => option.name.toLowerCase().includes(filterValue));
  }
}
