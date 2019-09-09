import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Keeping } from '../book-keeping/book-keeping';

@Component({
  selector: 'app-book-keeping-form',
  templateUrl: './book-keeping-form.component.html',
  styleUrls: ['./book-keeping-form.component.scss']
})
export class BookKeepingFormComponent implements OnInit {

  eleCharge: number;
  waterCharge: number;
  airCharge: number;

  otherCharge: number;
  totalCharge: number;

  recordForm = this.fb.group({
    date : ['', Validators.required],
    eleUnit : [0.62, [Validators.required, Validators.min(0)]],
    waterUnit: [3.4, [Validators.required, Validators.min(0)]],
    airUnit: [3.2, [Validators.required, Validators.min(0)]],

    electricUsage: ['', [Validators.required, Validators.min(0)]],
    waterUsage: ['', [Validators.required, Validators.min(0)]],
    airUsage: ['', [Validators.required, Validators.min(0)]],

    otherCharge: [33, [Validators.required, Validators.min(0)]]
  })

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }

  onSubmit() {
    console.warn(this.recordForm.value);
  }

}
