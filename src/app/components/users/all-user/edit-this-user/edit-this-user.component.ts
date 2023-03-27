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

  editForm!: FormGroup;

  @Input() user: any = {};
  userId: string = '';

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
    this.userId = this.user._id;
    console.log(this.userId);
  }

  editingUser(userId: any) {
    this.authService.editUserProfile(this.editForm.value, userId).subscribe(() => {
      this.authService.userProfile();
      console.log("esto es el this.user", this.user);
      // this.router.navigate(['/all-users']);
    })
  }

}
