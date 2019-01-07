<template>
    <div class="home-wrap11">
        <p>欢迎登录，{{name}} <span class="exit-btn" @click="exitFn">退出</span></p>
        <p>上次登录时间为：{{time}}</p>
    </div>
</template>

<script>
    export default {
        name: "Home",
        data(){
          return{
            name:'',
            time:''
          }
        },
      created() {
        let storage = window.localStorage;
        let info =  JSON.parse(storage.getItem("dataStr"));
        this.name = info.account.name;
        this.time = info.time;
      },
      methods:{
        exitFn(){
          window.localStorage.removeItem('dataStr');
          this.$router.push(
            {
              path: '/',
              name: 'Login'

            }
          );
        }
      }

    }
</script>

<style scoped>
    .exit-btn{
      cursor: pointer;
      color: coral;
      padding-left: 30px;
    }
</style>
