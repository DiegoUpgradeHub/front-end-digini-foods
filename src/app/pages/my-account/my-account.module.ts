import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyAccountRoutingModule } from './my-account-routing.module';
import { MyAccountComponent } from './my-account.component';
import { UsersModule } from 'src/app/components/users/users.module';
import { ProductsModule } from 'src/app/components/products/products.module';


@NgModule({
  declarations: [
    MyAccountComponent
  ],
  imports: [
    CommonModule,
    MyAccountRoutingModule,
    UsersModule,
    ProductsModule
  ]
})
export class MyAccountModule { }
