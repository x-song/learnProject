<template>


    <div id="app" >
      <router-view></router-view>
    </div>
</template>

<script>


import  {  AO  } from  './test';
let ao = new AO()

console.log( ao.get() )


export default {
  name: 'App',
  data(){
    return {

    }
  },
  created(){

  },
  methods:{

  }
}
</script>

<style lang="scss">
  #app{
    height:100vh;
    display:flex;
    justify-content:center;
    align-items:center;
  }
</style>
