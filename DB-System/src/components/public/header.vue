<template>
  <header>
    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
      <el-menu-item index="数据库2">
        <router-link  to="/home/defaultGroup">数据库</router-link>
      </el-menu-item>
      <el-menu-item index="1">
        <router-link  to="/home/user">
          系统管理
        </router-link>
      </el-menu-item>
    </el-menu>
  </header>
</template>

<script>
  export default {
      data(){
        return {
          activeIndex: '1'

        }
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
