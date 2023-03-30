import { ViewFoodDetailsComponent } from './components/restaurant-pizza-menu/components/view-food-details/view-food-details.component';
import { CreateFoodComponent } from './components/restaurant-pizza-menu/components/create-food/create-food.component';
import { DeleteFoodComponent } from './components/restaurant-pizza-menu/components/delete-food/delete-food.component';
import { RestaurantPizzaComponent } from './restaurant-pizza.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditFoodComponent } from './components/restaurant-pizza-menu/components/edit-food/edit-food.component';

const routes: Routes = [

  {
    path: '', component: RestaurantPizzaComponent, //http://localhost:4200/restaurant-pizza
    children: [
      {
        path: 'delete-product', component: DeleteFoodComponent //http://localhost:4200/restaurant-pizza/delete-product
      },
      {
        path: 'edit-product/:name', component: EditFoodComponent //http://localhost:4200/restaurant-pizza/edit-product
      },
      {
        path: 'create-product', component: CreateFoodComponent //http://localhost:4200/restaurant-pizza/edit-product
      },
      {
        path: 'view-details/:name', component: ViewFoodDetailsComponent//http://localhost:4200/restaurant-pizza/view-details
      }
    ]
  },



];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RestaurantPizzaRoutingModule { }
