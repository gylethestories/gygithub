import { Component, OnInit, OnDestroy } from '@angular/core';
import { MCarousel } from '../../shared/plugins/carousel/carousel';
import {HttpClient} from '@angular/common/http';
import showndown from 'showdown';

@Component({
  selector: 'app-swiper-demo',
  templateUrl: './swiper-demo.component.html',
  styleUrls: ['./swiper-demo.component.scss']
})
export class SwiperDemoComponent implements OnInit, OnDestroy {
  options = {
    durationTime: 3000,
    el: '#m-carousel',
    carouselOuterClassName: 'm-carousel-outer',
    carouselItemClassName: 'm-carousel-item'
  };
  carousel: MCarousel;
  apiTable = '';
  template = '';
  component = '';
  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.carousel = new MCarousel(this.options);
    this.http
      .get('/assets/carousel/carousel.template.md', { responseType: 'text' })
      .subscribe(res => {
        this.template = new showndown.Converter({ tables: true }).makeHtml(res);
      });
    this.http
      .get('/assets/carousel/carousel.component.md', { responseType: 'text' })
      .subscribe(res => {
        this.component = new showndown.Converter({ tables: true }).makeHtml(res);
      });
    this.http
      .get('/assets/carousel/carousel-api.md', { responseType: 'text' })
      .subscribe(res => {
        this.apiTable = new showndown.Converter({ tables: true }).makeHtml(res);
      });
  }
  ngOnDestroy() {
    this.carousel.destory();
  }
}
