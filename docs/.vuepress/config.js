module.exports = {
	base: '/Eve-Wings/',
	title: '羽翼丶年华',
	description: '一个简单的博客，记录自己的学习，记录自己的生活，记录自己的梦想，记录自己的创作',
	// =================================================//
	// head设置
	head: [['link',
		{
			rel: 'icon',
			href: 'public/favicon.png'
		},
	]],
	//=================================================//
	// 主题设置
	themeConfig: {
		lastUpdated: '更新时间',
		// logo设置
		logo: '/assets/img/icon.png',
		// 导航标签设置：
		nav: [
			{
				text: '主页',
				link: '/'
			},
			{
				text: '前端学习笔记',
				items: [
					{
						text: '总目录',
						link: '/guide/fornt-end-learn/'
					},
					{
						text: '基础',
						items: [
							{
								text: '浏览器与网络',
								link: '/guide/fornt-end-learn/base/browser-Internet/'
							},
							{
								text: 'HTML',
								link: '/guide/fornt-end-learn/base/HTML/'
							},
							{
								text: 'CSS',
								link: '/guide/fornt-end-learn/base/CSS/'
							},
							{
								text: 'JavaScript',
								link: '/guide/fornt-end-learn/base/JavaScript/'
							}
						]
					},
					{
						text: '基础提升',
						items: [{
							text: 'jQuery',
							link: '/guide/fornt-end-learn/promote/JQuery/'
						},
						{
							text: 'Bootstrap',
							link: '/guide/fornt-end-learn/promote/Bootstrap/'
						},
						{
							text: 'AJAX',
							link: '/guide/fornt-end-learn/promote/AJAX/'
						},
						{
							text: 'CSS预处理',
							link: '/guide/fornt-end-learn/promote/CSS预处理/'
						}
						]
					},
					{
						text: '进阶',
						items: [
							{
								text: 'Vue',
								link: '/guide/fornt-end-learn/advanced/Vue/'
							},
							{
								text: 'Element-ui',
								link: '/guide/fornt-end-learn/advanced/Element-ui/'
							}
						]
					}
				]
			},
			{
				text: '技术分享',
				items: [
					{
						text: '总目录',
						link: '/guide/technical-docs/'
					},
					{
						text: 'HTML',
						link: '/guide/technical-docs/HTML/'
					},
					{
						text: 'CSS',
						link: '/guide/technical-docs/CSS/'
					},
					{
						text: 'JavaScript',
						link: '/guide/technical-docs/JavaScript/'
					},
					{
						text: 'jQuery',
						link: '/guide/technical-docs/JQuery/'
					},
					{
						text: 'Bootstrap',
						link: '/guide/technical-docs/Bootstrap/'
					},
					{
						text: 'Mockjs',
						link: '/guide/technical-docs/Mockjs/'
					},
					{
						text: 'Vue',
						link: '/guide/technical-docs/Vue/'
					},
					{
						text: 'Element-ui',
						link: '/guide/technical-docs/Element-ui/'
					}
				]
			},
			{
				text: '日常随笔',
				items: [
					{ text: '见闻录', link: '/guide/informal-essay/见闻录/'},
					{ text: '生活与工作', link: '/guide/informal-essay/生活与工作/'}
				]
			},
			{
				text: '个人作品',
				items: [
					{ text: '程序', link: '/guide/personal-works/程序/'},
					{ text: '画阁', link: '/guide/personal-works/画阁/'},
					{ text: '书斋', link: '/guide/personal-works/书斋/'}
				]
			},
			{
				text: '关于',
				link: '/guide/About/'
			},
			{
				text: '文档日志',
				link: '/guide/journal'
			},
			{
				text: 'github',
				link: 'https://github.com/Eve-Wings'
			}
		],
		// 侧边导航栏
		sidebar: {
			'/guide/About/': [
				'',
				'AboutMe',
				'info'
			],
			'/guide/fornt-end-learn/base/browser-Internet/':[
				'',
				'七层模型',
				'HTTP协议基础'
			],
			'/guide/fornt-end-learn/base/JavaScript/':[
				'',
				'1.面向对象编程介绍',
				'2.ES6中的类和对象',
				'3.类的继承',
				'4.ES6中类和对象注意点',
				'5.构造函数和原型',
				'6.构造函数与原型继承',
				'7.ES5新增方法',
				'8.函数的定义和调用',
				'9.this',
				'10.严格模式',
				'11.高阶函数',
				'12.闭包',
				'13.递归',
				'14.浅拷贝与深拷贝',
				'15.正则表达式',
				'1.ES6简介',
				'2.ES6变量声明',
				'3.解构赋值',
				'4.箭头函数'
			],
			'/guide/fornt-end-learn/promote/JQuery/':[
				'',
				'1.jQuery概述',
				'2.jQuery基本使用',
				'3.jQuery常用API',
				'4.jQuery事件',
				'5.jQuery其他方法'
			],
			'/guide/fornt-end-learn/promote/Bootstrap/':[
				'',
				'1.网格系统',
				'2.图片类',
				'3.表格类',
				'4.文本类',
				'5.折叠窗与手风琴',
				'6.选项卡',
				'7.Bootstrap卡片与延展链接',
				'8.Bootstrap弹性盒与浮动布局'
			],
			'/guide/fornt-end-learn/promote/AJAX/':[
				'',
				'1.AJAX基础',
				'2.环境配置',
				'3.AJAX基本使用',
				'4.jQuery的AJAX',
				'5.axios',
				'6.其他'
			],
			'/guide/fornt-end-learn/promote/CSS预处理/':[
				'',
				'less'
			],
			'/guide/technical-docs/Bootstrap/': [
				''
			],
			'/guide/technical-docs/CSS/': [
				''
			],
			'/guide/technical-docs/Element-ui/': [
				''
			],
			'/guide/technical-docs/HTML/': [
				''
			],
			'/guide/technical-docs/JavaScript/': [
				'',
				'声明提升',
				'原型与原型链',
				'原型式继承',
				'ES6的继承',
				'继承方式的区别',
				'JavaScript作用域',
				'闭包',
				'手写一个trim()方法'
			],
			'/guide/technical-docs/JQuery/': [
				''
			],
			'/guide/technical-docs/Mockjs/': [
				''
			],
			'/guide/technical-docs/Vue/': [
				''
			],
			'/guide/informal-essay/生活与工作/':[
				'',
				'笔记本收藏'
			]
			
		},
		smoothScroll: true
	},

	//============================================//
	// 插件配置
	plugins: {
		'@vuepress/back-to-top': true,
		'@vuepress/medium-zoom': {
			selector: 'img'
		}
	}
}