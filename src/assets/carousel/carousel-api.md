| 参数    |    类型   |      说明 |      可选值 |      默认值 |
|:------:|:-------:|:--------:|:--------:|:--------:|
| options   | object  | 自定义配置		 |--|--|
| options.el   | string  | 轮播最外层容器ID	 |--	|#m-carousel|
| options.carouselOuterClassName   | string  | 轮播项父级容器类名	 |--	|carousel-outer|
| options.carouselItemClassName   | string  | 轮播项类名		 |--	|carousel-item|
| options.customBullet   | boolean  | 是否自定义分页器		 |true/false	|false|
| options.durationTime   | number  | 单个轮播展示时间,单位ms		 |--	|3000|
| options.inactiveColor   | string  | 切换导航圆点未激活时的背景色,仅在customBullet为false时生效		 |--	|#fff|
| options.activeColor   | string  | 切换导航圆点激活时的背景色,仅在customBullet为false时生效 		 |--	|#409eff|
| options.inactiveBorderColor   | string  | 切换导航圆点未激活时的边框颜色,仅在customBullet为false时生效   |--	|#bbb|
| changeIndex   | method  | 实例方法,触发轮播切换, 接收index作为参数, index类型为number   |--	|--|
| currentIndex   | number  | 实例属性, 表示当前轮播index, 如果自定义指示器, 可配合此属性使用   |--	|0|
