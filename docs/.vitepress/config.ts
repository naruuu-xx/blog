export default {
  // These are app level configs.
  lang: 'zh-CN',
  title: '厦工计协',
  description: '厦工计协',
  appearance: true,
  themeConfig: {
    logo: '/xit.png',
    siteTitle: '厦工计协',
    nav: [
      // { text: '计协新闻', link: '/blog/first' },
      { text: 'test', link: '/blog/first' },
      {
        text: '更多',
        items: [
          { text: 'Item A', link: '/item-1' },
          { text: 'Item B', link: '/item-2' },
          { text: 'Item C', link: '/item-3' },
        ],
      },
      { text: '学校官网', link: 'https://www.xit.edu.cn/' },
    ],
    sidebar: {
      '/': [
        {
          text: '关于',
          items: [
            {
              text: '介绍',
              link: '/blog/introduction',
            },
            {
              text: '第一篇博客',
              link: '/blog/first',
            },
            {
              text: '第二篇博客',
              link: '/blog/second'
            },
            {
              text: '技术分享',
              link: '/blog/share',
            },
          ],
        },
        {
          text: 'Section Title B',
          items: [
            { text: 'Item C', link: '/item-c' },
            { text: 'Item D', link: '/item-d' },
          ],
        },
      ],
    },
    footer: {
      message: '',
      copyright: 'Copyright © 2022-present 厦工计协',
    },
    socialLinks: [{ icon: 'github', link: 'https://github.com/xitjx' }],
  },
}
