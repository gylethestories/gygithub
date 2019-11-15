import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from "@angular/core";

@Component({
  selector: "app-m-scroll-load",
  templateUrl: "./m-scroll-load.component.html",
  styleUrls: ["./m-scroll-load.component.css"]
})
export class MScrollLoadComponent implements OnInit, OnChanges {
  option: ScrollData;
  listData: Array<any>;
  isBottom: boolean;
  noMore: boolean;
  loadingFailed: boolean = false; //数据请求失败
  @Input()
  set Option(obj: ScrollData) {
    if (!obj) {
      obj = {
        data: [],
        pageSize: 10,
        pageNo: 0
      };
    }
    this.option = obj;
    // this.initTabItemAttr();
  }

  get Option() {
    return this.option;
  }

  @Output() dataMore: EventEmitter<any> = new EventEmitter();

  constructor() {}

  ngOnInit() {
    this.getData(false);
  }

  ngOnChanges() {
    if (this.option.pageNo !== 1) {
      this.getData(true);
    }
  }

  scrollBottom(e: any) {
    const offsetH = e.target.offsetHeight;
    const scrollT = e.target.scrollTop;
    const height = e.target.scrollHeight;
    const bottom = height - (scrollT + offsetH);
    // console.log(offsetH,scrollT,height,bottom);
    if (bottom < 100 && !this.isBottom && !this.noMore) {
      this.isBottom = true;
      this.option.pageNo = this.option.pageNo + 1;
      // this.getData(true);
      this.dataMore.emit({
        pageNum: this.option.pageNo,
        pageSize: this.option.pageSize
      });
    }
  }

  getData(isPage) {
    this.isBottom = false;
    if (isPage) {
      // 下一页的数据拼接在原有数据后面
      this.listData = this.listData.concat(this.option.data);
    } else {
      // 第一页数据直接赋值
      this.listData = this.option.data;
    }
    // 如果返回的数据为空，那么就没有下一页了
    if (this.option.data.length === 0) {
      this.noMore = true;
    }
  }
}
