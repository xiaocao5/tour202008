<template>
  <div class="home-header-wrapper">
    <span class="iconfont left">&#xe601;</span>
    <div class="middle">
      <span class="iconfont search-icon">&#xe600;</span>
      <input @focus="handleFocus" type="text" placeholder="输入城市/景点/游玩主题">
    </div>
    <div class="right">
      <router-link class="city" tag="span" to="/city">{{ $store.state.city }}</router-link>
      <span class="iconfont">&#xe62a;</span>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
  name: 'homeHeader',
  data () {
    return {

    }
  },
  computed: {
    ...mapState(['city'])
  },
  methods: {
    handleFocus () {
      this.$router.push('/search');
    }
  }
}
</script>

<style lang="stylus" scoped>
.home-header-wrapper
  display flex;
  height .88rem;
  background rgb(0, 188, 212);
  .left
    width .8rem;
    height .88rem;
    line-height .88rem;
    text-align center;
    vertical-align middle;
    color #fff;
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
      padding-left .2rem;
      width 100%;
      height .6rem;
      margin: .14rem;
      border-radius 4px;
      color #333;
    input::-webkit-input-placeholder
      padding-left .6rem;
      color rgb(228, 231, 234);
  .right
    margin-left .2rem;
    min-width 1.32rem;
    height  .88rem;
    line-height .88rem;
    text-align center;
    color #fff;
</style>