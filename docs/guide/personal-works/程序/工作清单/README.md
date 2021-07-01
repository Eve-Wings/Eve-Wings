---
title: 工作清单开发文档
sidebar: auto
---
# 工作清单开发文档

## 0.前言

本工具十分常见，几乎各种教学视频都会有相关的案例进行开发。

虽然总体技术难度不难，但是还是要认真对待。

原本从个人的角度来说是不太需要这个工具的，但是随着学习内容的不断增加，日程安排的不断复杂，该工具的重要性已经不是备忘录之类的可以替代的了——即使我有着一般严重的备忘录记录症……

因此，该工具的开发被提了上来。

一个能够记录更多细节和更清晰更详细的待办事项列表


## 1.系统规格说明

### 1.1：系统功能和目标

toDoList——一个能够记录更多细节和更清晰更详细内容的待办事项列表

### 1.2：主要功能

| 功能       | 描述                                                       | 备注             |
| ---------- | ---------------------------------------------------------- | ---------------- |
| 登录/注册  | 用户可以登录/注册账号                                      | 暂不具备实际作用 |
| 新建分类   | 用户可以根据自己的习惯新建一个分类                         |                  |
| 新建事项   | 用户可以在分类下新建一个事项                               |                  |
| 新建子事项 | 用户可以在一个事项下新建子事项，用于对事项的详细描述、规划 |                  |
| 修改事项   | 用户可以修改事项的内容(包括子事项)                         |                  |
| 完成事项   | 用户可以勾选事项表示事项已经完成(包括子事项)               |                  |
| 删除事项   | 用户可以删除不需要的事项                                   |                  |
| 云同步     | 用户可以根据账号信息同步事项列表                           | 暂不具备实际作用 |



## 2.总体设计

### 2.1：系统输入

1. 新建分类信息
2. 新建事项信息
3. 新建子事项信息
4. 修改事项信息
5. 完成事项请求
6. 删除事项请求
7. 用户注册信息
8. 用户登录信息
9. 云同步请求

### 2.2：系统输出

1. 事项列表
2. 用户信息



## 3.概要设计

### 3.1：操作流程

<img :src="$withBase('/assets/img/toDoList/操作流程图.jpg') " alt="操作流程图">



### 3.2：用例图

<img :src="$withBase('/assets/img/toDoList/用例图.jpg')" alt="用例图">



## 4.数据库设计

### 4.1 E-R图

<img :src="$withBase('/assets/img/toDoList/E-R图.jpg')" alt="E-R图">



### 4.2 用户基础信息关系模式定义——userInfo

| 字段名称 | 字段代码 |   字段类型    | 数据约束 |
| :------: | :------: | :-----------: | :------: |
| 用户账号 | account  | Varchar(6,16) |   主键   |
| 用户密码 | password | Varchar(6,18) | Not Null |
|  用户ID  |  userID  |      Int      |   外键   |

### 4.3 代办事项列表关系模式定义——matterList

| 字段名称 |    字段代码    | 字段类型 | 数据约束 |
| :------: | :------------: | :------: | :------: |
|  用户ID  |     userID     |   Int    |   主键   |
|   分类   | classification |          |   Null   |

### 4.4 分类关系模式定义——classification

| 字段名称 | 字段代码 |   字段类型    | 数据约束 |
| :------: | :------: | :-----------: | :------: |
|  分类名  |  label   | Varchar(1,20) | Not Null |
| 代办事项 | matters  |               |   Null   |

### 4.5 代办事项关系模式定义——matters

|  字段名称  |    字段代码    |   字段类型    | 数据约束 |
| :--------: | :------------: | :-----------: | :------: |
|   事项名   |     label      | Varchar(1,20) | Not Null |
|  事项描述  |    describe    | Varchar(100)  |   Null   |
|  创建时间  |   createTime   |   Datetime    | Not Null |
| 拟完成时间 | completionTime |   Datetime    |   Null   |
|   优先级   |    priority    |      Int      |   Null   |
|  完成情况  |   completion   |      Bit      | Not Null |
| 代办子事项 |  matter-sons   |               |          |

### 4.6 代办子事项关系模式定义——matter-sons

|  字段名称  |    字段代码     |   字段类型    | 数据约束 |
| :--------: | :-------------: | :-----------: | :------: |
|   事项名   |      label      | Varchar(1,20) | Not Null |
|  事项描述  |    describle    | Varchar(100)  |   Null   |
|  创建时间  |   createTime    |   Datetime    | Not Null |
| 拟完成时间 | completionTime |   Datetime    |   Null   |
|   优先级   |    priority     |      Int      |   Null   |
|  完成情况  |   completion    |      Bit      | Not Null |



### 4.7 数据结构设计

```javascript
user = {
	account: '',
	password: '',
	userID: 0,
	mattersLists: []
}

mattersList = {
    label: '',
    matters: []
}

matter = {
	label: '',
	describe: '',
	createTime: '',
	completionTime: '',
	priority: 0,
	completion: false,
	matter-sons: []
}

matter-son = {
	label: '',
	describe: '',
	createTime: '',
	completionTime: '',
	priority: 0,
	completion: false
}
```



## 5.页面设计

简单线框图(因为工具的问题，暂不进行细化)

<img :src="$withBase('/assets/img/toDoList/简单线框图.jpg')" alt="用例图">



## 6.编程实现

### 6.1 项目创建与依赖导入

使用vue.js技术，vue版本为 3.0.0， @Vue/cli 版本为 4.5.13

使用naive-ui框架——主要是对naive-ui的一次尝试

naive-ui 官网：[https://www.naiveui.com/zh-CN/light](https://www.naiveui.com/zh-CN/light)

同时使用 vuex，以支持数据的存储。

::: danger 提示

:warning: 因为暂不打算开发后端，所以所有的数据都是以本地缓存的方式进行存储

:::

::: warning 提示

vuex的版本是4.0.2

且在vue2与vue3中，vuex的使用方式不同

```javascript
// vue3 store/index.js
import { createStore } from 'vuex'
```

:::

