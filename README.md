# Vue.js 在复杂信息流场景下的最佳实践

经常做业务的前端同学肯定遇到过这样的业务场景：

##### 常见的 hybird 页面
<img src="https://github.com/falstack/vue-hybird-best-practices/blob/master/assets/img/h5.png?raw=true">

##### 常见的 UGC 类的 PC 网页
<img src="https://github.com/falstack/vue-hybird-best-practices/blob/master/assets/img/pc.png?raw=true">

这类页面都会**承载着多个信息流列表**，本文就针对这类复杂信息流页面进行梳理，给出我在做了无数次这类页面后的最佳实践总结。

你可以直接戳这个地址查看最终 [demo 效果](https://falstack.github.io/vue-hybrid-best-practices/)（请在手机模式下浏览）

<img src="https://github.com/falstack/vue-hybird-best-practices/blob/master/assets/img/qr.png?raw=true">

demo 的代码仓库：[vue-hybird-best-practices](https://github.com/falstack/vue-hybird-best-practices)

### 第一步：我们需要一个 Tab 组件作为承载信息流的容器

这个 tab 组件至少要满足以下两个场景：

##### 切换 Tab 时的渐变动画
<img src="https://github.com/falstack/vue-hybird-best-practices/blob/master/assets/img/header.gif?raw=true">

##### 滑动时的手指跟随
<img src="https://github.com/falstack/vue-hybird-best-practices/blob/master/assets/img/content.gif?raw=true">

因为这些 feature 能够让我们的页面效果尽可能的接近原生，因此专门把它抽象成一个组件：

[v-switcher：一个强大的 Tab 组件](https://github.com/falstack/v-switcher)

我们注意到页面顶部的这个图片轮播组件与 Tab 组件的区别仅仅是：「能否自动滑动」。因此我们在 v-switcher 里增加了几行代码来兼容图片轮播功能。

> v-switcher 的实现还兼容了很多场景，可以查看 github 的 readme 来了解。

### 第二步：我们需要一个方便的状态管理工具来存储信息流的数据和状态

什么意思呢？仔细思考一下对于每一个信息流列表，它都会有以下这几个状态：

- loading（加载中）
- nothing（列表为空）
- error（列表加载出错）
- fetched（已经向服务端发起过请求的列表）
- noMore（列表已加载完，没有更多了）

除此之外我们还要根据列表的长度在第一屏展示特殊的 loading（通常为骨架屏）或 error （通常为大图），而在非第一屏的情况下展示其它 UI 样式。

当我们点击 Tab 切换到另一个列表的时候，上一个列表的状态要正确的维持，下一个列表和上一个列表的状态要分离开，如果还需要下拉刷新、筛选排序等，如果不抽象一个数据层出来，那这个代码是真的难看，相信经常做这类页面的同学都深有体会。

为了对信息流的数据和状态进行一个完美的管理，我们又提供了另一个组件：

[vue-mixin-store：一个专门做列表状态管理的组件](https://github.com/falstack/vue-mixin-store)

`vue-mixin-store`是依赖于 vuex 的，它提供了很多的 API 让列表的 CURD 变的非常方便，通过它你可以让绝大多数信息流的开发都变成复制粘贴，文档：[vue-mixin-store](https://falstack.github.io/vue-mixin-store/)

### 第三步：我们需要对信息流列表做惰性渲染

> 所谓惰性渲染，就是指在列表里只保留视口内的 DOM，视口之外的 DOM 不展示，在列表滚动的时候，我们通过 JS 来计算要渲染哪些 DOM，达到优化内存的目的。

一开始做这个优化，我是想使用 [vue-virtual-scroll-list](https://github.com/tangbc/vue-virtual-scroll-list) 这个库的，但这个库有几个地方无法满足我的需求：

1. 无法兼容 [better-scroll](https://github.com/ustbhuangyi/better-scroll)
2. 仅支持单列的列表，无法支持瀑布流

因此这个库虽然很好，但对我来说它的应用场景“受限”，所以没办法只好自己写了一个：

[vue-flow-render：一个列表惰性加载组件](https://github.com/falstack/vue-flow-render)

其实和 vue-virtual-scroll-list 对比区别不是很大，只是我将“滚动”的**行为**从组件中剥离出去，只保留了滚动的**结果**，因此使用该组件的时候它需要一个父容器来分发`scroll`事件。

支持瀑布流也只是在计算 DOM 位置的时候根据 props 做了不同的 case 处理，都很简单。

但它可以应用在更广的场景中。

--------

> 至此我们的页面无论是代码整洁度还是性能都有了一定的保障（`v-switcher`针对性能也做了很多优化、`vue-flow-render`也是尽可能通过少的计算量来实现的惰性加载）

于是我们就开心的写完代码提交给了测试的同事验收，但发现好像还有点问题？？？

具体是什么问题呢，相信经常做移动端开发的同学都有遇到过这个问题：[-webkit-overflow-scrolling: touch 导致的页面锁死](https://www.baidu.com/s?wd=-webkit-overflow-scrolling%20%E9%A1%B5%E9%9D%A2%E9%94%81%E6%AD%BB&rsv_spt=1&rsv_iqid=0xe9a920ca001bb6af&issp=1&f=8&rsv_bp=1&rsv_idx=2&ie=utf-8&tn=baiduhome_pg&rsv_enter=1&rsv_dl=ib&rsv_sug3=26&rsv_sug1=12&rsv_sug7=101&rsv_t=ed46ZgkjtBjoinygD4sGRFYA%2Bv68%2BIUztl6hHQNBqFqChsyY5kDTEkawll8DTU%2FK9Rq0)

遇到这个问题真是难受，网上的解决方法五花八门都达不到效果。

因为毕竟做了很久的前端开发，所以我对这个 bug 是早就知道的，因此在一开始寻找惰性加载组件时就希望能够与 better-scroll 搭配使用，因为 better-scroll 是可以解决页面锁死问题的。

于是我们愉快的使用起了 better-scroll 又提测了。

然后发现又有点不对：

better-scroll 在 Android 设备上的体验，真的很不好，特别是当页面里的数据量很大，并且有很多个 tab（需要很多个 better-scroll 实例）的时候。

而且在其他项目中尝试使用 better-scroll 会在复杂场景下（路由切换 + 异步请求等）会导致一些机型（iPhoneX）的偶现 bug。

因此在测试同学的强烈要求下，我们也无法使用 better-scroll 了。

但这个问题还是得解决啊，于是我们在寻找专门解决页面锁死的库，终于是找到了一个：[iNoBounce](https://github.com/lazd/iNoBounce)，尝试了一下真的解决了问题。

但怎么说呢，这个库用起来并不怎么舒服，把它加到我们的最佳实践里好像还缺了一些分量，我们需要加强它。

### 第四步：我们需要一个专门处理滚动行为的组件

需要这个组件的原因是：

1. 我们需要解决 iOS 页面锁死的问题
2. 我们需要分发 scroll 事件给`vue-flow-render`
3. 我们有更多的场景需要`onTop`、`onBottom`、`onRefresh`等事件

因此我们提供了另一个组件：

[h5-vue-scroller：一个处理 iOS 页面锁死和分发滚动事件的组件](https://github.com/falstack/h5-vue-scroller)

至此，我们的「Vue.js 在复杂信息流场景下的最佳实践」所需要的组件都已经给出来了，接下来就简单讲一下为什么要这么做。

--------

### 需求是千遍万化的，一个组件无法解决所有问题

虽然这篇文章介绍了四个组件搭配的结果，但并不代表着你需要在所有地方都同时使用它们。

在其他场景的最佳实践下会需要其他组件，这其中有一点是可以肯定的：我们的代码不能杂糅起来，必须要很好的分层，再去组件化。

我相信很多学习 Vue.js 的同学都看过下面这种图：

##### 组件化开发：
<img src="https://github.com/falstack/vue-hybird-best-practices/blob/master/assets/img/component.jpg?raw=true">

但在复杂场景下，又有多少人能把代码合理的抽象与组件化呢？

`vue-mixin-store`的实现初衷就是因为我之前有一个同事列表从来不写 loading，也不做异常处理，页面代码里到处都是 DOM 操作，我实在是受不了了才写了这么个组件出来。

希望这篇文章能让你的开发变得简单，感谢阅读（记得 star 和遇到问题提 issue 给我 :D）

