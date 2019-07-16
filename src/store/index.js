import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'
import actions from './actions'
import user from './module/user'
import router from './module/router'
Vue.use(Vuex)

export default new Vuex.Store({
  strict: false,
  state,
  actions,
  mutations,
  modules: {
    user,
    router
  }
})
