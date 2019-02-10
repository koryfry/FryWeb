import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'fw-add-game-detail',
  templateUrl: './add-game-detail-dialog.component.html',
  styleUrls: ['./add-game-detail-dialog.component.scss']
})
export class AddGameDetailDialogComponent implements OnInit {

  constructor(
    private dialogRef: MatDialogRef<AddGameDetailDialogComponent>) { }

  ngOnInit() {
  }
  
  onNoClick(): void {
    this.dialogRef.close();
  }

}
