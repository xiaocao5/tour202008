<template>
  <div class="wrapper">
    <router-link v-show="showBack" tag="span" class="iconfont back" :to="{ name: 'home' }">&#xe600;</router-link>
    <div :style="styleObj" class="header-wrapper">
      <router-link tag="span" class="iconfont back-icon" :to="{ name: 'home' }">&#xe600;</router-link>
      <h1 class="title">深圳平安金融中心</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: "cityHeader",
  props: {
    styleObj: Object,
    showBack: Boolean
  },
  data () {
    return {
    }
  }
};
</script>

<style lang="stylus" scoped>
.wrapper
  .back
    position fixed;
    left .2rem;
    top .1rem;
    width .8rem;
    height .8rem;
    line-height .8rem;
    color #fff;
    background rgba(61, 48, 54, .5);
    border-radius 50%;
    text-align center;
  .header-wrapper
    .back-icon
      z-index 999;
      position fixed;
      left .2rem;
      top .1rem;
      width .8rem;
      height .8rem;
      text-align center;
      line-height .8rem;
      color #fff;
    .title
      position fixed;
      top 0;
      width 100%;
      height 1rem;
      line-height 1rem;
      text-align center;
      color #fff;
      font-size .4rem;
      background rgb(0, 188, 212);
</style>