import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AgeGroup } from 'app/models/ageGroup/age-group.model';
import { MatDialogRef } from '@angular/material';
import { AgeGroupFacade } from 'app/officiating/age-group/state';

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
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  save() {
    var ageGroup = {
      Name: this.addAgeGroupForm.get('ageGroupName').value,
      Tier: this.addAgeGroupForm.get('tier').value,
      MinAge: this.addAgeGroupForm.get('minimumAge').value,
      MaxAge: this.addAgeGroupForm.get('maximumAge').value
    }
    this.ageGroupFacade.createAgeGroup(ageGroup)
    this.dialogRef.close('Hello');
  }

}
