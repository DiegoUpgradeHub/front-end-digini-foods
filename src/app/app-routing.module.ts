import { SignUpModule } from './features/sign-up/sign-up.module';
import { SignInModule } from './features/sign-in/sign-in.module';
import { LoginFormComponent } from './features/login-form/login-form.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
    path: `home`, loadChildren: () =>
      import('./pages/home/home.module').then(m => m.HomeModule)
  },
  {
    path: `restaurant-pizza`, loadChildren: () =>
      import('./pages/restaurant-pizza/restaurant-pizza.module').then(m => m.RestaurantPizzaModule)
  },
  {
    path: `my-account`, loadChildren: () =>
      import('./pages/my-account/my-account.module').then(m => m.MyAccountModule)
  },
  {
    path: `login-form`, loadChildren: () =>
      import('./features/login-form/login-form.module').then(m => m.LoginFormModule)
  },
  {
    path: `sign-in`, loadChildren: () =>
      import('./features/sign-in/sign-in.module').then(m => m.SignInModule)
  },
  {
    path: `sign-up`, loadChildren: () =>
      import('./features/sign-up/sign-up.module').then(m => m.SignUpModule)
  },
  { path: ``, redirectTo: `home`, pathMatch: `full` }




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
