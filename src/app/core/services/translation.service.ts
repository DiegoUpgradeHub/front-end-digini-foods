import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';


@Injectable({
  providedIn: 'root'
})
export class TranslationService {

  constructor(
    private translate: TranslateService
  ) { }

  setAppLanguage() {
    const browserLang = this.translate.getBrowserLang();
    if (browserLang) {
      this.translate.use(browserLang);
    } else {
      this.translate.setDefaultLang('es');
    }
  }
}
