<template>
  <div class="wrapper">
    <router-link tag="span" to="/home" class="iconfont back-icon left">&#xe601;</router-link>
    <div class="middle">
      <span class="iconfont search-icon">&#xe600;</span>
      <input type="text" :placeholder="placeholder">
    </div>
    <div class="right">
      <span class="city">搜索</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'homeHeader',
  props: {
    placeholder: String
  },
  data () {
    return {

    }
  },
  methods: {
  }
}
</script>

<style lang="stylus" scoped>
.wrapper
  display flex;
  height .88rem;
  .left
    width .8rem;
    height .88rem;
    line-height .88rem;
    text-align center;
    vertical-align middle;
  .middle
    position relative;
    flex: 1;
    .search-icon
      position absolute;
      left .28rem;
      top .28rem;
      color rgb(228, 231, 234);
    input 
      box-sizing border-box;
      display block;
      width 100%;
      height .6rem;
      margin: .14rem;
      text-align center;
      border-radius .4rem;
      background rgb(242, 242, 242);
      color #333;
    input::-webkit-input-placeholder
      text-align center;
      color rgb(117, 117, 117);
  .right
    margin-left .2rem;
    min-width 1.32rem;
    height  .88rem;
    line-height .88rem;
    text-align center;
</style>