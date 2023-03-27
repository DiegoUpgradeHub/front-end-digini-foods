import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeleteThisUserComponent } from './delete-this-user.component';

const routes: Routes = [
  {
    path: '', component: DeleteThisUserComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DeleteThisUserRoutingModule { }
