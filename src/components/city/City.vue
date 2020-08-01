<template>
  <div class="wrapper">
    <city-header></city-header>
    <city-list></city-list>
  </div>
</template>

<script>
import CityHeader from './components/CityHeader';
import CityList from './components/CityList';
export default {
  components: {
    CityHeader,
    CityList
  }
}
</script>

<style lang="stylus" scoped>
</style>