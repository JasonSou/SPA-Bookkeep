import { Component, OnInit } from '@angular/core';
import { Keeping } from '../book-keeping/book-keeping';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-book-keeping-detail',
  templateUrl: './book-keeping-detail.component.html',
  styleUrls: ['./book-keeping-detail.component.scss']
})
export class BookKeepingDetailComponent implements Keeping, OnInit {
  id: number;
  date: Date;
  eleUnit: number;
  waterUnit: number;
  airUnit: number;
  electricUsage: number;
  waterUsage: number;
  airUsage: number;
  eleCharge: number;
  waterCharge: number;
  airCharge: number;
  otherCharge: number;
  totalCharge: number;

  f_date = new FormControl();
  f_eleUnit = new FormControl(0.62);
  constructor() { }

  ngOnInit() {
  }

}
