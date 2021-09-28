import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import router from './router.js';
import './axios.js';

import HomeHead from "@/views/base/homeHead"
import HomeFooter from "@/views/base/homeFooter"

import App from './App.vue'
// 引入echarts
import echarts from 'echarts'

import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
import VueHighlightJS from 'highlight.js';

import VueResource from 'vue-resource'
Vue.use(VueResource)

Vue.use(VueHighlightJS)

Vue.directive('highlight', (el) => {
  let blocks = el.querySelectorAll('pre code')
  blocks.forEach((block) => {
    VueHighlightJS.highlightBlock(block)
  })
})

Vue.directive('title', {
  // eslint-disable-next-line no-unused-vars
  inserted: function (el, binding) {
    document.title = el.dataset.title
  }
})

Vue.prototype.$echarts = echarts

Vue.use(HomeHead)

Vue.use(HomeFooter)

Vue.use(ElementUI)

Vue.config.productionTip = false

Vue.use(mavonEditor)

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
