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

}
