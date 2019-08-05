import Vue from 'vue'
import VueMixinStore from 'vue-mixin-store'
import VueFlowRender from 'vue-flow-render'
import VScroller from 'h5-vue-scroller'
import VSwitcher from 'v-switcher'
import 'v-switcher/dist/v-switcher.css'
import 'normalize.css'

Vue.component(VSwitcher.name, VSwitcher)
Vue.component(VScroller.name, VScroller)
Vue.component(VueFlowRender.name, VueFlowRender)
Vue.component(VueMixinStore.FlowLoader.name, VueMixinStore.FlowLoader)
