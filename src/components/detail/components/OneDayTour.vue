<template>
  <c-ticket title="一日游" :ticketList="ticketList"></c-ticket>
</template>

<script>
import CTicket from '../common/CTicket';
export default {
  name: 'oneDayTour',
  components: {
    CTicket
  },
  data () {
    return {
      ticketList: [{
        id: '001',
        name: '【深圳出发】莲花山公园+深圳平安金融中心1日游',
        price: 128
      }, {
        id: '002',
        name: '【深圳出发】世界之窗+深圳平安金融中心1日游',
        price: 698
      }, {
        id: '003',
        name: '【深圳出发】莲花山公园+大梅沙+地王大厦+大鹏古城+较场尾+深圳平安金融中心1日游',
        price: 298
      }, {
        id: '004',
        name: '【深圳出发】莲花山公园+大芬油画村+海上世界+深圳平安金融中心+深圳湾公园1日游',
        price: 298
      }]
    }
  }
}
</script>

<style lang="stylus" scoped>

</style>