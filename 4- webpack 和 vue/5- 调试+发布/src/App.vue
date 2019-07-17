<template>
  <div id="app">
    <h1>{{ msg }}</h1>
    <img src="./img/1.png">
    <input type="text" v-model="msg">
  </div>
</template>

<script>

import getData from './one_module';

export default {
  name: 'componentA',
  data () {
    return {
      msg: 'vue + webpack 单文件组件！'
    }
  },
  created() {
    this.fetchData();
    console.log('app.vue');
  },
  methods: {
     async fetchData() {
      const data = await getData();
      this.msg = data;
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;

  h1 {
    color: green;
  }
}
</style>