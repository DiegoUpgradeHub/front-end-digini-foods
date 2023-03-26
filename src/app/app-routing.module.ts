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
  {
    path: `update-user`, loadChildren: () =>
      import('./components/users/edit-user/edit-user.module').then(m => m.EditUserModule),
      canActivate: [AuthGuard]
  },
  { path: ``, redirectTo: `home`, pathMatch: `full` }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
