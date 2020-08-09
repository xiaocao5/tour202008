<template>
  <div ref="site-ticket-wrapper" class="site-ticket-wrapper">
    <div class="content">
      <c-header placeholder="景点门票"></c-header>
      <category-sort></category-sort>
      <ticket-info></ticket-info>
    </div>
  </div>
</template>

<script>
import CHeader from '../../common/CHeader';
import CategorySort from './components/CategorySort';
import TicketInfo from './components/TicketInfo';
import BScroll from 'better-scroll';
export default {
  name: 'siteTicket',
  components: {
    CHeader,
    CategorySort,
    TicketInfo
  },
  data () {
    return {
      scroll: null
    }
  },
  mounted () {
    const options = {
      scrollY: true,
      scrollX: false,
      mouseWheel: true,
      click: true,
      taps: true,
      probeType: 2
    };
    this.scroll = new BScroll(this.$refs['site-ticket-wrapper'], options);
  }
}
</script>

<style lang="stylus" scoped>
.site-ticket-wrapper
  position absolute;
  left 0;
  right 0;
  top 0;
  bottom 0;
  overflow hidden;
</style>