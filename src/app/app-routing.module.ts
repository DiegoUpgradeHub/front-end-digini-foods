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
      import('./pages/restaurant-pizza/restaurant-pizza.module').then(m => m.RestaurantPizzaModule)
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
  //Rutas para CRUD de productos
  {
    path: `edit-product`, loadChildren: () =>
      import('./components/products/edit-product/edit-product.module').then(m => m.EditProductModule),
      canActivate: [AuthGuard]
  },
  {
    path: `delete-product`, loadChildren: () =>
      import('./components/products/delete-product/delete-product.module').then(m => m.DeleteProductModule),
      canActivate: [AuthGuard]
  },
  {
    path: `create-product`, loadChildren: () =>
      import('./components/products/create-product/create-product.module').then(m => m.CreateProductModule),
      canActivate: [AuthGuard]
  },



  { path: ``, redirectTo: `home`, pathMatch: `full` }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
