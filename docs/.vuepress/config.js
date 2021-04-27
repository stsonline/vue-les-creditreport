const { description } = require('../../package')

module.exports = {
  base: '',
  title: 'Vue Les Credit Report',
  description: 'Seamlessly integrate our Credit Report modal and browser tab implementation to collect Credit Report sales with ease.',

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: '',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: false,
    nav: [
      {
        text: 'Guide',
        link: '/guide/',
      },
      {
        text: 'Config',
        link: '/config/'
      },
      {
        text: 'Examples',
        link: '/examples/'
      }
    ],
    sidebar: [
      {
        title: 'Guide',
        collapsable: false,
        sidebarDepth: 3,
        children: [
          '/guide/',
          '/guide/installation',
          '/guide/features'
        ]
      },
      {
        title: 'APIs',
        collapsable: false,
        sidebarDepth: 3,
        children: [
          '/config/'
        ]
      }
    ]
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom'
  ]
}
