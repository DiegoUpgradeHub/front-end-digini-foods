import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from "@angular/forms";
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-delete-user',
  templateUrl: './delete-user.component.html',
  styleUrls: ['./delete-user.component.scss']
})
export class DeleteUserComponent implements OnInit {

  deleteForm!: FormGroup;

  constructor(
    public fb: FormBuilder,
    public authService: AuthService,
    public router: Router,
    public actRoute: ActivatedRoute
  ) {
    this.deleteForm = this.fb.group({
      _id:['']
    })
  }

  ngOnInit(): void {
    let id = localStorage.getItem('_id') as string;
    console.log(id);
    this.authService.getUserProfile(id).subscribe(res => {
      console.log(res);
      this.deleteForm.get('_id')?.setValue(res._id);
    })
  }

  deletingUser() {
    this.authService.deleteUser(this.deleteForm.value).subscribe(() => {
      this.router.navigate(['/home'])
    })
  }

}
