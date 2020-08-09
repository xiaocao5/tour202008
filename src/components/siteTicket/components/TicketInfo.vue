<template>
  <ul class="ticket-info-wrapper">
    <li v-for="item of ticketInfoList" :key="item.id" class="item">
      <div class="content">
        <img :src="item.imgUrl" alt="">        
        <div class="main">
          <h3 class="name">{{ item.name }}</h3>
          <div class="comment-wrapper">
            <span class="star">*****</span>
            <span class="number">{{ item.comment }}</span>
            <span class="text">评论</span>
          </div>
          <div class="price-wrapper">
            <span class="iconfont money-icon">&#xe600;</span>
            <span class="number">{{ item.price }}</span>
            <span class="text">起</span>
          </div>
          <div class="location">{{ item.location }}</div>
          <div class="tag-wrapper">
            <span v-for="(innerItem, index) of item.tagList" :key="index" class="tag">{{ innerItem }}</span>
          </div>
        </div>
      </div>
      <ul v-for="innerItem of item.ticketList" :key="innerItem.id" class="ticket-wrapper">
        <li class="innerItem clearfix border-topbottom">
          <div class="text">{{ innerItem.text }}</div>
          <div class="price">
            <span class="iconfont money">&#xe601;</span>
            <span class="number">{{ innerItem.price }}</span>
          </div>
        </li>      
      </ul>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'ticketInfo',
  data () {
    return {
      ticketInfoList: [{
        id: '001',
        imgUrl: 'https://imgs.qunarzz.com/sight/p0/2005/39/3979f1867defec4ea3.water.jpg_110x110_f04a71fe.jpg',
        name: '故宫(5A)',
        comment: 590846,
        price: 45,
        location: '东城区',
        tagList: ['必游景点', '庙会', '博物馆排名第一'],
        ticketList: [{
          id: '001',
          text: '故宫[预售上午场]门票成人票',
          price: 65
        }, {
          id: '002',
          text: '故宫[预售上午场]门票成人票',
          price: 65
        }]
      }, {
        id: '002',
        imgUrl: 'https://imgs.qunarzz.com/sight/p0/2005/39/3979f1867defec4ea3.water.jpg_110x110_f04a71fe.jpg',
        name: '故宫(5A)',
        comment: 590846,
        price: 45,
        location: '东城区',
        tagList: ['必游景点', '庙会', '博物馆排名第一'],
        ticketList: [{
          id: '001',
          text: '故宫[预售上午场]门票成人票',
          price: 65
        }, {
          id: '002',
          text: '故宫[预售上午场]门票成人票',
          price: 65
        }]
      }, {
        id: '003',
        imgUrl: 'https://imgs.qunarzz.com/sight/p0/2005/39/3979f1867defec4ea3.water.jpg_110x110_f04a71fe.jpg',
        name: '故宫(5A)',
        comment: 590846,
        price: 45,
        location: '东城区',
        tagList: ['必游景点', '庙会', '博物馆排名第一'],
        ticketList: [{
          id: '001',
          text: '故宫[预售上午场]门票成人票',
          price: 65
        }, {
          id: '002',
          text: '故宫[预售上午场]门票成人票',
          price: 65
        }]
      }, {
        id: '004',
        imgUrl: 'https://imgs.qunarzz.com/sight/p0/2005/39/3979f1867defec4ea3.water.jpg_110x110_f04a71fe.jpg',
        name: '故宫(5A)',
        comment: 590846,
        price: 45,
        location: '东城区',
        tagList: ['必游景点', '庙会', '博物馆排名第一'],
        ticketList: [{
          id: '001',
          text: '故宫[预售上午场]门票成人票',
          price: 65
        }, {
          id: '002',
          text: '故宫[预售上午场]门票成人票',
          price: 65
        }]
      }, {
        id: '005',
        imgUrl: 'https://imgs.qunarzz.com/sight/p0/2005/39/3979f1867defec4ea3.water.jpg_110x110_f04a71fe.jpg',
        name: '故宫(5A)',
        comment: 590846,
        price: 45,
        location: '东城区',
        tagList: ['必游景点', '庙会', '博物馆排名第一'],
        ticketList: [{
          id: '001',
          text: '故宫[预售上午场]门票成人票',
          price: 65
        }, {
          id: '002',
          text: '故宫[预售上午场]门票成人票',
          price: 65
        }]
      }]
    }
  }
}
</script>

<style lang="stylus" scoped>
.ticket-info-wrapper
  .item
    .content
      display flex;
      img 
        width 2.2rem;
        height 2.2rem;
      .main
        flex 1;
        position relative;
        padding .1rem;
        .name 
          height .6rem;
          line-height .6rem;
          font-size .32rem;
        .price-wrapper
          margin-top .2rem;
          color rgb(255, 131, 123);
          line-height .6rem;
        .location
          position absolute;
          right 0;
          bottom 0;
          margin-bottom .60rem;
        .tag-wrapper
          .tag 
            padding: 2px;
            border 1px solid rgb(210, 241, 245);
            color rgb(82, 204, 235);
    .ticket-wrapper
      .innerItem
        display flex;
        line-height 1rem;
        height 1rem;
        padding: 0 .2rem;
        .text
          flex 1;
</style>