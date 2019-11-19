import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import showndown from 'showdown';

@Component({
  selector: 'app-multi-select-demo',
  templateUrl: './multi-select-demo.component.html',
  styleUrls: ['./multi-select-demo.component.scss']
})
export class MultiSelectDemoComponent implements OnInit {
  options = [
    { label: 'Canada', value: 'a' },
    { label: 'China', value: 'b' },
    { label: 'hongkong', value: 'c' }
  ];
  apiTable = '';
  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http
      .get('/assets/multi-select/multi-select-api.md', { responseType: 'text' })
      .subscribe(res => {
        this.apiTable = new showndown.Converter({ tables: true }).makeHtml(res);
      });
  }
}
