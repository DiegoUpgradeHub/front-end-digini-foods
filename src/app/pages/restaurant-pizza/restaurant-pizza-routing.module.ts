import { EditProductComponent } from './../../components/products/edit-product/edit-product.component';
import { RestaurantPizzaComponent } from './restaurant-pizza.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
    path: '', component: RestaurantPizzaComponent, //http://localhost:4200/restaurant-pizza
    children: [
      {
        path: 'delete-product', component: RestaurantPizzaComponent //http://localhost:4200/restaurant-pizza/delete-product
      },
      {
        path: 'edit-product/:name', component: EditProductComponent //http://localhost:4200/restaurant-pizza/edit-product/:name
      }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RestaurantPizzaRoutingModule { }
