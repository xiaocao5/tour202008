<template>
  <div class="wrapper">
    <div class="banner-wrapper">
      <router-link to="/siteImgs">
        <img src="//img1.qunarzz.com/sight/p0/1802/39/39ec37884650dd97a3.img.png_600x330_3dacf737.png" alt="">
      </router-link>
      <div class="atlas"><span class="iconfont atlas-icon">&#xe600;</span>2</div>
      <div class="name">深圳平安金融中心</div>
    </div>
    <div class="about-wrapper clearfix">
      <div class="left">
        <span class="rate"><span class="number">5.0</span>分</span>
        <span class="impression">超赞</span>
        <span class="comment"><span class="number">2170</span>条评论</span>
        <span class="iconfont more-icon">&#xe600;</span>
      </div>
      <div class="right">
        <div class="site-title">景点简介</div>
        <div class="tips">开放时间、贴士</div>
        <span class="iconfont more-icon">&#xe600;</span>
      </div>
    </div>
    <div class="location">
      <span class="iconfont location-icon">&#xe600;</span>
      深圳市福田区益田路5033号平安金融中心116层
      <span class="iconfont more-icon">&#xe600;</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'banner',
  props: {
    
  }
}
</script>

<style lang="stylus" scoped>
.wrapper
  .banner-wrapper
    position relative
    img 
      width 100%;
    .atlas
      display inline-block;
      position absolute;
      left .2rem;
      bottom 1.2rem;
      padding .1rem .34rem;
      font-size .2rem;
      color #fff;
      background rgba(28, 32, 36, .8);
      border-radius .26rem;
      .atlas-icon
        font-size .1rem;
        margin 0 .08rem;
    .name
      position absolute;
      left .2rem;
      bottom .6rem;
      color #fff;
      font-size .36rem;
  .about-wrapper
    .left
      box-sizing border-box;
      padding .2rem;
      width 50%;
      float left;
      .rate
        color rgb(255, 131, 0);
        font-size .2rem;
        .number 
          font-size .4rem;
      .impression
        margin-left .30rem;
        color rgb(255, 131, 0);
        font-size .2rem;
      .comment
        display block;
        height .50rem;
        line-height .50rem;
        color rgb(158, 158, 158);
      .more-icon
        float right;
        margin-top -.6rem;
    .right
      box-sizing border-box;
      float right;
      width 50%;
      padding .2rem;
      .tips
        line-height .60rem;
        color rgb(158, 158, 158);
      .more-icon
        float right;
        margin-top -.6rem;
  .location
    height 1rem;
    line-height 1rem;
    margin-left .30rem;
    .more-icon
      float right;
      margin-right .2rem;
</style>