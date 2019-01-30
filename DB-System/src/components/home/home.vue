<template>
  <div class="app-wrap">
    <Header></Header>
    <router-view/>
  </div>

</template>

<script>

  import  Header from '../public/header'
  // import  Role from '../module-sys-manager/menuList/menuList'
  export  default {
    data(){
      return {

      }
    },
    components:{
      Header,
      Role
    }

  }
</script>

<style lang="scss">

  .app-wrap{
    display:flex;
    flex-direction: column;
    height: 100%;



  }
</style>
