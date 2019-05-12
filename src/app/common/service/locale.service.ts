import { Injectable } from '@angular/core';
import { locale as englishLocale } from '../../../assets/locale/locale-en_US';
import { locale as swedishLocale } from '../../../assets/locale/locale-sv_SE';
import { Locale } from 'src/app/common/service/locale';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LocaleService {

  public locale$: Subject<Locale> = new Subject<Locale>();

  constructor() { }

  setLocale(localeId: string) {
    switch (localeId) {
      case 'en_US':
        this.locale$.next(englishLocale);
        break;
      case 'sv_SE':
        this.locale$.next(swedishLocale);
        break;
      default:
        this.locale$.next(englishLocale);
    }
  }

}
