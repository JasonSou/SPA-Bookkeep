import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookKeeppingComponent } from './book-keeping.component';

describe('BookKeeppingComponent', () => {
  let component: BookKeeppingComponent;
  let fixture: ComponentFixture<BookKeeppingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookKeeppingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookKeeppingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
