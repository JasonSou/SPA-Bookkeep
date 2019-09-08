import { Component, OnInit } from '@angular/core';
import { Keeping } from '../book-keeping/book-keeping';
import { ParamMap, ActivatedRoute, Router } from '@angular/router';
import { BookKeepingService } from '../book-keeping/service/book-keeping.service';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-book-keeping-detail',
  templateUrl: './book-keeping-detail.component.html',
  styleUrls: ['./book-keeping-detail.component.scss']
})
export class BookKeepingDetailComponent implements OnInit {

  keeping: Keeping;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: BookKeepingService,
  ) { }

  ngOnInit() {
    this.getBookkeeping();
  }

  getBookkeeping(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.service.getChargeKeeping(id)
      .subscribe(keeping => this.keeping = keeping);
  }
}
