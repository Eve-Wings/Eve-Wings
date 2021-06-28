---
title: HTTP协议基础
---
# HTTP协议基础


## 什么是HTTP协议

**协议**是一组规则，用于指定计算机应该如何通过网络来相互通信。

**HTTP协议**，即按照一定规则，向服务器请求数据，或发送数据；而服务器按照一定的规则，回应数据



Hyper Text Transfer Protocol (超文本传输协议)

用于从万维网服务器传输超文本到本地浏览器的传送协议

HTTP协议是基于TCP的应用层协议，**它不关心数据传输的细节**，主要是用来**规定客户端和服务器端的数据传输格式**，最初是用来向客户端传输HTML页面的内容。默认端口是80

HTTP 是基于**请求与响应**模式的、**无状态**、**应用层的协议**





## HTTP请求报文

HTTP请求报文主要由 请求行、请求头、空一行、请求体 四部分组成



### 请求行

请求行的组成： 请求方法(get/post) URL 协议版本



#### 请求方法(Request Method)

以什么方式处理资源、进行请求

| 请求方法 | 备注                                 |
| -------- | ------------------------------------ |
| GET      | 请求资源                             |
| POST     | 提交资源                             |
| Head     | 获取响应头                           |
| PUT      | 替换资源                             |
| DELETE   | 删除资源                             |
| OPTIONS  | 允许客户端查看服务器的性能           |
| TRACE    | 回显服务器收到的请求，用于测试或诊断 |



#### URL 

Uniform Resource Locator : 统一资源定位符

用于描述网上的资源

格式： schema://host[:port#]/path/.../[?query-string]

1. scheme:协议，如HTTP，HTTPS，ftp等
2. host：域名或IP地址
3. port：端口
4. path：资源路径
5. query-string：发送的参数



### 请求头

附加的、需要服务器需要知道的一些信息

| 请求头          | 描述                                                         |
| --------------- | ------------------------------------------------------------ |
| Host            | 主机IP地址或域名                                             |
| User-Agent      | 客户端相关信息，如操作系统、浏览器等信息                     |
| Accept          | 指定客户端接收信息类型，如：image/jpg, text/html, application |
| Accept-Charset  | 客户端接受的字符集，如gb2312 , iso-8859-1                    |
| Accept-Ecoding  | 可接受的内容编码，如gzip                                     |
| Accept-Language | 接受的语言，如Accept-Language:zh-cn                          |
| Authorization   | 客户端提供给服务端，及性能权限认证的信息                     |
| Cookie          | 携带的cookie信息                                             |
| Referer         | 当前文档的URL，即从哪个链接过来的                            |
| Content-Type    | 请求体内容类型，如Content-Type：application/x-www-from-url   |
| Content-Length  | 数据长度                                                     |
| Cache-Control   | 缓存机制，如Cache-Control:no-cache                           |
| Pragma          | 防止页面被缓存，和Cache-Control:no-cache作用一样             |



### 请求体

get请求方法没有请求体





## HTTP响应报文

HTTP响应报文主要由 状态行、响应头、空一行、响应体四部分组成



### 状态行

协议 + 状态码

#### 状态码(Status Code)

用以表示网页服务器HTTP响应状态的3位数字代码

| 状态码 | 描述                     |
| ------ | ------------------------ |
| 1XX    | 提示信息，请求被成功接收 |
| 2XX    | 成功，请求被成功处理     |
| 3XX    | 重定向相关               |
| 4XX    | 客户端错误               |
| 5XX    | 服务器端错误             |



### 响应头(Request Header)

| 响应头         | 描述                                     |
| -------------- | ---------------------------------------- |
| Server         | HTTP服务器的软件信息                     |
| Date           | 响应报文的事件                           |
| Expires        | 指定缓存过期时间                         |
| Set-Cookie     | 种Cookie                                 |
| Last-Modified  | 资源最后修改时间                         |
| Content-Type   | 响应的类型和字符集                       |
| Content-Length | 内容长度                                 |
| Connection     | 如Keep-Alive，表示保持tcp连接不关闭      |
| Location       | 致命重定向的位置，新的URL地址，如304情况 |

