<template>
  <section class="section-wrap">
    <aside class="aside-wrap">
      <el-row class="tac">

        <el-col :span="12">

          <el-menu
            default-active="1-1"
            class="el-menu-vertical-demo"
            @open="handleOpen"
            @close="handleClose"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b">
            <el-submenu index="1">
                <template slot="title">
                  <i class="el-icon-location"></i>
                  <span>权限管理</span>
                </template>

                <router-link to="/home/user">
                    <el-menu-item index="1-1">用户管理</el-menu-item>
                </router-link>
                <router-link to="/home/role"><el-menu-item index="1-2">角色管理</el-menu-item></router-link>
                <router-link to="/home/menu"><el-menu-item index="1-3">菜单管理</el-menu-item></router-link>




                <el-submenu index="1-4">
                  <template slot="title">选项4</template>
                  <el-menu-item index="1-4-1">选项1</el-menu-item>
                </el-submenu>
            </el-submenu>

            <el-submenu index="2">
                <template slot="title">
                    <i class="el-icon-document"></i>
                    <span>操作日志管理</span>
                </template>
                <el-menu-item index="2-1">用户管理</el-menu-item>
                <el-menu-item index="2-2">角色管理</el-menu-item>
                <el-menu-item index="2-3">菜单管理</el-menu-item>
            </el-submenu>

          </el-menu>
        </el-col>
      </el-row>
    </aside>
    <div class="content">
      <router-view/>
    </div>
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
