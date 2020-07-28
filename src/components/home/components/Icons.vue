<template>
  <swiper class="swiper-wrapper" :options="swiperOption">
    <!-- slides -->
    <swiper-slide v-for="(page, index) of pages" :key="index">
      <ul class="wrapper">
        <li class="item" v-for="item of page" :key="item.id">
          <img :src="item.imgUrl" alt />
          <p class="name">{{ item.name }}</p>
        </li>
      </ul>
    </swiper-slide>
    <!-- Optional controls -->
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>

<script>
import { swiper, swiperSlide } from "vue-awesome-swiper";
export default {
  components: {
    swiper,
    swiperSlide,
  },
  data() {
    return {
      swiperOption: {},
      iconsList: [{
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
        name: '景点门票'
      }, {
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
        name: '景点门票'
      }, {
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
        name: '景点门票'
      }, {
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
        name: '景点门票'
      }, {
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
        name: '景点门票'
      }, {
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
        name: '景点门票'
      }, {
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
        name: '景点门票'
      }, {
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
        name: '景点门票'
      }, {
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
        name: '景点门票'
      }, {
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
        name: '景点门票'
      }, {
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
        name: '景点门票'
      }, {
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
        name: '景点门票'
      }]
    };
  },
  computed: {
    pages () {
      let arr = [];
      this.iconsList.forEach((item, index) => {
        let a = Math.floor(index / 9);
        if (!arr[a]) {
          arr[a] = [];
        } else {
          arr[a].push(item);
        }
      })
      return arr;
    }
  }
};
</script>

<style lang="stylus" scoped>
.swiper-wrapper
  overflow: hidden; 
  width: 100%; 
  height: 0; 
  padding-bottom: 54%
  .wrapper {
    padding-top: 0.4rem;
    .item {
      float: left;
      width: 25%;
      text-align: center;

      img {
        width: 1.2rem;
      }

      .name {
        line-height: 0.6rem;
      }
    }
  }
</style>