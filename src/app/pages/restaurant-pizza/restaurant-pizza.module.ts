import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/components/shared/shared.module';

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
import { CreateFoodComponent } from './components/restaurant-pizza-menu/components/create-food/create-food.component';
import { ViewFoodDetailsComponent } from './components/restaurant-pizza-menu/components/view-food-details/view-food-details.component';
import {MatButtonToggleModule} from '@angular/material/button-toggle';


@NgModule({
  declarations: [
    RestaurantPizzaComponent,
    RestaurantPizzaCarouselComponent,
    RestaurantPizzaMenuComponent,
    RestaurantPizzaContactComponent,
    DeleteFoodComponent,
    EditFoodComponent,
    CreateFoodComponent,
    ViewFoodDetailsComponent,

  ],
  imports: [
    CommonModule,
    RestaurantPizzaRoutingModule,
    FormsModule,
    ProductsModule,
    ReactiveFormsModule,

    //Ngx Bootstrap
    AccordionModule,
    //Angular Material
    CdkTableModule,
    MatButtonModule,
    MatButtonToggleModule,
    SharedModule

  ]
})
export class RestaurantPizzaModule { }
