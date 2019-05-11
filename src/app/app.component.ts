import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'index-client';
  indexList = [];
  constructor(private http: HttpClient) {

  }

  ngOnInit() {
    this.http.get('/ied-server/list').subscribe((data: any[]) => {
      this.indexList = data;
      console.log(this.indexList);
    });
  }
}
