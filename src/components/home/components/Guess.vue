<template>
  <div class="wrapper">
    <h1 class="title"><span class="iconfont enjoy">&#xe601;</span>猜你喜欢</h1>
    <ul class="site-wrapper">
      <li v-for="item of guessList" :key="item.id" class="item border-bottom">
        <div class="item-content-wrapper">
          <img :src="item.imgUrl" alt="">
          <div class="item-content">
            <h3 class="item-title">{{ item.title }}</h3>
            <span class="iconfont star">&#xe601;</span>
            <div class="comment"><span class="number">{{ item.comment }}</span>条评论</div>
            <div class="price"><span class="iconfont yuan">&#xe601;</span><span class="number">{{ item.price }}</span>起</div>
            <div class="location">{{ item.location }}</div>
          </div>
        </div>
        <div class="desc">
          <span class="text">{{ item.desc }}</span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'guess',
  data () {
    return {
      guessList: [{
        id: '001',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/1802/39/39ec37884650dd97a3.img.png_200x200_580f99ac.png',
        title: '深圳平安金融中心',
        comment: 2158,
        price: 154.9,
        location: '福田区',
        desc: '深圳的观光地标'
      }, {
        id: '002',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/1802/39/39ec37884650dd97a3.img.png_200x200_580f99ac.png',
        title: '深圳平安金融中心',
        comment: 2158,
        price: 154.9,
        location: '福田区',
        desc: '深圳的观光地标'
      }, {
        id: '003',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/1802/39/39ec37884650dd97a3.img.png_200x200_580f99ac.png',
        title: '深圳平安金融中心',
        comment: 2158,
        price: 154.9,
        location: '福田区',
        desc: '深圳的观光地标'
      }, {
        id: '004',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/1802/39/39ec37884650dd97a3.img.png_200x200_580f99ac.png',
        title: '深圳平安金融中心',
        comment: 2158,
        price: 154.9,
        location: '福田区',
        desc: '深圳的观光地标'
      }, {
        id: '005',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/1802/39/39ec37884650dd97a3.img.png_200x200_580f99ac.png',
        title: '深圳平安金融中心',
        comment: 2158,
        price: 154.9,
        location: '福田区',
        desc: '深圳的观光地标'
      }]  
    }
  }
}
</script>

<style lang="stylus" scoped>
.wrapper
  margin-top .4rem;
  .title
    font-size .34rem;
  .site-wrapper
    padding: .30rem;
    .item
      padding-top .32rem;
      .item-content-wrapper
        display flex;
        img
          width 2rem;
        .item-content
          position relative
          flex 1;
          padding: 0 .2rem;
          .item-title
            margin-top .2rem;
            line-height .4rem;
            font-size .32rem;
          .star, .comment
            display inline;
            line-height .70rem;
            font-size .2rem;
          .price
            .yuan
              font-size .2rem;
              color rgb(255, 141, 41);
            .number
              font-size .48rem;
              color rgb(255, 141, 41);
          .location
            position absolute;
            bottom .2rem;
            right .2rem;
      .desc
        text-align center;
        width 100%;
        line-height .8rem;
        color rgb(255, 85, 85);
        .text
          display inline;
          text-align center;
          background rgb(255, 249, 249);

</style>