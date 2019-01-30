<template>
  <header>
    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">


        <el-menu-item  index="index+1" v-for="(item,index) in menuList">

          <router-link  to="/home/defaultGroup">{{item}}</router-link>
        </el-menu-item>
    </el-menu>
  </header>
</template>

<script>
  import  moduleJson from  '../../static/utils/utils'
  export default {
      data(){
        return {
          activeIndex: '1',
          menuList:[]

        }
      },
      created(){
        this.menuList = moduleJson.getMenu()
        // console.log(moduleJson.getMenu())
      },
      methods: {
        handleSelect(key, keyPath) {
          console.log(key, keyPath);
        }
      }
  }
</script>

<style>
  header{


  }
</style>
