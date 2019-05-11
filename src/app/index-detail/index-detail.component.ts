import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, mergeMap } from 'rxjs/operators';
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
  locale$: Observable<any>;

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    private localeService: LocaleService) { }

  ngOnInit() {
    this.index$ = this.route.params.pipe(
      map(params => params['ticker']),
      mergeMap((name: string) => this.http.get<Index>('/ied-server/' + name)));
    this.locale$ = this.index$.pipe(
      map(index => index['locale']),
      map((locale => this.localeService.getLocale(locale))));
  }

}
