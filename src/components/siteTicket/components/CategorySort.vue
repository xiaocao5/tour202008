<template>
  <div class="wrapper">
    <ul :style="fixedTopStyle" class="nav-wrapper clearfix">
      <li @click="categorySort('category')" class="total-category item" :class="{ active: isCategorySortActive==='category' }">
        全部分类
        <span class="indicator"></span>
      </li>
      <li @click="categorySort('sort')" class="recommend-sort item" :class="{ active: isCategorySortActive==='sort' }">
        推荐排序
        <span class="indicator"></span>
      </li>
    </ul>
    <div @click="closeCover" v-show="showCover" id="cover"></div>
    <div v-show="showCategorySort=='category'" class="model-total-category">
      <div class="model-content">
        <div ref="category-wrapper" class="category-wrapper">
          <ul class="category">
            <li @click="expandTheDetail($event, item.name, index)" v-for="(item, index) of categoryList" :key="item.id" class="item border-topbottom" :class="{ active: isActive===index}">
              <span v-html="item.code" class="iconfont"></span>
               {{ item.name }}
               <span class="qty">{{ item.qty }}</span>
            </li>
          </ul>
        </div>
        <div ref="detail-wrapper" class="detail-wrapper">
          <ul class="detail">
            <li v-for="item of showDetail" :key="item.id" class="item">
              {{ item.name }}
              <span class="qty">{{ item.qty }}</span>
            </li>
          </ul>
        </div>
      </div>

    </div>
    <div v-show="showCategorySort=='sort'" class="model-recommend-sort">
      <ul class="model-content">
        <li @click="RecommendSortItemSelected(0)" :class="{ active: isRecommendSortActive===0}" class="item border-topbottom">推荐排序</li>
        <li @click="RecommendSortItemSelected(1)" :class="{ active: isRecommendSortActive===1}" class="item border-topbottom">离我最近</li>
        <li @click="RecommendSortItemSelected(2)" :class="{ active: isRecommendSortActive===2}" class="item border-topbottom">人气最高</li>
      </ul>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll';
