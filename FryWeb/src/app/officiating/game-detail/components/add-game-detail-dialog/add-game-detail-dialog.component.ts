import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Arena } from 'app/models/arena/arena.model';
import { AgeGroup } from 'app/models/ageGroup/age-group.model';

@Component({
  selector: 'fw-add-game-detail',
  templateUrl: './add-game-detail-dialog.component.html',
  styleUrls: ['./add-game-detail-dialog.component.scss']
})
export class AddGameDetailDialogComponent implements OnInit {
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  isLinear = true;
  minDate: Date = new Date();
  refLine: string;
  arenas: Arena[] = [
    {id: 1, Name: "Griffs West", Address: "", City: "", State: "", ZipCode: ""},
    {id: 2, Name: "Griffs Georgetown", Address: "", City: "", State: "", ZipCode: ""},
    {id: 3, Name: "Walker Ice and Fitness", Address: "", City: "", State: "", ZipCode: ""},
  ]
  ageGroups: AgeGroup[] = [
    {id: 1, Name: "Squirt", Tier: "B", MinimumAge: 9, MaximumAge: 10},
    {id: 2, Name: "Squirt", Tier: "A", MinimumAge: 9, MaximumAge: 10},
    {id: 3, Name: "Squirt", Tier: "AA", MinimumAge: 9, MaximumAge: 10}
  ]
  numberOfPartners: number;

  constructor(
    private dialogRef: MatDialogRef<AddGameDetailDialogComponent>,
    private _formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required],
      gameTime:  ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      arena: [null, Validators.required],
      ageGroup: [null, Validators.required],
      numberOfPartners: [null, Validators.required]
    });
    this.thirdFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
  }
  
  onNoClick(): void {
    this.dialogRef.close();
  }

}
