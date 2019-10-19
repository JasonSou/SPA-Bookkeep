import { Component, OnInit, Inject, Output, EventEmitter } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { BookKeepingService } from '../book-keeping/service/book-keeping.service'

export interface DialogData {
  id: number;
}


@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss'],
  inputs: ['del_id'] 
})
export class DialogComponent implements OnInit {

  private del_id;

  @Output() refresh = new EventEmitter;

  constructor(
    public dialog: MatDialog,
    ) {}

  openDialog() {
    const dialogRef = this.dialog.open(DialogContent, {
      width: '250px',
      height: '200px',
      data: {
        id: this.del_id
      }
    });

    dialogRef.afterClosed().subscribe(
      result => {
        if(result && result['status'] == true) {
          this.refresh.emit();
        }
      }
    );

  }

  ngOnInit() {
  }

}

@Component({
  selector: 'dialog-content',
  templateUrl: './dialog-content.html'
})
export class DialogContent {

  constructor(
    public dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private sevice : BookKeepingService,
  ){}

  onNoClick(): void {
    this.dialogRef.close();
  }

  confirm(): void {
    let del_id = this.data['id']
    this.sevice.deleteChargeKeeping(del_id)
      .subscribe(
        result => {
          this.dialogRef.close(result);
        }
      )
      
    
  }

}