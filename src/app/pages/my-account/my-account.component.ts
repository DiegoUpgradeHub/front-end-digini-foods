import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.scss']
})
export class MyAccountComponent implements OnInit {

  currentUser: any = {}; // Aquí almacenamos el usuario actual

  constructor(
    public actRoute: ActivatedRoute,
    public authService: AuthService,
    public router: Router,
  ) {
    let id = localStorage.getItem('_id'); //Recogemos el id del local storage
    this.authService.getUserProfile(id).subscribe(res => { //Llamamos a la función para obtener los datos del usuario
      this.currentUser = res;
      console.log(this.currentUser);
    })
  }

  ngOnInit(): void {}

  logout() {
    this.authService.doLogout();
  }

}
