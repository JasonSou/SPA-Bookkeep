import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface DialogData {
  id: string;
}


@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss'],
  inputs: ['del_id'] 
})
export class DialogComponent implements OnInit {

  private del_id;

  constructor(public dialog: MatDialog) {}
  // toDo: pass del_id to DialogContent
  openDialog() {
    const dialogRef = this.dialog.open(DialogContent, {
      width: '250px',
      height: '200px',
      data: {id: this.del_id}
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
  inputs: ['id']
})
export class DialogContent {
  private id;
  constructor(
    public dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ){}

  onNoClick(): void {
    this.dialogRef.close();
  }

  confirm(): void {
    console.log(this.data)
  }

}