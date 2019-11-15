import { Component, OnInit, Input } from '@angular/core';

import { MMultiSelectData } from './m-multi-select.d';
import { EventUtil } from 'src/app/shared/utilities/eventutil';


@Component({
  selector: 'app-m-multi-select',
  templateUrl: './m-multi-select.component.html',
  styleUrls: ['./m-multi-select.component.scss']
})
export class MMultiSelectComponent implements OnInit {
  @Input() options: Array<MMultiSelectData> = [];

  angleAnimation = false;
  showSelect = false;
  optionsSelected: Array<MMultiSelectData> = [{ label: 'China', value: 'b' }];
  handler: any;
  constructor() { }

  ngOnInit() {
    console.log(this);
    this.handler = this.onClickBlank.bind(this);
    EventUtil.addHandler(window, 'click', this.handler);

  }

  onShowSelect(event) {
    if (event.target.className !== 'cancel') {
      this.angleAnimation = !this.angleAnimation;
      this.showSelect = !this.showSelect;
    }
  }

  cancel(item) {
    this.optionsSelected.forEach((o, index) => {
      if (o.value === item.value) {
        this.optionsSelected.splice(index, 1);
      }
    });
  }

  onSelect(e, item) {
    let flag = true;
    this.optionsSelected.forEach((o, index) => {
      if (o.value === item.value) {
        flag = false;
        this.optionsSelected.splice(index, 1);
      }
    });
    if (flag) {
      this.optionsSelected.push(item);
    }
  }

  onClickBlank(e) {
    if (
      e.target.className.indexOf('m-select-options') === -1 &&
      e.target.className.indexOf('m-s-triangle') === -1 &&
      e.target.className.indexOf('m-select-txt') === -1 &&
      e.target.className.indexOf('checkbox') === -1
    ) {
      this.showSelect = false;
      this.angleAnimation = false;
    }
  }
}
