<template>
  <div>
    <c-header placeholder="输入城市或景点"></c-header>
    <tips></tips>
  </div>
</template>

<script>
import CHeader from '../../common/CHeader';
import Tips from './components/Tips';
export default {
  name: 'search',
  components: {
    CHeader,
    Tips
  }
}
</script>

<style lang="stylus" scoped>

</style>