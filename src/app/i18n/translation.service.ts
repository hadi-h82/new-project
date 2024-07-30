import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Locale } from '../core/models/locale.model';



@Injectable({
  providedIn: 'root',
})


export class TranslationService {

  constructor(private translate: TranslateService) {}

  loadTranslations(...args: Locale[]): void {
    const locales = [...args];
    locales.forEach((locale) => {
      this.translate.setTranslation(locale.lang, locale.data, true);
    });
    this.translate.use(this.getSelectedLanguage());
  }

  setLanguage(lang: string) {
    if (lang) {
      this.translate.use(lang);
      localStorage.setItem('language', lang);
    }
  }

  getSelectedLanguage(): any {
    if(localStorage.getItem('language'))
     return localStorage.getItem('language') as string;
    else     
     return 'en';
  }
}
