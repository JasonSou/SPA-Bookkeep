import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookKeepingDetailComponent } from './book-keeping-detail/book-keeping-detail.component';
import { BookKeepingComponent } from './book-keeping/book-keeping.component';
import { BookKeepingFormComponent } from './book-keeping-form/book-keeping-form.component';


const routes: Routes = [
  { path: 'detail/:id', component: BookKeepingDetailComponent },
  { path: '', component: BookKeepingComponent },
  { path: 'add', component: BookKeepingFormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
