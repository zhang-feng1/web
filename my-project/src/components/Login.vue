<template>

      <div class="demo-input-suffix">
        <h1>用户登录</h1>
        <el-input placeholder="请输入用户名" suffix-icon="el-icon-s-check" v-model="name" ></el-input>
        <el-input placeholder="请输入密码"  suffix-icon="el-icon-edit-outline" v-model="pass"></el-input>
        <br>
        <el-button type="primary" round @click="submitFn">登录</el-button>
        <el-button type="warning" round @click="cleanFn">重置</el-button>
      </div>

</template>

<script>
    export default {
        name: "Login",
      data(){
          return{
            user:'',
            pass:'',
            name:sessionStorage.name
          }
      },
      created(){

      },
      methods:{
          submitFn(){
            sessionStorage.name='user';
            this.$axios.post('/api',{
              user:this.name,
              pass:this.pass
            }).then((res)=>{
              if(res.data===1){
                this.$router.push('/')
              }else {
                this.$message({
                  showClose: true,
                  message: '用户名或密码错误',
                  type: 'error'
                });
              }
            }).catch(()=>{
              this.$message({
                showClose: true,
                message: '找不到你想要的页面',
                type: 'error'
              });
            })
          },
        cleanFn(){
            this.name='';
            this.pass=''
        }
      }
    }
</script>

<style scoped>
  h1{font-size: 30px;margin: 10px auto;text-align: center}
.demo-input-suffix{width: 400px;height: 300px;margin:0px auto;margin-top: 200px;border: 1px solid black;text-align: center}
.el-input{width: 80%;margin: 10px auto}
</style>
