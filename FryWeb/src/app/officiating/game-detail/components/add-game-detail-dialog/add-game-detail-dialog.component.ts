import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Arena } from '@models/officiating/arena/arena.model';
import { AgeGroup } from '@models/officiating/ageGroup/age-group.model';
import { Official } from '@models/officiating/official/official.model';
import { FormArray } from '@angular/forms/src/model';

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
  partnersFormArray: FormArray;
  officials: Official[];

  constructor(
    private _formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<AddGameDetailDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: any
  ) 
  {
    this.arenas = data.arenas;
    this.ageGroups = data.ageGroups;
    this.officials = data.officials;
  }

  ngOnInit() {
    this.gameDateAndTimeFormGroup = this._formBuilder.group({
      gameDate: [null, Validators.required],
      gameTime: [null, Validators.required],
      refLine: ['Ref', Validators.required]
    });
    this.arenaAgeGroupAndPartnersFormGroup = this._formBuilder.group({
      arena: [null, Validators.required],
      ageGroup: [null, Validators.required],
      mainOfficial: this._formBuilder.control(null, Validators.required),
      numberOfPartners: [null, [Validators.required, Validators.min(0)]]
    });
    this.mileageAndExpensesFormGroup = this._formBuilder.group({
      mileage: [null, [Validators.required, Validators.min(0)]],
      miscExpense: [null, Validators.min(0)]
    });
    this.paymentsFormGroup = this._formBuilder.group({
      rateOfPay: [null, [Validators.required,Validators.min(0)]],
      amountPaid: [null, [Validators.required,Validators.min(0)]],
      datePaid: [null, Validators.required]
    });
    console.log('gameDateAndTimeFormGroup: ', this.gameDateAndTimeFormGroup.controls);
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
