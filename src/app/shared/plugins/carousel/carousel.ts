import { EventUtil } from '../../utilities/eventutil';

export class MCarousel {
  options = {
    el: '#m-carousel',
    durationTime: 2000,
    customBullet: false,
    activeColor: '#409eff',
    inactiveColor: '#fff',
    inactiveBorderColor: '#bbb',
    carouselItemClassName: 'carousel-item',
    carouselOuterClassName: 'carousel-outer'
  };
  images = [];
  bullets = [];
  currentX = 0;
  timer = null;
  width: number;
  total: number;
  height: number;
  extraNode: any;
  autoMode = true;
  resetTimeout = null;
  currentIndex: number;
  transitionTime = 0.6;
  debounceTimeout = null;
  lastTime = +new Date();
  container: HTMLElement;
  outerTransition = 'none';
  carouselOuter: HTMLElement;
  carouselItem: NodeListOf<HTMLElement>;
  carouselItemDefaultClassName = 'm-carousel-item';
  carouselOuterDefaultClassName = 'm-carousel-outer';
  carouselContainerClassName = ' m-carousel-container';
  carouselIndicatorItemClassName = 'carousel-indicator-item';
  carouselIndicatorContainerCLassName = 'carousel-indicator-container';
  constructor(props: any) {
    this.options = Object.assign({}, this.options, props);
    this._handleInit();
  }
  _hasTargetClass(el: HTMLElement, targetClassName: string): boolean {
    const names = el.className;
    let nameArr = [];
    if (!names) {
      return false;
    }
    nameArr = names.split(' ');
    return nameArr.find(item => item === targetClassName);
  }
  _handleInit() {
    const self = this;
    const {
      activeColor,
      inactiveBorderColor,
      inactiveColor,
      durationTime,
      carouselOuterClassName,
      carouselItemClassName,
      el
    } = this.options;
    if (this.transitionTime * 1000 >= durationTime) {
      throw new Error('transitionTime should be less than durationTime');
    }
    this.currentIndex = 0;
    const carouselItem: NodeListOf<HTMLElement> = document.querySelectorAll(
      `${el} .${carouselItemClassName}`
    );
    const container = document.querySelector(this.options.el) as HTMLElement;
    this.width = container.offsetWidth;
    this.height = container.offsetHeight;
    this.carouselItem = carouselItem;
    this.container = container;
    this.carouselOuter = document.querySelector(
      `${el} .${carouselOuterClassName}`
    );
    this.total = carouselItem.length;
    if (
      !this._hasTargetClass(this.container, this.carouselContainerClassName)
    ) {
      this.container.className += this.carouselContainerClassName;
    }
    if (
      !this._hasTargetClass(
        this.carouselOuter,
        this.carouselOuterDefaultClassName
      )
    ) {
      this.carouselOuter.className += ` ${this.carouselOuterDefaultClassName}`;
    }
    this.carouselOuter.style.cssText += `height:${this.height}px;width:${this
      .total * this.width}px`;
    for (let i = 0, len = carouselItem.length; i < len; i++) {
      this.images.push(i);
      if (
        !this._hasTargetClass(
          carouselItem[i],
          this.carouselItemDefaultClassName
        )
      ) {
        carouselItem[i].className += ` ${this.carouselItemDefaultClassName}`;
      }
      carouselItem[i].style.cssText += `transform:translateX(${this.width *
        i}px);width:${this.width}px;height:${this.height}px;`;
    }
    if (!this.options.customBullet) {
      const fragment = document.createDocumentFragment();
      this.container.style.height = this.height + 40 + 'px';
      const bulletContainer = document.createElement('div');
      bulletContainer.className = this.carouselIndicatorContainerCLassName;
      for (let i = 0, len = this.carouselItem.length; i < len; i++) {
        const bullet = document.createElement('div');
        const bgColor = this.currentIndex === i ? activeColor : inactiveColor;
        const borderColor =
          this.currentIndex === i ? activeColor : inactiveBorderColor;
        bullet.className = this.carouselIndicatorItemClassName;
        bullet.setAttribute('data-index', '' + i);
        bullet.style.cssText += `background-color:${bgColor};border-color:${borderColor}`;
        bulletContainer.appendChild(bullet);
        this.bullets.push(bullet);
      }
      EventUtil.addHandler(bulletContainer, 'click', (e: any) => {
        const target = EventUtil.getTarget(e);
        if (
          target.className.indexOf(this.carouselIndicatorItemClassName) > -1
        ) {
          const index = target.getAttribute('data-index');
          self.changeIndex(Number(index));
        }
      });
      fragment.appendChild(bulletContainer);
      this.container.appendChild(fragment);
    }
    this._handleLoop();
    // EventUtil.addHandler(document, 'visibilitychange', () => {
    //   if (document.visibilityState === 'hidden') {
    //     if (self.timer) {
    //       clearInterval(self.timer);
    //       self.timer = null;
    //     }
    //   } else {
    //     self._handleLoop();
    //   }
    // });
  }
  _handleBulletColor() {
    const { activeColor, inactiveColor, inactiveBorderColor } = this.options;
    for (let i = 0; i < this.total; i++) {
      const bgColor = this.currentIndex === i ? activeColor : inactiveColor;
      const borderColor =
        this.currentIndex === i ? activeColor : inactiveBorderColor;
      this.bullets[
        i
      ].style.cssText += `background-color:${bgColor};border-color:${borderColor}`;
    }
  }
  _handleLoop() {
    const { durationTime } = this.options;
    this.autoMode = true;
    if (this.debounceTimeout) {
      clearTimeout(this.debounceTimeout);
      this.debounceTimeout = null;
    }
    this.timer = setInterval(() => {
      this.currentIndex++;
      this._loopHandler();
    }, durationTime);
  }
  _loopHandler() {
    this.outerTransition = 'transform 0.6s ease-in-out';
    if (this.currentIndex > this.total) {
      this.currentIndex = 1;
    }
    this.currentX = -this.currentIndex * this.width;
    this.carouselOuter.style.transform = `translateX(${this.currentX}px)`;
    this.carouselOuter.style.transition = this.outerTransition;
    if (this.currentIndex === this.total - 1) {
      if (this.images.length === this.total) {
        const selfNode = this.carouselItem[0].cloneNode(true) as HTMLElement;
        selfNode.style.transform = `translateX(${this.width * this.total}px)`;
        this.extraNode = selfNode;
        this.images.push(3);
        this.carouselOuter.appendChild(this.extraNode);
      }
    }

    // total is greater than 2
    if (
      this.currentIndex > 0 &&
      this.currentIndex < this.total - 1 &&
      this.images.length > this.total
    ) {
      this.carouselOuter.removeChild(this.extraNode);
      this.images.pop();
    }

    if (this.currentIndex === this.total) {
      this.currentIndex = 0;
      this.resetTimeout = setTimeout(() => {
        this.currentX = 0;
        this.outerTransition = 'none';
        this.carouselOuter.style.transform = `translateX(${this.currentX}px)`;
        this.carouselOuter.style.transition = this.outerTransition;
      }, this.transitionTime * 1000);
    }
    if (!this.autoMode) {
      this._debounce(2000, this._handleLoop.bind(this));
    }
    this._handleBulletColor();
  }
  _debounce(delay, fn) {
    if (!this.debounceTimeout) {
      this.debounceTimeout = setTimeout(fn, delay);
      this.lastTime = +new Date();
    } else {
      if (+new Date() - this.lastTime < delay) {
        this.lastTime = +new Date();
        clearTimeout(this.debounceTimeout);
        this.debounceTimeout = setTimeout(fn, delay);
      }
    }
  }
  changeIndex(index: number) {
    if (index === this.currentIndex) {
      return;
    }
    this.currentIndex = index;
    this.autoMode = false;
    if (this.timer) {
      clearInterval(this.timer);
      this.timer = null;
    }
    this._loopHandler();
  }
  destory() {
    if (this.timer) {
      clearInterval(this.timer);
      this.timer = null;
    }
    if (this.debounceTimeout) {
      clearTimeout(this.debounceTimeout);
      this.debounceTimeout = null;
    }
    if (this.resetTimeout) {
      clearTimeout(this.resetTimeout);
      this.resetTimeout = null;
    }
  }
}
