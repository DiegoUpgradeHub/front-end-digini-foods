import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AllProductRoutingModule } from './all-product-routing.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AllProductRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AllProductModule { }
