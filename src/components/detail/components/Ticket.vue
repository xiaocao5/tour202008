<template>
  <c-ticket title="景区门票3" :ticketList="ticketList">
    <h3 slot="intro" class="intro">
      <span class="before-icon"></span>
      深圳平安金融中心观光层门票2
    </h3>
    <div slot="note" class="note">
      优待政策：老人、学生、儿童、残疾人、军人3
      <span class="iconfont more-icon">&#xe600;</span>
    </div>
    <li slot="adult-ticket" class="item normal">
      <div class="left">成人票</div>
      <div class="right">
        <div class="price">
          <span class="iconfont money-icon">&#xe600;</span>
          <span class="number">154</span>
          <span class="text">起</span>
        </div>
        <div class="check">查看</div>
      </div>
    </li>
  </c-ticket>
</template>

<script>
import CTicket from '../common/CTicket';
export default {
  name: 'ticket',
  components: {
    CTicket
  },
  data () {
    return {
      ticketList: [{
        id: '001',
        name: '成人票(提前一天)',
        price: 154
      }, {
        id: '002',
        name: '成人票(随买随用)',
        price: 153.8
      }]
    }
  }
}
</script>

<style lang="stylus" scoped>
  .intro
    .before-icon
      display inline-block;
      margin-right .1rem;
      width .10rem;
      height .26rem;
      background rgb(0, 209, 206);
    line-height .8rem;
    text-indent .2rem;
    font-weight bold;
    font-size .34rem;
  .note
    height .6rem;
    line-height .6rem;
    border-radius .1rem;
    margin 0 .2rem;
    padding-left .2rem;
    font-size .22rem;
    background rgb(248, 248, 248);
    .more-icon
      float right;
      margin-right .2rem;
  .normal
    .right
      text-align center;
      .price
        display block;
        margin .10rem 0 0 0;
      .check
        display block;
        height .50rem;
        width 1.50rem;
        line-height .50rem;
        background rgb(255, 161, 26);
        text-align center;
        border-radius .6rem;
        color #fff;
</style>