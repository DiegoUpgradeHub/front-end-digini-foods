import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RestaurantPizzaRoutingModule } from './restaurant-pizza-routing.module';
import { RestaurantPizzaComponent } from './restaurant-pizza.component';


@NgModule({
  declarations: [
    RestaurantPizzaComponent
  ],
  imports: [
    CommonModule,
    RestaurantPizzaRoutingModule
  ]
})
export class RestaurantPizzaModule { }
