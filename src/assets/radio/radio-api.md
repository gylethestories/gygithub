| 参数    |    类型   |      说明 |      可选值 |      默认值 |
|:------:|:-------:|:--------:|:--------:|:--------:|
|list|array|传一个或者多个对象，必须包含id和name,用于遍历单选框选项|--|[{id: 1, name: ’备选项‘}]|
|name|number|默认被选中项的index|--|1|
|colNum|string|屏幕设备自适应，可选参数|3,6,12|12|
|selectChange|function|回调事件,selectChange($event),返回当前的选项|--|--|