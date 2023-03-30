import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewFoodDetailsComponent } from './view-food-details.component';

describe('ViewFoodDetailsComponent', () => {
  let component: ViewFoodDetailsComponent;
  let fixture: ComponentFixture<ViewFoodDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewFoodDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewFoodDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
