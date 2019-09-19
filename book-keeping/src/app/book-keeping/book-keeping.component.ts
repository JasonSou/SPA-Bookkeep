import { Component, OnInit } from '@angular/core';
import { BookKeepingService } from './service/book-keeping.service';
import { Keeping } from './book-keeping';

@Component({
  selector: 'app-book-keeping',
  templateUrl: './book-keeping.component.html',
  styleUrls: ['./book-keeping.component.scss']
  
})
export class BookKeepingComponent implements OnInit {

  bookkeepings: Keeping[];

  constructor(private service: BookKeepingService) { 
  }

  ngOnInit() {
    this.getKeepings();
  }

  getKeepings(): void {
    this.service.getChargeKeepings()
      .subscribe((keepings: Keeping[]) => this.bookkeepings = keepings)
  }

  deleteKeeping(id: number): void {
    // ToDo: 1. angular event learning
    // ToDo: 2. map & ?:
    // ToDo: 3. get result id
    this.service.deleteChargeKeeping(id)
      .subscribe(
        result => {
          if(result['status'] == true){
            for(var i=0;i<this.bookkeepings.length;i++) {
              if(this.bookkeepings[i].id == id) {
                delete this.bookkeepings[i]
              }
            }
          }
          
        }
      )
  }

}
