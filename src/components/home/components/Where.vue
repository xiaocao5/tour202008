<template>
  <div class="wrapper">
    <h1 class="title">周末去哪儿</h1>
    <ul class="site-wrapper">
      <li v-for="item of siteList" :key="item.id" class="item">
        <img :src="item.imgUrl" alt="">
        <div class="name">{{ item.name }}</div>
        <div class="desc">{{ item.desc }}</div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'where',
  data () {
    return {
      siteList: [{
        id: '001',
        imgUrl: 'http://img1.qunarzz.com/sight/source/1507/d9/2ddc7652fdba16.jpg_r_640x214_5e62f1a3.jpg',
        name: '深圳周边游',
        desc: '远离城市拥堵，去周边开启清新假期吧。'
      }, {
        id: '002',
        imgUrl: 'http://img1.qunarzz.com/sight/source/1507/d9/2ddc7652fdba16.jpg_r_640x214_5e62f1a3.jpg',
        name: '深圳周边游',
        desc: '远离城市拥堵，去周边开启清新假期吧。'
      }, {
        id: '003',
        imgUrl: 'http://img1.qunarzz.com/sight/source/1507/d9/2ddc7652fdba16.jpg_r_640x214_5e62f1a3.jpg',
        name: '深圳周边游',
        desc: '远离城市拥堵，去周边开启清新假期吧。'
      }, {
        id: '004',
        imgUrl: 'http://img1.qunarzz.com/sight/source/1507/d9/2ddc7652fdba16.jpg_r_640x214_5e62f1a3.jpg',
        name: '深圳周边游',
        desc: '远离城市拥堵，去周边开启清新假期吧。'
      }]
    }
  }
}
</script>

<style lang="stylus" scoped>
.wrapper
  .title
    line-height 1rem;
    background rgb(245, 245, 245);
    text-indent .2rem;
  .site-wrapper
    .item
      margin-bottom .4rem;
      img 
        width 100%;
      .name
        font-size .3rem;
        line-height .6rem;
        text-indent .2rem;
      .desc
        font-size .2rem;
        line-height .2rem;
        text-indent .2rem;
</style>