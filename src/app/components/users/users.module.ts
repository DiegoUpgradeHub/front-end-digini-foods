import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { CreateUserComponent } from './create-user/create-user.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { DeleteUserComponent } from './delete-user/delete-user.component';
import { AllUserComponent } from './all-user/all-user.component';

@NgModule({
  declarations: [
    CreateUserComponent,
    EditUserComponent,
    DeleteUserComponent,
    AllUserComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [
    CreateUserComponent,
    EditUserComponent,
    DeleteUserComponent,
    AllUserComponent
  ]
})
export class UsersModule { }
