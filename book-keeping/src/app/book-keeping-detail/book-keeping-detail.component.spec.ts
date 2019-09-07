import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookKeepingDetailComponent } from './book-keeping-detail.component';

describe('BookKeepingDetailComponent', () => {
  let component: BookKeepingDetailComponent;
  let fixture: ComponentFixture<BookKeepingDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookKeepingDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookKeepingDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
