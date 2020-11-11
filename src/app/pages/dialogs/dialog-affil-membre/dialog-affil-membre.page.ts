import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-affil-membre',
  templateUrl: './dialog-affil-membre.page.html',
  styleUrls: ['./dialog-affil-membre.page.scss'],
})
export class DialogAffilMembrePage implements OnInit {

  affil=1;

  constructor(public dialogRef: MatDialogRef<DialogAffilMembrePage>,
              @Inject(MAT_DIALOG_DATA) public affi) { }

  ngOnInit(): void {
  }

  onNoClick() {
    this.dialogRef.close();
  }

}
