import { Component, OnInit } from '@angular/core';
import { HttpRequest } from '../../core/httpRequest.service';

@Component({
  selector: 'request-demo',
  templateUrl: './request-demo.component.html',
  styleUrls: ['./request-demo.component.scss']
})
export class RequestDemoComponent implements OnInit {
  users: Array<any>;
  errMessage = '';
  show = false;
  errorShow = false;
  headers = ['参数', '类型', '说明', '可选值', '默认值'];
  contents = [
    [
      'HttpRequest.request(options: HttpRequestOption)',
      'funtion',
      '发起请求',
      '--',
      '--'
    ],
    [
      'HttpRequest.obj2url(obj: any)',
      'funtion',
      '将传入的对象参数转化为url格式字符串',
      '--',
      '--'
    ],
    [
      'HttpRequest.typeTrans(type: string, xmlhttp: XMLHttpRequest)',
      'funtion',
      '匹配当前xmlhttp返回内容的类型，并对应输出内容，默认为text',
      '--',
      '--'
    ],
    [
      'HttpRequest.typeText(xmlhttp: XMLHttpRequest)',
      'funtion',
      '将返回文字转换为字符串类型',
      '--',
      '--'
    ],
    [
      'HttpRequest.typeJson(xmlhttp: XMLHttpRequest)',
      'funtion',
      '将返回文字转换为JSON类型',
      '--',
      '--'
    ],
    [
      'HttpRequest.typeXml(xmlhttp: XMLHttpRequest)',
      'funtion',
      '将返回文字转换为XML类型',
      '--',
      '--'
    ],
    [
      'HttpRequest.typeBlob(xmlhttp: XMLHttpRequest)',
      'funtion',
      '将返回文字转换为Blob类型',
      '--',
      '--'
    ],
    [
      'HttpRequest.typeArraybuffer(xmlhttp: XMLHttpRequest)',
      'funtion',
      '将返回文字转换为ArrayBuffer类型',
      '--',
      '--'
    ]
  ];
  constructor(private http: HttpRequest) {}

  ngOnInit() {}
  testRequest() {
    this.errorShow = false;
    this.show = true;
    this.http
      .request({
        url: 'https://jsonplaceholder.typicode.com/users'
      })
      .subscribe({
        next: res => {
          this.errorShow = false;
          setTimeout(() => {
            this.users = res.data;
            this.show = false;
          }, 1000);
        },
        error: error => {
          setTimeout(() => {
            this.errMessage = '请求失败!';
            this.errorShow = true;
            this.show = false;
          }, 1000);
        }
      });
  }
}
