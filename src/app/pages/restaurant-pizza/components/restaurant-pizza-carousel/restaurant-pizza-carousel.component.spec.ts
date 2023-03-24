import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantPizzaCarouselComponent } from './restaurant-pizza-carousel.component';

describe('RestaurantPizzaCarouselComponent', () => {
  let component: RestaurantPizzaCarouselComponent;
  let fixture: ComponentFixture<RestaurantPizzaCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RestaurantPizzaCarouselComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RestaurantPizzaCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