export default {
  name: 'siteTicket',
  props: {
    fixedTopStyle: Object
  },
  data() {
    return {
      scroll_1: null,
      scroll_2: null,
      showDetail: null,
      isActive: 0,
      isCategorySortActive: '',
      isRecommendSortActive: 0,
      showCover: false,
      showCategorySort: '',
      categoryList: [
        {
        id: '001',
        name: '全部分类',
        qty: 500
      }, {
        id: '002',
        name: '文化古迹',
        qty: 446
      }, {
        id: '003',
        name: '农家度假',
        qty: 430
      }, {
        id: '004',
        name: '游乐场',
        qty: 217
      }, {
        id: '005',
        name: '自然风光',
        qty: 188
      }, {
        id: '006',
        name: '展馆',
        qty: 184
      }, {
        id: '007',
        name: '公园',
        qty: 178
      }, {
        id: '008',
        name: '温泉',
        qty: 151
      }, {
        id: '009',
        name: '户外拓展',
        qty: 149
      }],
      exhibitionHallList: [{
        id: '001',
        name: '全部展馆',
        qty: 184
      }, {
        id: '002',
        name: '博物馆',
        qty: 91
      }, {
        id: '003',
        name: '展览馆',
        qty: 29
      }, {
        id: '004',
        name: '人文艺术馆',
        qty: 18
      }, {
        id: '005',
        name: '美术馆',
        qty: 13
      }, {
        id: '006',
        name: '纪念馆',
        qty: 8
      }, {
        id: '007',
        name: '科技馆',
        qty: 5
      }, {
        id: '008',
        name: '蜡像馆',
        qty: 2
      }, {
        id: '009',
        name: '天文馆',
        qty: 1
      }],
      parkList: [{
        id: '001',
        qty: 283,
        name: '全部公园'

      }, {
        id: '002',
        qty: 55,
        name: '森林公园'
      }, {
        id: '003',
        qty: 37,
        name: '主题公园'
      }, {
        id: '004',
        qty: 31,
        name: '地质公园'
      }, {
        id: '005',
        qty: 19,
        name: '园林'
      }, {
        id: '006',
        qty: 12,
        name: '湿地公园'
      }, {
        id: '007',
        qty: 6,
        name: '奥林匹克公园'
      }, {
        id: '008',
        qty: 6,
        name: '博览园'
      }, {
        id: '009',
        qty: 9,
        name: '民俗风情园'
      }],
      iconList: [{
        name: '全部分类',
        code: '&#xe600;'
      }, {
        name: '文化古迹',
        code: '&#xe601;'
      }, {
        name: '农家度假',
        code: '&#xe601;'
      }, {
        name: '游乐场',
        code: '&#xe601;'
      }, {
        name: '自然风光',
        code: '&#xe601;'
      }, {
        name: '展馆',
        code: '&#xe601;'
      }, {
        name: '公园',
        code: '&#xe601;'
      }, {
        name: '温泉',
        code: '&#xe601;'
      }, {
        name: '户外拓展',
        code: '&#xe601;'
      }]
    };
  },
  methods: {
    expandTheDetail (e, params, index) {
      this.isActive = index;
      console.log(e.target);
      console.log(params);
      switch (params) {
        case '展馆':
          this.showDetail = this.exhibitionHallList;
          break;
        case '公园':
          this.showDetail = this.parkList;
          break;
        default:
          break;
      }
    },
    categorySort(params) {
      this.isCategorySortActive = params;
      this.showCategorySort = params;
      this.showCover = true;
    },
    RecommendSortItemSelected (params) {
      this.isRecommendSortActive = params;
    },
    closeCover () {
      this.showCover = false;
      this.showCategorySort = false;
    }
  },
  created () {
    // let newCategoryList = [];
    this.categoryList.map((item) => {
      let corItem = this.iconList.find((innerItem) => {
        return item.name === innerItem.name;
      })
      item.code = corItem.code;
    })
  },
  mounted () {
    const options = {
      scrollY: true,
      scrollX: false,
      mouseWheel: true,
      click: true,
      taps: true,
      scrollbar: {
        fade: true,
        interactive: false // 1.8.0 新增
      },
      stopPropagation: true,//用法在于这一行
      probeType: 2
    }
    this.scroll_1 = new BScroll(this.$refs['category-wrapper'], options);
    this.scroll_2 = new BScroll(this.$refs['detail-wrapper'], options);
    this.scroll_1.on('scroll', function (e) {//之后被冒泡页，通过事件监听去出发控制
      if (Math.abs(e.x) <= 0) {
        this.scrollTo(0, e.y, 700)
      } 
    })    
  }
}
</script>

<style lang="stylus" scoped>
.wrapper .category-wrapper >>> .bscroll-vertical-scrollbar
  left 50%;
.wrapper
  .nav-wrapper
    .item
      float left;
      width 50%;
      text-align center;
      height .8rem;
      line-height .8rem;
      .indicator
        display inline-block;
        width .16rem;
        height .16rem;
        vertical-align 10%;
        border: 1px solid #333;
        border-color transparent transparent #333 #333;
        transform rotate(315deg);
      &.active
        color rgb(0, 175, 199);
        .indicator
          transform rotate(135deg);
          vertical-align -10%;
  #cover
    position absolute;
    left 0;
    right 0;
    width 100%;
    height 100%;
    background: rgba(0, 0, 0, 0.4);
    z-index 1
  .model-total-category
    position absolute;
    left 0;
    top 1.70rem;
    width 100%;
    height 5.0rem;
    background #fff;
    z-index 2
    .model-content
      position relative;
      height 5.0rem;
      .category-wrapper
        height 100%;
        overflow hidden
        .category
          .item
            width 50%;
            height 1rem;
            line-height 1rem;
            text-indent .2rem;
            &:before
              border-color #ccc;
            &.active
              background rgb(241, 241, 241);
            .qty
              float right;
              margin-right .2rem;
              color rgb(158, 158, 158);
      .detail-wrapper
        overflow hidden;
        position absolute;
        left 50%;
        top 0;
        width 50%;
        height 100%;
        .detail
          .item
            height 1rem;
            line-height 1rem;
            background rgb(241, 241, 241);
            text-indent .2rem;
            .qty
              float right;
              margin-right .2rem;
              color rgb(158, 158, 158);
  .model-recommend-sort
    position absolute;
    left 0;
    top 1.70rem;
    width 100%;
    height 3.0rem;
    background #fff;
    z-index 2;
    .model-content
      .item
        height 1rem;
        line-height 1rem;
        text-align center;
        &:after
          border-color #ccc;
        &.active
          background rgb(241, 241, 241);
</style>