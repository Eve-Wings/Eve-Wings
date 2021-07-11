---
title: web考试复习纲
---
# web考试复习纲

## 1.什么是Bootstrap网格系统(grid system)?

拓展::link:[个人博客](https://eve-wings.github.io/Eve-Wings/guide/fornt-end-learn/promote/Bootstrap/1.%E7%BD%91%E6%A0%BC%E7%B3%BB%E7%BB%9F.html)  :link:[菜鸟](https://www.runoob.com/bootstrap4/bootstrap4-grid-basic.html)

速记关键词： **响应式、移动设备优先、不固定、12列、视口**



Bootstrap 包含了一个**响应式的、移动设备优先的、不固定的网格系统**，可以随着设备或视口大小的增加而适当地扩展到**12列**。

它包含了用于简单的布局选项的预定义类，也包含了用于生成更多语义布局的强大的混合类。

响应式网格系统随着屏幕或**视口(viewport)尺寸**的增加，系统会自动分为最多12列。

同时，这个网格系统是移动设备优先的——即Bootstrap 代码 从小屏幕设备(如手机)开始，然后扩展到大屏幕设备(如台式电脑显示器)上的组件和网格。

|                  | Extra small < 576px | Small ≥ 576px | Medium ≥ 768px | Large ≥ 992px | Extra large ≥ 1200px |
| ---------------- | ------------------- | ------------- | -------------- | ------------- | -------------------- |
| .container       | 100%                | 540px         | 720px          | 960px         | 1140px               |
| .container-sm    | 100%                | 540px         | 720px          | 960px         | 1140px               |
| .container-md    | 100%                | 100%          | 720px          | 960px         | 1140px               |
| .container-lg    | 100%                | 100%          | 100%           | 960px         | 1140px               |
| .container-xl    | 100%                | 100%          | 100%           | 100%          | 1140px               |
| .container-fluid | 100%                | 100%          | 100%           | 100%          | 100%                 |



## 2.熟练使用Bootstrap4栅格系统进行响应式布局与实现

速记关键词：**container、row、col**

```html
<div class="container">
    <div class="row">
        <!-- 12列分成三部分 -->
        <div class="col-4"></div>
        <div class="col-4"></div>
        <div class="col-4"></div>
    </div>
    <!-- 或者说，12列分成左10右2 -->
    <div class="row">
        <div class="col-10"></div>
        <div class="col-2"></div>
    </div>
</div>

<!-- 除此之外，可以支持定义不同视口宽度下的比例 -->
<div class="container">
    <div class="row">
        <!-- 在小屏情况下占4列，其他情况下占3列 -->
        <div class="col-sm-4 col-3"></div>
        <!-- 同理，在小屏情况下占8列，其他情况占9列-->
        <div class="col-sm-8 col-9"></div>
        <!-- 根据情况的不同，可以选择的有 sm  md  lg  xl -->
    </div>
</div>
```



## 3.图片类

拓展：:link:[个人博客](https://eve-wings.github.io/Eve-Wings/guide/fornt-end-learn/promote/Bootstrap/2.%E5%9B%BE%E7%89%87%E7%B1%BB.html)  :link:[菜鸟](https://www.runoob.com/bootstrap4/bootstrap4-images.html)

速记关键词：**img、thumbnail、rounded、circle**

|        类名         |               效果               |
| :-----------------: | :------------------------------: |
|   **.img-fluid**    |            响应式图片            |
| **.img-thumbnail**  |            缩略图功能            |
|    .img-rounded     |   圆角图片(bootstrap4中已移除)   |
|    **.rounded**     | bootstrap4中取代圆角图片的圆角类 |
|     .img-circle     |   圆形图片(bootstrap4中已移除)   |
| **.rounded-circle** |  bootstrap4取代圆形图片的圆形类  |

**以下是源码，可看加深理解**

### img标签

```css
img{
	vertical-align: middle;
	border-style: none;
}
```

### 响应式图片 .img-fluid

```css
.img-fluid{
	max-width: 100%;
	height: auto;
}
```

### 缩略图功能 .img-thumbnail

```css
.img-thumbnail{
	padding: .25rem;
	background-color: #fff;
	border: 1px soild #dee2e6;
	border-radius: .25rem;
	max-width: 100%;
	height: auto;
}
```

### 圆角图片与圆形图片 .rounded

```css
.rounded{
	border-radius: .25rem !important;
}
.rounded-circle{
    border-radius: 50% !important;
}
```



## 4.Bootstrap4 表格边框和鼠标高亮类

拓展: :link:[个人博客](https://eve-wings.github.io/Eve-Wings/guide/fornt-end-learn/promote/Bootstrap/3.%E8%A1%A8%E6%A0%BC%E7%B1%BB.html)  :link:[菜鸟](https://www.runoob.com/bootstrap/bootstrap-tables.html)

关键词速记： **table、table-bordered、table-hover、table-striped**

table标签的基本使用：

```html
<table class="table">
    <thead>
    	<tr>
        	<th>头</th>
            <th>头</th>
        </tr>
    </thead>
    <tbody>
    	<tr>
        	<td>1</td>
            <td>2</td>
        </tr>
        <tr>
        	<td>3</td>
            <td>4</td>
        </tr>
    </tbody>
</table>
```

### 表格类

|        类名         |                       描述                        |
| :-----------------: | :-----------------------------------------------: |
|       .table        | 为任意\<table\>标签添加基本样式(即只有横向分割线) |
|   .table-striped    |            为\<tbody\>内添加斑马线条纹            |
| **.table-bordered** |          为所有表格的单元格**添加边框**           |
|  **.table-hover**   |   在\<tbody\>内的任一行启用鼠标**悬停高亮样式**   |

**源码，可看加深理解**

### .table-striped

```html
<table class="table table-striped"></table>
```

样式:

```css
.table-striped tbody tr:nth-of-type(odd){
    /* 奇数后代设置样式 */
	background-color: rgba(0,0,0,.05)
}
```

### .table-bordered

```html
<table class="table table-bordered">
    <!-- 省略 -->
    <!-- 应该也可以直接加在行、列上 -->
    <td class="table-border"></td>
</table>
```

样式:

```css
.table-bordered {
	border: 1px solid #dee2e6
}

.table-bordered td,
.table-bordered th {
	border: 1px solid #dee2e6
}

.table-bordered thead td,
.table-bordered thead th {
	border-bottom-width: 2px
}
```

### .table-hover

```html
<table class="table table-hover"></table>
```

样式:

```css
.table-hover tbody tr:hover {
	color: #212529;
	background-color: rgba(0, 0, 0, .075)
}
.table-hover .table-primary:hover {
	background-color: #9fcdff
}

.table-hover .table-primary:hover>td,
.table-hover .table-primary:hover>th {
	background-color: #9fcdff
}
.table-hover .table-secondary:hover {
	background-color: #c8cbcf
}

.table-hover .table-secondary:hover>td,
.table-hover .table-secondary:hover>th {
	background-color: #c8cbcf
}
/* 省略 */
```



## 5.Bootstrap文本辅助类

拓展： :link:[个人博客](https://eve-wings.github.io/Eve-Wings/guide/fornt-end-learn/promote/Bootstrap/4.%E6%96%87%E6%9C%AC%E7%B1%BB.html)

速记关键词: **text、muted、primary、success、info、warning、danger**

|      类       |                             源码                             |
| :-----------: | :----------------------------------------------------------: |
|  .text-muted  |     <font color=#6c757d>color: #6c757d (一种灰色)</font>     |
| .text-primary |  <font color=#007bff>color: #007bff (一种舒适的蓝色)</font>  |
| .text-success |  <font color=#28a745>color: #28a745 (一种成功的绿色)</font>  |
|  .text-info   | <font color=#17a2b8>color: #17a2b8 (一种浅海洋绿——蓝)</font> |
| .text-warning |  <font color=#ffc107>color: #ffc107 (一种危险的黄色)</font>  |
| .text-danger  |  <font color=#dc3545>color: #dc3545 (一种危险的红色)</font>  |



## 6.Bootstrap文本排版

拓展： :link:[个人博客](https://eve-wings.github.io/Eve-Wings/guide/fornt-end-learn/promote/Bootstrap/4.%E6%96%87%E6%9C%AC%E7%B1%BB.html)

速记关键词: **font、text、justify、norwap**

设定**文本对齐**，段落中**超出屏幕部分自动换行**的类是 ： **.text-justify**

段落中超出屏幕部分**不换行**的类是： **.text-norwap**



### 其他的排版类(扩展)

| 类名                | 描述                                                         | 核心样式                                      |
| ------------------- | ------------------------------------------------------------ | --------------------------------------------- |
| .font-weight-bold   | 加粗文本                                                     | font-weight: 700                              |
| .font-weight-normal | 普通文本                                                     | font-weight: 400                              |
| .font-weight-light  | 更细的文本                                                   | font-weight: 300                              |
| .font-italic        | 斜体文本                                                     | font-style: italic                            |
| .lead               | 让段落更突出                                                 | font-size: 1.25rem;<br/>font-weight: 300      |
| .small              | 更小文本                                                     | font-size: 80%;<br/>font-weight: 400          |
| .text-left          | 左对齐                                                       | text-align: left                              |
| .text-center        | 居中                                                         | text-align: center                            |
| .text-right         | 右对齐                                                       | text-align: right                             |
| **.text-justify**   | 设定文本对齐，段落中超出屏幕部分自动换行                     | text-align: justify                           |
| **.text-norwap**    | 段落中超出屏幕部分不换行                                     | white-space: nowrap                           |
| .text-lowercase     | 文本小写                                                     | text-transform: lowercase                     |
| .text-uppercase     | 文本大写                                                     | text-transform: uppercase                     |
| .text-capitalize    | 首字母大写                                                   | text-transform: capitalize                    |
| .initialism         | 显示在\<abbr\>元素中的文本以小号字体展示，且可以将小写字母转换为大写字母 | font-size: 90%;<br/>text-transform: uppercase |
| .list-unstyled      | 移除默认的列表样式，列表项中左对齐。                         | padding-left: 0;<br/>list-style: none         |
| .list-inline        | 将所有列表项放置同一行                                       | padding-left: 0;<br/>list-style: none         |
| .pre-scrollable     | 是\<pre\>元素可滚动，代码块区域最大高度340px；一旦超出会有Y轴滚动条 | max-height: 340px;<br/>overflow-y: scroll     |



## 7.选项卡

前言：在原本题目中所说的tab标签，并不清楚到底是什么，如果有清楚的，还请告知我是什么组件，这里我是根据其他框架的tab推断是选项卡，而且官方文档中也在nav标签中出现过tab类，起到选项卡作用

拓展： :link:[官方文档](https://v4.bootcss.com/docs/components/navs/#tabs)

速记关键词: **nav、nav-tabs、data-toggle、tab、role、tab-content、tab-pane**



使用(官方代码)

```html
<!-- 选项容器: nav-tabs -->
<ul class="nav nav-tabs" id="myTab" role="tablist">
  <li class="nav-item" role="presentation">
      <!-- 触发器 data-toggle="tab" -->
    <a class="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Home</a>
  </li>
  <li class="nav-item" role="presentation">
    <a class="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Profile</a>
  </li>
  <li class="nav-item" role="presentation">
    <a class="nav-link" id="contact-tab" data-toggle="tab" href="#contact" role="tab" aria-controls="contact" aria-selected="false">Contact</a>
  </li>
</ul>

<!-- 内容容器: tab-content > tab-pane -->
<div class="tab-content" id="myTabContent">
  <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">...</div>
  <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">...</div>
  <div class="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">...</div>
</div>
```



## 8.Bootstrap 折叠面板和手风琴

拓展：:link:[个人博客](https://eve-wings.github.io/Eve-Wings/guide/fornt-end-learn/promote/Bootstrap/5.%E6%8A%98%E5%8F%A0%E7%AA%97%E4%B8%8E%E6%89%8B%E9%A3%8E%E7%90%B4.html)  :link:[官方文档](https://v4.bootcss.com/docs/components/collapse/)



速记关键词：**data-toggle、collapse、data-target、accordion**

###  折叠窗基本使用

```html
<p>
  <!-- 通过a标签实现折叠窗触发 -->
  <!-- 折叠窗的触发器上，需要配置几个属性 -->
  <!-- data-toggle 属性，用于选择 切换 的事件——即以怎样的方式触发切换 -->
  <!-- 可选值有：modal , popover , tooltips , collapse 等 -->
  <!-- 折叠的效果，选择 collapse -->
  <!-- 在a标签中实现折叠窗，href属性指定的是折叠的内容，常用id表示 -->
  <a class="btn btn-primary" data-toggle="collapse" href="#collapseExample">
    折叠触发器a
  </a>
  <!-- 通过按钮实现折叠窗触发 -->
  <!-- 在按钮中，没法通过href属性指定折叠的内容，所以通过data-target来指定折叠的内容 -->
  <button class="btn btn-primary" type="button" data-toggle="collapse" data-target="#collapseExample">
    折叠触发器btn
  </button>
</p>
<!-- 折叠的内容，需要配置 .collapse 类，来指明这是一个会被折叠的内容 -->
<!-- 同时需要配置id, id需要与触发器的 href的属性值 或 data-traget 的属性值 一致 -->
<div class="collapse" id="collapseExample">
  <div class="card card-body">
    折叠窗的内容
  </div>
</div>
```

```html
<!-- 也可以通过data-target指定多个目标 -->
<p>
  <button data-toggle="collapse" data-target=".box1">折叠触发器btn</button>
</p>
<div class="collapse box1">
  <div>内容1</div>
</div>
<div class="collapse box1">
  <div>内容2</div>
</div>
<div class="collapse box1">
  <div>内容3</div>
</div>
```

###  手风琴的基本使用

要实现手风琴，需要使用 **.accordion** 类 包裹住 整个内容

配合卡片组件(.card)使用效果良好

```html
<div class="accordion" id="accordionExample">
  <div class="card">
    <div class="card-header" id="headingOne">
      <h2 class="mb-0">
      <!-- aria-expanded属性设置其默认展开与否 -->
        <button class="btn btn-link btn-block text-left" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true">
          触发器1
        </button>
      </h2>
    </div>
    <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
      <div class="card-body">
        折叠内容1
      </div>
    </div>
  </div>
  <div class="card">
    <div class="card-header" id="headingTwo">
      <h2 class="mb-0">
        <button class="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo"  >
          触发器2
        </button>
      </h2>
    </div>
    <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
      <div class="card-body">
        折叠内容2
      </div>
    </div>
  </div>
  <div class="card">
    <div class="card-header" id="headingThree">
      <h2 class="mb-0">
        <button class="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseThree"  >
          触发器3
        </button>
      </h2>
    </div>
    <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
      <div class="card-body">
        折叠内容3
      </div>
    </div>
  </div>
</div>
```

```html
<!-- 简练化 -->
<div class="according" id="boxParent">
  <div>
    <button data-target="#box1" data-toggle="collapse" aria-expended="true">触发器1</button>
    <div class="collapse" id="box1" data-parent="#boxParent">内容1</div>
  </div>
  <div>
    <button data-target="#box2" data-toggle="collpase">触发器2</button>
    <div class="collapse" id="box2" data-parent="#boxParent">内容2</div>
  </div>
  <div>
    <button data-target="#box3" data-toggle="collapse">触发器3</button>
    <div class="collapse" id="box3" data-parent="#boxParent">内容3</div>
  </div>
</div>

```



## 9.Bootstrap 卡片与延展链接

拓展： :link:[菜鸟](https://www.runoob.com/bootstrap4/bootstrap4-cards.html)  :link:[官方文档](https://v4.bootcss.com/docs/components/card/)

速记关键词： **card、card-img-、card-body、card-title、card-text、card-link、stretched-link**

### 基本使用

```html
<div class="card">
    <!-- 卡片图片/上图下文 -->
    <img class="card-img-top">
    <!-- 卡片主体 -->
    <div class="card-body">
        <h5 class="card-title">卡片标题</h5>
        <p class="card-text">卡片文本</p>
        <a class="card-link">卡片链接</a>
    </div>
    <!-- 延展链接 -->
    <a class="stretched-link"></a>
</div>
```

**头部和底部**

```html
<div class="card">
    <div class="card-header">头</div>
    <div class="card-body">内容</div>
    <div class="card-footer">尾</div>
</div>
```

### 图片

|       类名        |   样式   |
| :---------------: | :------: |
|   .card-img-top   | 上图下文 |
| .card-img-bottom  | 下图上文 |
| .card-img-overlay |   背景   |

### 延展链接

为a标签设置类 "**.stretched-link**"，可以将该超链延展至有效点击区域。

需要给包裹元素设置 " position:relative " ， 因为卡片组件已经默认有该样式，所以更加适合使用延展链接



## 10.Bootstrap弹性盒与浮动布局

拓展： :link:[菜鸟](https://www.runoob.com/bootstrap4/bootstrap4-flex.html)

速记关键词: **d-flex、d-inline-flex、flex-row、flex-column、flex-fill、justify-content-{ }、align-self-[]-{}、flex-grow、flex-shrink**



### 弹性盒基本使用

```html
<div class="d-flex">
    <div></div>
    <div></div>
</div>
<!-- 同一行上的弹性盒子容器 -->
<div class="d-inline-flex">
    <div></div>
    <div></div>
</div>
<!-- 在不同视口宽度的弹性盒 -->
<div class="d-md-flex">
    <div></div>
    <div></div>
</div>
<div class="d-xl-flex">
    <div></div>
    <div></div>
</div>
```

### 弹性盒附加类

|                             类名                             |                             含义                             |
| :----------------------------------------------------------: | :----------------------------------------------------------: |
|             **.flex-[xl \| lg \| md \| sm]-row**             |              水品布局(从左至右)，支持响应式变化              |
|                    .flex-[ ]-row-reverse                     |                         水平反向布局                         |
|                     **.flex-[ ]-column**                     |                      垂直布局(从上至下)                      |
|                   .flex-[ ]-column-reverse                   |                         垂直反向布局                         |
|                      **.flex-[ ]-fill**                      |        适应内容宽度并**占满水平空间**，支持响应式变化        |
| **.justify-content-{ start \| end \| center \| between \| around}** |     头部集中 \| 尾部集中 \| 中央集中 \| 两端 \| 环绕对齐     |
| **.align-items-[ ]-{start \| end \| center \| baseline \| strech}** | 垂直居上 \| 垂直居下 \| 垂直居中 \| 基线对齐 \| 延展适应父元素 |

用法：

```html
<div class="d-flex flex-row">
    <div></div>
    <div></div>
</div>
<div class="d-flex flex-column">
    <div></div>
    <div></div>
</div>
```

### 响应式flex类

|                             类名                             |                             含义                             |
| :----------------------------------------------------------: | :----------------------------------------------------------: |
|                      **.flex-[ ]-fill**                      |                  适应内容宽度并占满水平空间                  |
|                     **.flex-[ ]-grow-1**                     |                         占据剩余空间                         |
|                       .flex-[ ]-grow-0                       |                    取消flex-grow-1的效果                     |
|                    **.flex-[ ]-shrink-1**                    |                           收缩空间                           |
|                      .flex-[ ]-shrink-0                      |                         取消收缩空间                         |
| .align-self-[ ]-{ start \| end \| center \| baseline \| strech} | 垂直居上 \| 垂直居下 \| 垂直居中 \| 基线对齐 \| 延展适应父元素 |

### 浮动类

- .float-left
- .float-right
- .float-none
- .float-sm-left
- .float-sm-right
- .float-sm-none
- .float-md-left
- .float-md-right
- .float-md-none
- .float-lg-left
- .float-lg-right
- .float-lg-none
- .float-xl-left
- .float-xl-right
- .float-xl-none



## 11.jQuery选择器

拓展： :link:[个人博客](https://eve-wings.github.io/Eve-Wings/guide/fornt-end-learn/promote/JQuery/3.jQuery%E5%B8%B8%E7%94%A8API.html)

速记关键词： **$、基本和css选择器一致**

### 基础选择器

原生js获取原生方式很多，很杂，而且兼容性情况不一致，因此jQuery做了封装，使得获取元素统一标准

```javascript
$("选择器")	// 选择器直接写CSS选择器即可，但是需要引号

$('#divID')	// ID选择器
$('.divclass')	// class选择器
$('div')	// 标签选择器
$('div>span')	// 子代选择器
$('div p')	// 后代选择器
```

### 筛选选择器

| 语法       | 用法          | 描述                                                    |
| ---------- | ------------- | ------------------------------------------------------- |
| :first     | $('li:first') | 获取第一个li元素                                        |
| :last      | $('li:last')  | 获取到最后一个li元素                                    |
| :eq(index) | $('li:eq(2)') | 获取到li元素中，选择索引号为2的元素，索引号index从0开始 |
| :odd       | $('li:odd')   | 获取到的li元素中，选择索引号为技术的元素                |
| :even      | $('li:even')  | 获取到的li元素中，选择索引号为偶数的元素                |

### 筛选方法

| 语法               | 用法                        | 说明                                                 |
| ------------------ | --------------------------- | ---------------------------------------------------- |
| parent()           | $('li').parent()            | 查找父级                                             |
| children()         | $('li').children('span')    | 相当于$('li>span'),最近一级                          |
| find(selector)     | $('li').find('span')        | 相当于$('li span')，后代选择器                       |
| siblings(selector) | $('.first').siblings('li')  | 查找兄弟节点，不包括自身                             |
| nextAll[expr]      | $('.first').nextAll()       | 查找当前元素之后的所有同辈元素                       |
| prevtAll[expr]     | $('.first').prevAll()       | 查找当前元素之前所有同辈元素                         |
| hasClass(class)    | $('div').hasClass('.first') | 检查当前的元素是否含有某个特定的类，如果有，返回true |
| eq(index)          | $('li').eq(2)               | 相当于$('li:eq(2)')，index从0开始                    |



## 12.jQuery操作样式

拓展： :link:[个人博客](https://eve-wings.github.io/Eve-Wings/guide/fornt-end-learn/promote/JQuery/3.jQuery%E5%B8%B8%E7%94%A8API.html)

速记关键词: **$(' ').css(' ',' ')、addClass、removeClass、toggleClass**

###  操作css方法

jQuery可以使用css方法来修改简单元素样式；也可以操作类，修改多个样式

1.参数只写属性名，则是返回属性值

```javascript
$(this).css('color');
```

 2.参数是**属性名，属性值，逗号分隔**，是设置一组样式，**属性必须加引号**，值如果是数字可以不用跟单位和引号

```javascript
$(this).css('color','red');
```

3.参数可以是**对象形式**，方便设置多组样式。**属性名和属性值用冒号隔开**，属性可以不加引号。

```javascript
$(this).css({'color':'red','background':'orange'});
$(this).css({
    width: 300,
    height: 300,
    // 如果是复合属性则必须采用驼峰命名法，如果值不是数字，则需要加引号
    backgroundColor: 'orange'
});
```

### 设置类样式方法

作用等同于以前classLIst，可以操作类样式

1.添加类

```javascript
$('div').addClass('div-box');
// 需要注意，类名不需要 .
```

2.删除类

```javascript
$('div').removeClass('div-box');
```

3.切换类

```javascript
$('div').toggleClass('div-box');
```



## 13.jQuery事件委派

拓展： :link:[个人博客](https://eve-wings.github.io/Eve-Wings/guide/fornt-end-learn/promote/JQuery/4.jQuery%E4%BA%8B%E4%BB%B6.html#_4-1-%E4%BA%8B%E4%BB%B6%E6%B3%A8%E5%86%8C)

速记关键词: **动态添加、避免频繁绑定和解绑、祖先节点监听事件**



### 举例

```html
<ul>
    <li></li>
    <li></li>
    <li></li>
</ul>
```

要为上述的li标签都绑定时间，同时也要能够支持后续动态添加的li标签也能够有事件，就需要使用事件委派

```javascript
$('ul').on('click','li',function () {
	console.log('li被点击了')
})
// 这样子，所有的li标签都绑定了该事件
// 而且因为这个事件是通过委派给ul标签然后再传递给li标签
// 所以后续通过事件新增的li标签也能绑定该事件
```

- 可以**解决动态添加的后代元素事件绑定的问题**。
- 可以**避免频繁**在页面中**做动态的事件绑定和解绑**。
-  当多**个元素需要监听相同的事件**，使用**事件的授权**，在它们的一个**祖先节点上监听该事件**，可以**降低开销、提高效率**



# web考试复习纲——Less与ES6

## 1.CSS预编译

拓展：[个人博客](https://eve-wings.github.io/Eve-Wings/guide/fornt-end-learn/promote/CSS%E9%A2%84%E5%A4%84%E7%90%86/less.html)

关键词速记：**预先编译处理、变量、Mixin、函数、复用性、维护性、兼容性**

CSS 预编译，就是预先编译处理 CSS。它扩展了 CSS 语言，增加了变量、Mixin、函数 等编程的特性，使 CSS 更易维护和扩展。CSS 预编译的工作原理是提供便捷的语法和特性 供开发者编写源代码，随后经过专门的编译工具将源码转化为 CSS 语法。 

它从这几个方面提升了 CSS 开发的效率：增强编程能力；增强可复用性；增强可维护性； 更便于解决浏览器兼容性。



### 什么是less？

less 是一种动态样式语言，属于css预处理器的范畴，它扩展了css语言

增加了变量、Mixin、函数等特性，使css更容易维护和扩展

less既可以再客户端上运行，也可以借助Node.js在服务端运行

less的中文官网：http://lesscss.cn/



## 2.less的使用

less需要进行编译之后生成CSS文件，不能直接使用

### less的注释

**有两种注释**，且特性不同

```less
// 这样的注释，只会保留在less文件中，而不会被编译进css文件
/* 这里的注释，会编译进css文件 */
```



关于less的其他使用，可以直接查看本人的博客:link:[个人博客](https://eve-wings.github.io/Eve-Wings/guide/fornt-end-learn/promote/CSS%E9%A2%84%E5%A4%84%E7%90%86/less.html)



## 3.ES6的变量声明

拓展： :link:[个人博客](https://eve-wings.github.io/Eve-Wings/guide/fornt-end-learn/base/JavaScript/2.ES6%E5%8F%98%E9%87%8F%E5%A3%B0%E6%98%8E.html)

速记关键词：**块级作用域、不存在变量提升、常量、初始值、不可修改**

let 用于声明变量

- let声明的变量只在所处于**块级作用域中有效**
- 防止循环变量变成全局变量
- **不存在变量提升**
- *暂时性死区*

const 用于声明常量,**常量就是值(内存地址)**

- 具有**块级作用域**
- **声明常量时必须赋初始值**
- 常量赋值后，**值不可修改**

**不能变化的量**

let、const与var的区别

|     var      |      let       |     const      |
| :----------: | :------------: | :------------: |
| 函数级作用域 |   块级作用域   |   块级作用域   |
|   变量提升   | 不存在变量提升 | 不存在变量提升 |
|   值可更改   |    值可更改    |   值不可更改   |



## 4.箭头函数

拓展： :link:[个人博客](https://eve-wings.github.io/Eve-Wings/guide/fornt-end-learn/base/JavaScript/4.%E7%AE%AD%E5%A4%B4%E5%87%BD%E6%95%B0.html#%E4%BD%BF%E7%94%A8%E7%AE%AD%E5%A4%B4%E5%87%BD%E6%95%B0%E7%9A%84%E6%B3%A8%E6%84%8F%E7%82%B9)

速记关键词:  **定义、返回值、this、arguments对象、构造函数、yield命令、Generator函数**



ES6新增的定义函数的方式，用于简化函数定义

```javascript
(参数) => {函数体}
// 通常以这种方式将函数赋值给变量，然后通过变量调用函数
const fn = () => {}
```

```javascript
const fn = (i) => {
	console.log(i)
}
fn(1)
```

若函数体中**只有一句代码**，且**代码的执行结果就是返回值**，可以省略大括号

```javascript
// 传统写法
function sum (num1, num2) {
    return num1 + num2
}

// 箭头函数
const sum = (num1, num2) => num1 + num2
const result = sum(10, 20)
console.log(result)
```



如果**形参只有一个**，可以**省略小括号**

```javascript
function fn (v) {
	return v*2
}
// 箭头函数写法
const fn = v => v*2

function fn(v) {
    console.log(v)
}

const fn = v => {
    console.log(v)
}
```



箭头函数不绑定this关键字，箭头函数中的this，**指向的是函数定义位置的上下文this**

```javascript
const obj = { name: '张三' }
function fn () {
	console.log(this)	// 输出this的值
    // 返回函数返回匿名函数，输出this的值
	return () => {
		console.log(this)
	}
}
// 并通过call方法调用fn函数将this指向obj,并接受返回的匿名函数
const resFn = fn.call(obj)
// 虽然这里是在全局作用域下调用该函数，this本应该指向window
// 但是因为该函数是箭头函数，箭头函数本身不具备this关键字
// this是指向 定义时 上下文的this，即回溯到赋值给 resFn 时，fn中的this
// 这个this因为通过call进行了修改，所以是obj
resFn()
```



```javascript
let obj = {
	age: 20,
	say: () => {
		console.log(this.age)
	}
}
obj.say()	// undefined
// 因为使用的是箭头函数，本身并没有this，而是使用父级作用域中的this
// 理论来说，拿到的就是obj对象中的this……
// 但是，obj是对象，对象不具备作用域
// 所以，say方法中的this，最终被定义在全局作用域下
// 因此，全局作用域下的this.age，自然也是undefined

// 如果此时我们在代码前加入
var age = 18
// 就会输出18

// 如果是let就是undefined

```



### 使用箭头函数的注意点

1. 使用箭头函数，this的指向**不再是window**，而是父级(可变)
2. 不能够使用**arguments对象**
3. 不能作为构造函数，即不可以使用new命令，否则抛出异常
4. 不可以使用**yield命令**，因为箭头函数不能作为**Generator函数**



### 箭头函数与普通函数的区别

1. 声明方式的不同
   1. 普通函数通过function声明
   2. 箭头函数通过 => 声明
2. 箭头函数**不能用于构造函数**
3. **this指向**不同



