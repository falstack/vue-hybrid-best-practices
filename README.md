# vue-hybird-best-practices

> 一个 vue 在 hybird 场景下针对（下图中的） UGC 普遍场景的最佳实践方案

### 场景如图：
<img src="https://raw.githubusercontent.com/falstack/vue-hybird-best-practices/master/demo/demo.png">

> 本项目是对该场景下代码结构的梳理，主要涉及以下几个组件：

- [vue-mixin-store](https://github.com/falstack/vue-mixin-store) 基于 vuex 的一个集中式的状态管理方案
- [v-switcher](https://github.com/falstack/v-switcher) 一个用于在移动端多 tab 切换的组件
- [h5-vue-scroller](https://github.com/falstack/h5-vue-scroller) 一个用于处理 iOS 滚动锁屏和分发滚动事件的组件
- [vue-flow-render](https://github.com/falstack/vue-flow-render) 一个用户惰性渲染列表，只展示可视区域内元素的组件
