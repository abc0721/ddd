const monitorTuningSc = require('../monitor-tuning')
const httpProtocolSc = require('../http-protocol')
const dddSc = require('../ddd')
const cachePdpSc = require('../cache-pdp')
const imoccDesignPatternGenSidebarConfig = require('../imocc/design_pattern')
const designPatternGenSidebarConfig = require('../design_pattern')
const middlegroundSc = require('../middle-office')

module.exports = {
  // ~ 开发配置
  configureWebpack: {
    resolve: {
      alias: {
        '@alias': 'docs/statics'
      }
    }
  },
  dest: 'build/.vuepress/dist',  // 目录配置在外,纯粹是有代码洁癖和强迫症，并不能规避开发模式下同时构建不报错的问题
  host: 'localhost', // dev 的域名
  port: 8080,

  // ~ 站点配置
  title: 'LEARN-BOOK',
  description: 'note-book 的第二分仓笔记仓库',
  base: '/learn-book/', // gh-page 中是增加了项目名
  markdown: {
    lineNumbers: true
  },
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['link', { rel: 'manifest', href: '/manifest.json' }],
  ],
  // theme: 'vue',
  themeConfig: {
    docsDir: 'docs',
    sidebar: 'auto',
    sidebarDepth: 3, // 嵌套标题侧边栏提取深度，最大为 2，会提取到 h3
    smoothScroll: true,
    lastUpdated: '上次更新', // string | boolean
    // 假定是 GitHub. 同时也可以是一个完整的 GitLab URL
    repo: 'https://github.com/abc0721/learn-book',
    // 自定义仓库链接文字。默认从 `themeConfig.repo` 中自动推断为
    // "GitHub"/"GitLab"/"Bitbucket" 其中之一，或是 "Source"。
    repoLabel: 'GitHub',
    // 以下为可选的编辑链接选项
    // 假如你的文档仓库和项目本身不在一个仓库：
    // docsRepo: 'vuejs/vuepress',
    // 假如文档不是放在仓库的根目录下：
    docsDir: 'docs',
    // 假如文档放在一个特定的分支下：
    docsBranch: 'main',
    // 默认是 false, 设置为 true 来启用
    editLinks: true,
    // 默认为 "Edit this page"
    // editLinkText: '帮助我们改善此页面！',
    logo: '/mlogo.svg',
    // 主题级别的配置
    serviceWorker: {
      updatePopup: true
    },
    nav: [
        {
        text: '缓存架构-亿级流量电商详情页系统实战',
        ariaLabel: '缓存架构-亿级流量电商详情页系统实战',
        items: [
          {
            text: '综合性导航',
            items: [
              { text: '全目录导航', link: '/cache-pdp/' },
              { text: '第一版（001 ~ 123 章）', link: '/cache-pdp/001-introduce.md' },
              { text: '第二版（124 ~ 195 章）', link: '/cache-pdp/124.md' },
              { text: '课程总结（难题与解决方案）', link: '/cache-pdp/121.md' }
            ]
          },
          {
            text: '精彩知识精选',
            items: [
              { text: 'Redis 篇（redis 企业级集群架构）', link: '/cache-pdp/redis/007.md' },
              { text: '多级缓存架构设计', link: '/cache-pdp/035.md' },
              { text: '数据库 + 缓存双写一致性解决方案', link: '/cache-pdp/040.md' },
              { text: '缓存维度化拆分解决方案', link: '/cache-pdp/045.md' },
              { text: '缓存命中率提升解决方案', link: '/cache-pdp/051.md' },
              { text: '缓存并发重建冲突解决方案', link: '/cache-pdp/057.md' },
              { text: '缓存预热解决方案', link: '/cache-pdp/069.md' },
              { text: '热点缓存自动降级方案', link: '/cache-pdp/077.md' },
              { text: '缓存雪崩解决方案', link: '/cache-pdp/110.md' },
              { text: '缓存穿透解决方案', link: '/cache-pdp/117.md' },
              { text: '缓存失效解决方案', link: '/cache-pdp/119.md' },
              { text: '高可用分布式系统架构设计（hystrix 篇）', link: '/cache-pdp/hystrix/084.md' },
              { text: 'spring boot 整合 ehcache', link: '/cache-pdp/047.md' },
              { text: '史上最通俗易懂 Storm 教程', link: '/cache-pdp/storm/062.md' }
            ]
          }
        ]
      },
       {
          text:'课程目录', items: [
            { text: 'JAVA 生产环境下性能监控与调优详解', link: '/monitor-tuning/' },
            { text: '透视 HTTP 协议', link: '/http-protocol/' },
            { text: 'DDD 实战课', link: '/ddd/' },
            { text: '说透中台', link: '/middle-office/' },
            {
              text: '设计模式', items: [
                { text: '设计模式（慕课）', link: '/imocc/design_pattern/' },
                { text: '研磨设计模式（李兴华）', link: '/design_pattern/' }
              ]
            }
          ]
       }
    ],
    sidebar: {
      '/monitor-tuning/': monitorTuningSc(),
      '/http-protocol/': httpProtocolSc(),
      '/ddd/': dddSc(),
      '/cache-pdp/': cachePdpSc(),
       '/imocc/design_pattern/': imoccDesignPatternGenSidebarConfig(),
      '/design_pattern/': designPatternGenSidebarConfig(),
        '/middle-office/': middlegroundSc(),
    }
  },
  plugins: [
    ['vuepress-plugin-baidu-tongji-analytics', {
      key: 'b536d170ed239b225fdf6c847a14c342'
    }],
    ['@vuepress/back-to-top', true],
    ['@vuepress/pwa', {
      serviceWorker: true,
      updatePopup: {
        message: '有新内容更新啦~',
        buttonText: '立即获取新内容，确定后稍后自动刷新'
      }
    }],
    ['@vuepress/medium-zoom', {
      selector: '.theme-default-content img'
    }],
    ['@vuepress/search', {
      searchMaxSuggestions: 10
    }],
    ['vuepress-plugin-code-copy', true],
    ['@vuepress/last-updated', {
      transformer: (timestamp, lang) => {
        // 不要忘了安装 moment
        const moment = require('moment')
        return moment(timestamp).format('YYYY-MM-DD HH:mm:ss')
      }
    }],
    ['vuepress-plugin-tags'],
    ['vuepress-plugin-baidu-autopush', true]
  ]
}
