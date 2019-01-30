<template>
  <div id="app">
    <router-view></router-view>


  </div>
</template>

<script>
  import  utils from './static/utils/utils'
export default {

  name: 'App',
  created () {
    utils.getMenu();

  }
}
</script>

<style lang="scss">
  @import "./assets/css/reset.css";
  #app{
    height: 100%;
  }
</style>
