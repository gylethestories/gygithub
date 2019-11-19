import { Component, OnInit } from '@angular/core';

import showndown from 'showdown';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-radio-demo',
  templateUrl: './radio-demo.component.html',
  styleUrls: ['./radio-demo.component.scss']
})
export class RadioDemoComponent implements OnInit {
  sourceArr = [
    { id: 1, name: '备选项' },
    { id: 2, name: '备选项' },
    { id: 3, name: '备选项' }
  ];
  selectedSource: number = 1;

  apiTable = '';
  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http
      .get('/assets/radio/radio-api.md', { responseType: 'text' })
      .subscribe(res => {
        this.apiTable = new showndown.Converter({ tables: true }).makeHtml(res);
      });
  }

  selectChange(model: any) {
    this[model.name] = model.value;
  }
}
