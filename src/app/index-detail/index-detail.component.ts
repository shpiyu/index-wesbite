import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, mergeMap, filter, distinctUntilChanged, tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LocaleService } from '../common/service/locale.service';
import { Locale } from '../common/service/locale';



interface Index {
  ticker: string;
  name: string;
}


@Component({
  selector: 'app-index-detail',
  templateUrl: './index-detail.component.html',
  styleUrls: ['./index-detail.component.sass']
})
export class IndexDetailComponent implements OnInit, OnDestroy{

  indexName: string;
  index$: Observable<Index>;
  locale: Locale;

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    private localeService: LocaleService) { }

  ngOnInit() {
    this.localeService.locale$.subscribe(data => this.locale = data);

    this.index$ = this.route.params.pipe(
      filter(params => 'ticker' in params),
      map(params => params.ticker),
      mergeMap((name: string) => {
        console.log('fetching data');
        return this.http.get<Index>('/ied-server/' + name);
      }),
      tap((res) => this.localeService.setLocale(res['locale'])));
  }

  ngOnDestroy() {
    this.localeService.locale$.unsubscribe();
  }

}
