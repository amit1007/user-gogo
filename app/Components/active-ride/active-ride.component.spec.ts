import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiveRideComponent } from './active-ride.component';

describe('ActiveRideComponent', () => {
  let component: ActiveRideComponent;
  let fixture: ComponentFixture<ActiveRideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActiveRideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActiveRideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
