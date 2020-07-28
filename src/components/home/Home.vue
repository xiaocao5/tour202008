<template>
  <div>
    <home-header></home-header>
    <icons></icons>
  </div>
</template>

<script>
import HomeHeader from './components/HomeHeader';
import Icons from './components/Icons';
export default {
  name: 'home',
  components: {
    HomeHeader,
    Icons
  }
}
</script>

<style lang="stylus" scoped>

</style>