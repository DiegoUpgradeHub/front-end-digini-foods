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
    public translateService:TranslateService,
    public authService:AuthService,
    public appComponent: AppComponent
  ) { }

  ngOnInit(): void {
    this.detectBrowserLanguage();
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

setEnglish(){
  this.appComponent.setAppLanguageEnglish();
}

setSpanish(){
  this.appComponent.setAppLanguageSpanish();
}


detectBrowserLanguage(){
     const browserLang = this.translateService.getBrowserLang();
      if (browserLang === 'es') {
        //console.log('Tu navegador es español')
    }
}

}


