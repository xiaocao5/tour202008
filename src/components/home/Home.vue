<template>
  <div>
    <home-header></home-header>
    <icons></icons>
    <weekends></weekends>
  </div>
</template>

<script>
import HomeHeader from './components/HomeHeader';
import Icons from './components/Icons';
import Weekends from './components/Weekends';
export default {
  name: 'home',
  components: {
    HomeHeader,
    Icons,
    Weekends
  }
}
</script>

<style lang="stylus" scoped>

</style>