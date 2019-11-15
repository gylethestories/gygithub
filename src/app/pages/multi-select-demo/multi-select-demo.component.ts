import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-multi-select-demo',
  templateUrl: './multi-select-demo.component.html',
  styleUrls: ['./multi-select-demo.component.css']
})
export class MultiSelectDemoComponent implements OnInit {
  options = [
    { label: 'Canada', value: 'a' },
    { label: 'China', value: 'b' },
    { label: 'hongkong', value: 'c' }
  ];

  headers = ['参数', '类型', '说明', '可选值', '默认值'];
  contents = [
    ['options', 'object', '自定义配置', '--', '--'],
    [
      'options.label',
      'string',
      '显示的值',
      '--',
      '--'
    ],
    ['options.value', 'string', 'key值', '--', '--'],
  ];
  constructor() { }

  ngOnInit() {
  }

}
