import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';


import { RestaurantPizzaRoutingModule } from './restaurant-pizza-routing.module';
import { RestaurantPizzaComponent } from './restaurant-pizza.component';
import { RestaurantPizzaCarouselComponent } from './components/restaurant-pizza-carousel/restaurant-pizza-carousel.component';
import { RestaurantPizzaMenuComponent } from './components/restaurant-pizza-menu/restaurant-pizza-menu.component';
import { RestaurantPizzaContactComponent } from './components/restaurant-pizza-contact/restaurant-pizza-contact.component';
import { ProductsModule } from 'src/app/components/products/products.module';

//Ngx Bootstrap
import { AccordionModule } from 'ngx-bootstrap/accordion';

//Angular Material
import {CdkTableModule} from '@angular/cdk/table';
import {MatButtonModule} from '@angular/material/button';
import { DeleteFoodComponent } from './components/restaurant-pizza-menu/components/delete-food/delete-food.component';
import { EditFoodComponent } from './components/restaurant-pizza-menu/components/edit-food/edit-food.component';



@NgModule({
  declarations: [
    RestaurantPizzaComponent,
    RestaurantPizzaCarouselComponent,
    RestaurantPizzaMenuComponent,
    RestaurantPizzaContactComponent,
    DeleteFoodComponent,
    EditFoodComponent,

  ],
  imports: [
    CommonModule,
    RestaurantPizzaRoutingModule,
    FormsModule,
    ProductsModule,
    //Ngx Bootstrap
    AccordionModule,
    //Angular Material
    CdkTableModule,
    MatButtonModule,
    ReactiveFormsModule

  ]
})
export class RestaurantPizzaModule { }
