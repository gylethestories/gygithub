```
import { MCarousel } from '../../shared/plugins/carousel/carousel';
export class SwiperDemoComponent implements OnInit, OnDestroy {
  options = {
    durationTime: 3000,
    el: '#m-carousel',
    carouselOuterClassName: 'm-carousel-outer',
    carouselItemClassName: 'm-carousel-item'
  };
  carousel: MCarousel;
  constructor() {}
  ngOnInit() {
    this.carousel = new MCarousel(this.options);
  }
  ngOnDestroy() {
    this.carousel.destory();
  }
}

```
