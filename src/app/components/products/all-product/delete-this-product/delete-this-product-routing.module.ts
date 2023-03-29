import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeleteThisProductComponent } from './delete-this-product.component';

const routes: Routes = [
  {
    path: '', component: DeleteThisProductComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DeleteThisProductRoutingModule { }
