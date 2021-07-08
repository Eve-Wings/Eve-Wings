---
title: 手写一个trim()方法
---
# 手写一个trim()方法

## 描述

js原生的str.trim()方法，可以用于删除字符串中开头与结尾的空白串，可用于避免用户输入时的误操作

现自行编写一个方法，当浏览器不支持原生js的str.trim()时，实现str.trim()方法的功能，也可以对str.trim()方法进行重写



## 整体思路

1. 判断一个字符是否为空白，首先除了空格之外，回车、换行等都可能是空白串，同时unicode中也有很多间隔符、间隙符，也处于判断的范围内，但优先级不高。

   unicode字符百科 [https://unicode-table.com/cn/](https://unicode-table.com/cn/)

2. 从头遍历该字符串，通过indexOf方法，来检索该字符串是否为空白

   1. 如果是，则继续遍历
   2. 如果不是，则停止遍历，获取当前索引值
      1. 判断该索引值是否为0，如果是，则不用进行任何操作
      2. 如果非0，则对该字符串进行操作 str = str.slice(index)，将空白串截取掉

3. 得到删除了头部空白串的数组，从尾开始遍历，同第二点。

4. 获得删除了两端空白串的字符串



## 编程实现

### 函数写法，传参调用

```javascript
// 通过传参调用函数
function myTrim(str) {
    let str2 = str
    // 所有空白串的组成可能,空格的优先级最高
    const whitespace = ' \n\r\t\f\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u200b\u2028\u2029\u202f\u3000'
    
    // for循环开始遍历
    for (let index = 0; index < str2.length; index++) {
        // 如果不是空白
        if (whitespace.indexOf(str2[index]) === -1) {
            // 如果索引值不是0
            if (index !== 0) {
                // 从index开始截取，即删去头部空白串
                str2 = str2.slice(index)
            }
            break
        }
    }
    // 从尾开始循环
    for (let index = str2.length - 1; index > 0; index--) {
        if (whitespace.indexOf(str2[index]) === -1) {
            if (index !== str2.length - 1) {
                str2 = str2.slice(0, index + 1)
            }
            break
        }
    }
    return str2
}

// 调用
let test = '  1231231241231  12312312 123123 1231      351        '
let result = myTrim(test)
console.log(result)
```

### 方法重写

```javascript
String.prototype.trim = function () {
    let str = this,
        whitespace = ' \n\r\t\f\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u200b\u2028\u2029\u202f\u3000'
    for (let index = 0; index < str.length; index++) {
        if (whitespace.indexOf(str[index]) === -1) {
            if (index !== 0) {
                str = str.slice(index)
            }
            break
        }
    }
    for (let index = str.length - 1; index > 0; index--) {
        if (whitespace.indexOf(str[index]) === -1) {
            if (index !== str.length - 1) {
                str = str.slice(0, index + 1)
            }
            break
        }
    }
    return str
}

// 调用
let str = '      123123          123123123  12312 331 23 12 3 123          '
console.log(str.trim())
```

### 时间复杂度分析

理论上是 n的3次方

一个for循环， indexOf也是一个常量级循环，而slice()方法的源码，也而是选取开始索引和结束索引然后循环遍历存入一个新的数组，所以也是常量级循环，所以是三个循环嵌套

但是因为组成空串的主要是空格，所以 indexOf 在大多数情况下只是作为 if语句使用，而不构成循环

因此大多数情况下，时间复杂度为 n的平方



## bug修正

在上述的描述中漏掉了一种可能性，就是整个串都是空白串的情况下，不会进行删除，因此可以在第一次for循环的最后加上判断语句，判断其是否是空白串

```javascript
for (let index = 0; index < str.length; index++) {
	if (whitespace.indexOf(str[index]) === -1) {
		if (index !== 0) {
			str = str.slice(index)
		}
		break
	}
    if (index === str.length - 1) {
        return ''
    }
}
```

