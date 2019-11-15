import { Component, OnInit } from '@angular/core';
import showndown from 'showdown';
import { HttpClient } from '@angular/common/http';
const PAGE = [
  { id: 1, name: 'zhangzhang', age: 20 },
  { id: 2, name: 'xiaoxiao', age: 24 },
  { id: 3, name: 'yuyu', age: 19 },
  { id: 4, name: 'zhangxiao', age: 20 },
  { id: 5, name: 'Smite', age: 50 },
  { id: 6, name: 'Datu', age: 34 },
  { id: 7, name: 'DUDU', age: 29 },
  { id: 8, name: 'YOUYOU', age: 30 },
  { id: 9, name: 'xinzhang', age: 20 },
  { id: 10, name: 'Amada', age: 24 },
  { id: 11, name: 'Adaer', age: 19 },
  { id: 12, name: 'hele', age: 20 },
  { id: 13, name: 'Datu', age: 34 },
  { id: 14, name: 'DUDU', age: 29 },
  { id: 15, name: 'YOUYOU', age: 30 },
  { id: 16, name: 'xinzhang', age: 20 },
  { id: 17, name: 'Amada', age: 24 },
  { id: 18, name: 'Adaer', age: 19 },
  { id: 19, name: 'hele', age: 20 },
  { id: 20, name: 'Datu', age: 34 },
  { id: 21, name: 'DUDU', age: 29 },
  { id: 22, name: 'YOUYOU', age: 30 },
  { id: 23, name: 'xinzhang', age: 20 },
  { id: 24, name: 'Amada', age: 24 },
  { id: 25, name: 'Adaer', age: 19 },
  { id: 26, name: 'hele', age: 20 },
  { id: 27, name: 'YOUYOU', age: 30 },
  { id: 28, name: 'xinzhang', age: 20 },
  { id: 29, name: 'Amada', age: 24 },
  { id: 30, name: 'Adaer', age: 19 },
  { id: 31, name: 'hele', age: 20 },
  { id: 32, name: 'YOUYOU', age: 30 },
  { id: 33, name: 'xinzhang', age: 20 },
  { id: 34, name: 'Amada', age: 24 },
  { id: 35, name: 'Adaer', age: 19 },
  { id: 36, name: 'hele', age: 20 },
  { id: 37, name: 'YOUYOU', age: 30 },
  { id: 38, name: 'xinzhang', age: 20 },
  { id: 39, name: 'Amada', age: 24 },
  { id: 40, name: 'Adaer', age: 19 },
  { id: 41, name: 'hele', age: 20 },
  { id: 42, name: 'hele', age: 20 },
  { id: 43, name: 'YOUYOU', age: 30 },
  { id: 44, name: 'xinzhang', age: 20 },
  { id: 45, name: 'Amada', age: 24 },
  { id: 46, name: 'Adaer', age: 19 },
  { id: 47, name: 'hele', age: 20 }
];
@Component({
  selector: 'app-page-demo',
  templateUrl: './page-demo.component.html',
  styleUrls: ['./page-demo.component.scss']
})
export class PageDemoComponent implements OnInit {
  page = PAGE;
  public totalNum = 0; // 总数据条数
  public pageSize = 7; // 每页数条数
  public pageData = []; // 每页数据
  public totalPage = 0; // 总页数
  public curPage = 1; // 当前页码

  headers = ['参数', '类型', '说明', '可选值', '默认值'];
  contents = [
    ['total', 'number', '总页数', '--', '--'],
    ['placement', 'string', '分页器位置', 'left/right', 'right'],
    [
      'changePage',
      'function',
      '当前页改变时回调, changePage(index), index为当前页',
      '--',
      '--'
    ]
  ];
  code = '';
  apiTable = '';
  constructor(private http: HttpClient) {
    this.totalNum = this.page.length;
    this.totalPage = Math.floor((this.totalNum - 1) / this.pageSize) + 1;
    this.getPageData(this.curPage);
  }
  ngOnInit(): void {
    this.http
      .get('/assets/pagination/pagination.md', { responseType: 'text' })
      .subscribe(res => {
        this.code = new showndown.Converter({ tables: true }).makeHtml(res);
      });
    this.http
      .get('/assets/pagination/pagination-api.md', { responseType: 'text' })
      .subscribe(res => {
        this.apiTable = new showndown.Converter({ tables: true }).makeHtml(res);
      });
  }

  getPageData(pageNo) {
    const self = this;
    self.curPage = pageNo;
    this.pageData = this.page.slice(
      this.pageSize * (this.curPage - 1),
      this.pageSize * this.curPage
    );
  }
  changePage(index) {}
}
