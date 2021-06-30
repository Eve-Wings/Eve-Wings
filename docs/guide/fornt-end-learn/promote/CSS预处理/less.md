---
title: less
---
# less

资料：[视频](https://www.bilibili.com/video/BV1XJ411X7Ud?p=126)

## 1.初识less

less 是一种动态样式语言，属于css预处理器的范畴，它扩展了css语言

增加了变量、Mixin、函数等特性，使css更容易维护和扩展

less既可以再客户端上运行，也可以借助Node.js在服务端运行



less的中文官网：http://lesscss.cn/



## 2.less编译工具

vscode插件：easy less

借助vscode的插件 easy less，编写完less文件保存后，会自动编译成css文件，然后在项目中引入css文件即可



安装完easy less插件之后，我们需要修改一下easy less的配置

打开easy less 扩展设置，在settings.json 中编辑

添加以下内容：

```json
"less.compile": {
    "compress": true,	// 压缩
    "sourceMap": true,	// 生成映射文件
    "out": true 	//生成css文件
 }
```




## 3.less基础

### 注释

```less
// 这样的注释，只会保留在less文件中，而不会被编译进css文件
/* 这里的注释，会会编译进css文件 */
```



### 变量

需要知道的一点是：css原生就支持变量

```css
/* 这是原生css的变量定义 */
html{
	--color: red;
}
/* 这是原生css的变量使用 */
#box{
    background: var(--color);
}
/* 来，ie继续挨打，因为ie依旧又不兼容  */
```

使用@声明一个变量: 比如 @boxC: red;

1.作为普通属性值来使用：直接使用 @boxC

```less
@boxColor: red;
#box{
	background: @boxColor;
}
```



2.作为选择器和属性名 #@{selector的值} 的形式 (很少有)

```less
@m:margin;
@selector:#box;

#box {
	@{m}:0;
}

@{selector}{
	background: @boxColor;
}
```

3.作为URL: @{url}



4.变量的延迟加载

```less
// 这一段代码中，num 和 test 对应的值应该是什么？
@var: 0;
.class{
	@var: 1;
	.brass{
		@var: 2;
		num: @var;
		@var: 3;
	}
	test: @var;
}
// 因为延迟加载以及块级作用域的原因,num的 @var 得等到 .brass完全加载完之后才赋值
// 所以 num: 3
// test 位于全局作用域中，test: 1
```



### 嵌套

```less
#box1{
	height: 200px;
	width: 200px;
	background: red;
    // box2 是 box1 的后代
	#box2{
		height: 100px;
        // 在较高的版本的情况下，可以直接使用$对属性的值进行调用
		width: $height;
		background: yellow;
        // &符 表示的是父级
        // 如果不添加& 则:hover伪类是与box2形成父子关系，而非平级关系
        &:hover{
            height: 120px;
            width: $height;
        }
	}
    // span 是 box1 的 子元素
    >span{
        font-size: 2rem;
    }
}
```



### 扩展

```less
.p1{
	width: 100px;
    height: $widht;
}
// p2 在 p1的基础上进行扩展
.p2:extend(.p1){
    color: red;
}
// p2 除了有 p1的样式之外，还有color样式


// 也可以这么写
.p3{
    // 直接引用
    // 正确来说 mixin 混合
    .p1();	// 这样子就直接拿到了p1的样式
}

```



### 混合

#### 基本用法

```less
.p1{
    widht: 200px;
    height: $widht;
    background: green;
}
// 经过编译之后，p1的样式会出现在css文件之中
.p3{
	.p1();	// 在这里就调用了p1混合函数
}


// 这里使用了 类选择器，但在类选择器之后添加一个()，在编译成css文件之后并不会显示出来，因为这是一个混合函数
.p4(){
    width: 100px;
    height: $widht;
    background: black;
}
.p5{
    .p4();
    // .p4;  不用括号也可
}
// p5 调用了 p4混合函数中的样式，但是在编译成css文件后，没有p4，只有p5

// 上诉内容一般不会使用混合，因为使用拓展就足够了
// 在混合函数中可以直接设置参数
.test(@w, @h, @c){
    width: @w;
    height: @h;
    border: 1px soild @c;
}
.div1{
    // 调用混合函数，按顺序传递参数
    .test(200px, 300px, black);
}
.div2{
    // 键值对应
    .test(@c: red, @h: 100px, @w: 300px)
}
// 在设置参数时，可以设置默认值
.test2(@w:100px, @h:200px, @c: black){
    width: @w;
    height: @h;
    border: 1px soild @c;
}
.div3{
    // 在有默认值的情况下，可以不传值
    .test2()
}


```

#### 其他方法

```less
// 平均值——颜色
span{
	color: average(red, yellow);
}

// 颜色加深
span{
    background: red;
    &:hover{
        background:darken(red,10%);
        // 变亮
        color: lighten(average(red,yellow),10%)
    }
}
```



### 运算

```less
.box1{
	width： 100px + 100px;
	height: $width * 2;
    // height: ($width / 2)
}
```



### 引入

模块化处理

```less
@import "style2.less"
```

