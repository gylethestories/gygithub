import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scroll-load-demo',
  templateUrl: './scroll-load-demo.component.html',
  styleUrls: ['./scroll-load-demo.component.css']
})
export class ScrollLoadDemoComponent implements OnInit {
  option: ScrollData;
  headers = ['参数', '类型', '说明', '可选值', '默认值'];
  contents = [
    [
      '(@Input) Option',
      'ScrollData',
      '属性,',
      '--',
      '{data: [],pageSize: 10,pageNo: 0}'
    ],
    [
      '(@Output) dataMore',
      'function',
      '方法,上拉加载时的触发, 参数为pageNum和pageSize',
      '--',
      '--'
    ]
  ];

  constructor() {}

  ngOnInit() {
    const opt = {
      pageNum: 1,
      pageSize: 10
    };
    this.getData(opt);
  }

  getData(e) {
    // const pageNum = e.pageNum;
    // const pageSize = e.pageSize;

    const obj: ScrollData = {
      pageNo: e.pageNum,
      pageSize: e.pageSize,
      data: []
    };
    for (let i = 0; i < obj.pageSize; i++) {
      obj.data.push(Math.random() * 10);
    }
    this.option = obj;
  }
}
