import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl, ValidatorFn } from '@angular/forms';
import { AgeGroup } from 'app/models/ageGroup/age-group.model';
import { MatDialogRef } from '@angular/material';
import { AgeGroupFacade } from '../../../state/age-group/age-group.facade';

@Component({
  selector: 'fw-add-age-group-dialog',
  templateUrl: './add-age-group-dialog.component.html',
  styleUrls: ['./add-age-group-dialog.component.scss']
})
export class AddAgeGroupDialogComponent implements OnInit {

  addAgeGroupForm: FormGroup;

  constructor(
    private dialogRef: MatDialogRef<AddAgeGroupDialogComponent>,
    private fb: FormBuilder,
    private ageGroupFacade: AgeGroupFacade
  ) 
  {
    this.addAgeGroupForm = this.fb.group({
      ageGroupName: [
        null,
        Validators.required
      ],
      tier: [
        null,
        Validators.required
      ],
      minimumAge: [
        null,
        Validators.required
      ],
      maximumAge: [
        null,
        Validators.required
      ]
    })
  }

  ngOnInit() {
    this.addAgeGroupForm.valueChanges.subscribe(() => {
      this.addAgeGroupForm.get('maximumAge').setValidators(this.greaterThan('minimumAge'))
    })
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  save() {
    var ageGroup = {
      Name: this.addAgeGroupForm.get('ageGroupName').value,
      Tier: this.addAgeGroupForm.get('tier').value,
      MinimumAge: this.addAgeGroupForm.get('minimumAge').value,
      MaximumAge: this.addAgeGroupForm.get('maximumAge').value
    }
    this.ageGroupFacade.createAgeGroup(ageGroup)
    this.dialogRef.close('Hello');
  }

  private greaterThan(field: string): ValidatorFn {
    return (control: AbstractControl): {[key: string]: any} => {
      const group = control.parent;
      const fieldToCompare = group.get(field);
      const isLessThan = Number(fieldToCompare.value) > Number(control.value);
      return isLessThan ? {'lessThan': {value: control.value}} : null;
    }
  }

}
