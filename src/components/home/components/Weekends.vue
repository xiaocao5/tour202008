<template>
  <div class="weekends-wrapper">
    <h1 class="title"><span class="iconfont left">&#xe601;</span>本周热门榜单</h1>
    <div class="total">全部榜单<span class="iconfont left">&#xe601;</span></div>
    <div ref="scroll-wrapper" class="scroll-wrapper">
      <ul ref="site-wrapper" class="site-wrapper clearfix">
        <li v-for="item of weekendsList" :key="item.id" class="item">
          <img :src="item.imgUrl" alt="">
          <div class="name">{{ item.name }}</div>
          <div class="price"><span class="iconfont yuan">&#xe601;</span><span class="number">{{ item.price }}</span>起</div>
        </li>
      </ul>      
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  name: 'weekends',
  data () {
    return {
      scroll: '',
      weekendsList: [{
        id: '001',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/1604/e0/e074ca39741daad890.water.jpg_250x250_b8020e8f.jpg',
        name: '深圳欢乐谷',
        price: 198
      }, {
        id: '002',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/1604/e0/e074ca39741daad890.water.jpg_250x250_b8020e8f.jpg',
        name: '深圳欢乐谷',
        price: 198
      }, {
        id: '003',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/1604/e0/e074ca39741daad890.water.jpg_250x250_b8020e8f.jpg',
        name: '深圳欢乐谷',
        price: 198
      }, {
        id: '004',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/1604/e0/e074ca39741daad890.water.jpg_250x250_b8020e8f.jpg',
        name: '深圳欢乐谷',
        price: 198
      }, {
        id: '005',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/1604/e0/e074ca39741daad890.water.jpg_250x250_b8020e8f.jpg',
        name: '深圳欢乐谷',
        price: 198
      }, {
        id: '006',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/1604/e0/e074ca39741daad890.water.jpg_250x250_b8020e8f.jpg',
        name: '深圳欢乐谷',
        price: 198
      }, {
        id: '007',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/1604/e0/e074ca39741daad890.water.jpg_250x250_b8020e8f.jpg',
        name: '深圳欢乐谷',
        price: 198
      }]
    }
  },
  mounted () {
    const options = {
      scrollY: false,
      scrollX: true,
      click: true,
      taps: true
    };
    this.$refs['site-wrapper'].style.width = this.weekendsList.length * 100 + 'px';
    console.log(this.$refs['site-wrapper'].style.width);
    this.scroll = new BScroll(this.$refs['scroll-wrapper'], options);
  }
}
</script>

<style lang="stylus" scoped>
.weekends-wrapper
  position relative
  padding: .2rem;
  .title
    font-size .3rem;
  .total
    position absolute;
    right 0;
    top .28rem;
    color rgb(97, 97, 97);
  .scroll-wrapper
    .site-wrapper
      margin-top .4rem;
      text-align center;
      .item
        box-sizing border-box;
        float left;
        width 2rem;
        height 2.4rem;
        img 
          width 96%;
        .name
          line-height .4rem;
        .price
          line-height .4rem;
          .yuan, .number
            color rgb(255, 142, 23);
</style>