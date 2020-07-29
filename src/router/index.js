import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../components/home/Home';
import Search from '../components/search/Search.vue';
Vue.use(VueRouter);

export default new VueRouter({
  routes: [{
    path: '/',
    component: Home
  }, {
    path: '/search',
    component: Search
  }]
})