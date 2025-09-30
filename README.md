# WmsWebReact

仓库管理系统前端React+TypeScript实现

## 项目简介

这是一个基于 React 和 TypeScript 开发的仓库管理系统（WMS）前端项目。系统提供了完整的仓库管理功能，包括商品管理、用户管理、管理员管理等功能模块。通过该系统，可以方便地管理仓库中的各类商品信息、用户权限以及相关操作记录。

系统采用现代化的前端技术栈，使用 Ant Design 作为 UI 组件库，提供美观且易用的用户界面。通过 Redux 进行状态管理，React Router 实现路由控制，确保应用具有良好的用户体验和可维护性。

## 技术栈

- React 18.x
- TypeScript
- React Router v6
- Redux + React Redux
- Ant Design UI 组件库
- react-scripts 构建工具

## 功能模块

- 用户登录认证
- 系统主页仪表板
- 管理员管理
- 用户管理
- 商品管理
- 仓储记录管理（根据路由配置推测）

## 项目结构

```
src/
├── components/           # 公共组件目录
│   ├── Aside.tsx         # 侧边栏组件
│   └── Hello.tsx         # 示例组件
├── pages/               # 页面组件目录
│   ├── admin/           # 管理员管理页面
│   │   └── AdminMange.tsx
│   ├── goods/           # 商品管理页面
│   │   └── GoodsMange.tsx
│   ├── home/            # 主页
│   │   └── Home.tsx
│   ├── login/           # 登录页面
│   │   ├── Login.tsx
│   │   └── login.css
│   ├── user/            # 用户管理页面
│   │   └── UserMange.tsx
│   └── Index.tsx        # 主框架页面
├── router/              # 路由配置
│   └── AppRouter.tsx
├── store/               # Redux 状态管理
│   ├── index.js
│   └── reducer.tsx
├── App.tsx              # 根组件
├── index.css            # 全局样式
└── index.tsx            # 应用入口文件

```

## 目录说明

- `components`: 存放可复用的公共组件，如导航栏、页脚等
- `pages`: 存放各个业务页面组件，按照功能模块划分目录
- `router`: 存放路由配置文件，负责页面路由的管理
- `store`: 存放 Redux 相关文件，用于全局状态管理
- 根目录下的 `App.tsx` 和 `index.tsx` 是应用的入口文件

## 路由配置

系统使用 HashRouter 进行路由管理，主要路由包括：

- `/` - 登录页面
- `/pages/Index` - 主框架页面
  - `/pages/Index/adminMange` - 管理员管理页面
  - `/pages/Index/userManage` - 用户管理页面
  - `/pages/Index/goodsMange` - 商品管理页面

## 启动项目

```bash
npm start
```

执行该命令后，项目将在开发模式下启动，默认访问地址为 http://localhost:3000

## 构建项目

```bash
npm run build
```

执行该命令将构建生产环境版本，输出文件位于 `build` 目录中。