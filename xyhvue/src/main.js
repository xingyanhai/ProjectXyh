// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
// 引入全部组件
import Mint from 'mint-ui'
import 'mint-ui/lib/style.css'
import '../theme/index.styl'
Vue.use(Mint)
Vue.config.productionTip = false
Object.assign(Vue.prototype, Mint)
// 监听路由
router.beforeEach(async (to, from, next) => {
  if (!store.getters.goodsList) {
    // 获取用户信息数据
    // await store.dispatch('getGoodsList', params)
  }
  // 判断是否显示下面的nav
  store.commit('IS_SHOW_NAV', to.meta.isShowNav)
  next()
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {App},
  store
})
