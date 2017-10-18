/**
 * Created by Administrator on 2017/10/17.
 */
import { getGoodsList } from '../../api/goods/goods'
const state = {
  goodsList: []
}
const actions = {
  async getGoodsList ({commit}, params) {
    let res = await getGoodsList({params})
    commit('GET_GOODS_LIST', JSON.parse(res.result))
  }
}
const mutations = {
  GET_GOODS_LIST (state, res) {
    state.goodsList = res
  }
}
export default {
  state,
  actions,
  mutations
}
