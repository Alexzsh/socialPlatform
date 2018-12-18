socialPlatform

> A Vue.js project

### 目录结构

├── App.vue			 	 APP
├── api/				 
│   └── api.js				调用后端api	
├── assets/				资源文件夹
│   └── logo.png
├── components/			组件文件夹
│   ├── HelloWorld.vue		
│   ├── common/			子组件（这边是自己开发时候的组件位置）
│   ├── global/				全局组件（header、main）
│   └── pages/				子页面 (有子组件拼接得到的子页面)
├── main.js				vue main
├── router/
│   └── routers.js			路由逻辑
├── store/
│   └── index.js			信息存储
├── styles/
│   └── base.scss			样式文件
└── utils/
​    └── index.js				工具方法

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080    <--- choose 
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run all tests
npm test
```

### 常用资源

- [饿了么组件库](https://element.eleme.io/#/zh-CN/component/)
- [twitter](https://twitter.com/i/notifications)

### 任务分配

- zsh
  - [x] 框架搭建
  - [ ] header （登出 通知。。。
  - [ ] 发动态 

- wck
  - [ ] 个人信息   跳转好友个人信息
  - [ ] 展示动态 点赞
  - [ ] 登录 注册
  - [ ] 好友列表 你可能认识的好友

- lq
  - [ ] 通知页
  - [ ] main 左上角 个人信息展示
  - [ ] 头像-个人信息-添加好友 悬浮框