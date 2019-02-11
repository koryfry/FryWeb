import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'fw-add-game-detail',
  templateUrl: './add-game-detail-dialog.component.html',
  styleUrls: ['./add-game-detail-dialog.component.scss']
})
export class AddGameDetailDialogComponent implements OnInit {
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  isLinear = true;

  constructor(
    private dialogRef: MatDialogRef<AddGameDetailDialogComponent>,
    private _formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
  }
  
  onNoClick(): void {
    this.dialogRef.close();
  }

}
