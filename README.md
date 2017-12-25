# 三鑫社区

## install
```js
    npm install / cnpm install
```

## scripts
```js
    npm run dev // 跑服务
    npm run clear // 清除dist目录
    npm run webpack // webpack 打包
```

## 项目结构
```
├── build  项目构建配置
|—— dist 打包后生成文件
└── script
   ├── views  路由页面
   ├── data 数据文件
   ├── http axios配置
   ├── routers  路由配置
   └── server  
        ├── data_table  请求数据管理
        ├── SerModule  请求模块封装
        ├── uploads  上传图片
        └── server  node的express服务配置
   ├── src
        ├── main  入口文件
        └── App  视图文件
   ├── stantic 所需静态文件  [css, font, img]
   ├── store
        ├── actions 方法
        ├── mutition 方法
        ├── state 属性
        └── store  数据容器实例对象
   ├── text 说明文档
   ├── utiles 公用方法的封装
   └── components
    └── Home 主页面
        ├── Asides 侧边导航内容
            ├── Headers 导航头部信息
            └── AsideList 导航列表
        └── Main  主要内容
            ├── Headers 头部导航栏
            ├── MiddleCont 路由内容区域
                ├── Intermation 一口式受理平台
                ├── Menger  网络化管理平台
                    ├── ActMsg 活动信息与报名
                    └── Management 人员管理
                └── Public 公共管理平台
                    ├── MsgCont 信息管理
                        ├── MenuList 上传列表
                        └── PersonMsg 个人信息
                    └── ActCont 活动管理
                        ├── Introduce 活动介绍
                        ├── Apply 居民报名
                        ├── Invitation 邀请居民
                        └── Summary 活动总结

```

## 项目介绍

### 1.项目名称: 三鑫社区

### 2.项目功能：
#### 1> 大体介绍
    该项目是天津市政府为实现社区人民通过网络途径参与报名社区活动而打造的智慧社区体系。之前，居民报名参与活动需走7个流程，步骤复杂。有了该体系，居民可通过网络报名方式参与活动。同时也可以通过网络信息随时查看活动的状态。方便了政府管理，同时也方便了人民参与活动。

    该体系包括居民注册和登录功能（账号信息使用token加密方式，保证老年人群的合法权益及个人信息安全。）列表展示与添加，列表内容包含社区全体居民信息，及报名参与该社区活动人群信息。
    活动列表采取分页形式展示；可删除，编辑，可添加。删除时，判断登录状态，只有在登录状态之下才有删除的可能。此外还需判断本人是否有删除信息的权限，只有管理人员才可对报名信息进行删除操作。再确认删除时进行删除，这点避免了管理人员误点，误删的现象。

#### 2> 深入了解
    1.路由结构： 一级路由 home，login。
        home显示主页面
        login路由，登录注册功能。填写登录信息。判断登录用户及密码是否正确，正确时跳转到统计home路由页。用户不存在提示先注册。注册时候在，判断用户是否存在。不存在的时候进项用户添加注册。路由跳转到home也时候，将用户信息存储到store里面。
    二级路由 Intermation Public Intavitoe Introduce
### 3.项目技术
    项目采用Vue主流框架，集合vue-router，vueX 及第三方ui库element等技术进项开发。开发阶段，采用模拟数据以及模拟接口实现来功能。数据模拟，使用mokejs，随机生成若干数据。接口服务，使用的是nodejs的express启动本地服务，axios实现服务请求，返回请求后的数据结果，存储数据。数据的存储，则使用了数据容器store。数据容器封装方法，对state总数据进行实时更新保证列表页面内容实时刷新。页面采用的是单文件组件方式，将功能封装成单文件形式。这样方便后期对功能的完善，以及对bug的整改。页面的每个功能分成模块，也为前后台交互提供了方便。
