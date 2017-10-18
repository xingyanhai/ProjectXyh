/**
 * Created by Administrator on 2017/10/17.
 */
import Vue from 'vue'
import Vuex from 'vuex'
import goods from './modules/goods'
Vue.use(Vuex)

const getters = {
  goodsList: state => state.goodsList
}
const state = {
  isShowNav: false
}
const mutations = {
  IS_SHOW_NAV (state, val) {
    state.isShowNav = val
  }
}
export default new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production', // 在非生产环境下，使用严格模式
  getters,
  state,
  mutations,
  modules: {
    goods
  }
})
