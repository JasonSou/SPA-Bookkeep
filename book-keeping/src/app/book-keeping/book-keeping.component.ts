import { Component, OnInit } from '@angular/core';
import { BookKeeppingService } from './service/book-keeping.service';
import { Keeping } from './book-keeping';

@Component({
  selector: 'app-book-keeping',
  templateUrl: './book-keeping.component.html',
  styleUrls: ['./book-keeping.component.scss']
  
})
export class BookKeepingComponent implements OnInit {

  bookkeepings: Keeping[];

  constructor(private service: BookKeeppingService) { 
  }

  ngOnInit() {
    this.getKeeppings();
  }

  getKeeppings(): void {
    this.service.getChargeKeeppings()
      .subscribe( (keeppings: Keeping[]) => this.bookkeepings = keeppings)
  }

}
