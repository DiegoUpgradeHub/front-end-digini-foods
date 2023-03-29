import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup } from "@angular/forms";
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-delete-this-user',
  templateUrl: './delete-this-user.component.html',
  styleUrls: ['./delete-this-user.component.scss']
})
export class DeleteThisUserComponent {

  deleteForm!: FormGroup;

  @Input() user: any = {}


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
    this.deleteForm.get('_id')?.setValue(this.user._id);
  }

  deletingUser(id: string) {
    console.log(this.deleteForm.value._id); //Sale undefined
    this.authService.deleteUser(id).subscribe(() => {
      window.location.reload();
    })
  }
}
