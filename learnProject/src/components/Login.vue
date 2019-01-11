<template>
  <div class="wrap-box" v-loading="loading">
    <!--<div class="title">登录框</div>-->
    <!--<el-row>-->
      <!--<el-input v-model="ipt" placeholder="请输入用户名"></el-input>-->
      <!--<el-input v-model="pas" placeholder="请输入密码" class="mg-10" type="password"></el-input>-->
    <!--</el-row>-->

    <!--<el-row class="button-wrap">-->
      <!--<el-button type="success" @click="login">登录</el-button>-->

    <!--</el-row>-->

    <!--<el-dialog-->
      <!--title="登录失败"-->
      <!--:visible.sync="dialogVisible"-->
      <!--width="30%"-->
      <!--:before-close="closeFn">-->
      <!--<span>{{ errorTips }}</span>-->
      <!--<span slot="footer" class="dialog-footer">-->

      <!--<el-button type="primary" @click="closeFn">确 定</el-button>-->
    <!--</span>-->
    <!--</el-dialog>-->

    <div>
      <p>test props</p>
      <TestProps :Arr="arr1"></TestProps>
    </div>

  </div>
</template>

<script>

import  TestProps from  './propsTest'

  //模拟用户名和密码

  const  account = {
    user:'admin',
    password:'123456'
  }

  const ajax = function (at,ps) {

    // 最大异步请求时间（ms）
    const MAX_AJAX_TIME = 2000;
    // 成功率（0为必定失败，100 为 100% 成功）
    // const SUCCESS_PERCENT = 50;

    return new Promise((resolve, reject) => {
      let delay = Math.random() * MAX_AJAX_TIME ;
      const httpCode  = {}

      setTimeout(() => {
        let isSuccess = Math.random()>0.5;
        console.log( isSuccess )
        if (isSuccess){
          httpCode.status = 200;
          resolve(httpCode);
        }else{
          reject();
        }


        // console.log("本次异步请求耗时：" + delay + "ms");



      }, delay);
    })
  }




  export default {
    name: 'App',
    data(){
      return {
        arr1:[1,2,4],
        errorTips:'',
        dialogVisible:false,
        loading: false,
        ipt : '',
        pas:''
      }
    },
    created(){
      console.log('用户名: '+account.user);
      console.log('密码: '+account.password);

    },
    methods:{
      closeFn(){
        this.dialogVisible = false;
        this.loading = false;
      },
      timeStr(){
        let datas = new Date();
        let y = datas.getFullYear();
        let m = datas.getMonth()+1;
        let day = datas.getDate();
        let h = datas.getHours();
        let min = datas.getMinutes();
        let s = datas.getSeconds();
        min<10?min : '0'+min;
        s<10?min : '0'+s;
        return `${y}年${m}月${day}日${h}时${min}分${s}秒`;
      },
      login(){
        this.loading  = true;
        ajax(this.ipt,this.pas).then((result) => {

          if(result.status === 200){
            this.loading  = false;
            const isLogin  = this.ipt === account.user && this.pas === account.password ;
            if(isLogin){
              let dataObj = {
                time:this.timeStr(),
                account:{
                  name:this.ipt
                }
              }
              let storage = window.localStorage;
              let dataObjStr = JSON.stringify(dataObj);
              storage.setItem("dataStr",dataObjStr);
              this.loading = false;

              this.$router.push(
                {
                  name:'home',
                  path:`/home`,

                }
              );
            }else {
              this.errorTips = '用户名或密码不正确'
              this.dialogVisible = true;
            }


          }



        }).catch(() => {
          this.errorTips = '请求失败'
          this.loading = false;
          this.dialogVisible = true;
          console.log('请求失败');
        })





      }
    },
    components:{
      TestProps
    }
  }
</script>

<style lang="scss">

  .wrap-box{
    width: 20vw;
    height: 34vh;
    border:1px solid green;
    padding:7px 7px;
    .title{
      height: 30px;
      line-height: 30px;
      text-align: center;
    }
    .button-wrap{
      margin-top: 10px;
      text-align: center;
    }
  }
  .mg-10{
    margin-top: 10px;
  }
</style>
