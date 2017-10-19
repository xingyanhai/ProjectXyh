<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
  window.onload = () => {
    // 获取窗口高度
    let winHeight
    if (window.innerHeight) {
      winHeight = window.innerHeight
    } else if ((document.body) && (document.body.clientHeight)) {
      winHeight = document.body.clientHeight
    }
    document.body.style.minHeight = winHeight + 'px'
  }
  export default {
    name: 'app'
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
</style>
