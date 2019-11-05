<template>
  <div class="box">
    <el-transfer v-model="value" :data="data" :titles="['未完成','已完成']"></el-transfer>
    <div class="block">
      <el-image :src="src"></el-image>
      <span class="demonstration">图片鉴赏</span>
    </div>
    <el-collapse v-model="activeName" accordion>
      <el-collapse-item title="一致性 Consistency" name="1">
        <div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>
        <div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>
      </el-collapse-item>
      <el-collapse-item title="反馈 Feedback" name="2">
        <div>控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；</div>
        <div>页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。</div>
      </el-collapse-item>
      <el-collapse-item title="效率 Efficiency" name="3">
        <div>简化流程：设计简洁直观的操作流程；</div>
        <div>清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；</div>
        <div>帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。</div>
      </el-collapse-item>
      <el-collapse-item title="可控 Controllability" name="4">
        <div>用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；</div>
        <div>结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。</div>
      </el-collapse-item>
    </el-collapse>
  </div>


</template>

<script>
    export default {
        name: "Two",
      data() {
        const generateData = () => {
          const data = [];
          const cities = ['吃饭', '睡觉', '学习', '工作', '娱乐','读书','运动'];
          cities.forEach((city,index) => {
            data.push({
              label: city,
              key: index,
            });

          });
          console.log(data)
          return data;
        };
        return {
          data: generateData(),
          value: [],
          activeName: '1',

          src: 'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg',
        };
      },
    }
</script>

<style scoped>
  .box{width: 80%;margin-left: 220px;position: absolute;top: 100px;float: left}
  .el-image{width: 200px;height: 200px}
  .block{position: absolute;top:0px;left: 540px;border: 1px silver solid; width: 260px;
    height: 260px;text-align: center;padding-top: 30px}
  span{display: block;font-size: 20px;text-align: center}
  .el-collapse{position: absolute;top: 320px;}
  .el-collapse-item{width: 500px;}
</style>
