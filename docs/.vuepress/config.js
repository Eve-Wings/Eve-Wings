module.exports = {
    themeConfig: {
      // logo设置
      logo: '/assets/img/hero.png',
      // 导航标签设置：
      nav: [
        {text: '主页', link: '/'},
        {
          text: '前端',
          items: [
            {
              text: '前端基础',
              items: [
                { text: 'HTML', link:'/guide/fornt-end/base/HTML' },
                { text: 'CSS', link:'/guide/fornt-end/base/CSS' },
                { text: 'JavaScript', link:'/guide/fornt-end/base/JavaScript'}
              ]
            },
            {
              text: '基础提升',
              items: [
                { text: 'JQuery', link: '/guide/fornt-end/promote/JQuery'},
                { text: 'Bootstrap', link: '/guide/fornt-end/promote/Bootstrap'},
                { text: 'SASS', link: '/guide/fornt-end/promote/SASS'},
                { text: 'Mockjs', link: '/guide/fornt-end/promote/Mockjs'}
              ]
            },
            {
              text: '进阶',
              items: [
                { text: 'Vue', link: '/guide/fornt-end/advanced/Vue' },
                { text: 'Element-ui', link: '/guide/fornt-end/advanced/Element-ui' }
              ]
            }
          ]
        },
        {text: '日常随笔', link: '/about/aboutBlog'},
        {text: '个人作品'},
        {text: '关于我'},
        {text: '本博客开发文档'}
      ]
    }
  }