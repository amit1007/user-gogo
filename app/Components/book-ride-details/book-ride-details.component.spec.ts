import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookRideDetailsComponent } from './book-ride-details.component';

describe('BookRideDetailsComponent', () => {
  let component: BookRideDetailsComponent;
  let fixture: ComponentFixture<BookRideDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookRideDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookRideDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
