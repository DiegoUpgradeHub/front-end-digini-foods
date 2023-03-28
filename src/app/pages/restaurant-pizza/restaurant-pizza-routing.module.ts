import { DeleteFoodComponent } from './components/restaurant-pizza-menu/components/delete-food/delete-food.component';
import { RestaurantPizzaComponent } from './restaurant-pizza.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
    path: '', component: RestaurantPizzaComponent,
    children: [
      {
        path: 'delete-product', component: RestaurantPizzaComponent
      }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RestaurantPizzaRoutingModule { }
