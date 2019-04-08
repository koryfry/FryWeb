import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
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
  arenas: Arena[];
  ageGroups: AgeGroup[];
  numberOfPartners: number;
  partners: Official[] = [];

  constructor(
    private _formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<AddGameDetailDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: any
  ) 
  {
    this.arenas = data.arenas;
    this.ageGroups = data.ageGroups;
  }

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
