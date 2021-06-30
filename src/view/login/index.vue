<template>
    <div class="login-container">
        <!-- ，与页面顶部隔开 -->
        <el-row :gutter="20">
            <!-- gutter 栅格间距 -->
            <el-col :span="8" :offset="8"> 
                <!-- span 栅格占的列数，offset是偏移列数 -->
                <div class="grid-content"></div>
            </el-col>
        </el-row>

        <!-- 登录窗口 -->
        <el-row :gutter="20">
            <el-col :span="7" :offset="8">
                <!-- <div class="grid-content bg-purple-dark"></div> -->
                <el-card class="box-card" shadow="never" >
                    <div slot="header" class="clearfix title-container">
                        <span class="title">博客后台管理系统</span>                                      
                    </div>               
                    <div class="">
                        <el-form :model="loginData" :label-position="labelPosition" label-width="100px" class="login-form">
                        <el-form-item label="用户名" >
                            <el-input class="" paceholder="请输入用户名" v-model="loginData.uname"></el-input>
                        </el-form-item>
                        <el-form-item label="密码">
                            <el-input placeholder="请输入密码" v-model="loginData.pword" show-password></el-input>
                        </el-form-item>
                        </el-form>
                        <el-button :loading="loading" type="primary" style="width:100%;margin-bottom:30px;" @click.native.prevent="handleLogin">Login</el-button>
                        <!-- <div class="tips">
                             <span style="margin-right:20px;">用户名: admin、张勇</span>
                             <span> 密码: 全是123456</span>
                        </div> -->
                    </div>               
                </el-card>
            </el-col>
        </el-row>
    </div>  
</template>

<script>   
import {login} from "@/api/login";

export default{
    data(){
         return{
            labelPosition:'right',
            loginData:{
                uname:'',
                pword:''
             }
        }
    },
    methods:{
        handleLogin() {
            login(this.loginData).then(response => {
              if (response.code == "success") {
                this.$message({
                  type: "success",
                  message: response.message
                });
                this.dialogVisible = false;
                this.adminList();
              } else {
                this.$message({
                  type: "error",
                  message: response.message
                });
              }
            });
        }
    }
}


</script>

<style lang="scss">
$bg:#2d3a4b;
$dark_gray:#889aa4;
$light_gray:#eee;
$cursor: #fff;
    .grid-content {
    /* background: rgb(14, 214, 131); */
    border-radius: 4px;
    min-height: 80px;
    /* background-color: rgb(238, 231, 230); */
  }

   .el-row {
    margin-bottom: 50px;   
  }
   .el-card{
    border-radius:40px;
    /* box-shadow: 0 2px 12px 0 rgb(243, 102, 102); */
    /* box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04); */
     background-color:#2d3a4b;
     border: 0px;
  }

    .el-form-item {
    border: 1px solid rgba(255, 255, 255, 0.1);
    background: rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    color: #454545;
  }
  .title-container {
    position: relative;
    .title {
      font-size: 26px;
      color: $light_gray;
      margin: 0px auto 40px auto;
      text-align: center;
      font-weight: bold;
    }

  }
  .login-container{
        .el-input {
    display: inline-block;
    height: 47px;
    width: 300px;

    input {
      background: transparent;
      border: 0px;
      -webkit-appearance: none;
      border-radius: 0px;
      padding: 12px 5px 12px 15px;
      color: $light_gray;
      height: 47px;
      caret-color: $cursor;
      &:-webkit-autofill {
        box-shadow: 0 0 0px 1000px $bg inset !important;
        -webkit-text-fill-color: $cursor !important;
         }
     }
    }
    .el-form-item {
    border: 1px solid rgba(255, 255, 255, 0.1);
    background: rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    color: #454545;
  }
  }
  
</style>

