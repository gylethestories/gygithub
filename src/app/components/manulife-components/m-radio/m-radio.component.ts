import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'm-radio',
  templateUrl: './m-radio.component.html',
  styleUrls: ['./m-radio.component.scss']
})
export class MRadioComponent implements OnInit {
  @Input() list: [
    {
      id?: number;
      name?: string;
    }
  ];
  @Input() name: string;
  @Input() colNum: number = 6;
  @Input('selectModel') model: number;
  @Output('selectChange') onChange: EventEmitter<any> = new EventEmitter<any>();

  selected: any;
  classFlag: boolean = true;
  constructor() {}

  ngOnInit() {}

  changeSelected(item) {
    this.selected = item.id
    let data = { value: item.id, name: item.name };
    this.onChange.emit(data);
  }
}
