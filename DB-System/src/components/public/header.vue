<template>
  <header>
    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">


        <!--<el-menu-item   v-for="(item,index) in menuList" :key="index" index="item.index">-->

          <!--<router-link  to="/home/defaultGroup">{{item.title}}</router-link>-->
        <!--</el-menu-item>-->
      <el-menu-item  index="1" >
        <router-link  to="/home/defaultGroup">数据库</router-link>
      </el-menu-item>
      <el-menu-item  index="2" >
        <router-link  to="/home/authorityList/user">系统管理</router-link>
      </el-menu-item>
    </el-menu>
  </header>
</template>

<script>
  // import  moduleJson from  '../../static/utils/utils'
  import  moduleJson from '../../module'
  export default {
      data(){
        return {
          activeIndex: '2',
          menuList:[]

        }
      },
      created(){
        this.menuList = moduleJson.menuList;
        console.log(  this.menuList )
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
