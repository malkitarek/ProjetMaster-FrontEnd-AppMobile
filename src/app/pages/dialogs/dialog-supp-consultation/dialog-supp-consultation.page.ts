import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-supp-consultation',
  templateUrl: './dialog-supp-consultation.page.html',
  styleUrls: ['./dialog-supp-consultation.page.scss'],
})
export class DialogSuppConsultationPage implements OnInit {

  supp=1;

  constructor(
      public dialogRef: MatDialogRef<DialogSuppConsultationPage>,
      @Inject(MAT_DIALOG_DATA) public sup) {}

  ngOnInit(): void {
  }

  onNoClick() {
    this.dialogRef.close();

  }

}
