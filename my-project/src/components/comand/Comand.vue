<template>
    <div>
      <Head></Head>
      <el-menu
        default-active="1"
        class="el-menu-vertical-demo"
        style="width: 200px">
        <router-link to="/comand/one">
          <el-menu-item index="1" style="width: 200px" >
          <i class="el-icon-location"></i>项目一
          </el-menu-item>
        </router-link>
        <router-link to="/comand/two">
          <el-menu-item index="2" style="width: 200px">
          <i class="el-icon-menu"></i>
          项目二
          </el-menu-item>
        </router-link>
        <router-link to="/comand/three">
          <el-menu-item index="3" style="width: 200px">
            <i class="el-icon-document"></i>
            项目三
          </el-menu-item>
        </router-link>
        <router-link to="/comand/four">
          <el-menu-item index="4" style="width: 200px">
            <i class="el-icon-setting"></i>
            项目四
          </el-menu-item>
        </router-link>
      </el-menu>
      <keep-alive>
      <router-view/>
      </keep-alive>

    </div>


</template>

<script>
  import Head from './../Head'
    export default {
        name: "Comand",
      components: {Head},
      methods: {

      }

    }
</script>

<style scoped>

</style>
