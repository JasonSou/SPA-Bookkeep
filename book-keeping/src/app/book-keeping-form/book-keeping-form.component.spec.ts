import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookKeepingFormComponent } from './book-keeping-form.component';

describe('BookKeepingFormComponent', () => {
  let component: BookKeepingFormComponent;
  let fixture: ComponentFixture<BookKeepingFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookKeepingFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookKeepingFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
