[TOC]

# 开发规范说明文档

## 项目结构说明

```
src

    api/                                请求api目录
    |-- A.ts                        	请求文件
    assets/                             静态资源目录
    |-- style/                          样式目录
    |---- common.less                    公共样式
    |---- theme.less                     自定义主题（后续可能要动态切换主题，换一种实现方式）
    |-- img                             图片目录
    |-- icon                            图标目录（更改了图标库，可能要弃用）
    components/                         组件目录
    |-- base/                           后台CRUD基础组件
    |-- common/                         公共组件
    |-- layout/                         后台布局
    |---- HeaderLayout.vue               导航面包屑
    |---- SiderLayout.vue                侧边栏菜单
    |---- ContentLayout.vue              主要内容区
    |---- Layout.vue         	        入口
    config
    |-- index.ts						全局配置(与环境配置相关放env文件)
    directives
    |-- index.ts						全局自定义指令
    plugins                         插件目录
    |-- vue-echarts.ts                  按需引入vue-echarts组件
    router                          路由配置
    |-- index.ts                        路由入口
    |-- routes                        路由文件夹
    |---- index.ts
    |---- module                        路由分模块处理
    |------ basicRoutes.ts               静态路由(一般：登录+404) 不需要登录
    |------ permissionRoutes             带有权限的动态路由
    |------ screenRoutes                 带有权限的大屏路由
    |-- helper
    |---- index.ts                        路由工具类
    |-- guard
    |---- index.ts                        导航守卫（权限处理、进度条、标题等处理）
    store                           状态管理
    |-- index.ts                        pinia入口
    |-- modules/                        store模块
    utils                           工具类
    |-- http.ts                         请求封装
    |-- helper.ts                       常用函数
    views                           视图目录
    |-- backstage/                      后台views
    |-- screen/                         大屏views
    |-- login/                          登录页
    |-- error/                          错误转发页
    main.ts                         入口文件

```

## 文件引用写法

### 一、公共的文件引用

必须要用 `@` 符号，路径别名的方式引入（别人好 CV）

### 二、局部文件

用 `../` 相对路径引入（表明此组件不通用、引入要小心了）

## 命名规范

### 一、文件命名

#### 目录命名

全部采用小写方式， 以中划线分隔，不用复数

例如：

```json
styles / components / util / demo-style / demo-script / img / doc  √

style / component / util / demoStyles / demo_scripts / imgs / docs    ×
```

#### `JS、TS、CSS、LESS、HTML、PNG` 文件命名

全部采用小写方式， 以中划线分隔

例如：

```json
render-dom.js / user-management.html  √

renderDom.js / UserManagement.html    ×
```

#### VUE 文件命名

views 下视图.vue 文件 - 小驼峰

例如：

```json
systemSettings.vue   √

system-settings.vue    ×

SystemSettings.vue    ×
```

注：下视图文件一般以文件夹为模块主体命名\*，其中 vue 视图文件一般以列表：`list.vue`，详情
：`detail.vue`，新增：`add.vue`等形式命名

components 下组件.vue 文件 - 大驼峰

```json
AppHeader   √

appHeader   ×

app-header  ×
```

#### 命名严谨性

代码中的命名严禁使用拼音与英文混合的方式，更不允许直接使用中文的方式。说明：正确的英文拼写和语法可以
让阅读者易于理解，避免歧义。注意，即使纯拼音缩写命名方式也要避免采用除表单中数据与后端接口绑定值为拼
音简写时可使用

### 二、JS 、TS 变量命名

#### 变量

命名方式：小驼峰

命名规范：前缀名词

命名建议：语义化

例如：

```javascript
// 友好

let isLogin = true

let tableTitle = 'LoginTable'

// 不友好

let isFlag = true

let getTitle = 'LoginTable'
```

#### 常量

命名方式：全部大写

命名规范：使用大写字母和下划线来组合命名，下划线用以分割单词

命名建议：语义化

```javascript
const MAX_COUNT = 10

const BASE_URL = 'http://www.foreverz.com'
```

#### 函数

命名方式：小驼峰式命名法。

命名规范：前缀应当为动词。

命名建议：语义化（动词 + 名词）

可以参考如下的动作

| 动词          |             含义             |                        返回值                         |
| ------------- | :--------------------------: | :---------------------------------------------------: |
| is+ var +able | 判断是否可执行某个动作(权限) |   函数返回一个布尔值。true：可执行；false：不可执行   |
| has           |      判断是否含有某个值      | 函数返回一个布尔值。true：含有此值；false：不含有此值 |
| is            |       判断是否为某个值       | 函数返回一个布尔值。true：为某个值；false：不为某个值 |
| get           |          获取某个值          |                 函数返回一个非布尔值                  |
| set           |          设置某个值          |      无返回值、返回是否设置成功或者返回链式对象       |
| load          |         加载某些数据         |          无返回值或者返回是否加载完成的结果           |
| handle        |     对 DOM 事件进行处理      |                   看情况，一般没有                    |

例如：

```javascript
// 是否可阅读
function isReadable(){
    ...
    return true;
}

// 获取用户列表数据
function getUserList(){
    ...
    return userList;
}
```

#### 项目中特殊情况命名

-   ##### api 文件
    文件名：一般与 views 下视图文件名字对应例如：
    ```json
    //api文件目录
    api/user.js
    //views下视图vue文件
    views/backstage/user/list.vue
    ```

````

  增删改查方法命名及注释
例如：

  ```javascript
  /**
   * 查询用户列表
   * @param {Integer} pageNumber
   * @param {Integer} pageSize
   * @param {Object} formObj
   */
  export const getUserList = (pageNumber, pageSize, formObj) => {
    ...
}

  /**
   * 查询用户信息
   * @param {Integer} userId
   */
  export const getUserInfo = (userId) => {
    ...
}

  /**
   * 新增用户
   * @param {Object} user
   */
  export const addUser = (user) => {
    ...
}

  /**
   * 修改用户信息
   * @param {Object} user
   */
  export const updateUser = ({ id, ...user }) => {
    ...
}

  /**
   * 删除用户
   * @param {Integer} userId
   */
  export const deleteUser = (userId) => {
    ...
  }
````

-   ##### config 配置文件
    说明：配置最高级模块采用全大写命名，子级采用下划线分隔命名例如：
    ```javascript
    exports {
      OAUTH: {
          //oauth中请求头内需加密的client_id
          client_id: 'client',
          //oauth中请求头内需加密的client_secret
          client_secret: '123456'
      },
      ...
    }
    ```

````

- ##### theme 主题文件

  说明：主题文件内自定义变量命名以 v-开头与 antdv 变量区分开
  例如：

  ```javascript
  light: {
    'v-background': '#f0f2f5',  //自定义背景底色（非antd内变量）
    'v-action-bar-bg': '#FAFBFD',     //自定义action bar 背景色
    'body-background': '#fff',  //背景
    'text-color': '#5A6275', // 主文本色
  },
  dark: {
    'v-background': '#1B2431',  //自定义背景底色
    'v-action-bar-bg': '#323D4E',     //自定义action bar 背景色
    'body-background': '#273142',  //背景
    'text-color': '#CCD0D9', // 主文本色
  }
````

### 三、 CSS 命名-BEM

> 前言: ID 和 class 的名称总是使用可以反应元素目的和用途的名称，或其他通用的名称，代替表象和晦涩难懂
> 的名称

**1. BEM 概念**

说明：class 命名使用 BEM 其实是块（block）、元素（element）、修饰符（modifier）的缩写，利用不同的区
块，功能以及样式来给元素命名。这三个部分使用-与\_连接。

**2. 中划线可以用来表示层级关系**

```html
<div class="box">
    <ul class="box-list">
        <li class="box-list-item"></li>
        <li class="box-list-item"></li>
        <li class="box-list-item"></li>
    </ul>
</div>
```

**3. 下划线可以用来表示不同的状态**

```html
<div class="box">
    <button class="box-btn box-btn_default" type="button"></button>
    <button class="box-btn" type="button"></button>
</div>
```

**4. id 一般参与样式命名的话请使用小驼峰命名**

**5. CSS 书写规范**

-   尽量避免使用标签名从结构、表现、行为分离的原则来看，应该尽量避免 css 中出现 HTML 标签，并且在
    css 选择器中出现标签名会存在潜在的问题。
-   需要匹配到 DOM 末端的选择器， 你尽量考虑直接子选择器。不推荐:

    ```css
    .content .title {
        font-size: 16px;
    }
    ```

    推荐:

    ```css
    .content > .title {
        font-size: 16px;
    }
    ```

-   尽量使用缩写属性不推荐:
    ```css
    div {
        border-top-style: none;
        font-family: palatino, georgia, serif;
        font-size: 100%;
        line-height: 1.6;
        padding-bottom: 2px;
        padding-left: 1px;
        padding-right: 1px;
        padding-top: 0;
    }
    ```
    推荐:
    ```css
    div {
        border-top: 0;
        font: 100%/1.6 palatino, georgia, serif;
        padding: 0 1px 2px;
    }
    ```
