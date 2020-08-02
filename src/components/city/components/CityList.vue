<template>
  <div ref="wrapper" class="wrapper">
    <div class="content">
      <div class="hot-wrapper">
        <h3 class="title">热门城市</h3>
        <ul class="city-content clearfix">
          <li @click="chooseCity(item)" v-for="(item, index) of hotCityList" :key="index" class="item">{{ item }}</li>
        </ul>
      </div>
      <div class="alphabet-sort-wrapper">
        <h3 class="title">字母排序</h3>
        <ul class="alphabet-content clearfix">
          <li @click="chooseAlphabet(key)" v-for="(value, key, index) of cityList" :key="index" class="item">{{ key }}</li>
        </ul>
      </div>
      <div :ref="key"
      v-for="(value, key, index) of cityList" :key="index" class="alphabet-wrapper">
        <h3 class="title">{{ key }}</h3>
        <ul class="alphabet-content clearfix">
          <li @click="chooseCity(item)" v-for="(item, index) of value" :key="index" class="item">{{ item }}</li>
        </ul>
      </div>
    </div>

  </div>
</template>

<script>
import axios from 'axios';
import { mapMutations } from 'vuex';
import BScroll from 'better-scroll';
export default {
  name: 'cityList',
  data () {
    return {
      cityList: '',
      hotCityList: '',
      scroll: null
    }
  },
  methods: {
    getCityList () {
      axios.get('/static/mock/city.json')
        .then((res) => {
          if (res.data.ret) {
            this.cityList = res.data.data;
          }
        })
    },
    getHotCityList () {
      axios.get('/static/mock/hotCity.json')
        .then((res) => {
          if (res.data.ret) {
            this.hotCityList = res.data.data;
          }
        })
    },
    ...mapMutations(['changeCity_M']),
    chooseCity (item) {
      this.changeCity_M(item);
      this.$router.push({ name: 'home' });
    },
    chooseAlphabet (key) {
      this.scroll.scrollToElement(this.$refs[key][0]);
    }
  },
  created () {
    this.getCityList();
    this.getHotCityList();
  },
  mounted () {
    this.scroll = new BScroll(this.$refs.wrapper);
  }
}
</script>

<style lang="stylus" scoped>
.wrapper
  position absolute;
  left 0;
  right 0;
  top 1.90rem;
  bottom 0;
  overflow hidden;
  .hot-wrapper
    .title
      height .8rem;
      line-height .8rem;
      text-indent .2rem;
      background rgb(245, 245, 245);
    .city-content
      .item
        float left;
        margin: 0 0 -1px -1px;
        width 33.33%;
        height 1.2rem;
        line-height 1.2rem;
        text-align center;
        border-right: 1px solid #ccc;
        border-bottom: 1px solid #ccc;     
  .alphabet-sort-wrapper
    .title
      height .8rem;
      line-height .8rem;
      text-indent .2rem;
      background rgb(245, 245, 245); 
    .alphabet-content
      padding: .2rem 0;
      .item
        box-sizing border-box;
        float left;
        width 16.66%;
        height 1.2rem;
        line-height 1.2rem;
        text-align center;
  .alphabet-wrapper
    .title
      height .8rem;
      line-height .8rem;
      text-indent .2rem;
      background rgb(245, 245, 245); 
    .alphabet-content
      .item
        float left;
        width 25%;
        height 1.2rem;
        line-height 1.2rem;
        text-align center;  
        border-bottom 1px solid #ccc;
        border-right 1px solid #ccc;
        margin: 0 0 -1px -1px;
</style>