import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { Observable, Subscription, Subject } from 'rxjs';
import { FormControl, FormGroup, Validators, FormBuilder, FormArray } from '@angular/forms';
import { startWith, map } from 'rxjs/operators';

import { ArenaFacade } from '../../state';
import { Arena } from 'app/models/arena/arena.model';

@Component({
  selector: 'fw-add-arena-dialog',
  templateUrl: './add-arena-dialog.component.html',
  styleUrls: ['./add-arena-dialog.component.scss']
})
export class AddArenaDialogComponent implements OnInit {

  addArenaForm: FormGroup;
  arena: Arena;

  states: string[] = [
    'Alabama','Alaska','Arizona','Arkansas',
    'California','Colorado','Connecticut','Delaware','District of Columbia',
    'Florida','Georgia','Idaho','Illinois','Indiana','Iowa','Kansas','Kentucky',
    'Louisiana','Maine','Marshall Islands','Maryland','Massachusetts','Michigan',
    'Minnesota','Mississippi','Missouri','Montana','Nebraska','Nevada','New Hampshire',
    'New Jersey','New Mexico','New York','North Carolina','North Dakota',
    'Ohio','Oklahoma','Oregon','Pennsylvania','Rhode Island','South Carolina','South Dakota',
    'Tennessee','Texas','Utah','Vermont','Virgin Island','Virginia','Washington','West Virginia',
    'Wisconsin','Wyoming'
  ]; 
  filteredStates: Observable<string[]>;

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
      startWith(''),
      map(value => this._filter(value))
    );
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
      'Zip Code': this.addArenaForm.get('zipCode').value
    }

    this.arenaFacade.createArena(this.arena);
    this.dialogRef.close('Hello');
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.states.filter(option => option.toLowerCase().includes(filterValue));
  }
}
