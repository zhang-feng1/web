<template>
    <div>
      <h1>详情信息</h1>
      <template>
        <swiper :options="swiperOption" ref="mySwiper">
          <!-- slides -->
          <swiper-slide><img src="./../../../image/1.jpg" alt=""></swiper-slide>
          <swiper-slide><img src="./../../../image/2.jpg" alt=""></swiper-slide>
          <swiper-slide><img src="./../../../image/3.jpg" alt=""></swiper-slide>
          <swiper-slide><img src="./../../../image/4.jpg" alt=""></swiper-slide>
          <swiper-slide><img src="./../../../image/5.jpg" alt=""></swiper-slide>
          <!-- Optional controls -->
          <div class="swiper-pagination"  slot="pagination"></div>
          <div class="swiper-button-prev" slot="button-prev"></div>
          <div class="swiper-button-next" slot="button-next"></div>
        </swiper>
      </template>

      <!--使用v-bind动态绑定图片路径时-->
      <div class="single_box">
        <h3>{{msg.title}}</h3>
        <article>{{msg.body}}</article>
      </div>
    </div>
</template>

<script>

    export default {
        name: "Single",
      data(){
          return{
            msg:{},
            id:this.$route.params.id,
            swiperOption: {
              loop:true,
              pagination : '.swiper-pagination',
              paginationClickable :true,
              prevButton:'.swiper-button-prev',
              nextButton:'.swiper-button-next',
              autoplay:1000,
              effect : 'flip',
            }
          }
      },
      created() {
          this.$axios.get('http://jsonplaceholder.typicode.com/posts/'+this.id)
            .then((res)=>{
              console.log(res.data);
              this.msg=res.data;
            }).catch(()=>{
            this.$message({
              showClose: true,
              message: '找不到',
              type:'error'
            });
          })
      },
      computed: {
        swiper() {
          return this.$refs.mySwiper.swiper
        }
      },

    }
</script>

<style scoped>
  h1{height: 80px;background: #aa992f;width: 100%;line-height: 80px;color: #fff;font-size: 36px;text-align: center;margin-bottom: 10px}
  .single_box{height: 100px;margin-bottom: 10px;background: #1b6d85;text-align: center}
    h3{font-size: 24px;text-align: center;padding-top: 10px}
    article{width: 80%;margin: 0 auto;padding-top: 10px}
    img{width: 400px;height: 400px;}
  .swiper-container{width:400px;margin-bottom: 20px}
  .pagination {
    position: absolute;
    z-index: 20;
    bottom: 10px;
    width: 100%;
    text-align: center;
  }
  .swiper-pagination-switch {
    display: inline-block;
    width: 8px;
    height: 8px;
    border-radius: 8px;
    background: #555;
    margin: 0 5px;
    opacity: 0.8;
    border: 1px solid #fff;
    cursor: pointer;
  }
  .swiper-active-switch {
    background: #fff;
  }
</style>
