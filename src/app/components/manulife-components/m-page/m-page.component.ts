import { OnInit } from '@angular/core';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { PageParams } from './m-page.d';




@Component({
  selector: 'app-m-page',
  templateUrl: './m-page.component.html',
  styleUrls: ['./m-page.component.scss']
})
export class MPageComponent implements OnInit {
  // 分页参数配置
  @Input() pageParams: PageParams;
  @Output() changeCurPage: EventEmitter<number> = new EventEmitter();

  constructor() {
  }

  ngOnInit() { }
  getPageList(pageParams) {
    // pageParams = eval('pageParams');
    // 分页设置
    const pageList = [];
    // 如果总数小于pageSize，直接将代码放进去
    if (pageParams.totalPage <= pageParams.pageSize) {
      // 总数大于pageSize，不用进来
      for (let i = 0; i < pageParams.totalPage; i++) {
        pageList.push({
          pageNo: i + 1
        });
      }
    } else if (pageParams.totalPage - pageParams.curPage < pageParams.totalPage
      && pageParams.curPage > pageParams.totalPage - 1) {
      // 如果总的页码数减去当前页码数小于页数差，那么直接计算出来显示
      for (let i = pageParams.curPage; i > pageParams.totalPage - pageParams.curPage; i--) {
        pageList.push({
          pageNo: pageParams.curPage - i + 1
        });
      }
    } else {  // 在中间的页码数
      for (let i = 0; i < pageParams.totalPage; i++) {
        pageList.push({
          pageNo: i + 1
        });
      }
    }
    return pageList;
  }

  changePage(pageNo) {
    const self = this;
    self.pageParams.curPage = pageNo;  // 当前页码
    self.changeCurPage.emit(self.pageParams.curPage);
  }

}
