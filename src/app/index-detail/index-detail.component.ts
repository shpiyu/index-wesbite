import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, mergeMap, filter, distinctUntilChanged, tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LocaleService } from '../common/service/locale.service';



interface Index {
  ticker: string;
  name: string;
}


@Component({
  selector: 'app-index-detail',
  templateUrl: './index-detail.component.html',
  styleUrls: ['./index-detail.component.sass']
})
export class IndexDetailComponent implements OnInit {

  indexName: string;
  index$: Observable<Index>;
  locale: any;

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    private localeService: LocaleService) { }

  ngOnInit() {
    this.index$ = this.route.params.pipe(
      filter(params => 'ticker' in params),
      map(params => params.ticker),
      mergeMap((name: string) => {
        console.log('fetching data');
        return this.http.get<Index>('/ied-server/' + name);
      }),
      tap((res) => this.locale = this.localeService.getLocale(res['locale'])));
  }

}
