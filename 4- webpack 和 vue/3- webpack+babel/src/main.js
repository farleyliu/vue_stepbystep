import Vue from 'vue';
import './style/test.scss';
import getData  from './one_module'

var app = new Vue({
  el: '#app',
  data: {
    msg: 'Hello Vue, 我来了，等等我！'
  },
  methods: {
    async fetchData() {
      const data = await getData();
      this.msg = data;
    }
  },
  //创建时
  created() {
    this.fetchData();
  }
});