import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Locale } from 'src/app/common/service/locale';
import { LocaleService } from './common/service/locale.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'index-client';
  indexList = [];
  locale: Locale;
  constructor(private http: HttpClient, private localeService: LocaleService) {

  }

  ngOnInit() {
    this.localeService.locale$.subscribe(data => this.locale = data);
    this.http.get('/ied-server/list').subscribe((data: any[]) => {
      this.indexList = data;
      console.log(this.indexList);
    });
  }
}
