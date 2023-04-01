import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'front-end-digini-foods';

  constructor(private translate: TranslateService) {
    this.setAppLanguage();
  }

  setAppLanguage() {
    const browserLang = this.translate.getBrowserLang();
    if (browserLang) {
      this.translate.use(browserLang);
    } else {
      this.translate.setDefaultLang('es');
    }
  }
}
