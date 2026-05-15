# Vee Sue Blog

Vee Sue 的个人博客，内容聚焦测试工程、质量体系、团队管理和技术实践。

项目基于 [Astro](https://astro.build/) 构建，主题改自
[Astro Scholar](https://github.com/whydevils/astro-scholar)。当前生产域名：
<https://veesue.com>

## 功能概览

- 静态博客，适合部署到 Cloudflare Pages、Vercel、Netlify 等平台。
- 文章使用 Markdown 编写，每篇文章独立目录管理。
- 首页、关于页、博客列表、文章详情页和 404 页面已配置。
- 支持亮色/暗色主题切换、移动端菜单、文章图片灯箱。
- 站点名称、简介、社交链接和 SEO 信息集中维护在 `src/constants.ts`。

## 技术栈

- Astro 6
- Markdown content pages
- 原生 CSS
- npm

## 本地开发

首次运行先安装依赖：

```bash
npm install
```

启动开发服务器：

```bash
npm run dev
```

Astro 通常会在 <http://localhost:4321> 启动本地预览。

也可以使用 Makefile：

```bash
make dev
```

## 常用命令

```bash
npm run dev      # 启动本地开发服务器
npm run build    # 构建生产版本，输出到 dist/
npm run preview  # 本地预览生产构建结果
```

## 目录结构

```text
.
├── public/                 # 静态资源，按原路径直接发布
│   ├── favicon.ico
│   ├── favicon.svg
│   ├── robots.txt
│   └── images/testing/     # 博客文章中使用的公共图片
├── src/
│   ├── assets/             # Astro 处理的图片和图标资源
│   ├── components/         # 页面组件
│   ├── layouts/            # 页面布局
│   ├── pages/              # Astro 页面和博客文章
│   ├── scripts/            # 前端交互脚本
│   ├── styles/             # 全局和页面样式
│   └── constants.ts        # 站点基础配置
├── astro.config.mjs        # Astro 配置
├── package.json
└── README.md
```

## 写作指南

博客文章放在 `src/pages/blog/` 下，每篇文章使用一个独立文件夹：

```text
src/pages/blog/
├── index.astro
└── my-post-slug/
    ├── index.md
    ├── cover.png
    └── attachment.pdf
```

文章入口必须命名为 `index.md`，并包含 frontmatter：

```markdown
---
layout: '../../../layouts/BlogPost.astro'
title: '文章标题'
date: '2026-05-15'
description: '显示在博客列表和搜索摘要中的一句话简介。'
tags: ['测试工程', '质量管理']
---
```

路由由文件夹名决定。例如：

```text
src/pages/blog/risk-based-testing/index.md
```

会生成：

```text
https://veesue.com/blog/risk-based-testing/
```

文章图片有两种放法：

```markdown
<!-- 放在同一篇文章目录中 -->
![封面](./cover.png)

<!-- 放在 public/ 中，使用站点根路径引用 -->
![风险地图](/images/testing/risk-map.svg)
```

建议每篇文章都填写清晰的 `title`、`date`、`description` 和 `tags`，这样博客列表、SEO 和分享预览会更稳定。

## 站点配置

常用站点信息在 `src/constants.ts` 中修改：

- `name`：作者或站点显示名
- `tagline`：首页标语
- `email`：联系邮箱
- `description`：SEO 和社交分享描述
- `siteUrl`：线上站点 URL
- `twitter`、`x`、`linkedin`、`github`、`scholar`：社交链接配置

如果生产域名变化，同时更新：

```text
src/constants.ts
astro.config.mjs
```

## 部署

项目可以直接部署为静态站点。Cloudflare Pages 推荐配置：

- Framework preset: `Astro`
- Build command: `npm run build`
- Build output directory: `dist`
- Node.js version: `22` 或更新版本

部署前建议本地执行：

```bash
npm run build
npm run preview
```

确认构建无误后再推送到远程仓库，并在部署平台绑定自定义域名 `veesue.com`。

## 主题来源

Original theme:
[whydevils/astro-scholar](https://github.com/whydevils/astro-scholar)，MIT License。
