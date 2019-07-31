import Vue from 'vue'
import Vuex from 'vuex'
import VueMixinStore from 'vue-mixin-store'
import * as api from './utils/api'

const flow = VueMixinStore.FlowStore(api)

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    flow
  }
})
