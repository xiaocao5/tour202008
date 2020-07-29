<template>
  <div class="wrapper">
    <div class="head clearfix">
      <div class="left">热门搜索</div>
      <div class="right"><span class="iconfont refresh">&#xe601;</span>换一批</div>
    </div>
    <div class="body">
      <div class="site border-bottom">
        <span class="iconfont site-icon">&#xe601;</span>
        <div class="content clearfix">
          <div class="top clearfix">
            <div class="name">世界之窗</div>
            <div class="name">锦绣中华民俗村</div>
          </div>
          <div class="bottom clearfix">
            <div class="name">东部华侨城茶溪谷</div>
            <div class="name">东部华侨城大峡谷</div>            
          </div>
        </div>
      </div>
      <div class="location border-bottom">
        <span class="iconfont location-icon">&#xe601;</span>
        <div class="content">
          <div class="name">东莞</div>
          <div class="name">惠州</div>
          <div class="name">桂林</div>
          <div class="name">珠海</div>
        </div>
      </div>
      <input type="button" class="search-near-by" value="搜索身边的景点">
    </div>
  </div>
</template>

<script>
export default {
  name: 'tips'
}
</script>

<style lang="stylus" scoped>
.wrapper
  .head
    background rgb(240, 245, 246);
    height .6rem;
    line-height .6rem;
    .left
      float: left;
      text-indent .2rem;
    .right
      margin-right .2rem;
      float right;
      color rgb(0, 182, 213);
  .body
    .site
      display flex;
      align-items center;
      margin .2rem 0;
      padding-bottom .2rem;
      height 1.6rem;
      &:before
        border-color #666;
      .site-icon
        width .6rem;
        text-align center;
      .content
        position relative
        flex 1;
        height 1.6rem;
        border-left 1px solid #ccc;
        .top
          position absolute;
          top 0;
          left 0;
          padding-left .2rem;
          .name
            float left;
            padding .2rem;
            border-right 1px dotted #ccc;
        .bottom 
          position absolute;
          bottom 0;
          left 0;
          padding-left .2rem;
          .name
            float left;
            padding .2rem;
            border-right 1px dotted #ccc;          
    .location
      display flex;
      align-items center;
      height .8rem;
      margin .2rem 0;
      padding-bottom .2rem;
      &:before
        border-color #666;      
      .location-icon
        width .6rem;
        height .8rem;
        line-height .8rem;
        text-align center;
        border-right 1px solid #ccc;
      .content
        flex 1;
        padding .4rem;
        .name
          float left;
          border-right 1px dotted #ccc;
          padding .02rem .4rem;
    .search-near-by
      display block;
      width 90%;
      margin 0 auto;
      padding .2rem 0;
      border-radius .10rem;
      border: 1px solid #ccc;
      background #fff;
</style>