<template>
  <div class="wrapper">
    <h1 class="title">{{ title }}</h1>
    <slot name="intro"></slot>
    <slot name="note"></slot>
    <ul class="ticket-content">
      <slot name="adult-ticket"></slot>
      <li v-for="item of ticketList" :key="item.id" class="item">
        <div class="left">{{ item.name }}</div>
        <div class="right">
          <div class="price">
            <span class="iconfont more-icon">&#xe600;</span>
            <span class="number">{{ item.price }}</span>
            起
          </div>
          <span class="iconfont money-icon">&#xe600;</span>
        </div>
      </li>       
    </ul>
  </div>
</template>

<script>
export default {
  name: 'ticket',
  props: {
    title: String,
    ticketList: Array
  }
}
</script>

<style lang="stylus" scoped>
.wrapper
  .title
    height 1rem;
    line-height 1rem;
    font-weight bold;
    font-size .4rem;
    text-indent .2rem;
  .ticket-content
    width 96%;
    margin 0 auto;
    border: 1px solid #ccc;
    border-radius .2rem;
    box-shadow rgb(230, 230, 230) 0 0 .1rem;
    .item
      display flex;
      align-items center;
      margin 0 .2rem;
      padding .4rem .2rem;
      line-height .4rem;
      border-bottom 1px solid #ccc;
      .left
        flex 1;
      .right
        position relative
        float right;
        margin-left .10rem;
        .price
          display inline;
          margin .10rem 0 0 0;
          width 1.50rem;
          height .70rem;
          line-height .70rem;
          text-align center;
          font-size .12rem;
          color rgb(255, 139, 66);
          letter-spacing -.05rem;
          .money-icon
            font-size .12rem;
          .number
            font-size .48rem;
</style>