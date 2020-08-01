<template>
  <div class="wrapper">
    <div class="hot-wrapper">
      <h3 class="title">热门城市</h3>
      <div class="city-content clearfix">
        <div class="name">北京</div>
        <div class="name">北京</div>
        <div class="name">北京</div>
        <div class="name">北京</div>
        <div class="name">北京</div>
        <div class="name">北京</div>
        <div class="name">北京</div>
        <div class="name">北京</div>
        <div class="name">北京</div>
      </div>
    </div>
    <div class="alphabet-sort-wrapper">
      <h3 class="title">字母排序</h3>
      <div class="alphabet-content clearfix">
        <div class="name">A</div>
        <div class="name">A</div>
        <div class="name">A</div>
        <div class="name">A</div>
        <div class="name">A</div>
        <div class="name">A</div>
        <div class="name">A</div>
        <div class="name">A</div>
        <div class="name">A</div>
      </div>
    </div>
    <div
    v-for="(value, key, index) of cityList" :key="index" class="alphabet-wrapper">
      <h3 class="title">{{ key }}</h3>
      <ul class="alphabet-content clearfix">
        <li v-for="(item, index) of value" :key="index" class="item">{{ item }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'cityList',
  data () {
    return {
      cityList: ''
    }
  },
  methods: {
    getCityList () {
      axios.get('/static/mock/city.json')
        .then((res) => {
          console.log(res);
          console.log(this);
          this.cityList = res.data;
        })
    }
  },
  created () {
    this.getCityList();
  }
}
</script>

<style lang="stylus" scoped>
.wrapper
  .hot-wrapper
    .title
      height .8rem;
      line-height .8rem;
      text-indent .2rem;
      background rgb(245, 245, 245);
    .city-content
      .name
        box-sizing border-box;
        float left;
        margin: 0 0 -1px -1px;
        width 33.33%;
        text-align center;
        padding .26rem 0;
        border-right: 1px solid #ccc;
        border-bottom: 1px solid #ccc;        
        &:nth-child(3n)
          border-right none;
        &:nth-last-child(1), &:nth-last-child(2), &:nth-last-child(3)
          border-bottom none;
  .alphabet-sort-wrapper
    .title
      height .8rem;
      line-height .8rem;
      text-indent .2rem;
      background rgb(245, 245, 245); 
    .alphabet-content
      padding: .2rem 0;
      .name
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