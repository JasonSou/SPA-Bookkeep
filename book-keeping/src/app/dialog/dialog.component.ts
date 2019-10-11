import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {

  constructor(public dialog: MatDialog) {}

  openDialog() {
    const dialogRef = this.dialog.open(DialogContent, {
      width: '250px',
      height: '200px'
      
    });
    dialogRef.afterClosed().subscribe(
      result => {
        // to do
      }
    );

  }

  ngOnInit() {
  }

}

@Component({
  selector: 'dialog-content',
  templateUrl: './dialog-content.html',
})
export class DialogContent {

  constructor(
    public dialogRef: MatDialogRef<DialogComponent>,
  ){}

  onNoClick(): void {
    this.dialogRef.close();
  }

  confirm(): void {
    
  }

}