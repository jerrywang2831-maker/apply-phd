import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'zh-CN',
  title: '中国顶尖高校博士申请指南',
  description: '神经工程/生物医学工程方向2026年秋季博士申请信息汇总',
  lastUpdated: true,
  cleanUrls: true,

  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '申请指南', link: '/guide/' },
      { text: '院校详情', link: '/universities/' },
      { text: '研究方向', link: '/research-directions/' },
      { text: '关于本站', link: '/about' }
    ],

    sidebar: {
      '/guide/': [
        {
          text: '申请指南',
          items: [
            { text: '概览', link: '/guide/' },
            { text: '2026年申请时间线', link: '/guide/timeline' },
            { text: '申请流程详解', link: '/guide/process' },
            { text: '申请材料准备', link: '/guide/materials' },
            { text: '奖学金信息', link: '/guide/csc-scholarship' },
            { text: '常见问题', link: '/guide/faq' },
            { text: '导师联系追踪', link: '/guide/contact-tracking' }
          ]
        }
      ],
      '/universities/': [
        {
          text: '院校总览',
          link: '/universities/',
          collapsed: false,
          items: [
            {
              text: '北京地区',
              collapsed: false,
              items: [
                { text: '清华大学', link: '/universities/tsinghua' },
                { text: '北京大学', link: '/universities/peking' },
                { text: '北京航空航天大学', link: '/universities/buaa' },
                { text: '中国科学院', link: '/universities/cas' }
              ]
            },
            {
              text: '上海 / 华东地区',
              collapsed: false,
              items: [
                { text: '上海交通大学', link: '/universities/sjtu' },
                { text: '浙江大学', link: '/universities/zju' },
                { text: '复旦大学', link: '/universities/fudan' },
                { text: '中国科学技术大学', link: '/universities/ustc' },
                { text: '南京大学', link: '/universities/nju' },
                { text: '东南大学', link: '/universities/seu' }
              ]
            },
            {
              text: '其他地区',
              collapsed: false,
              items: [
                { text: '华中科技大学', link: '/universities/hust' },
                { text: '天津大学', link: '/universities/tju' },
                { text: '西安交通大学', link: '/universities/xjtu' },
                { text: '四川大学', link: '/universities/scu' },
                { text: '中山大学', link: '/universities/sysu' }
              ]
            }
          ]
        }
      ],
      '/research-directions/': [
        {
          text: '研究方向',
          items: [
            { text: '总览', link: '/research-directions/' },
            { text: '神经工程 / 脑机接口', link: '/research-directions/bci' },
            { text: '生物医学工程', link: '/research-directions/bme' },
            { text: '神经科学（基础与临床）', link: '/research-directions/neuroscience' },
            { text: '医学物理 / 影像', link: '/research-directions/medical-physics' }
          ]
        }
      ]
    },

    search: {
      provider: 'local',
      options: {
        locales: {
          root: {
            translations: {
              button: { buttonText: '搜索', buttonAriaLabel: '搜索文档' },
              modal: {
                noResultsText: '未找到相关结果',
                resetButtonTitle: '清除搜索条件',
                footer: { selectText: '选择', navigateText: '切换' }
              }
            }
          }
        }
      }
    },

    outline: { label: '本页内容', level: [2, 3] },
    docFooter: { prev: '上一页', next: '下一页' },
    lastUpdated: { text: '最后更新' },
    returnToTopLabel: '返回顶部',
    sidebarMenuLabel: '菜单',
    darkModeSwitchLabel: '主题',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式'
  },
})
