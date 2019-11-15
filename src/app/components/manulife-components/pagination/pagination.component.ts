import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';

@Component({
  selector: 'm-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit, OnChanges {

  @Input('total') total: number;
  @Output() changePage = new EventEmitter();
  @Input('placement') p = 'right';
  placementClassName = 'flex-right';
  showItems = [];
  current = 1;
  maxShow = 7;
  nearItem = 2;
  oldTotal: number;
  constructor() { }

  ngOnInit() {
    this.oldTotal = this.total;
    this.calculateShowItem();
    this.handlePaginationClassName();
  }
  ngOnChanges(change: SimpleChanges) {
    for (const key in change) {
      if (key === 'total') {
        this.calculateShowItem();
      }
    }
  }
  handlePaginationClassName() {
    if (this.p === 'left') {
      this.placementClassName = 'flex-left';
    }
  }
  calculateShowItem() {
    const showItems = [];
    if (this.total > this.maxShow) {
      showItems.push({
        value: 1,
        tag: 'normal'
      });
      if (this.current - 1 + this.nearItem <= this.maxShow - 2) {
        for (let i = 2; i <= this.current + 2; i++) {
          showItems.push({
            value: i,
            tag: 'normal'
          });
        }
        showItems.push({
          value: '...',
          tag: 'ellipse'
        });
      } else {
        showItems.push({
          value: '...',
          tag: 'ellipse'
        });
        if (this.current + this.nearItem <= this.total - 1) {
          for (let i = this.current - this.nearItem; i <= this.current + this.nearItem; i++) {
            showItems.push({
              value: i,
              tag: 'normal'
            });
          }
        } else {
          for (let i = this.total - this.maxShow + 2; i < this.total; i++) {
            showItems.push({
              value: i,
              tag: 'normal'
            });
          }
        }
        if (this.current + this.nearItem < this.total - 1) {
          showItems.push({
            value: '...',
            tag: 'ellipse'
          });
        }
      }
      showItems.push({
        value: this.total,
        tag: 'normal'
      });
    } else {
      let i = 1;
      while (i <= this.total) {
        showItems.push({
          value: i,
          tag: 'normal'
        });
        i++;
      }
    }
    this.showItems = showItems;
  }
  onChangePage(index: number, tag: string = 'normal') {
    if (tag === 'normal' && this.current !== index) {
      this.current = index;
      this.calculateShowItem();
      this.changePage.emit(index);
    }
  }

}
