<template>
  <div id="app">
    <gloabl-header />
    <global-main />
  </div>
</template>

<script>

import Header from './components/global/Header'
import Main from './components/global/Main'
import Hello from './components/HelloWorld'

export default {
  name: 'App',
  components: {
    GloablHeader: Header,
    GlobalMain: Main,
    HelloWorld: Hello
  },
  props: {},
  data () {
    return {}
  },
  method: {
    changeRoute (path) {
      this.$router.push(path)
    }
  }
}
</script>

<style>
@import "./styles/base.scss";

#app {
  font-family: "微软雅黑", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
