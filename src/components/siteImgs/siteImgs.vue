<template>
  <div class="wrapper">
    <router-link tag="span" :to="{ name: 'detail' }" class="iconfont back-icon">&#xe600;</router-link>
    <h1 class="title">景区图片</h1>
    <div class="img-wrapper">
      <img class="img-content" @click="open" v-for="item of imgList" :key="item.id" :src="item.imgUrl" alt="">
    </div>
    <div v-show="showGallery" @click="close" class="gallery-wrapper">
      <div class="content">
        <swiper :options="swiperOption">
          <swiper-slide v-for="item of imgList" :key="item.id">
            <img :src="item.imgUrl" alt="">
          </swiper-slide>
          <div class="swiper-pagination"  slot="pagination"></div>
        </swiper>   
      </div>
    </div>
  </div>
</template>

<script>
require('swiper/dist/css/swiper.css')
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  name: 'siteImgs',
  components: {
    swiper,
    swiperSlide
  },
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        paginationType: 'fraction'
      },
      showGallery: false,
      imgList: [{
        id: '001',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/1510/d0/d0610302e0ae770890.water.jpg_350x240_0e4c6de4.jpg'
      }, {
        id: '002',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/201403/10/85107f04368a6d44b7c073ef2b51d4ca.jpg_350x240_3bb7eaa3.jpg'
      }, {
        id: '003',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/201301/15/302b104deae56c0d93835fbb.jpg_350x240_e7ff15f6.jpg'
      }, {
        id: '004',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/201403/10/e90cfda89c7f27f8595e4f8de0278a16.jpg_350x240_613b2905.jpg'
      }, {
        id: '005',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/201403/10/4f85c71af52f964fc3744a8e3a194b17.jpg_350x240_a687b9e3.jpg'
      }]
    }
  },
  methods: {
    open () {
      this.showGallery = true;
    },
    close () {
      this.showGallery = false;
    }
  }
}
</script>

<style lang="stylus" scoped>
.swiper-container
  overflow visible;
.wrapper
  background rgb(245, 245, 245);
  height 100vh;
  .back-icon
    position fixed;
    left .4rem;
    top .4rem;
    font-size .4rem;
  .title
    height 1rem;
    line-height 1rem;
    text-align center;
    border 1px solid rgb(224, 224, 224);
    font-size .4rem;
    background #fff;
  .img-wrapper
    padding .2rem;
    .img-content
      flex-shrink 0;
      width 48%;
      margin 1% 1%;
  .gallery-wrapper
    display flex;
    flex-direction column;
    justify-content center;
    position fixed;
    left 0;
    right 0;
    top 0;
    bottom 0;
    background black;
    .content
      img 
        width 100%;
    .swiper-pagination
      color #fff;
      bottom -3rem;
</style>