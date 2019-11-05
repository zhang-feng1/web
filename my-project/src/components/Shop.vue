<template>
  <div>
    <Head></Head>
    <el-table :data="tableData"  border style="width: 80%;margin: 0 auto"   >
      <el-table-column prop="id" label="#" width="80" ></el-table-column>
      <el-table-column prop="brand" label="名称"></el-table-column>
      <el-table-column  label="图例" prop="url">
        <template slot-scope="scope">
          <img :src="scope.row.src"  style="width: 100px">
        </template>
      </el-table-column>
      <el-table-column prop="single" label="型号"></el-table-column>
      <el-table-column prop="price" label="价格"></el-table-column>
      <el-table-column prop="num" label="数量" width="200">
        <template slot-scope="scope">
          <el-input-number v-model="scope.row.num" @change="handleChange" :min="1" :max="10"></el-input-number>
        </template>
      </el-table-column>
      <el-table-column prop="subtotal" label="小计">
        <template slot-scope="scope">
          <span>{{scope.row.num*scope.row.price}}</span>
        </template>
      </el-table-column>

    </el-table>
    <div>
        <p>总价：{{total}}</p>
    </div>

  </div>
</template>

<script>
  import Head from './Head'
    export default {
        name: "Shop",
      components: {Head},
      data(){
          return{
            tableData:[],
          }
      },
      methods: {
        handleChange(value) {
          console.log(value);
        }
      },
      created() {
        this.$axios.get('./../../static/shop.json')
          .then((res)=>{
            console.log(res.data);
            this.tableData=res.data;
          }).catch(()=>{
          this.$message({
            showClose: true,
            message: '找不到'
          })
        })
      },
      computed:{
        total(){
          let total = 0;
          this.tableData.map((tableData)=>{
            total +=tableData.num*tableData.price
          })
          return total;
        }
      }

    }
</script>
<style scoped>

p{font-size: 36px;
  width: 80%;text-align: right;margin-top: 20px}
</style>
