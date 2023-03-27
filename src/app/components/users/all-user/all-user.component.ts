import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from "@angular/forms";
import { Subject, takeUntil } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';
import { User } from 'src/app/core/models/user';

@Component({
  selector: 'app-all-user',
  templateUrl: './all-user.component.html',
  styleUrls: ['./all-user.component.scss']
})
export class AllUserComponent implements OnInit {

  usersList: User[] = [];
  editForm!: FormGroup;

  protected readonly clearSubscriptions$ = new Subject();

  constructor(
    public fb: FormBuilder,
    public authService: AuthService,
    public router: Router,
    public actRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getAllUsers();
  }

  ngOnDestroy(): void {
    this.clearSubscriptions$.complete();
  }

  getAllUsers() {
    return this.authService.getUsers().pipe(takeUntil(this.clearSubscriptions$),).subscribe((data) => {
      this.usersList = data
    })
  }

  editUser(id: string) {
    this.router.navigate(['/update-use/' + id]);
  }

  deleteUser(id: string) {
    this.router.navigate(['/delete-use/' + id]);
  }

}
