import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-supp-membre',
  templateUrl: './dialog-supp-membre.page.html',
  styleUrls: ['./dialog-supp-membre.page.scss'],
})
export class DialogSuppMembrePage implements OnInit {

  supp=1;

  constructor(
      public dialogRef: MatDialogRef<DialogSuppMembrePage>,
      @Inject(MAT_DIALOG_DATA) public sup) {}

  ngOnInit(): void {
  }

  onNoClick() {
    this.dialogRef.close();

  }

}
