import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Keeping } from '../book-keeping/book-keeping';
import { BookKeepingService } from '../book-keeping/service/book-keeping.service';

@Component({
  selector: 'app-book-keeping-form',
  templateUrl: './book-keeping-form.component.html',
  styleUrls: ['./book-keeping-form.component.scss']
})
export class BookKeepingFormComponent implements OnInit {

  lastKeeping: Keeping;
  recordForm = this.fb.group({
    date : ['', Validators.required],
    eleUnit : [0.62, [Validators.required, Validators.min(0)]],
    waterUnit: [3.4, [Validators.required, Validators.min(0)]],
    airUnit: [3.2, [Validators.required, Validators.min(0)]],

    electricScalar: [0, [Validators.required, Validators.min(0)]],
    waterScalar: [0, [Validators.required, Validators.min(0)]],
    airScalar: [0, [Validators.required, Validators.min(0)]],

    electricUsage: ['', [Validators.min(0)]],
    waterUsage: ['', [Validators.min(0)]],
    airUsage: ['', [Validators.min(0)]],

    eleCharge: [0, [Validators.required, Validators.min(0)]],
    waterCharge: [0, [Validators.required, Validators.min(0)]],
    airCharge: [0, [Validators.required, Validators.min(0)]],
    otherCharge: [33, [Validators.required, Validators.min(0)]],
    totalCharge: [0, [Validators.required, Validators.min(0)]]
  })

  constructor(private fb: FormBuilder, private service: BookKeepingService) { }

  ngOnInit() {
    this.getLastKeeping();
  }

  onSubmit() {
    console.warn(this.recordForm.value);
  }

  getLastKeeping() {
    this.service.getLastKeeping()
      .subscribe(keeping => this.lastKeeping = keeping);
  }

  getUsage(event, a) {
    console.log(event, a)
  }



}
