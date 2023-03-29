import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditThisProductComponent } from './edit-this-product.component';

const routes: Routes = [
  {
    path: '', component: EditThisProductComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditThisProductRoutingModule { }
