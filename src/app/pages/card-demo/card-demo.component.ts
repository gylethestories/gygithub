import { Component, OnInit, ViewChild } from '@angular/core';

import { MCardComponent } from '../../components/manulife-components/m-card/m-card.component';
import {HttpClient} from '@angular/common/http';
import showndown from 'showdown';
@Component({
  selector: 'app-card-demo',
  templateUrl: './card-demo.component.html',
  styleUrls: ['./card-demo.component.scss']
})
export class CardDemoComponent implements OnInit {
  @ViewChild(MCardComponent, { static: false }) child: MCardComponent;

  option = {};
  optons = [
    {
      commom: true,
      src: [
        'https://www.manulife.com.hk/wps/wcm/connect/pws/d694050c-40f6-4c43-b8a8-3ee596b44386/Moblie_2.jpg?MOD=AJPERES&CACHEID=d694050c-40f6-4c43-b8a8-3ee596b44386',
        'https://www.manulife.com.hk/wps/wcm/connect/pws/6a865129-51a5-4025-a63f-76be5f12eb79/Tablet-Portrait_2.jpg?MOD=AJPERES&CACHEID=6a865129-51a5-4025-a63f-76be5f12eb79',
        'https://www.manulife.com.hk/wps/wcm/connect/pws/00024ab3-c0bc-4822-bab3-31f3e3ada549/Desktop-Banner_2.jpg?MOD=AJPERES&CACHEID=00024ab3-c0bc-4822-bab3-31f3e3ada549'
      ],
      title:
        'Manulife Hong Kong reports strong results for the second quarter and first half of 2019',
      titleUrl: 'www.baidu.com',
      description:
        'Hong Kong (August 8, 2019) – The Manulife group of companies operating in Hong Kong (“Manulife Hong Kong”) today reported strong',
      more: 'learn More',
      moreUrl: 'www.baidu.com'
    },
    {
      fullImg: true,
      src: [
        'https://www.manulife.com.hk/wps/wcm/connect/pws/d694050c-40f6-4c43-b8a8-3ee596b44386/Moblie_2.jpg?MOD=AJPERES&CACHEID=d694050c-40f6-4c43-b8a8-3ee596b44386',
        'https://www.manulife.com.hk/wps/wcm/connect/pws/6a865129-51a5-4025-a63f-76be5f12eb79/Tablet-Portrait_2.jpg?MOD=AJPERES&CACHEID=6a865129-51a5-4025-a63f-76be5f12eb79',
        'https://www.manulife.com.hk/wps/wcm/connect/pws/00024ab3-c0bc-4822-bab3-31f3e3ada549/Desktop-Banner_2.jpg?MOD=AJPERES&CACHEID=00024ab3-c0bc-4822-bab3-31f3e3ada549'
      ],
      title:
        'Business',
      titleUrl: 'www.baidu.com',
      description:
        'The Manulife group of companies operating in Hong Kong  today reported strong',
      more: 'learn More',
      moreUrl: 'www.baidu.com'
    },
    {
      iconCard: true,
      src: [
        '/assets/icons/dn-web-20.svg'
      ],
      title:
        'Mobile number',
      description:
        '(852) 9656 4321',
    },
    {
      iconCardTwo: true,
      src: [
        '/assets/icons/dn-web-20.svg'
      ],
      title:
        'Mobile number',
      description:
        '(852) 9656 4321',
    }
  ];
  headers = ['参数', '类型', '说明', '可选值', '默认值'];
  contents = [
    ['option', 'object', '自定义配置', '--', '[]'],
    [
      'option.src',
      'array',
      '图片url地址,可传三种不同分辨率大小图片',
      '--',
      '[]'
    ],
    ['option.title', 'string', '标题内容', '--', '[]'],
    ['option.titleUrl', 'string', '标题链接地址', '--', '[]'],
    ['option.description', 'string', '文字描述内容', '--', '[]'],
    ['option.more', 'string', '按钮名称', '--', '[]'],
    ['option.moreUrl', 'string', '更多详细信息链接地址', '--', '[]']
  ];
  code = '';
  apiTable = '';
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.option = this.optons[3];
    this.http.get('/assets/card/card.md', {responseType: 'text'}).subscribe(res => {
      this.code = new showndown.Converter({tables: true}).makeHtml(res);
    });
    this.http.get('/assets/card/card-api.md', {responseType: 'text'}).subscribe(res => {
      this.apiTable = new showndown.Converter({tables: true}).makeHtml(res);
    });
  }
  changeStyle(type: number) {
    this.option = this.optons[type];
  }
}
