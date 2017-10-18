<!--
  创建人：xyh
  创建时间：
  页面描述：
-->
<template>
  <div>
    <mt-search
      v-model="value"
      cancel-text="取消"
      placeholder="搜索"
      :result.sync="result"
    >
      <mt-cell
        v-for="item in result"
        :key="item[1]"
        :title="item[0]"
      >
      </mt-cell>
    </mt-search>
  </div>
</template>

<script>
  // vuex等插件

  // 组件

  // 枚举

  // 方法

  // 接口
  import { getSomething } from '../../api/goods/goods'

  export default {
    // 组件
    components: {},

    // 数据对象，本页面用到的所有数据
    data () {
      return {
        value: '男',
        result: null
      }
    },

    // 计算属性
    computed: {},

    // 监控
    watch: {
      value () {
        this.getGoods()
      }
    },

    // 方法与事件处理
    methods: {
      getGoods () {
        let params = {
          q: this.value
        }
        getSomething(params, (err, data) => {
          if (err) {
            this.Toast(err)
          } else {
            this.result = data.result
          }
        })
      }
    },

    // 组件生命周期钩子，一般常用的是 mounted
    mounted () {
      this.getGoods()
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>

</style>
