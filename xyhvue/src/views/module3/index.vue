<!--
  创建人：xyh
  创建时间：
  页面描述：
-->
<template>
  <div>
    3
  </div>
</template>

<script>
  // vuex等插件

  // 组件

  // 枚举

  // 方法

  // 接口
  import { apiMusic } from '../../api/music/music'

  export default {
    // 组件
    components: {},

    // 数据对象，本页面用到的所有数据
    data () {
      return {}
    },

    // 计算属性
    computed: {},

    // 监控
    watch: {},

    // 方法与事件处理
    methods: {},

    // 组件生命周期钩子，一般常用的是 mounted
    mounted () {
      apiMusic('topList', (res) => {
        console.log(res)
        apiMusic({name: 'hotList', params: {}}, (res) => {
          console.log(res)
        })
      })
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>

</style>
