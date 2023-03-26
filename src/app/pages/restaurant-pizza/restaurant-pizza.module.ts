import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { RestaurantPizzaRoutingModule } from './restaurant-pizza-routing.module';
import { RestaurantPizzaComponent } from './restaurant-pizza.component';
import { RestaurantPizzaCarouselComponent } from './components/restaurant-pizza-carousel/restaurant-pizza-carousel.component';
import { RestaurantPizzaMenuComponent } from './components/restaurant-pizza-menu/restaurant-pizza-menu.component';
import { RestaurantPizzaContactComponent } from './components/restaurant-pizza-contact/restaurant-pizza-contact.component';

//Ngx Bootstrap
import { AccordionModule } from 'ngx-bootstrap/accordion';

//Angular Material
import {CdkTableModule} from '@angular/cdk/table';
import {MatButtonModule} from '@angular/material/button';



@NgModule({
  declarations: [
    RestaurantPizzaComponent,
    RestaurantPizzaCarouselComponent,
    RestaurantPizzaMenuComponent,
    RestaurantPizzaContactComponent
  ],
  imports: [
    CommonModule,
    RestaurantPizzaRoutingModule,
    FormsModule,
    //Ngx Bootstrap
    AccordionModule,
    //Angular Material
    CdkTableModule,
    MatButtonModule
  ]
})
export class RestaurantPizzaModule { }
