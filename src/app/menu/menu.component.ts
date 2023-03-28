import { AuthService } from 'src/app/core/services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constructor(
    public authService:AuthService,

  ) { }

  ngOnInit(): void {
  }

  toggleMenu() {
    const menuItems = document.querySelector('.menu-items');
    menuItems?.classList.toggle('show');
  }
logout(){
 
  this.authService.doLogout();
  
}

myAccount(){

  this.authService.userProfile();
}

}
