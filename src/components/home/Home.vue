<template>
  <div ref="home-wrapper" class="home-wrapper">
    <div class="content">
      <home-header></home-header>
      <icons></icons>
      <weekends></weekends>
      <guess></guess>
      <where></where>
    </div>
  </div>
</template>

<script>
import HomeHeader from './components/HomeHeader';
import Icons from './components/Icons';
import Weekends from './components/Weekends';
import Guess from './components/Guess';
import Where from './components/Where';
import BScroll from 'better-scroll';
export default {
  name: 'home',
  components: {
    HomeHeader,
    Icons,
    Weekends,
    Guess,
    Where
  },
  data () {
    return {
      scroll: null
    }
  },
  mounted () {
    this.scroll = new BScroll(this.$refs['home-wrapper']);
  }
}
</script>

<style lang="stylus" scoped>
.home-wrapper
  height 100vh;
</style>