import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AllUserRoutingModule } from './all-user-routing.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AllUserRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AllUserModule { }
