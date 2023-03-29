import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateProductComponent } from './create-product/create-product.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { DeleteProductComponent } from './delete-product/delete-product.component';


import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AllProductComponent } from './all-product/all-product.component';
import { EditThisProductComponent } from './all-product/edit-this-product/edit-this-product.component';
import { DeleteThisProductComponent } from './all-product/delete-this-product/delete-this-product.component';

@NgModule({
  declarations: [
    CreateProductComponent,
    EditProductComponent,
    DeleteProductComponent,
    AllProductComponent,
    DeleteThisProductComponent,
    EditThisProductComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule

  ],
  exports: [
    CreateProductComponent,
    EditProductComponent,
    DeleteProductComponent,
  ]
})
export class ProductsModule { }
