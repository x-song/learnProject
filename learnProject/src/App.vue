<template>


    <div id="app" >
      <!-- <div class="container">
        <div class="header" style="background-color:#333;">Header</div>
        <div class="div-box">
          <div class="aside"  style="background-color:#666;">Aside</div>
          <div class="content" style="background-color:#999;">Main</div>
        </div>
      </div> -->
      <!-- <el-container>
        <el-header :style="{height:`${header_h}px`}">Header</el-header>
        <el-container>
          <el-aside  :style="{height:`${contents_h}px`}"  >Aside</el-aside>

          <el-container>
            <el-main>Main</el-main>

          </el-container>
        </el-container>
      </el-container> -->
      <router-view></router-view>
    </div>
</template>

<script>



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

<style  lang="scss">
@import "./assets/css/reset.css";
  #app{
    height: 100%;
  }
  .container{
    
    display: flex;
    flex-direction:column;
    height: 100%;
    min-height: 100vh;
    .header{
      height: 80px;
      text-align: center;
      line-height: 80px;
    }
    .div-box{
      flex: 1;
      display: flex;
      .aside{
        width: 200px;
        
      }
      .content{
        flex: 1;
        
      }

    }

  }
</style>
