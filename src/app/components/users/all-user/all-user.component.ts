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

  thisUser: any = {};

  searchBarValue!: string;

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
  //Obtener todos los usuarios
  getAllUsers() {
    return this.authService.getUsers().pipe(takeUntil(this.clearSubscriptions$),).subscribe((data) => {
      this.usersList = data
    })
  }
  //Obtener este usuario
  getThisUser(user: any): void {
    console.log(user);
    this.thisUser = user;
  }
  //Buscar un usuario
  searchUser(){
    this.usersList = this.usersList.filter(user => user.name == this.searchBarValue)
    console.log(this.usersList)
  }
  //Obtener información del input del searchbar
  getInputValue(e:any){
    this.searchBarValue = e.target.value
  }
  //Obetener usuarios de La Pizzetta
  getPizzeria(){
    this.usersList = this.usersList.filter(user => user.workplace == 'pizzeria');
  }
  //Obetener usuarios de Sushi Saki
  getSushi(){
    this.usersList = this.usersList.filter(user => user.workplace == 'sushi');
  }
  //Obetener usuarios de Brunch & Munch
  getBrunch(){
    this.usersList = this.usersList.filter(user => user.workplace == 'brunch');
  }
  //Obetener usuarios de Oficinas Centrales
  getOffice(){
    this.usersList = this.usersList.filter(user => user.workplace == 'office');
  }
  //Obetener usuarios Restauración
  getWaiter(){
    this.usersList = this.usersList.filter(user => user.role == 'waiter');
  }
  //Obetener usuarios Marketing
  getMarketing(){
    this.usersList = this.usersList.filter(user => user.role == 'marketing');
  }
  //Obetener usuarios Administración
  getAdmin(){
    this.usersList = this.usersList.filter(user => user.role == 'admin');
  }

}
