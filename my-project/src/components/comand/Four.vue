<template>
  <div class="box">
    <div id="myCharta" :style="{width: '300px', height: '300px'}"></div>
    <div id="myChartb" :style="{width: '350px', height: '300px'}"></div>
    <baidu-map :center="center" :zoom="zoom" @ready="handler"
               style="height:280px;width: 380px;position: absolute;top:330px"
               @click="getClickInfo" :scroll-wheel-zoom='true'>
    </baidu-map>
  </div>

</template>

<script>

    export default {
        name: "Four",
      data(){
          return{
            center: {lng: 109.45744048529967, lat: 36.49771311230842},
            zoom: 10
          }
      },
      mounted(){
        this.drawLine();
        this.vi();
      },
      methods:{
        drawLine(){
          // 基于准备好的dom，初始化echarts实例
          let myCharta = this.$echarts.init(document.getElementById('myCharta'))
          // 绘制图表
          myCharta.setOption({
            title: { text: '在Vue中使用echarts' },
            tooltip: {},
            xAxis: {
              data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
            },
            yAxis: {},
            series: [{
              name: '销量',
              type: 'bar',
              data: [5, 20, 36, 10, 10, 20]
            }]
          });
          },
        vi(){
          let myChartb = this.$echarts.init(document.getElementById('myChartb'));
          myChartb.setOption({
            title : {
              text: '某站点用户访问来源',
              x:'center'
            },
            tooltip : {
              trigger: 'item',
              formatter: "{a} <br/>{b} : {c} ({d}%)"
            },
            legend: {
              orient: 'vertical',
              left: 'left',
              data: ['直接访问','邮件营销','联盟广告','视频广告','搜索引擎']
            },
            series : [
              {
                name: '访问来源',
                type: 'pie',
                radius : '55%',
                center: ['50%', '60%'],
                data:[
                  {value:335, name:'直接访问'},
                  {value:310, name:'邮件营销'},
                  {value:234, name:'联盟广告'},
                  {value:135, name:'视频广告'},
                  {value:1548, name:'搜索引擎'}
                ],
                itemStyle: {
                  emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                  }
                }
              }
            ]
          })
        },
        handler ({BMap, map}) {
          var point = new BMap.Point(116.567285,39.875223)
          map.centerAndZoom(point,15)
          var marker = new BMap.Marker(point) // 创建标注
          map.addOverlay(marker) // 将标注添加到地图中
          var circle = new BMap.Circle(point, 6, { strokeColor: 'Red', strokeWeight: 1, strokeOpacity: 1, Color: 'Red', fillColor: '#f03' })
          map.addOverlay(circle)
        },
        getClickInfo (e) {
          console.log(e.point.lng)
          console.log(e.point.lat)
          this.center.lng = e.point.lng
          this.center.lat = e.point.lat
        },

    }
    }
</script>

<style scoped>
  .box{width: 80%;margin-left: 220px;position: absolute;top: 100px;float: left}
  #myCharta{
    position: absolute;left: 20px;top: 20px;}
  #myChartb{text-align: right; position: absolute;left: 400px;top: 20px;}
</style>
