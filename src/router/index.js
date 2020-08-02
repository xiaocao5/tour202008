import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../components/home/Home';
import Search from '../components/search/Search.vue';
import City from '../components/city/City.vue';
import Detail from '../components/detail/Detail.vue';
Vue.use(VueRouter);

export default new VueRouter({
  routes: [{
    path: '/',
    redirect: '/home'
  }, {
    path: '/home',
    name: 'home',
    component: Home
  }, {
    path: '/search',
    component: Search
  }, {
    path: '/city',
    component: City
  }, {
    path: '/detail',
    component: Detail
  }]
})