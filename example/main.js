/*
 * @Description: 未描述
 * @Author: danielmlc
 * @Date: 2019-03-14 16:18:52
 * @LastEditTime: 2019-10-21 21:17:24
 */
import Vue from 'vue';

import 'highlight.js/styles/color-brewer.css';
import router from './router';
import './asset/style/index.css';
import App from './App.vue';
import DemoBlock from './components/demoBlock';
// import '../theme/src/index.scss';
// import elementMini from '../src/index';
import '../lib/theme/index.css';
import elementMini from '../lib/index.js';
Vue.use(elementMini);

// // eslint-disable-next-line no-undef
Vue.component('demo-code', DemoBlock);

// eslint-disable-next-line no-new
new Vue({
  el: '#app',
  router,
  components: {
    App
  },
  render: h => h(App)
});
