import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditThisUserComponent } from './edit-this-user.component';

const routes: Routes = [
  {
    path: '', component: EditThisUserComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditThisUserRoutingModule { }
