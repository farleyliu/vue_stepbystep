# 初识VUE.js

### 一步步学vue  [vue官方中文手册](https://cn.vuejs.org/v2/guide/) 
> Talk is cheap, show me the code.

## **hello vue**
> vue hello,world!
- hellovue.html 几点说明：
    - html 和 js在一个文件里，js需要在html元素声明之后。
    - vue有[开发版本](https://cdn.jsdelivr.net/npm/vue/dist/vue.js)和[线上版本](https://cdn.jsdelivr.net/npm/vue)
    - 可以看见``` {{message}} ```先显示了一下然后被vue替换掉，这样会有一个转换的缺点
    - 一个vue对象只能mount绑定一个dom对象
    - 一个数据可以绑定到多个vue对象上
    - 一个Dom对象不能绑2个vue对象

- hellovue2.html
    - html里可以引用vue自定义的组件。但真正的初始化需要new vue对象才能完成。也就是说，dom不会自动渲染自定义组件。 在vue里叫**mount**
    - 内部的数据将被覆盖
    - 自定义组件可以添加任意多属性

## **响应式编程**
> **响应？** 是指视图的数据变更后，视图将响应，匹配对应更新后的值
- resp-vue.html
    - 只有当实例被创建时中存在的属性才是响应式的，已经是说要提前准备好数据。
    - vue对象的内部属性可以用$区分： 比如：(vm.$data === vm.data) true
    - 更多vue [$属性](https://cn.vuejs.org/v2/api/#%E5%AE%9E%E4%BE%8B%E5%B1%9E%E6%80%A7)

## **vue实例的生命周期**
> 深入了解vue底层，会让你走得更快更远。
- vue 生命周期图
![](https://cn.vuejs.org/images/lifecycle.png)
- vue-lifecycle.html
    - vue 对象主要的几个生命关键时刻：`created` `mounted` `updated` `destoryed` 每个关键时刻都有`发生前`，`发生后`
    - 使用vs code的 snippets 插件自动补齐
    - 不要使用=> 函数，因为它没有this，会向上查找

## **模板语法**
> jxs语法
- template-html.html
    - 用户将dom对象绑定到vue对象，vue内部会将这段dom对象变换成内部模板。内部模板完全兼容html规范
    - vue将所有绑定的dom对象，构建成虚拟dom，结合响应式系统，最小化dom更新单元。
    - v-html、 v-once 都是很危险的命令，建议不要用。

## **vue指令**
> dom 与 vue 数据交互指令
- vue-directives.html
    - vue内部的指令语法，只能死记了。
    - vue的指令都是`v-`开头。表示dom与vue的关联方式。
    - v-if="XXX" 是否输出； v-bind:XXX="YYY" 值绑定; v-on:xxx="yyy" 事件绑定
    - 新增动态参数绑定  v-bind:[xxx]="yyy" and v-on:[xxx]="yyy"
    - `v-bind` `v-on` 是最常用的绑定，通常可以简化 `v-bind:xxx` => ':xxx' `v-on:xxx` => `@xxx`
    - `v-mode` 双向绑定数据

## **属性同步与监听**
> 数据同步
- comput-spy.html
    - DOM可以绑计算属性，会缓存，或者计算函数；区别是计算函数会调用函数。
    - 计算属性的优点：
        1. 可以同时监听多个属性
        2. 非响应式的更新将被缓存
- watch.html
    - `v-model` 双向数据绑定。 input - vue对象
    - axios 是一个很好的网络库
    - debounce 也是一个很好的库
## **css 和事件**
> 在vue里如何绑定css与事件
- class绑定.html
    - class的属性值由data的true or false```存在``` *(读书须用意，一字值千金)*
    - class 可多值并列, 可绑定object
- style绑定.html
    - 内联样式绑定。与class绑定类似，但绑定值

## **component组件**
> 组件，vue与react相似的地方
- 全局组件.html
    - 全局组件很简单。直接向Vue组件元组里追加注册
    - 缺点：js文件很大，不需要的组件也会被加载
- 局部组件.html
    - vue对象的一个局部变量
    - 可以任意自由组合
## **webpack 和 vue**
> [0基础学webpack](https://segmentfault.com/a/1190000012789253?utm_source=tag-newest)
- 初识webpack
    - 运行命令```package.json or npm init -y``` 创建 ```npm i vue```  创建 webpack ``` npm i webpack webpack-dev-server ```
    - webpack 让所有的js都遵从commonJS规范，模块化规范
    - webpack-dev-server会自动启动一个静态资源web服务器 --hot参数表示启动热更新
    - 默认启动同目录下的index.html
    - 启动流程：1) npm install  2) npm run build  3) npm run dev
- webpack + vue
    - main.js 加入vue
    - package.json 中的：dependencies 和 devDependencies 注意区别。 
    - npm install xxx -save  与 npm install xxx -save-dev
    - resolve 模块引入
    - css, scss 解析器引入
- webpack+babel
    - 添加文件.babelrc（在windows上没法创建, 用命令行创建: ```mv ./新建文本文档.txt .babelrc```)
    - 修改入口文件
    - babel loader 版本问题
- 单文件组件
    - 添加vue-loader   
- 调试+发布
    - devtool: '#eval-source-map' 调试辅助
    - 压缩 + 发布修改

## **JS ES6之class**
> es6之后，js可以轻松做大型软件开发。
- class 语法
    - 本文参考了[阮一峰ES6简介](http://es6.ruanyifeng.com/#docs/class)
    -  class 的声明构造和其他面向对象语言一致
    -  class 导出 export { x, y} 添加default 导出时可以任意修改导出名
## **vue 开发心得**
> 工作笔记
- vue对象实例，既可以直接挂载到dom对象上，也可以以component的方式挂载追加。
- vue 对象既可以试component 也可以是单纯的vue挂载对象

``` javascript
var vm = new Vue({
    el:'#classroom',
    data:{
        curIndex:0
    }
})
```
也可以
``` javascript
import Vue from 'vue'; 
import leftPannel from './pages/main_page/main_page.vue'

var vm = new Vue({
    el:'#classroom',
    data:{
        curIndex:0
    },
    template: '<leftPannel v-bind:curSectIndex="curIndex" />',   
    components: { leftPannel }    
})
```




