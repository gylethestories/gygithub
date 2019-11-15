import { Component, OnInit } from '@angular/core';
import showndown from 'showdown';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-icon-text-demo',
  templateUrl: './icon-text-demo.component.html',
  styleUrls: ['./icon-text-demo.component.scss']
})
export class IconTextDemoComponent implements OnInit {
  iconTextContent = {
    img: {
      url: '../../../assets/images/icon-text.svg',
      alt: 'img1'
    },
    text: "User's guideline of online services",
    url: './'
  };
  opts1 = [
    {
      text: 'No status example',
      status: ''
    },
    {
      text: 'Payadol file uploding',
      status: 'Received'
    },
    {
      text: 'm-chips works!',
      status: 'Pending'
    },
    {
      text: 'Data file uploading',
      status: 'Success'
    },
    {
      text: 'Regular contribution submission',
      status: 'Void'
    },
    {
      text: 'Upload contribution file',
      status: 'Fail'
    }
  ];

  opts2 = [
    {
      text: 'Received',
      status: 'Received',
      circle: true,
      disabled: true
    },
    {
      text: 'Pending',
      status: 'Pending',
      circle: true,
      selected: true
    },
    {
      text: 'Success',
      status: 'Success',
      circle: true
    },
    {
      text: 'Void',
      status: 'Void',
      circle: true
    },
    {
      text: 'Fail',
      status: 'Fail',
      circle: true,
      disabled: true
    }
  ];

  code = '';
  apiTable = '';

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http
      .get('/assets/chips/chips.md', { responseType: 'text' })
      .subscribe(res => {
        this.code = new showndown.Converter({ tables: true }).makeHtml(res);
      });
    this.http
      .get('/assets/chips/chips-api.md', { responseType: 'text' })
      .subscribe(res => {
        this.apiTable = new showndown.Converter({ tables: true }).makeHtml(res);
      });
  }
}
