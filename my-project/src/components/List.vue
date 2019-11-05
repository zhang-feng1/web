<template>
  <div>
    <Head></Head>

      <el-table :data="tableData" stripe >
        <el-table-column prop="title" label="标题" ></el-table-column>
        <el-table-column prop="body" label="内容" ></el-table-column>
      </el-table>
    <el-pagination
      background
      @current-change="handleCurrentChange"
      :current-page="currentPage"
      layout="prev, pager, next"
      :page-size="pageSize"
      :total="total">
    </el-pagination>
  </div>
</template>

<script>
  import Head from './Head'
    export default {
        name: "List",
      components: {Head},
      data(){
          return{
            message:[],
            total:0,
            pageSize:5,
            currentPage:1
          }
      },
      created() {
        console.log(this.$store.state.storeList)
          // this.$axios.get('./../../static/txt.json')
          //   .then((res)=>{
          //     console.log(res.data);
          //     this.message=res.data;
          //     this.total=res.data.length
          //   }).catch(()=>{
          //   this.$message({
          //     showClose: true,
          //     message: '找不到'
          //   })
          // })
        // this.message=this.$store.state. storeList;
        // this.total=this.$store.state.storeList.length
        this.message=JSON.parse(sessionStorage.getItem('list'))
        this.total=JSON.parse(sessionStorage.getItem('list')).length
      },
      methods:{
        handleCurrentChange(val) {
          console.log(val);
          this.currentPage=val
        }
      },
      computed:{
          tableData(){
            return this.message.slice((this.currentPage - 1)*this.pageSize,this.currentPage*this.pageSize)
          }
      }
    }
</script>

<style scoped>
  .el-table{width: 80%;margin: 0 auto;height: 500px;margin-bottom: 20px;border: 1px solid #8c8c8c;}
  .el-table__row{height: 80px}
  .el-pagination{text-align: center}
</style>
