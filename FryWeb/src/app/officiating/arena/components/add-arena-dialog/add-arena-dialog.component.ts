import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'fw-add-arena-dialog',
  templateUrl: './add-arena-dialog.component.html',
  styleUrls: ['./add-arena-dialog.component.scss']
})
export class AddArenaDialogComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<AddArenaDialogComponent>) { }

  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  save() {
    this.dialogRef.close('Hello');
  }
}
