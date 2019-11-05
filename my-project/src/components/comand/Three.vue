<template>
    <div class="box">
      <el-tabs type="border-card">
        <el-tab-pane label="用户管理">
          <el-table
            :data="tableData"
            style="width: 100%">
            <el-table-column
              prop="date"
              label="日期"
              width="180">
            </el-table-column>
            <el-table-column
              prop="name"
              label="姓名"
              width="180">
            </el-table-column>
            <el-table-column
              prop="address"
              label="地址">
            </el-table-column>
          </el-table>
        </el-tab-pane>
        <el-tab-pane label="配置管理">
          <el-table
            :data="peiData"
            style="width: 100%">
            <el-table-column
              prop="brand"
              label="厂商"
              width="180">
            </el-table-column>
            <el-table-column
              prop="single"
              label="型号"
              width="180">
            </el-table-column>
            <el-table-column
              prop="price"
              label="单价">
            </el-table-column>
          </el-table>
        </el-tab-pane>
        <el-tab-pane label="角色管理"><el-table
          :data="peiData"
          style="width: 100%">
          <el-table-column
            prop="id"
            label="序号"
            width="180">
          </el-table-column>
          <el-table-column
            prop="brand"
            label="品牌"
            width="180">
          </el-table-column>
          <el-table-column
            prop="single"
            label="型号">
          </el-table-column>
        </el-table></el-tab-pane>
        <el-tab-pane label="定时任务补偿"><el-table
          :data="peiData"
          style="width: 100%">
          <el-table-column
            prop="id"
            label="序号"
            width="180">
          </el-table-column>
          <el-table-column
            prop="single"
            label="产品"
            width="180">
          </el-table-column>
          <el-table-column
            prop="price"
            label="补偿价">
          </el-table-column>
        </el-table></el-tab-pane>
      </el-tabs>
    </div>
</template>

<script>
    export default {
        name: "Three",
      data() {
        return {
          peiData:[],
          tableData: [{
            date: '2016-05-02',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
          }, {
            date: '2016-05-04',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1517 弄'
          }, {
            date: '2016-05-01',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1519 弄'
          }, {
            date: '2016-05-03',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1516 弄'
          }]
        }
      },
      created() {
        this.$axios.get('./../../static/shop.json')
          .then((res)=>{
            console.log(res.data);
            this.peiData=res.data;
          }).catch(()=>{
          this.$message({
            showClose: true,
            message: '找不到'
          })
        })
      },
    }
</script>

<style scoped>
  .box{width: 80%;margin-left: 220px;position: absolute;top: 100px;float: left}
</style>
