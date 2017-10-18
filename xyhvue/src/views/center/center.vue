<!--
  创建人：
  创建时间：
  页面描述：
-->
<template>
  <div>
    <router-view></router-view>
    <mt-tabbar v-model="selected" v-show="this.$store.state.isShowNav">
      <mt-tab-item id="1">
        <img slot="icon" src="../../assets/logo.png">
        主页
      </mt-tab-item>
      <mt-tab-item id="2">
        <img slot="icon" src="../../assets/logo.png">
        qq
      </mt-tab-item>
      <mt-tab-item id="3">
        <img slot="icon" src="../../assets/logo.png">
        微信
      </mt-tab-item>
      <mt-tab-item id="4">
        <img slot="icon" src="../../assets/logo.png">
        我的
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>

<script>
  // vuex等插件

  // 组件

  // 枚举

  // 方法

  // 接口

  export default {
    // 组件
    components: {},

    // 数据对象，本页面用到的所有数据
    data () {
      return {
        selected: '1'
      }
    },

    // 计算属性
    computed: {},

    // 监控
    watch: {
      selected () {
        this.$router.push(`module${this.selected}`)
      }
    },

    // 方法与事件处理
    methods: {},

    // 组件生命周期钩子，一般常用的是 mounted
    mounted () {
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
</style>
