/*
 * @Description: 未描述
 * @Author: danielmlc
 * @Date: 2019-03-14 16:18:52
 * @LastEditTime: 2020-02-18 21:55:32
 */
import Vue from 'vue';

import 'highlight.js/styles/color-brewer.css';
import router from './router';
import './asset/style/index.css';
import App from './App.vue';
import DemoBlock from './components/demoBlock';
import '../theme/src/index.scss';
import elementMini from '../src/index';
// import '../lib/theme/index.css';
// import elementMini from '../lib/element-mini-ui.common';
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
