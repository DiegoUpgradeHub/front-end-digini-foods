import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard'

const routes: Routes = [

  {
    path: `user-profile/:id`, loadChildren: () =>
      import('./pages/my-account/my-account.module').then(m => m.MyAccountModule),
      canActivate: [AuthGuard]
  },
  {
    path: `home`, loadChildren: () =>
      import('./pages/home/home.module').then(m => m.HomeModule)
  },
  {
    path: `restaurant-pizza`, loadChildren: () =>
      import('./pages/restaurant-pizza/restaurant-pizza.module').then(m => m.RestaurantPizzaModule),
  },
  {
    path: `sign-in`, loadChildren: () =>
      import('./features/sign-in/sign-in.module').then(m => m.SignInModule)
  },
  {
    path: `sign-up`, loadChildren: () =>
      import('./features/sign-up/sign-up.module').then(m => m.SignUpModule),
      canActivate: [AuthGuard]
  },
  //Rutas para CRUD usuarios
  {
    path: `update-user`, loadChildren: () =>
      import('./components/users/edit-user/edit-user.module').then(m => m.EditUserModule),
      canActivate: [AuthGuard]
  },
  {
    path: `delete-user`, loadChildren: () =>
      import('./components/users/delete-user/delete-user.module').then(m => m.DeleteUserModule),
      canActivate: [AuthGuard]
  },
  {
    path: `register-user`, loadChildren: () =>
      import('./components/users/create-user/create-user.module').then(m => m.CreateUserModule),
      canActivate: [AuthGuard]
  },
  {
    path: `all-user`, loadChildren: () =>
      import('./components/users/all-user/all-user.module').then(m => m.AllUserModule),
      canActivate: [AuthGuard]
  },
  //Rutas para CRUD de productos
  {
    path: `edit-product/:name`, loadChildren: () =>
      import('./components/products/edit-product/edit-product.module').then(m => m.EditProductModule),
      canActivate: [AuthGuard]
  },
  {
    path: `delete-product`, loadChildren: () =>
      import('./pages/restaurant-pizza/components/restaurant-pizza-menu/components/delete-food/delete-food.module').then(m => m.DeleteFoodModule),
      canActivate: [AuthGuard]
  },
  {
    path: `create-product`, loadChildren: () =>
      import('./components/products/create-product/create-product.module').then(m => m.CreateProductModule),
      canActivate: [AuthGuard]
  },
  {
    path: `all-product`, loadChildren: () =>
      import('./components/products/all-product/all-product.module').then(m => m.AllProductModule),
      canActivate: [AuthGuard]
  },



  { path: ``, redirectTo: `home`, pathMatch: `full` }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
