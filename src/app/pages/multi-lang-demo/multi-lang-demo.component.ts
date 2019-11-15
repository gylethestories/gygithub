import { LangService } from './../../core/lang.service';
import { Component, OnInit, OnChanges } from '@angular/core';

@Component({
  selector: 'multi-lang-demo',
  templateUrl: './multi-lang-demo.component.html',
  styleUrls: ['./multi-lang-demo.component.scss']
})
export class MultiLangDemoComponent implements OnInit, OnChanges {
  bg = '#dcdfe6';
  txtColor = '#000';
  activeBg = '#409eff';
  switch = false;
  constructor(public langService: LangService) {}

  ngOnInit() {
    if (this.langService.lang === 'en') {
      this.switch = false;
    } else {
      this.switch = true;
    }
  }
  ngOnChanges() {
    console.log('change happend');
  }
  onSwitch() {
    if (this.switch) {
      this.langService.setLang('en');
    } else {
      this.langService.setLang('zh-cn');
    }
    this.switch = !this.switch;
  }
}
