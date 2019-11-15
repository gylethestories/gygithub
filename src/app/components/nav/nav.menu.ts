const PATH = {
  radio: 'radio',
  select: 'select',
  card: 'card',
  swiper: 'swiper',
  scrollLoad: 'scrollLoad',
  pagination: 'pagination',
  multiSelect: 'multiSelect',
  input: 'input',
  calendar: 'calendar',
  codegenerate: 'codegenerate',
  multiLang: 'multiLang',
  request: 'request',
  iconText: 'iconText'
};

const NAV_MENU = [
  {
    name: 'Radio',
    subMenu: [{ path: PATH.radio, name: 'Radio 单选' }]
  },
  {
    name: 'Select',
    subMenu: [{ path: PATH.select, name: 'Select 下拉' }, { path: PATH.multiSelect, name: 'Select 多选' }]
  },
  {
    name: 'Card',
    subMenu: [{ path: PATH.card, name: 'Card 卡片' }]
  },
  {
    name: 'Carousel',
    subMenu: [{ path: PATH.swiper, name: 'Carousel 轮播' }]
  },
  {
    name: 'ScrollLoad',
    subMenu: [{ path: PATH.scrollLoad, name: '上拉刷新' }]
  },
  {
    name: 'Page',
    subMenu: [{ path: PATH.pagination, name: 'Page 分页' }]
  },
  {
    name: 'Calendar',
    subMenu: [{ path: PATH.calendar, name: 'Calendar 日历' }]
  },
  {
    name: 'Codegenerate',
    subMenu: [{ path: PATH.codegenerate, name: '代码生成' }]
  },
  {
    name: 'MultiLang',
    subMenu: [{ path: PATH.multiLang, name: '多语言' }]
  },
  {
    name: 'Eequest',
    subMenu: [{ path: PATH.request, name: '请求' }]
  },
  {
    name: 'Chips',
    subMenu: [{ path: PATH.iconText, name: 'Chips 芯片' }]
  }
];
export { NAV_MENU, PATH };
