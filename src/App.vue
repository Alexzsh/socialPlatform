<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>

export default {
  method: {
    created () {
      let state = JSON.parse(window.localStorage.getItem('state'))
      this.$store.replaceState(state)
      console.log('state', state)
      if (this.isLogin === false) { this.$router.push('/login') }
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
}
</style>
