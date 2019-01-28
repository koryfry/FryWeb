import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { Observable, Subscription, Subject } from 'rxjs';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { startWith, map } from 'rxjs/operators';

@Component({
  selector: 'fw-add-arena-dialog',
  templateUrl: './add-arena-dialog.component.html',
  styleUrls: ['./add-arena-dialog.component.scss']
})
export class AddArenaDialogComponent implements OnInit {

  arenaForm: FormGroup;

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
    private fb: FormBuilder
  ) 
  { 
    this.arenaForm = this.fb.group({
      arenaName: [
        null,
        Validators.required
      ]
    });
  }

  ngOnInit() {
    this.filteredStates = this.arenaForm.get('arenaName').valueChanges
    .pipe(
      startWith(''),
      map(value => this._filter(value))
    );
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  save() {
    this.dialogRef.close('Hello');
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.states.filter(option => option.toLowerCase().includes(filterValue));
  }
}
