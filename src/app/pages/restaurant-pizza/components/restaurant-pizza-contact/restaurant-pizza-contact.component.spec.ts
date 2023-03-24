import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantPizzaContactComponent } from './restaurant-pizza-contact.component';

describe('RestaurantPizzaContactComponent', () => {
  let component: RestaurantPizzaContactComponent;
  let fixture: ComponentFixture<RestaurantPizzaContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RestaurantPizzaContactComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RestaurantPizzaContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
