<template>
    <header>
      <nav>
        <router-link exact to="/">首页</router-link>
        <router-link exact to="/list">列表</router-link>
        <router-link exact to="/shop">购物</router-link>
        <router-link exact to="/comand">管理</router-link>
      </nav>
      <span>欢迎{{name}}登陆</span>
      <a href="/login">退出登陆</a>
    </header>
</template>

<script>
    export default {
        name: "Head",
        data(){
          return{
            name:sessionStorage.name,
          }
        }
    }
</script>

<style scoped>
header{height: 80px;width: 100%;line-height: 80px;text-align: center;margin-bottom: 10px;background: #63659e;}
nav>a{font-size: 30px;padding: 8px;color: #fff;background: #6c9673;border-radius: 20px;margin: 0 10px}
.router-link-exact-active{background: #2022b8
}

  span{position: absolute;color: #fff;top: 10px;right: 300px}
  span+a{
    position: absolute;color: #5bc0de;top: 10px;right: 200px}
</style>
