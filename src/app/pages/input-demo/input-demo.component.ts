import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-demo',
  templateUrl: './input-demo.component.html',
  styleUrls: ['./input-demo.component.css']
})
export class InputDemoComponent implements OnInit {
  lang = 'en';
  initValue = '12345';
  isSolidBorder = false;
  isSolidBorder1 = true;
  inputStyle = {
    color: '#dc5a44',
    'font-size': '24px',
    'font-weight': 'bold',
    'max-width': '200px'
  };
  headers = ['参数', '类型', '说明', '可选值', '默认值'];
  contents = [
    ['(@Input) initValue', 'any', '属性,输入框初始值', '--', '--'],
    [
      '(@Input) borderColor',
      'string',
      '属性,输入框底部边框颜色',
      '--',
      '#dc5a44'
    ],
    [
      '(@Input) inputStyle',
      'object',
      '属性,输入框的一些自定义样式,样式名称与css保持一致',
      '--',
      '--'
    ],
    [
      '(@Input) isSolidBorder',
      'boolean',
      '属性,输入框底部是实线还是虚线',
      '--',
      'false'
    ],
    [
      '(@Output) valChange',
      'function',
      '方法,输入框值发生变化时的回调, 参数为当前输入框的值',
      '--',
      '--'
    ]
  ];
  constructor() {}

  ngOnInit() {}
  onChange(val) {
    // console.log(val);
  }
}