-   不要省略 0 后面的单位不推荐:

    ```css
    div {
        padding-bottom: 0;
        margin: 0;
    }
    ```

    推荐:

    ```css
    div {
        padding-bottom: 0px;
        margin: 0px;
    }
    ```

-   不要使用 ID 选择器及全局标签选择器防止污染全局样式不推荐:

    ```css
    #header {
        ...;
    }
    ```

    推荐:

    ```css
    .header {
        ...;
    }
    ```

## 格式与注释

> 背景: 无规矩不成方圆！ 为了统一团队代码规范提高可读性，最终决定统一采用 eslint 来做代码格式化与语
> 法检查、使用 koroFileHeader 来生成文件和函数注释。

### 一、格式化与检查

团队开发规范代码利器，需要从扩展商店安装 eslint，具体 rules 配置条目可查看项目根目录内
的`.eslintrc.js`，当发现 eslint 报错时应这样处理：

-   查看标红提示的 eslint 错误类型
-   在`.eslintrc.js`中的 rules 中找到那一项查找出报错原因
-   进行更改或者觉得此项 rule 不必要时提出商议

### 二、注释规范

多人合作时，注释对于代码可读性来说不言而喻。vscode 安装 koroFileHeader 插件后，对注释代码块做一些设
置：

-   修改 Author 为本人拼音 eg: 张三 则设为 zhangsan
-   删除函数注释 return

保存文件时会自动生成文件头部注释，其中 description 是需要我们编写的，在文件头部请简要描述当前文件内
容，在函数注释中简要描述方法作用

需注释场景：

-   所有新建文件必须添加头部注释，编写文件描述, 如：

```javascript
/*
 * @Author: llw
 * @Date: 2020-12-10 09:36:48
 * @LastEditors: llw
 * @LastEditTime: 2021-04-08 14:37:36
 * @Description: 授权api文件
 */
```

-   所有`api/*.js`、`utils/*.js`中的函数必须添加函数注释

```javascript
/**
 * @description: 查询字典列表
 */
export const queryDictList = (pageNumber, pageSize, formObj) => {
    return fetch({
        url: 'sysadmin/dict/list',
        data: {
            pageNumber,
            pageSize,
            ...formObj,
        },
    })
}
```

### 三、vscode 配置

-   vscode 工作区 setting.json 相关配置即项目中.vscode/settings.json 文件

```json
{
    "editor.formatOnSave": true,
    "editor.codeActionsOnSave": {
        "source.fixAll": true,
        "source.fixAll.eslint": true
    },
    "files.eol": "\n"
}
```

-   vscode 全局`setting.json`配置

在 vscode 中键入`ctrl+shift+p`后打开命令行面板再输入 setting.json 回车搜索，找
到`首选项 打开设置(json)` 这一项然后点击进入`setting.json`文件，将下面配置粘贴进去后保存即可

```json
"editor.quickSuggestions": {
    "other": true,
    "comments": true,
    "strings": true
}
```

## 代码提交规范

1.  `git add .`

2.  `yarn commit` 注意不是 git commit

3.  选择你本次完成的功能

    ```json
    chore: {
        description: '构建过程或辅助工具的变动',
        emoji: '🤖',
        value: 'chore',
    },
    docs: {
        description: '文档（documentation）',
        emoji: '✏️',
        value: 'docs',
    },
    feat: {
        description: '新功能（feature)',
        emoji: '✨',
        value: 'feat',
    },
    fix: {
        description: '修复bug',
        emoji: '🐛',
        value: 'fix',
    },
    refactor: {
        description: '重构（即不是新增功能，也不是修改bug的代码变动）',
        emoji: '💡',
        value: 'refactor',
    },
    release: {
        description: '发行版本',
        emoji: '🏹',
        value: 'release',
    },
    style: {
        description: '格式（不影响代码运行的变动），不是指样式变动',
        emoji: '🎨',
        value: 'style',
    },
    ```

4.  输入更多提交信息 核心功能一定要写上 版本回滚的时候非常有帮助

5.  `git push` 推上去就好了

## 其他可能用的到的网站

-   [icon](https://icones.js.org/collection/ic)
-   [tailwindcss](https://www.tailwindcss.cn/docs/border-radius)
-   [antd](https://www.antdv.com/docs/vue/introduce-cn) **注意是 3.2.x 的版本 不要搞错了**
-   [vite](https://cn.vitejs.dev/guide/)
-   [vueuse](https://vueuse.org/guide/)
-   [echarts](https://echarts.apache.org/zh/option.html#title)
