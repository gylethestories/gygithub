import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
  ViewChild
} from '@angular/core';

import { EventUtil } from '../../../shared/utilities/eventutil';

@Component({
  selector: 'm-select',
  templateUrl: './m-select.component.html',
  styleUrls: ['./m-select.component.scss']
})
export class MSelectComponent implements OnInit, OnDestroy, AfterViewInit {

  width: string = '200px'
  @Input() selected: string
  @Input() autoWidth: boolean
  @ViewChild("manulifeUlWrapper", { static: false }) manulifeUlWrapper: ElementRef;
  @ViewChild("manulifeBtn", { static: false }) manulifeBtn: ElementRef;
  @ViewChild("manulifeArrowDownIcon", { static: false }) manulifeArrowDownIcon: ElementRef;

  currentSelect = { key: '', value: '' };
  showSelect = false;
  angleAnimation = false;
  handler: any;
  @ViewChild('domLabel', { static: false }) domLabelChild: ElementRef;
  @Input() options: Array<any>;
  @Output() selectChange: EventEmitter<any> = new EventEmitter();

  constructor() {}

  ngOnInit() {
    this.handler = this.onClickBlank.bind(this);
    this.currentSelect = this.options[0];
    EventUtil.addHandler(window, 'click', this.handler);
    if(this.autoWidth) {
      setTimeout(() => {
        this.width = (document.getElementById('manulifeInputHidden').clientWidth + 46) + 'px'
      }, 10)
    }
  }

  ngOnDestroy() {
    EventUtil.removeHandler(window, 'click', this.handler);
  }

  ngAfterViewInit(): void {
    // console.log(this.domLabelChild.nativeElement);
  }

  onSelect(e, item) {
    EventUtil.stopPropagation(e);
    this.currentSelect = item;
    this.selected = this.currentSelect.value
    this.onShowSelect();
    this.selectChange.emit(item);
    this.dropDown()
    if(this.autoWidth) {
      setTimeout(() => {
        this.width = (document.getElementById('manulifeInputHidden').clientWidth + 46) + 'px'
      }, 10)
    }
  }

  onShowSelect(e?) {
    if (e) {
      EventUtil.stopPropagation(e);
    }
    this.angleAnimation = !this.angleAnimation;
    this.showSelect = !this.showSelect;
  }

  onClickBlank(e) {
    // if (
    //   e.target.className.indexOf('s-txt') === -1 &&
    //   e.target.className.indexOf('m-s-option') === -1 &&
    //   e.target.className.indexOf('m-s-triangle') === -1
    // ) {
    //   this.showSelect = false;
    //   this.angleAnimation = false;
    // }
    if (!(<HTMLElement>event.target).matches('.manulife-arrow-down-btn')) {
      if (this.manulifeUlWrapper.nativeElement.classList.contains('manulife-ul-wrapper-active')) {
        this.manulifeUlWrapper.nativeElement.classList.remove('manulife-ul-wrapper-active');
      }
      if (this.manulifeArrowDownIcon.nativeElement.classList.contains('manulife-arrow-down-active')) {
        this.manulifeArrowDownIcon.nativeElement.classList.remove('manulife-arrow-down-active');
        this.manulifeArrowDownIcon.nativeElement.classList.add('manulife-arrow-down-deactive');
      }
    }
  }

  dropDown() {
    this.manulifeUlWrapper.nativeElement.classList.toggle("manulife-ul-wrapper-active");
    if (this.manulifeBtn.nativeElement.classList.contains('manulife-arrow-down-active')) {
      this.manulifeBtn.nativeElement.classList.remove('manulife-arrow-down-active')
      this.manulifeBtn.nativeElement.classList.add('manulife-arrow-down-deactive')
    } else {
      this.manulifeBtn.nativeElement.classList.add('manulife-arrow-down-active')
      this.manulifeBtn.nativeElement.classList.remove('manulife-arrow-down-deactive')
    }
  }
}
