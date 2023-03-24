import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantPizzaMenuComponent } from './restaurant-pizza-menu.component';

describe('RestaurantPizzaMenuComponent', () => {
  let component: RestaurantPizzaMenuComponent;
  let fixture: ComponentFixture<RestaurantPizzaMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RestaurantPizzaMenuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RestaurantPizzaMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
