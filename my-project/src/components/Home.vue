<template>
  <div class="home">
    <Head></Head>
    <h1>新闻总览</h1>
    <div class="new_box" v-for="(item,index) of list" :class="{on:index%2==0,off:index%2!=0}" :key="item.id">
<router-link :to="'/single/'+item.id">
  <h3 v-changeColor:ita="{font:'24px'}">{{item.id}}、{{item.title|upper}}</h3>
</router-link>
      <article>{{item.body}}</article>
    </div>

    <el-button type="primary" @click="add" v-if="flag">加载更多</el-button>
  </div>
</template>

<script>
  import Head from './Head'
export default {
  name: 'Home',
  components: {Head},
  data () {
    return {
      list:[],
      num:5,
      flag:true,
    }
  },
  methods:{
    add(){
      this.num +=5;
      if(this.num<=20){
        this.$axios.get('./../../static/txt.json')
          .then((res)=>{
            // console.log(res.data);
            let data=res.data.slice(this.num,this.num+5);
            this.list=this.list.concat(data)
          }).catch(()=>{
          this.$message({
            showClose: true,
            message: '找不到'
      })});
      }else {
          this.$message({
            showClose: true,
            message: '没有更多新闻了',
          });
          this.flag=false;
      }
    }
  },
  created() {

    this.$axios.get('./../../static/txt.json')
      .then((res)=>{
       // console.log(res.data);
        this.list=res.data.slice(0,10);
        this.$store.commit('initStoreList',res.data);
    }).catch(()=>{
      this.$message({
        showClose: true,
        message: '找不到'
      });
    })
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1{height: 80px;background: rgba(55, 160, 170, 0.73);width: 100%;line-height: 80px;color: #fff;font-family: '微软雅黑';font-size: 36px;text-align: center;margin-bottom: 10px}
  .new_box{height: 100px;margin-bottom: 10px;text-align: center}
  h3{font-size: 24px;text-align: center;padding-top: 10px;font-family: '微软雅黑'}
  article{width: 80%;margin: 0 auto;padding-top: 10px;font-family: '微软雅黑';}
  .on{background: #ffffff
  }
  .off{background: rgba(125, 128, 123, 0.49)
  }
  button{display:block; font-size: 30px;text-align: center;margin: 0 auto }
</style>
