import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookKeepingComponent } from './book-keeping/book-keeping.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BookKeepingDetailComponent } from './book-keeping-detail/book-keeping-detail.component';
import { BookKeepingFormComponent } from './book-keeping-form/book-keeping-form.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatDatepickerModule, MatFormFieldModule, MatInputModule, MatRippleModule, MatNativeDateModule } from '@angular/material';
import {MatButtonModule} from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';

@NgModule({
  declarations: [
    AppComponent,
    BookKeepingComponent,
    BookKeepingDetailComponent,
    BookKeepingFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    MatRippleModule,
    MatDatepickerModule,
    MatNativeDateModule, 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
