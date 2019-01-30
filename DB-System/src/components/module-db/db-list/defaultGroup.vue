<template>
  <section class="section-wrap">
    <aside class="aside-wrap">
      <el-row class="tac">

        <el-col :span="12">

          <el-menu
            default-active="2"
            class="el-menu-vertical-demo"
            @open="handleOpen"
            @close="handleClose"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b">
            <el-submenu index="1">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>数据库实例</span>
              </template>
              <el-menu-item index="1-3">选项3</el-menu-item>

              <el-submenu index="1-4">
                <template slot="title">选项4</template>
                <el-menu-item index="1-4-1">选项1</el-menu-item>
              </el-submenu>
            </el-submenu>
            <el-menu-item index="2">
              <i class="el-icon-menu"></i>
              <span slot="title">导航二</span>
            </el-menu-item>
            <el-menu-item index="3">
              <i class="el-icon-document"></i>
              <span slot="title">导航三</span>
            </el-menu-item>
            <el-menu-item index="4">
              <i class="el-icon-setting"></i>
              <span slot="title">导航四</span>
            </el-menu-item>
          </el-menu>
        </el-col>
      </el-row>
    </aside>
    <div class="content">content</div>
  </section>
</template>

<script>
  export default {
    name: 'role',
    data(){
      return {

      }
    },
    methods:{
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>

<style lang="scss">

  .section-wrap{
    flex: 1;
    display: flex;

    .aside-wrap{
      width: 250px;
      .el-col-12{
        width: 100%;
      }
    }
    .content{
      width: 100%;
      background: #eee;
    }
  }

</style>
