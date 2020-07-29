<template>
  <div>
    <home-header></home-header>
    <icons></icons>
    <weekends></weekends>
    <guess></guess>
    <where></where>
  </div>
</template>

<script>
import HomeHeader from './components/HomeHeader';
import Icons from './components/Icons';
import Weekends from './components/Weekends';
import Guess from './components/Guess';
import Where from './components/Where';
export default {
  name: 'home',
  components: {
    HomeHeader,
    Icons,
    Weekends,
    Guess,
    Where
  }
}
</script>

<style lang="stylus" scoped>

</style>