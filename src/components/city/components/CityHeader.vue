<template>
  <div class="wrapper">
    <router-link tag="span" :to="{ name: 'home' }" class="iconfont back">&#xe601;</router-link>
    <h1 class="title">城市选择</h1>
    <div class="in-out-wrapper">
      <div class="in active">境内</div>
      <div class="out">境外&港澳台</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'cityHeader'
}
</script>

<style lang="stylus" scoped>
.wrapper
  position relative;
  height 1.90rem;
  background rgb(0, 188, 212);
  color #fff;
  .back
    position absolute;
    left .32rem;
    top .32rem;
  .title
    text-align center;
    line-height 1rem;
    font-size .34rem;
  .in-out-wrapper
    display table;
    margin: .2rem auto;
    .in, .out
      display table-cell;
      width 50%;
      text-align center;
      padding: .1rem .8rem;
      border: 1px solid #fff;
      &.active
        background #fff;
        color rgb(0, 188, 215);
</style>