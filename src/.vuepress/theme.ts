/** @format */

import { hopeTheme } from "vuepress-theme-hope";
import navbar from "./navbar/index.js";
import sidebar from "./sidebar/index.js";

export default hopeTheme({
  hostname: "http://www.cdmcs.com/",
  author: {
    name: "杨新",
    url: "http://www.cdmcs.com/",
  },
  iconAssets: "iconfont",
  logo: "/logo.svg",
  repo: "cdmcs/cdmcs-develop-standard",
  docsDir: "src",

  fullscreen: true,
  print: false,

  themeColor: {
    blue: "#2196f3",
    red: "#f26d6d",
    green: "#3eaf7c",
    orange: "#fb9b5f",
  },
  // hotReload: true,

  locales: {
    "/": {
      navbar: navbar,
      sidebar: sidebar,
      displayFooter: true,
      footer: "MIT Licensed | Copyright © 2023-present 成都麦柯系统集成有限公司",
      copyright: false,
    },
  },
  // encrypt: {
  //   config: {
  //     "/public-component-intro/": ["Cdmcs028"],
  //   },
  // },

  plugins: {
    //评论功能
    comment: {
      provider: "Giscus",
      repo: "cdmcs/cdmcs.github.io",
      repoId: "R_kgDOJNPjvw",
      category: "Devlop",
      categoryId: "DIC_kwDOJNPjv84CVGvk",
    },

    copyCode: {
      showInMobile: true,
    },
    mdEnhance: {
      align: true,
      attrs: true,
      chart: true,
      codetabs: true,
      container: true,
      demo: true,
      echarts: true,
      figure: true,
      flowchart: true,
      gfm: true,
      imgLazyload: true,
      imgSize: true,
      include: true,
      katex: true,
      mark: true,
      mermaid: true,
      playground: {
        presets: ["ts", "vue"],
      },
      presentation: {
        plugins: ["highlight", "math", "search", "notes", "zoom"],
      },
      stylize: [
        {
          matcher: "Recommended",
          replacer: ({ tag }) => {
            if (tag === "em")
              return {
                tag: "Badge",
                attrs: { type: "tip" },
                content: "Recommended",
              };
          },
        },
      ],
      sub: true,
      sup: true,
      tabs: true,
      vPre: true,
      vuePlayground: true,
    },
  },
});
