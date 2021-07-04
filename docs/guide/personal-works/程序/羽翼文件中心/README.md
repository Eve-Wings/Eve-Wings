---
title: 开发文档
sidebar: auto
---
# 开发文档

::: warning

该项目暂处于个人联系/停摆状态

:::


另外两个文档：

- :link: [关于数据加载的问题](关于数据加载的问题)
- :link: [搜索功能的简单实现](搜索功能的实现)

代码仓库： [https://github.com/Eve-Wings/wingfiles](https://github.com/Eve-Wings/wingfiles)

因为使用了mockjs的原因，且添加了没有接收到数据不进行页面加载的事件，所以 github page 无法使用

## 0.前言

这个网站本身来说，并不属于任何具备商业行为的范畴，其最初的开发目的，本着是为了解决一个同好会的“简单需求”的想法，而进行东凑西凑随意开启的，后中途因为团体本身不具备较高的团结性和每个人的个人原因，从而停止，这个项目转变成我的个人项目——而再加上考虑到所谓版权等多方面原因，**只作为个人边学边做的练习项目**，而不进行具体的架设。

因此，本项目在需求分析、概要设计、数据库设计等阶段有着缺陷，部分是由实际开发的时候补充上的。

不过这个项目会一直伴随我的学习，作为我的练习项目、一个“试验场”，进行逐步完善、精化、重构、升级等，我相信这个项目会给我带来非常多的经验和教训，实际上也不用说“我相信”，因为在编写这段内容之前，我已经吃了**非常多的教训**了。

我也很乐意将这些经验和教训分享出来，其中包括从0到现在的各种零零碎碎的操作，因此这份文档在开发过程会非常细致，~~（其中包括一些花里胡哨莫名其妙但实际上并不怎么有用的功能）~~。

该项目目前有三个版本：

第一版：是从2021年3月初开始到四月中旬、下旬，使用bootstarp与jQuery完成的(五个页面、部分交互)，这个版本中包括粗步的需求分析、粗步的ui设计。

而在此之后因为软件水平考试的问题，持续中断到2021年5月底

第二个版本：是从2021年5月底，软件水平考试结束到2021年6月16日，依旧是边学边做阶段，使用vue和element-ui框架实现对第一版本的重构与内容丰富，因为是从vue零基础开始的，所以开始的时候缺乏对vue框架以及生态的全面了解，导致出现了很多问题，因此在一定程度上在实战中学习了vue之后，第三版本诞生了。

第三个版本：是对第二个版本的精简化、降低功能、页面的耦合度，提高其内聚度，使用vue、vuex、vue-router、element-ui、axios、webapack、mock综合开发，于2021年6月17日至今，还在持续开发(练习)



//=============================================================================//

而作为本人的风格，我会在一些内容下发表我的一些个人吐槽和见解以供一乐或者参考、交流，比如在这里，想这么比较随意的写文档会不会……不太好？



//===========================================================================//



## 1.系统规格说明

### 1.1：系统功能和目标：

随着基础教育的普及，以及各类艺术作品的影响——诸如《指环王》、《哈利波特》、《冰与火之歌》等……，进行小说、故事的创作、虚构一个世界的门槛降低，参与其中的人数逐渐增多。

在创作的过程之中，会附加上自己的想象与假设，对作品的“故事流程”、“世界背景”进行一系列的设计——一种“架构”、一系列“设定”，犹如软件开发中对一个软件一系列功能的设计和规范。而这个时候作品的内容往往就跳脱出了作者本身的知识与经历，且很难亲自体验。

随着互联网和移动软件的发展，作者们开始以互相之间的交流与借鉴以及资料、文件的分享为目标，寻求可用的软件、平台，但目前并没有专门对接这一群体的平台。

羽翼文件存储中心——以下简称文件中心，设计的目的，就是为了解决作者们这一需求，搭建起一个能够让用户分享自己的作品与资料、相互交流的类论坛的平台。文件中心起到作品、资料的分类、存储与管理的功能



### 1.2：背景

软件系统的名称：羽翼文件存储中心——简称文件中心

本项目的用户：创作小说、故事、虚构世界，需要资料分享和借鉴的群体、系统管理员



### 1.3：文件中心实现的主要功能

|     功能      |                        描述                        |     完成情况     |
| :-----------: | :------------------------------------------------: | :--------------: |
|   账号注册    |            用户可以通过申请得到一个账号            | 页面与交互已完成 |
| 忘记密码处理  | 用户忘记密码可以通过注册时绑定的手机号码来重设密码 | 页面与交互已完成 |
|   账号登录    |               用户可以登录自己的账号               | 页面与交互已完成 |
|   文件上传    |                  用户可以上传文件                  |        /         |
| 文件在线观看  |            用户可以点击目标文件在线观看            |     部分完成     |
|   文件下载    |                用户可以下载目标文件                |        /         |
|   添加书签    |     用户可以在目标文件中添加书签以便返回书签处     |        /         |
|   文件收藏    |        用户可以将目标文件加入到用户的收藏夹        |     部分完成     |
|   查看收藏    |           用户可以查看目标文件夹中的内容           |        /         |
|     搜索      |        用户可以通过关键字搜索文件/帖子/用户        | 页面与交互已完成 |
|   文件评论    |             用户可以对目标文件进行评论             |     部分完成     |
|   用户关注    |       用户可以对目标用户加入到用户的关注列表       |        /         |
|   论坛发帖    |             用户可以在社交板块发布帖子             |        /         |
|   论坛回帖    |       用户可以在社交板块的目标帖子中进行回复       |        /         |
|   在线聊天    |      用户可以与目标用户或目标群组进行信息发送      |        /         |
|   信息通知    |      用户可以接收到管理员或其他用户发送的信息      |        /         |
| 文件/帖子管理 |      管理员可以对文件和帖子进行增删改查等功能      |        /         |
|   用户管理    |            管理员可以对用户账号进行管理            |        /         |



## 2.总体设计

### 2.1:系统输入

1. 用户账号申请信息表
2. 用户账号登录信息表
3. 用户密码重置信息表
4. 文件上传信息表
5. 文件下载请求
6. 搜索信息表
7. 帖子信息表
8. 回复信息
9. 文件管理请求
10. 用户管理请求

### 2.2:系统输出

1. 用户账号申请反馈
2. 用户账号登录反馈
3. 用户密码重置反馈
4. 文件信息
5. 文件上传结果反馈
6. 文件下载请求结果
7. 搜索结果
8. 帖子信息
9. 文件列表信息
10. 用户列表信息



## 3.概要设计

### 3.1:操作流程(暂且为空)

实际上有做一个粗步的操作流程图，但是画的是思维导图，还没有进行整理和重新绘制，比较杂乱在此先不做展示



### 3-2:结构设计(粗略)

<img :src="$withBase('/assets/img/羽翼文件中心/结构设计.jpg')" alt="img">

### 3-3:用例图

<img :src="$withBase('/assets/img/羽翼文件中心/用例图.jpg')" alt="img">

## 4.数据库设计

### E-R图

<img :src="$withBase('/assets/img/羽翼文件中心/e-r图.jpg')" alt="img">

### 4-1:文件帖子基础信息关系模式定义——post

文件和帖子在数据结构上有一定类似，所以将其统一

| 字段名称 |   字段代码   |  字段类型   |     数据约束      |
| :------: | :----------: | :---------: | :---------------: |
|  帖子ID  |    postID    |     Int     |       主键        |
|   分类   |  classical   |     Int     | 外键，0,1,2,...,8 |
|   标题   |    title     | Varchar(21) |     Not null      |
|   简介   |      BI      | Varchar(50) |     Not null      |
| 上传者ID | updataUserID |     Int     |       外键,       |
| 上传时间 |  updataTime  |  Datetime   |     Not null      |
|  总热度  |     hot      |     Int     |     Not null      |
|  日热度  |   dailyHot   |     Int     |     Not null      |
|  周热度  |   weekHot    |     Int     |     Not null      |
|  月热度  |   monthHot   |     Int     |     Not null      |

### 4.2：帖子、文件详细信息关系模式定义——postDetailInfo

|   字段名称   |   字段代码    |   字段类型   | 数据约束 |
| :----------: | :-----------: | :----------: | :------: |
|    帖子ID    |    postID     |     Int      |   主键   |
| 封面图片地址 |  coverImgUrl  |   Varchar    |   Null   |
|   文件作者   |    Author     |   Varchar    |   Null   |
|   文件大小   |  fileMemory   |   Varchar    |   Null   |
|   下载总数   |  downloadNum  |     Int      |   Null   |
|  在线观看数  | readOnlineNum |     Int      | Not null |
|    总简介    |     maxBI     | Varchar(200) |   Null   |
|     章节     |   chapters    |              |   Null   |
|     评论     |   comments    |              | Not null |
|              |               |              |          |

#### 4.2.1：章节——chapter

| 字段名称 | 字段代码  | 字段类型 | 数据约束 |
| :------: | :-------: | :------: | :------: |
|  章节数  | chapIndex |   Int    | Not null |
| 章节标题 |   title   | Varchar  | Not null |

#### 4.2.2：评论——comment

| 字段名称 | 字段代码 | 字段类型 | 数据约束 |
| :------: | :------: | :------: | :------: |
| 评论者ID |  userID  |   Int    |   外键   |
|   内容   | content  | Varchar  | Not null |
| 评论日期 |   date   | Datetime | Not null |
| 评论时间 |   time   | Datetime | Not null |

### 4.3:用户账号个人信息关系模式定义——userInfo

|   字段名称   | 字段代码 |  字段类型   | 数据约束 |
| :----------: | :------: | :---------: | :------: |
|    用户ID    |    id    |     Int     |   主键   |
|    用户名    |   name   | Varchar(10) | Not null |
| 发布的帖子ID | postsID  |    Int[]    |   外键   |
|   头像地址   |  HPurl   |   Varchar   | Not null |
|   个人简介   |    BI    | Varchar(30) |   Null   |

### 4.4用户账号登录信息——userLoginInfo

| 字段名称 |  字段代码   |   字段类型    | 数据约束 |
| :------: | :---------: | :-----------: | :------: |
|   账号   |   account   | Varchar(5,16) |   主键   |
| 手机号码 | phoneNumber |  Varchar(11)  |   主键   |
|   密码   |  password   | Varchar(6,18) | Not null |
|  QQ号码  |  QQAccount  |    Varchar    |   Null   |



## 5.页面设计

<img :src="$withBase('/assets/img/羽翼文件中心/初版线框图.jpg')" alt="img">

## 6.编程实现与页面内容展示

### 6.0:页面命名与路由关系以及其他准备

#### 6.0.1:页面命名

首页:home 与 homePage

<img :src="$withBase('/assets/img/羽翼文件中心/homepage/1.jpg')" alt="img">

<img :src="$withBase('/assets/img/羽翼文件中心/homepage/2.jpg')" alt="img">

<img :src="$withBase('/assets/img/羽翼文件中心/homepage/3.jpg')" alt="img">

<img :src="$withBase('/assets/img/羽翼文件中心/homepage/4.jpg')" alt="img">

<img :src="$withBase('/assets/img/羽翼文件中心/homepage/5.jpg')" alt="img">

移动端

<img :src="$withBase('/assets/img/羽翼文件中心/homepage/p-1.jpg')" alt="img">

<img :src="$withBase('/assets/img/羽翼文件中心/homepage/p-2.jpg')" alt="img">

<img :src="$withBase('/assets/img/羽翼文件中心/homepage/p-3.jpg')" alt="img">

分类页: classicalPage

<img :src="$withBase('/assets/img/羽翼文件中心/classicalPage/1-1.jpg')" alt="img">

<img :src="$withBase('/assets/img/羽翼文件中心/classicalPage/1-2.jpg')" alt="img">

<img :src="$withBase('/assets/img/羽翼文件中心/classicalPage/2.jpg')" alt="img">

登录页: loginPage

<img :src="$withBase('/assets/img/羽翼文件中心/login/1.jpg')" alt="img">

<img :src="$withBase('/assets/img/羽翼文件中心/login/2.jpg')" alt="img">

<img :src="$withBase('/assets/img/羽翼文件中心/login/p-1.jpg')" alt="img">

搜索页: search

<img :src="$withBase('/assets/img/羽翼文件中心/search/1.jpg')" alt="img">

<img :src="$withBase('/assets/img/羽翼文件中心/search/p-1.jpg')" alt="img">

搜索结果页: searchPage


<img :src="$withBase('/assets/img/羽翼文件中心/search/2.jpg')" alt="img">

<img :src="$withBase('/assets/img/羽翼文件中心/search/3.jpg')" alt="img">

<img :src="$withBase('/assets/img/羽翼文件中心/search/p-2.jpg')" alt="img">

排行榜: rank

<img :src="$withBase('/assets/img/羽翼文件中心/rank/1.jpg')" alt="img">

帖子详细页: postDetailPage

<img :src="$withBase('/assets/img/羽翼文件中心/帖子详细页/1.jpg')" alt="img">

<img :src="$withBase('/assets/img/羽翼文件中心/帖子详细页/2.jpg')" alt="img">

<img :src="$withBase('/assets/img/羽翼文件中心/帖子详细页/3.jpg')" alt="img">

<img :src="$withBase('/assets/img/羽翼文件中心/帖子详细页/4.jpg')" alt="img">

#### 6.0.2:路由关系

|      路由地址       |        页面         |
| :-----------------: | :-----------------: |
|          /          |       app.vue       |
|        /home        |      home.vue       |
|       /home/        |    homePage.vue     |
| /home/classicalPage |  classicalPage.vue  |
|     /home/rank      |      rank.vue       |
|       /search       |     search.vue      |
|    /searchResult    |  searchResult.vue   |
|       /login        |      login.vue      |
|   /postDetailPage   | popstDetailPage.vue |

#### 6.0.3:其他准备

这个项目借用了bootstrap的部分样式和图标库、字体库



### 6.1:项目创建

#### 6.1.1:node.js与npm安装

登陆node.js官网，下载安装即可

通过cmd输入node -v 和 npm -v可以获得当前版本

#### 6.1.2:cnpm安装(可省略)

通过使用国内淘宝镜像，使得依赖、包下载速度更快一些

cmd输入

	npm install -g cnpm -registry=https://registry.npm.taobao.org

安装完成之后可以输入 cnpm -v获取版本

#### 6.1.3:Vue CLI安装

Vue CLI是一个基于vue.js进行快速开发的完整系统，提供实现交互式的脚本项目脚手架。

该依赖可升级、基于webpack构建，有合理的默认配置，可以通过插件进行扩展。

需要注意的是，Vue CLI3.0版本以上与3.0版本以下的差别较大。

3.0版本以上可以使用vue ui——图形化创建和管理Vue.js项目的用户界面

且3.0版本以上的安装方法和3.0版本以下的安装方法不一样

	// 3.0版本以上
	// 如果之前安装了3.0版本以下，想要升级为3.0版本以上，先执行以下代码卸载老版本的Vue CLI
	npm uninstall -g vue-cli
	// 然后执行以下代码进行安装
	npm install -g @vue/cli
	
	// 3.0以下版本
	npm install -g vue-cli
	
	// 版本检测
	vue -V
#### 6.1.4:Vue项目创建

使用Vue CLI 3.0版本以上的，可以通过 cmd 输入 vue ui打开可视化创建界面，这里不加赘述

除此之外也可以使用命令 

vue create 项目名 

来创建项目

这里~~因为vue ui创建项目报版本错误各种调试无果之后尝试用vue create并且成功完美卡住，所以~~使用的是 HBuilder X 自带的 vue 2.6.10项目创建

结果发现不太对劲，所以最后是使用vue-cli 2.9.6版本下的 vue init webpack 项目名 创建的



### 6.2 :依赖导入

#### 6.2.1:element-ui

一种基于vue的桌面端组件库

在项目文件夹下，使用cmd命令

	npm install element-ui -S

安装完成之后，我们在 src目录下的main.js文件中，导入依赖

```javascript
import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue'

Vue.use(ElementUI);
```

#### 6.2.2:vuex

Vuex 是实现组件全局状态(数据)管理的一种机制，可以方便的实现组件之间数据的共享

使用vuex统一管理状态的好处:

​	1.能够在vuex中集中管理共享的数据，易于开发和后期维护

​	2.能够高效地实现组件之间的数据共享，提高开发效率

​	3.存储在vuex中的数据都是响应式的，能够实时保持数据与页面的同步

在项目文件夹下，使用cmd命令

	npm install vuex --save

安装完成之后，可以在src目录下，看到store.js文件，如果没有，可以新建一个store.js文件

```javascript
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
	
	},
	mutations: {
	
	},
	actions: {
	
	}
})
```

查看main.js文件,导入store.js文件

```javascript
import store from './store'
// ...省略
new Vue({
	//...
	store,
	//...
})
```



#### 6.2.3:vue-router

Vue.js官方的路由管理器

安装vue-router,通过cmd输入

	npm install vue-router --sava

可以看到src目录新增了一个router.js文件或router文件夹，如果没有，可以新建

```javascript
// router.js
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
	routes: []
})
```

main.js引入

```javascript
//main.js
import router from './router'
//...

new Vue({
	router,
	store,
	//...
})
```

#### 6.2.4:axios

一种基于Promise的HTTP客户端，此处用于发送请求。

安装

	npm install axios --save

#### 6.2.5:webpack

模块打包器

	npm install webpack --save

#### 6.2.6:json5

和mock配套使用

	npm install json5 --save

~~实际上可能用不上，但是也可能用得上，所以先装着~~

#### 6.2.7:mockjs

随机数据，模拟各种场景，数据填充和测试作用

```javascript
npm install mockjs --save
```

#### 6.2.8:版本检查

安装依赖完成之后，可以在项目文件的 package.json中查看所安装的依赖的版本，检查其是否已经安装



### 6.3:全局数据准备

#### 6.3.1: mockjs的使用

在src目录下，新建一个目录mock，用于存放mock数据，并且在mock目录下新建index.js文件

mock的作用在于，监听http请求，并且根据请求生成数据，并将数据返回给浏览器，起到一个“后端”的作用。

那么，在index.js文件中，我们首先导入依赖

```javascript
const path = require('path')
// 路径获取——暂时没用到
const fs = require('fs')
// 文本操作——暂时没用到
const json5 = require('json5')
// 取代json——暂时也是没用到
const Mock = require('mockjs')
const Random = require('mockjs').Random
```
当前准备的需要随机生成的数据如下：

1. 所有用户的基本信息-allUsers
2. 所有标签的信息-allTags
3. 所有帖子/文件的基本信息-allPosts
4. 所有帖子/文件的详细信息-allPostDetailInfo

此处，以1为例

```javascript
let randomUsers = Math.round(Math.random() * (300 - 100) + 100)
// 用于获取一个随机的用户数

module.export = function (app) {
	// 监听http请求
	app.get('/user/allUsers', function (rep, res) {
		// 定义一个对象，因为传回浏览器的似乎只能传对象
		// list 用于存储用户的信息
		let allUsers = {
			list: []
		}
		for (let i = 0; i < randomUser; i++) {
			// 创建随机的user对象，并将其保存于allUser.list[]中
			let user = {
				id: i,
				name: '@cname()',
				postID: [],
				url: '',
				HPurl: Random.image('150x150', '#258bf7', '头像'),
				BI: '@cparagraph(1, 3)'
			}
			allUsers.list.push(user)
		}
		// 到这里，所有用户的基本信息的数据就创建好了，接下来将其传回
        var json = allUsers
        // 将json传回Mock.mock方法中，生成的数据返回给浏览器
        res.json(Mock.mock(json))
	})
    // ....
}
```

后续的内容类似，不重复

修改配置，在build/webpack.dev.conf.js中

```javascript
const devWebpackConfig = mwege(baseWebpackConfig, {
	//...
	proxy: config.dev.proxyTable,
	quiet: true,
	before: require('../src/mock/index.js'),
})
```



#### 6.3.2: axios的使用

axios用来发送请求，获取mock提供的数据

在src目录下创建新的目录vue-axios，创建新的文件vue-axios.js

```javascript
// vue-axios.js
import Vue from 'vue'
import axios from 'axios'
const http = {
  install () {
    Vue.prototype.axios = axios;
  }
}
export default http
```

并将其在main.js中绑定Vue实例上

```java
import axios from './vue-axios'
Vue.use(axios)
```

#### 6.3.3:调用测试

```html
// App.vue
//.....
<script>
	created () {
    this.axios.get('/user/allUsers')
      .then(res => {
        console.log(res.data)
      })
      .catch(err => {
        console.log(err)
      })
  }
</script>
```
运行，如果是使用HBuilder作为编译器的话，点击 运行到浏览器 便可执行运行，等待编译完成会提示 “Your application is running here: http://localhost:8080”，如果是其他编译器，则需要手动输入指令 npm dev run

打开浏览器，进入该页面，打开开发工具console，如果有内容输出，则说明功能正常，如果是404,则表示地址可能写错了，如果是500，则说明mock/index.js中的某个方法写错了导致无法输出。



#### 6.3.4:vuex的使用

所有用户的基本信息、所有帖子/文件的基本信息、所有帖子/文件的详细信息、所有标签的信息，这些都是属于公共的数据，这些数据都适合存储在vuex中，同时还有分类的信息，各种对数据的加工。

在 store.js 文件中

state 提供唯一的公共数据源，所有共享的数据都统一放到Store的State中进行存储

mutations 用于变更 store 中的数据，能且只能通过mutation变更state中的数据，不可以直接操作state中的数据

action 用于处理异步任务,如果通过异步操作变更数据，必须通过action，而不能使用mutation，但是在action中，还是通过触发mutation的方式变更数据

getter 用于对 state中的数据在不会修改原数据情况下进行加工处理成新的数据且返回

在state中添加新的数据allPosts,用于接收mock传回的数据

```javascript
state: {
	allPosts: [],
    allPostsReady: false
}
```
同时为了核对我们的数据已经获取到了，还可以定义一个布尔值变量allPostsReady



需要接收数据，改变state的值，因此在mutations中定义改变state中allPosts的方法

```javascript
// store.js
mutations: {
	setAllUsers (state, allUsers) {
        // 第一个参数表示state, 第二个参数表示传进来的值
		state.allUsers = allUsers
		state.allUsersReady = true
		console.log('the allUsers is ready')
	}
}
```


接下来回到App.vue，修改刚刚接收数据的回调函数

```javascript
// App.vue
this.axios.get('/user/allUsers')
	.then(res => {
		this.$store.commit('setAllUsers', res.data.list)
    	// 通过commit调用mutations中的方法
    	console.log(this.$store.state.allUsers)
    	// 通过state调用数据
	})
	.catch(err => {
		console.log(err)
	})
```



#### 6.3.5:备注

需要注意的是，axios 发送的是异步请求，在没有获得返回值的期间不进行停顿，后续的代码继续运行，这个问题在后面会讲解我在开发过程中触发的一个比较严重但解决起来并不困难甚至有点傻的bug

在这里，可以试试这一段代码的执行顺序：

```javascript
this.axios.get('/user/allUsers')
	.then(res => {
		console.log(res)
	})
	.catch(err => {
		console.log(err)
	})
console.log('看看谁先执行')
```


### 6.4:首页

#### 6.4.1:顶部导航栏——headerNav

在src目录下的components目录下保存单文件组件

本项目将通过一系列单文件组件的搭建实现

使用单文件组件有利于组件的复用和修改

src/components/header 目录将用于保存两个顶部导航栏组件，对应两种屏幕宽度

##### 1.正常电脑屏幕宽度：headerNav

采用的是element-ui中的导航栏，并做一些样式调整，且采用了多级菜单

```html
<el-menu>
	<el-menu-item>xxxx</el-menu-item>
	</el-submenu>
		<template slot="title">xxxx</template>
		<el-menu-item>xxxxx</el-menu-item>
	</el-submenu>
</el-menu>
```
*个人吐槽：element-ui的导航栏不太好用的样子……样式也好……交互效果也好……感觉并不好，之后找个时间重新做一个*

##### 2.窄屏宽度:headerNavMd

用搜索框代替了导航栏，而导航栏改为底部

通过fixed定位，固定在视口顶部，同时使用渐变色作为背景……

合理来说，点击搜索框应该是通过遮罩盖住其他内容展示出搜索页面，形成一个单页面应用的效果，但是此处采用的是跳转。

这个效果将会在后续的更新中调整。

旁边的按钮是为了展开一个侧边栏，但是目前来说这个侧边栏具备什么内容、什么功能尚未考虑完整，因此暂不开发

*因为element的icon没有合适的，所以这里还是导入了bootstrap的图标*



#### 6.4.2:页脚——foot

src/components/foot下保存的是两个页脚，依旧是对应两种不同屏幕宽度

##### 1.正常屏幕宽度：footer

普通的页脚，通过栅格布局和列表实现

```html
<el-row>
    <el-col v-for"">
        <div>
        	<ul>
                <li v-for=""></li>
            </ul>
        </div>
    </el-col>
</el-row>
```
关于列表的常用样式：

```css
.ul-style{
	list-style:none;
    padding:0;
    margin:0;
}
.li-style{
    padding:0;
    margin:0;
}
```
##### 2.窄屏宽度：buttomNav

底部导航栏，使之有移动端的界面效果

通过fixed定位，使导航栏能够固定于视口的底部。

使用inline-block和宽度、高度设置将选项保持水平居中

```html
<div style="width:95%" class="mx-auto">
	<div style="display:inline-block;width:19%;text-align:center;">
        <i></i>
        <p></p>
    </div>
    <!-- ... -->
</div>
```


#### 6.4.3:主体部分

通过栅格系统将整个页面分为左右两个部分，左部分为首页主体部分，右部分为侧栏，侧栏在窄屏的情况下会隐藏。

##### 1.轮播图与推荐栏

通过栅格系统对区块进行划分，在宽屏的情况下左右各半，窄屏的情况下呈上下布局

轮播图通过element-ui的走马灯Carousel实现。

推荐栏通过element-ui的标签页Tabs实现



##### 2.社交板块、各个分类、管理协会板块

社交板块与管理协会板块具体功能和页面实际上并没有相对应的设计，因此这里也只是占位表示它的存在，其是实现上依旧采用栅格系统进行布局。

”图文专区“和”视听专区“以及”管理协会“这三个部分基本一致，也是采用栅格布局之后做一些细节上的调整，实际上整一个的设计思路延续了bootstrap的media类，但又与media类不同在于用的是栅格。

其数据的载入也是依托于this.$store.getters.getxxx()来获取

#### 6.4.4:侧栏

##### 1.签到按钮——流光效果

设置渐变色背景、进行背景放大，通过@keyframes 绘制动画，通过使背景位移实现流光效果

html代码如下:

```html
<div class="checkIn mx-auto" id="notCheck" style="cursor: pointer;">
	<div class="font">签到</div>
</div>
```

css代码如下:

```css
.checkIn {
    height: 50px;
    display: block;
    position: relative;
    border-radius: 50px;
    text-decoration: none;
    background: linear-gradient(90deg, #00aaff, #ff00ff, #ffeb3b, #00aaff);
    background-size: 400%;
    width: 85%;
    color: white;
    font-weight: bold;
    z-index: 1;
  }

  .checkIn .font {
    position: relative;
    padding-top: 10px;
    font-size: 1.7rem;
    line-height: 1.5rem;
    text-align: center;
    text-shadow: 0 1px 0 #ff7d49;
  }

  .checkIn::before {
    content: "";
    position: absolute;
    left: -5px;
    right: -5px;
    top: -5px;
    bottom: -5px;
    z-index: -1;
    background: linear-gradient(90deg, #00aaff, #ff00ff, #ffeb3b, #00aaff);
    border-radius: 50px;
    background-size: 400%;
    filter: blur(20px);
  }

  @keyframes CheckInColor_turn {
    100% {
      background-position: -400% 0;
    }
  }

  .checkIn:hover {
    animation: CheckInColor_turn 4000ms infinite;
  }

  .checkIn:hover::before {
    animation: CheckInColor_turn 4000ms infinite;
  }
```

点击后更改数据disCheck，通过v-if变更按钮，同时弹出日历

日历是通过element-ui的日历组件Calendar和弹出框组件Popover实现的



##### 2.时钟

通过javascript自带的Date()函数构造Date对象，获取到当前的日期与时间，并通过Date.getFullYear()等方法拆分出年月日、时分秒、星期，并绑定在create钩子上，设置定时器setInterval()，刷新时钟。



##### 3.公告栏

通过element-ui的表格组件table进行自定义化实现的



##### 4.广告栏

无特殊要点

*实际上除了充当广告栏外，还可以作为热门帖子等的推荐位*



##### 5.标签展示组

该功能并未完成。

使用element-ui的标签组件tag进行自定义化实现的。

因为tag组件可以直接设置其背景色和样式，且通过v-bind动态绑定其字体颜色，可以实现鼠标移动到tag组件上时，通过调换背景颜色和字体颜色，使其样式不会过于单调。

但是目前背景颜色和字体颜色都是人工通过配色表进行输入的。

若搭建成一个上线的项目，用户添加新的标签的时候，或者这些标签展示的时候，理论来说应该是使用 建造者设计模式 来实现，用户添加新的标签，创建一个新的标签类的实例的时候，理应自动生成其背景色、颜色，根据两个颜色色环形成120°角左右的配色原则，其数据是否有一定的算法和规律可循？如果有规律可循那便可以制作出自动获取随机颜色并且自动配色的效果。



##### 6.排行榜

依旧是选项卡+列表组的组合，element-ui的选项卡样式不好改，用着也不好看，不过目前先这样。

排行榜中的排名是使用 i标签、伪类，以及v-for的index实现的

css样式如下：

```css
li i{
    display: inline-block;
    margin-right: 10px;
    width: 2.2vh;
    height: 2.2vh;
    line-height: 2.2vh;
    text-align: center;
    font-size: 1.5vh;
    color: #fff;
    background: #ccc;
    text-shadow: 0 -1px 1px rgb(0 0 0 / 25%);
    border-radius: 50%;
    box-shadow: 0 1px 3px rgb(0 0 0 / 15%);
}
li:first-of-type i{
    background-color:red
}
...
```

该样式编写于common.css文件中，该css文件也引用了部分bootstrap的样式。



##### 7.友链

element-ui的标签组件tag实现的，该功能并未完成，无法使用。

#### 6.4.5:备注

侧栏在窄屏的情况下会隐藏，实现移动端的效果



### 6.5:分类页——classicalPage

需要注意的是，进入这个页面的时候，需要进行传参，这个页面采用query传参和接收参数，这个参数用来表示这个页面显示哪个分类的内容。

该页面的路由，是出于和homePage同级的，属于兄弟路由，实现单页面应用效果，同时保持了侧栏、顶部、页脚

获取到这个参数之后，根据这个参数获取对应的帖子、并对其帖子所拥有的标签进行提取。

根据标签的选择、页码来生成展示出来的帖子。

这里使用到了两个单文件组件，一个是poster表示单个帖子的样式，一个是tag，表示单个标签的样式。

同时还使用到了element-ui的折叠窗样式



### 6.6:搜索页——search & searchResult

#### 6.6.1:搜索主页search

搜索页通过三个组件组合而成——分别为页眉、页脚、和搜索表单searchForm

搜索表单通过element-ui的表单组件form实现，绑定一个对象，包括所选项和所输入的关键字、通过按钮提交，将搜索信息表发送给搜索结果页searchResult，进行搜索并展示结果

搜索页内拥有热门搜索栏和搜索记录栏，在窄屏情况下只显示热门搜索栏

热门搜索栏通过列表组实现

#### 6.6.2:搜索结果页searchResult

搜索结果页尚未完成完整的响应式布局

有关搜索功能的实现，内容较长，而且实际上如果有后端的话没必要在前端实现这样子的功能，因此这个功能只是单纯为了目前这个交互效果更加的正式和演示效果更好。

这算是一个花里胡哨但实际上没什么太大作用的功能？

关于这个功能的实现可以查看文件夹下的 搜索功能的实现.md 文件



### 6.7:登录页——loginPage

三个组件，分别是登录表单、注册表单、重置密码表单

用正则表达式对表单的内容进行检测，如果错误通过激活输入框的错误类来提示用户输入错误。

如果成功则提示成功。

三个表单通过给父组件传递参数

this.$emit()，登录页通过接收这三个组件的参数以及v-if来变更三个表单的显示情况。

在原定计划(bootstrap版本下)，宽屏情况下，三个表单在显示出来时的动画是从右侧推出，消失时是在右侧移出视口，该效果目前尚未通过vue的动画实现，暂用更改透明度来实现替换。

该页面有能够进行响应式。



### 6.8:帖子/文件的详细页——postDetailPage

在其他页面点击帖子/文件的标题时，触发路由变化，通过push方法和param传递一个参数到postDetailPage，这个参数是帖子的ID。

根据这个ID，postDetailPage页面会从store获取这个帖子的基本信息和详细信息，并展示出来。

包含组件有：element-ui的卡片组件card、面包屑、列表组、选项卡、时间轴、分页器。

布局方面依旧采用栅格系统。

该页面的评论功能尚未完成。



### 6.9：排行榜——rank

这个页面只有窄屏情况下才可以进入，是因为窄屏情况下侧栏不显示，没法查看到排行榜的情况，因此在窄屏情况下的底部导航栏中添加打开排行榜页面的按钮。

只是从store获取到数据并展示。



### 6.#:一些特殊情况和经验介绍

关于数据加载的问题——axios的异步请求

详见关于数据加载的问题.md



