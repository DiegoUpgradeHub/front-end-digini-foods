import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup } from "@angular/forms";
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-edit-this-user',
  templateUrl: './edit-this-user.component.html',
  styleUrls: ['./edit-this-user.component.scss']
})
export class EditThisUserComponent {

  editUserForm!: FormGroup;

  @Input() user: any;

  constructor(
    public fb: FormBuilder,
    public authService: AuthService,
    public router: Router,
    public actRoute: ActivatedRoute
  ) {
    this.editUserForm = this.fb.group({
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
    this.editUserForm.get('_id')?.setValue(this.user._id);
    this.editUserForm.get('name')?.setValue(this.user.name);
    this.editUserForm.get('lastName')?.setValue(this.user.lastName);
    this.editUserForm.get('age')?.setValue(this.user.age);
    this.editUserForm.get('email')?.setValue(this.user.email);
    this.editUserForm.get('password')?.setValue(this.user.password);
    this.editUserForm.get('startDate')?.setValue(this.user.startDate);
    this.editUserForm.get('workplace')?.setValue(this.user.workplace);
    this.editUserForm.get('role')?.setValue(this.user.role);
    console.log(this.user)
  }

  editingUser(userId: any) {
    this.authService.editUserProfile(this.editUserForm.value, userId.trim()).subscribe(() => {
      window.location.reload();
    })
  }

}
