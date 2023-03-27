import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from "@angular/forms";
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit {

  editForm!: FormGroup;
  currentUser: any = {}; // Aquí almacenamos el usuario actual

  constructor(
    public fb: FormBuilder,
    public authService: AuthService,
    public router: Router,
    public actRoute: ActivatedRoute
  ) {
    this.editForm = this.fb.group({
      _id:[''],
      name: [''],
      lastName: [''],
      age: [''],
      email: [''],
      password: [''],
      startDate: [''],
      workplace: [''],
      role: ['']
    })
  }

  ngOnInit(): void {
    let id = localStorage.getItem('_id') as string;
    console.log(id);
    this.authService.getUserProfile(id).subscribe(res => {
      this.currentUser = res;
      console.log(res);
      this.editForm.get('_id')?.setValue(res._id);
      this.editForm.get('name')?.setValue(res.name);
      this.editForm.get('lastName')?.setValue(res.lastName);
      this.editForm.get('age')?.setValue(res.age);
      this.editForm.get('email')?.setValue(res.email);
      this.editForm.get('password')?.setValue(res.password);
      this.editForm.get('startDate')?.setValue(res.startDate);
      this.editForm.get('workplace')?.setValue(res.workplace);
      this.editForm.get('role')?.setValue(res.role);
    })
  }

  editingUser() {
    this.authService.editUserProfile(this.editForm.value, this.currentUser._id).subscribe(() => {
      this.authService.userProfile();
    })
  }
}
