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
    this.service.addChargeKeeping(this.recordForm.value)
      .subscribe( mes => console.log(mes))
      // ToDo: alert message wheather success or not 
  }

  getLastKeeping() {
    this.service.getLastKeeping()
      .subscribe(keeping => this.lastKeeping = keeping);
  }

  // TODO: onEvent in angular
  getUsage(event) {
    const id = event.target.id;
    const val = event.target.value;
    if(this.lastKeeping) {
      switch(id) {
        case 'electricScalar':
          this.recordForm.patchValue({'electricUsage': Number(val) - this.lastKeeping.electricScalar} ); break;
        case 'waterScalar':
          this.recordForm.patchValue({'waterUsage': Number(val) - this.lastKeeping.waterScalar} );break;
        case 'airScalar':
          this.recordForm.patchValue({'airUsage': Number(val) - this.lastKeeping.airScalar} );break;
      }
    }
    
    this.getCharge();

  }

  getCharge() {
    let formValue = this.recordForm.value;
    let eleCharge = Number(formValue.eleUnit * formValue.electricUsage);
    let waterCharge = Number(formValue.waterUnit * formValue.waterUsage);
    let airCharge = Number(formValue.airUnit * formValue.airUsage);
    let otherCharge = Number(formValue.otherCharge);
    let totalCharge = eleCharge + waterCharge + airCharge + otherCharge;
    this.recordForm.patchValue({
      'eleCharge': Math.round(eleCharge),
      'waterCharge': Math.round(waterCharge),
      'airCharge': Math.round(airCharge),
      'totalCharge': Math.round(totalCharge)
  })
  }



}
