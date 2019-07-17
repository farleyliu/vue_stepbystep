import Vue from 'vue';
import componentA from './App.vue'

import './style/test.scss';
import getData  from './one_module'

var vm = new Vue({
      el: '#app',
      template: '<componentA/>',  // 名字必须相同
      components: { componentA }  // 名字必须相同
})