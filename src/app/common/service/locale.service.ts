import { Injectable } from '@angular/core';
import { locale as englishLocale } from '../../../assets/locale/locale-en_US';
import { locale as swedishLocale } from '../../../assets/locale/locale-sv_SE';

@Injectable({
  providedIn: 'root'
})
export class LocaleService {

  constructor() { }

  getLocale(localeId: string) {
    switch (localeId) {
      case 'en_US': return englishLocale;
      case 'sv_SE': return swedishLocale;
      default: return englishLocale;
    }
  }


}
