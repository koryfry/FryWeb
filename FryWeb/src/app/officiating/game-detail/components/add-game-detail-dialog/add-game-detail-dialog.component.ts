import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Arena } from 'app/models/arena/arena.model';
import { AgeGroup } from 'app/models/ageGroup/age-group.model';
import { Official } from 'app/models/official/official.model';

@Component({
  selector: 'fw-add-game-detail',
  templateUrl: './add-game-detail-dialog.component.html',
  styleUrls: ['./add-game-detail-dialog.component.scss']
})
export class AddGameDetailDialogComponent implements OnInit {
  gameDateAndTimeFormGroup: FormGroup;
  arenaAgeGroupAndPartnersFormGroup: FormGroup;
  mileageAndExpensesFormGroup: FormGroup;
  paymentsFormGroup: FormGroup;
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
  partners: Official[] = [];

  constructor(
    private dialogRef: MatDialogRef<AddGameDetailDialogComponent>,
    private _formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.gameDateAndTimeFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required],
      gameTime:  ['', Validators.required]
    });
    this.arenaAgeGroupAndPartnersFormGroup = this._formBuilder.group({
      arena: [null, Validators.required],
      ageGroup: [null, Validators.required],
      numberOfPartners: [null, Validators.required]
    });
    this.mileageAndExpensesFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
    this.paymentsFormGroup = this._formBuilder.group({
      thirdCtrl: ['', Validators.required]
    });
  }
  
  onNoClick(): void {
    this.dialogRef.close();
  }

  setNumberOfPartners() {
    this.numberOfPartners = this.arenaAgeGroupAndPartnersFormGroup.get('numberOfPartners').value;
    if(this.numberOfPartners && this.numberOfPartners > 0) {
      if(this.partners.length > 0) {
        this.partners = [];
      }
      for(var i=0; i < this.numberOfPartners; i++) {
        this.partners.push({FirstName: '', LastName: '', Level: 1, YearsExperience: 0, Address: '', City: '', State: '', ZipCode: ''});
      }
    }
  }

}
