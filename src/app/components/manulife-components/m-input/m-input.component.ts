import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
@Component({
  selector: 'm-input',
  templateUrl: './m-input.component.html',
  styleUrls: ['./m-input.component.scss']
})
export class MInputComponent implements OnInit {
  defaultInputNums = 4;
  inputWidth = 4;
  inputVal = '';
  customStyle = {
    width: '4em',
    color: '#dc5a44',
    'font-size': '24px'
  };
  @Output() valChange = new EventEmitter();
  @Input() initValue: any;
  @Input() borderColor: string;
  @Input() isSolidBorder: boolean;
  @Input() inputStyle: any;
  constructor() {}

  ngOnInit() {
    if (this.initValue !== '') {
      this.inputVal = this.help3Func(this.initValue);
    }
    if (this.isSolidBorder) {
      this.customStyle['border-bottom'] = `2px solid ${this.borderColor ||
        '#dc5a44'}`;
    } else {
      this.customStyle['background-image'] = `linear-gradient(to right, ${this
        .borderColor || '#dc5a44'} 60%, transparent 60%)`;
    }
    this.customStyle = Object.assign({}, this.customStyle, this.inputStyle);
  }
  onInput(e: any) {
    const val = e.target.value;
    this.valChange.emit(val.split(',').join(''));
    if (val.length > this.defaultInputNums) {
      this.customStyle.width = val.length * 0.6 + 'em';
    } else {
      this.customStyle.width = '4em';
    }
  }
  onBlur() {
    this.inputVal = this.help3Func(this.inputVal);
  }
  help3Func(str: any) {
    const arr = ('' + str.split(',').join('')).split('');
    const arr1 = [];
    let temp = 0;
    for (let i = arr.length - 1; i >= 0; i--) {
      arr1.push(arr[i]);
      temp++;
      if (temp === 3) {
        temp = 0;
        if (i > 0) {
          arr1.push(',');
        }
      }
    }
    return arr1.reverse().join('');
  }
}
