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
								text: '浏览器',
								link: '/guide/fornt-end-learn/base/browser/'
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
							text: 'JQuery',
							link: '/guide/fornt-end-learn/promote/JQuery/'
						},
						{
							text: 'Bootstrap',
							link: '/guide/fornt-end-learn/promote/Bootstrap/'
						},
						{
							text: 'SASS',
							link: '/guide/fornt-end-learn/promote/SASS/'
						},
						{
							text: 'Mockjs',
							link: '/guide/fornt-end-learn/promote/Mockjs/'
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
						text: 'JQuery',
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
				link: '/guide/informal-essay/'
			},
			{
				text: '个人作品',
				link: '/guide/personal-works/'
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
			'/guide/technical-docs/Bootstrap/': [
				'',
				'网格系统',
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
			],
			'/guide/technical-docs/JQuery/': [
				''
			],
			'guide/technical-docs/Mockjs/': [
				''
			],
			'guide/technical-docs/Vue/': [
				''
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