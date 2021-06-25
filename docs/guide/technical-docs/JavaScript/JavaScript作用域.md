# JavaScript 作用域



参考资料：[视频1](https://www.bilibili.com/video/BV1AJ41137cW?from=search&seid=9698873251630714606) [视频2](https://www.bilibili.com/video/BV1s7411v7Br?from=search&seid=9698873251630714606)



作用域，是一套规则，用来确定在何处以及如何查找标识符

在js中，作用域分为全局作用域和函数作用域，且可以相互嵌套



## 作用域内部原理的过程

内部原理分成 编译，执行，查询，嵌套，异常

但在 js 脚本中，并没有编译阶段，是边解释边执行



### 编译阶段(了解)

```javascript
var a = 2;
```

1.1 分词

将上述代码分成以下词法单元： var , a , = , 2 , ; 

```javascript
{
	"var": "keyword",	//关键字
	"a": "indentifier",	//标识符
	"=": 'assignment',	//分配
	"2": "interger",	//整数
	";": "eos"	// 结束语句
}
```

1.2 解析

将上一个步骤分词出来的对象或数组进行解析，生成一个抽象语法树(AST Abstract Snatax Tree)

1.3 代码生成

将AST转换成可执行的代码的过程，转换成一组机器指令

简言之，就是编译器把程序分解成词法单元，将词法单元解析成AST，再把AST转换成机器指令等待执行的过程

再次强调，在JavaScript中，没有编译阶段。



### 执行阶段(了解)

```javascript
var a = 2
```

引擎执行代码时，首先查找当前的作用域，检测变量 a 是否在当前的作用域下。

如果是，引擎就会直接使用这个变量

如果否，引擎会继续查找该变量

​	如果找到了变量，就会将值 2 赋给当前的变量，否则会抛出异常

```javascript
console.log(a);
// 引擎执行该代码时，先查找当前的作用域，检测 a 是否存在于作用域下
// 答案是 是，所以输出结果是 2
console.log(b);
// 查找当前作用域，没有查到 变量 b ，所以抛出异常
```



### 查询阶段(了解)

LHS查询——赋值操作等

RHS查询——函数调用等

```javascript
function foo(a) {
	console.log(a);
}
foo(2);
// 1.foo()对foo函数对象进行RHS引用
// 2.函数传参a = 2， 对a 进行LHS引用
// 3. console.log(a) ； console对象进行RHS引用，并检查其是否有log()方法
// 4. console.log(a);对 a 进行RHS引用，并把值传给console.log(a)
```



### 嵌套阶段(重要)

```javascript
function foo(a){
	console.log(a + b);
}
var b = 2;
foo(4);
// 输出结果为何能够为 6 ，function foo(a)... 中的 b 到底是怎么得到的？
// 在当前作用域下无法查找到某个变量时，引擎就会在外层嵌套作用域中继续查找，直到找到该变量或抵达最外层作用域(全局作用域)
// 且请看 变量声明提前

// 关于嵌套作用域巩固理解
function foo (a) {
    console.log(a + b);
    function foooo () {
        console.log(a + a + b);
    }
    foooo();
}
var b = 2;
foo(4);

```



### 异常阶段(了解)

```javascript
function fn (a) {
	a = b;
    // 查询不到 b --> b is not defined
}
fn(2);

function fn2(){
    var b = 0;
    // b 是一个变量而非函数，是通过LHS查询引用的
    b();
    // 此处调用方法b，通过RHS查询，无法查询到该结果
    // 所以报错 -> b is not function
}
fn2();

function fn3(){
    // 'use strict';
    a = 1;
}
console.log(a);
// a is not defined
// 但是如果执行了fn3之后，却可以输出 1
// a 直接变成了全局变量
// 因此，我们需要在fn3() 中，添加一句 'use strict';
fn3();
console.log(a);
```



### 总结案例

```javascript
function fn(a) {
	console.log(a);
}
fn(2);
// 对fn()进行 RHS查询，查询到了上文 function fn()的定义——true
// 对a 进行 LHS 查询,并且在fn()作用域下查询到a,将2赋值给a
// 对console进行RHS查询
// console是内置对象，属于全局对象，在fn()作用域中查询不到，便在其嵌套作用域中查询——即在全局作用域中查询
// 在consol对象中查询log方法
// 对 a 进行 RHS查询
// 将 a 的值 传给 console.log
```



## 词法作用域

词法——分词

```javascript
var a = 2;

function foo(a){
    var b = a * 2	// 第二执行：b = 2 * 2 = 4
    function bar(c){
        console.log(a,b,c);	// 最后执行： 2,4,12
    }
    bar(b * 3);	// 第三执行：bar(12)
}
foo(2);	//最先执行
// 这样子就生成了多个作用域
// 首先，最外层有一个全局作用域
// foo()函数中有一个foo函数作用域
// bar()函数中有一个bar函数作用域
// 这样子就行形成了三层作用域
// 而无论 foo() 函数在何处调用、执行
// 其作用域都是由其声明时的位置决定的
```



我们用嵌套作用域的角度分析一下这段代码

```javascript
// 作用域我们这里以对象的形式表达
// 第一层：全局作用域
全局作用域:{
	// 各种各样的全局函数、变量
	// 第二层： foo
	foo:{
		a: 2,
		b: 4,
		// 第三层: bar
		bar:{
			c: 12
		}
	}
}
```



## 遮蔽效应

作用域的查找，从运行时所处的最内部作用于开始，逐级向上进行，知道遇到第一个匹配的标识符为止

在多层的嵌套作用域可以定义同名的标识符，这叫做遮蔽效应

```javascript
var a = 0;
function test () {
	var a = 1;
	console.log(a);
	function test2 () {
		var a = 233;	// 直到遇到第一个匹配的标识符
		console.log(a);	// 所以输出的是233,这种现象叫做遮蔽效应
	}
    test2();
}
test();	// 1 233
```



## 声明提升

可以查看 声明提升 文档

### 变量声明提升

```javascript
console.log(a);
var a = 2;
// 明明代码从上往下执行
// 但是为什么能够得到a,而不是报错
// 且得到的a是undefined，而不是2
// 预解释——变量提升

console.log(b);
var b = 0;
function fn(){
    console.log(c);
    var c = 1;
    function test(){
        console.log(d);
        var d = 2;
    }
    test();
}
fn();

```

```javascript
// 上述代码的内部实现如下:
var a;
var b;
function fn(){
    var c;
    function test(){
        var d;
        console.log(d);
        d = 2;
    }
    console.log(c);
    c = 1;
    test();
}
console.log(a);
a = 2;
console.log(b);
b = 0;
fn();

```

### 函数声明提升

```javascript
foo();
function foo(){
	console.log('233');
}
// 函数声明会提升
// 函数表达式不会提升
// 函数声明会在 变量声明之后

bar();	// bar is not a function
var bar = function () {
    console.log('233');
}
// 生命表达式，提升的是 var bar;

test();	// not a function
test233();	// not a function
var test = function test233 (){
    console.log('test233');
}
```



## 作用域链

各个作用域的嵌套关系，组成了一条作用域链。

```javascript
var a = 2;

function foo(a){
    var b = a * 2	// 第二执行：b = 2 * 2 = 4
    function bar(c){
        console.log(a,b,c);	// 最后执行： 2,4,12
    }
    bar(b * 3);	// 第三执行：bar(12)
}
foo(2);

// 依旧以这个例子为例
// 例子中 bar的作用域链 bar -> foo -> 全局
// foo 作用域链 foo -> 全局
```

使用作用域链主要是进行标识符的查询，标识符解析就是沿着作用域链一级一级地搜索标识符地过程，而作用域链就是保证对变量和函数地有序访问。



## 自由变量

在当前作用域中存在，但未在当前作用域中声明的变量

```javascript
var a = 1;
var b = 2;
// fn -> 全局
function fn(x){
	var a = 10;
    // bar -> fn -> 全局
	function bar(x) {
		var a = 100;
        // 这里的b就是自由变量
        // 存在，当并未在当前作用域中声明
		b = x + a;
		return b;
	}
	bar(20);
	bar(200);
}
fn(0);
```

一旦存在自由变量，就肯定会有作用域链，再根据做根据作用域链查找机制，查找到对应的变量

查找机制：在当前作用域中发现没有该变量，然后沿着作用域链往上级查找，直到查到对应的变量为止，如果查找不到，直接报错



## 执行环境与执行流

执行环境也叫执行上下文，执行上文环境

每个执行环境，都有一个与之关联的变量对象，在环境中定义的函数和变量都保存在这个对象

```javascript
var a = 1;
var b = 2;
// fn -> 全局
function fn(x){
    // arguments
    // this
	var a = 10;
    // bar -> fn -> 全局
	function bar(x) {
		var a = 100;
		b = x + a;
		return b;
	}
	bar(20);
	bar(200);
}
fn(0);
// 当 fn(0) 执行时，执行的环境中保存着
/*
	x:0,
	a:undefined,
	bar:function,
	arguments: [0],
	this: window
*/

// 当bar(20)执行时，执行环境中保存着:
/*
	x:20,
	a:undefined,
	arguments: [0],
	this: window
*/
```

执行流——即代码的执行顺序



## 执行环境栈

其实就是一个出栈、压栈的过程

```javascript
var a = 1;
var b = 2;
// fn -> 全局
function fn(x){
    // arguments
    // this
	var a = 10;
    // bar -> fn -> 全局
	function bar(x) {
		var a = 100;
		b = x + a;
		return b;
	}
	bar(20);
	bar(200);
}
fn(0);
```

当fn(0)执行之前，全局执行环境会压入执行环境栈

当fn(0)执行之时，fn执行环境会压入执行环境栈，且处于活跃状态

而当fn(0)执行完成时，fn执行环境就会进行出栈，全局执行环境为活跃状态

以bar(20)执行时为例：

```javascript
// 栈顶——活跃状态
bar(20)执行环境:{
    x: 20,
    a: undefined,
    全局中b: 2，
    this: window
}
//
fn(0)执行环境:{
    x: 0,
    a: 10,
    bar: function,
    this: window
}
// 栈底
全局执行环境:{
    a: 1,
    b: 2,
    fn: function,
    this: window
}
```



## 关键词回忆：

嵌套

作用域

遮蔽效应

声明提升

作用域链

自由变量

执行环境、执行环境栈