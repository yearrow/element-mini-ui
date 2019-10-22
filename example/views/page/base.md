<!--
 * @Description: 未描述
 * @Author: danielmlc
 * @Date: 2019-09-11 09:26:19
 * @LastEditTime: 2019-10-21 20:54:27
 -->


#### 基础


>  `ELEMENT-MINI` 基于`elementui V2.10.1` 版本的基础上摘取了部分基础的组件，并对部分组件功能样式做了定制。

:::tip
针对组件的属性调整请参考主题，你可以查看主题浏览组件的格式化样式。
:::


目前现有组件列表：

``` 
    button
    radio
    checkbox
    input 
    inputNumber
    select
    timepicker
    datepicker
    form
    upload

    table
    tag 
    tree
    paginnation
    alert
    loading
    message
    natification
    menu
    tab
    dialog
    tooltip
    popover
    carousel
    message-box
    scrollbar
    link
    divider
    image

```

#### 使用方式

安装：
```bash

yarn add  element-mini-ui 
npm  i  element-mini-ui --save

```
html头部引入：

```js 

 <link rel="stylesheet" href="element-mini-ui/lib/theme/index.css"> 
 <script type="text/javascript" src="element-mini-ui/lib/index.js"></script> 

```

vue全局引入：

```js
  
 import elementMiniUi from 'element-mini-ui'
 import from 'element-mini-ui/lib/theme/index.css'
 Vue.use(elementMiniUi)

```
