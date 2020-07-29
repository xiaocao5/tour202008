<template>
  <div>
    <home-header></home-header>
    <icons></icons>
    <weekends></weekends>
    <guess></guess>
  </div>
</template>

<script>
import HomeHeader from './components/HomeHeader';
import Icons from './components/Icons';
import Weekends from './components/Weekends';
import Guess from './components/Guess';
export default {
  name: 'home',
  components: {
    HomeHeader,
    Icons,
    Weekends,
    Guess
  }
}
</script>

<style lang="stylus" scoped>

</style>