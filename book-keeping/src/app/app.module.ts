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
import { MatDatepickerModule, MatFormFieldModule, MatInputModule, MatRippleModule, MatNativeDateModule, MatDialogModule,
   MAT_DIALOG_DEFAULT_OPTIONS } from '@angular/material';
import {MatButtonModule} from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatSelectModule} from '@angular/material/select';
import { DialogComponent, DialogContent } from './dialog/dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    BookKeepingComponent,
    BookKeepingDetailComponent,
    BookKeepingFormComponent,
    DialogComponent,
    DialogContent
    
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
    MatSelectModule,
    MatDialogModule,
  ],
  entryComponents: [
    DialogContent
  ],
  providers: [
    {provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: false}}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
