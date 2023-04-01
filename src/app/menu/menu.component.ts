import { TranslateService } from '@ngx-translate/core';
import { AuthService } from 'src/app/core/services/auth.service';
import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { SharedModule } from '../components/shared/shared.module';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constructor(
    public authService:AuthService,
    public appComponent: AppComponent
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

setAppLanguages(){
  this.appComponent.setAppLanguage();
}



}


