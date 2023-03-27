import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateProductComponent } from './create-product/create-product.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { DeleteProductComponent } from './delete-product/delete-product.component';

@NgModule({
  declarations: [
    CreateProductComponent,
    EditProductComponent,
    DeleteProductComponent,

  ],
  imports: [
    CommonModule

  ],
  exports: [
    CreateProductComponent,
    EditProductComponent,
    DeleteProductComponent,
  ]
})
export class ProductsModule { }
