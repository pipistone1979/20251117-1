# 京东商城首页（Vue 3 + Vite）

## 技术栈

- Vue 3（Composition API）
- Vue Router
- Pinia
- Axios + Mock.js（模拟数据）
- Sass（SCSS）
- Vite

## 功能模块

- 顶部导航栏、搜索框
- 轮播图（自动/手动）
- 商品分类（一级/二级菜单）
- 秒杀专区（倒计时展示）
- 商品推荐（悬停动效）
- 响应式布局（PC/移动端）

## 快速开始

```bash
npm install
npm run dev
```

构建与预览：

```bash
npm run build
npm run preview
```

## 目录结构

- `src/components`：页面组件
- `src/pages`：路由页面
- `src/stores`：Pinia 状态管理
- `src/mocks`：Mock.js 模拟接口
- `src/styles`：全局样式与变量

## 说明

- 项目为纯前端演示，数据通过 Mock.js 生成与拦截
- 采用 SCSS 编写样式，并使用媒体查询适配移动端