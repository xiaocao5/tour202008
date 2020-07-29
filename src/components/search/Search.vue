<template>
  <div>
    <search-header></search-header>
    <tips></tips>
  </div>
</template>

<script>
import SearchHeader from './components/SearchHeader';
import Tips from './components/Tips';
export default {
  name: 'search',
  components: {
    SearchHeader,
    Tips
  }
}
</script>

<style lang="stylus" scoped>

</style>