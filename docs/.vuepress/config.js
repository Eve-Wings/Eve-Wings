module.exports = {
    title: '羽翼丶年华',
    description: '一个简单的博客，记录自己的学习，记录自己的生活，记录自己的梦想，记录自己的创作',
    themeConfig: {
      lastUpdated: '更新时间',
      // logo设置
      logo: '/assets/img/hero.png',
      // 导航标签设置：
      nav: [
        {text: '主页', link: '/'},
        {
          text: '前端学习笔记',
          items: [
            {
              text: '基础',
              items: [
                { text: 'HTML', link:'/guide/fornt-end-learn/base/HTML' },
                { text: 'CSS', link:'/guide/fornt-end-learn/base/CSS' },
                { text: 'JavaScript', link:'/guide/fornt-end-learn/base/JavaScript'}
              ]
            },
            {
              text: '基础提升',
              items: [
                { text: 'JQuery', link: '/guide/fornt-end-learn/promote/JQuery'},
                { text: 'Bootstrap', link: '/guide/fornt-end-learn/promote/Bootstrap'},
                { text: 'SASS', link: '/guide/fornt-end-learn/promote/SASS'},
                { text: 'Mockjs', link: '/guide/fornt-end-learn/promote/Mockjs'}
              ]
            },
            {
              text: '进阶',
              items: [
                { text: 'Vue', link: '/guide/fornt-end-learn/advanced/Vue' },
                { text: 'Element-ui', link: '/guide/fornt-end-learn/advanced/Element-ui' }
              ]
            },
            {
              text: '浏览器',
              items: [
                {text: '浏览器', link: '/'}
              ]
            }
          ]
        },
        {
          text: '技术分享',
          items: [
            {text: 'HTML', link: '/guide/technical-docs/HTML/'},
            {text: 'CSS', link: '/guide/technical-docs/CSS/'},
            {text: 'JavaScript', link: '/guide/technical-docs/JavaScript/'},
            {text: 'JQuery', link: '/guide/technical-docs/JQeury/'},
            {text: 'Bootstrap', link: '/guide/technical-docs/Bootstrap/'},
            {text: 'Mockjs', link: '/guide/technical-docs/Mockjs/'},
            {text: 'Vue', link: '/guide/technical-docs/Vue/'},
            {text: 'Element-ui', link: '/guide/technical-docs/Element-ui/'}
          ]
        },
        {text: '日常随笔', link: '/guide/informal-essay/'},
        {text: '个人作品', link: '/guide/personal-works/'},
        {text: '关于我', link:'/guide/AboutMe'},
        {text: '本博客开发文档', link: '/guide/博客的搭建'}
      ]
    }
  }