import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantPizzaComponent } from './restaurant-pizza.component';

describe('RestaurantPizzaComponent', () => {
  let component: RestaurantPizzaComponent;
  let fixture: ComponentFixture<RestaurantPizzaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RestaurantPizzaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RestaurantPizzaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
