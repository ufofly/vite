import { defineConfig } from 'vitepress'
import { set_sidebar } from "../utils/auto-gen-sidebar.mjs"	// 改成自己的路径

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: "/vitepress/",
  head: [["link", { rel: "icon", href: "/vitepress/logo.png" }]],
  title: "web安全文档",
  description: "web安全学习笔记",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: 'web安全',link:'/docs/csrf' },
      { text: '威胁情报', link: '/docs/威胁情报/api-examples'},
      { text: '软件逆向', link: '/docs/软件逆向/markdown-examples'}
    ],
    outline: 'deep',
    sidebar: { "/docs/": set_sidebar("docs") },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/ufofly' }
     ],
    footer: {
      copyright: "Copyright © 2024 Flyme"
    },
    logo:"/logo.png",
    search: {
      provider: "local",
      options: {
        translations: {
          button: {
            buttonText: "搜索文档",
            buttonAriaLabel: "搜索文档",
          },
          modal: {
            noResultsText: "无法找到相关结果",
            resetButtonTitle: "清除查询条件",
            footer: {
              selectText: "选择",
              navigateText: "切换",
            },
          },
        },
      },
    },
  }
})
