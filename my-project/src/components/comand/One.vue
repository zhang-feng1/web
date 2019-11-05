<template>
  <div class="box" >
    <div style="float: left;border:1px #122b40 solid;width: 300px;text-align: center;">
      <img src="./../../../../image/1.jpg" alt="">
      <h3>用户名:{{name}}</h3>
      <p>年龄:18岁</p>
      <p>职位:经理</p>
    </div>
    <el-calendar v-model="value" style="width: 700px;border: 1px solid #122b40;margin-left: 500px">
    </el-calendar>
  </div>
</template>

<script>
    export default {
        name: "One",
      data(){
        return {
          value: new Date(),
          name:sessionStorage.name
        }
      },
    }
</script>

<style scoped>
  .box{width: 80%;margin-left: 220px;position: absolute;top: 100px;float: left}
  img{width: 200px; height: 200px;border-radius: 50%;margin-top: 20px}
  h3,p{font-size: 20px;padding: 20px auto;border-bottom: 1px silver solid;line-height: 80px}
</style>
