import Vue from 'vue'
import App from './App.vue'
import './assets/styles/border.css';
import './assets/styles/reset.css';
import fastclick from 'fastclick';
import './assets/styles/iconfont.css';
require('swiper/dist/css/swiper.css')

Vue.config.productionTip = false
fastclick.attach(document.body);

new Vue({
  render: h => h(App),
}).$mount('#app')
