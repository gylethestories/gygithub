import { Component, OnInit } from '@angular/core';

import showndown from 'showdown';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-select-demo',
  templateUrl: './select-demo.component.html',
  styleUrls: ['./select-demo.component.scss']
})
export class SelectDemoComponent implements OnInit {
  options = [
    { key: 'option1', value: 'option1' },
    { key: 'option2', value: 'option2' },
    { key: 'option3', value: 'option3' },
    { key: 'option4', value: 'option4' },
    { key: 'option5', value: 'option5' },
    { key: 'option6', value: 'option6' },
    { key: 'option7', value: 'option7' },
    { key: 'option8', value: 'option8' }
  ];

  apiTable = '';
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get('/assets/select/select-api.md', { responseType: 'text' }).subscribe(res => {
      this.apiTable = new showndown.Converter({ tables: true }).makeHtml(res);
    });
  }

  onSelectChange(item) {
    console.log(item); // {key: ..., value: ...}
  }
}
