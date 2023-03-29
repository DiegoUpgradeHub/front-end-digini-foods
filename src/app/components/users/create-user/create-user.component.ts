import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from "@angular/forms";
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss']
})
export class CreateUserComponent {

  createForm!: FormGroup;

  constructor(
    public fb: FormBuilder,
    public authService: AuthService,
    public router: Router,
    public actRoute: ActivatedRoute
  ) {
    this.createForm = this.fb.group({
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

  ngOnInit(): void {}

  creatingUser() {
    this.authService.createUser(this.createForm.value).subscribe(() => {
      window.location.reload();
      // this.authService.userProfile();
    })
  }

}
