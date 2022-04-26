import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayAllOffersComponent } from './display-all-offers.component';

describe('DisplayAllOffersComponent', () => {
  let component: DisplayAllOffersComponent;
  let fixture: ComponentFixture<DisplayAllOffersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayAllOffersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayAllOffersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
