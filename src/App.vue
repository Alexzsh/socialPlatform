<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
  },
  props: {},
  data () {
    return {
      isLogin: this.$store.state.isLogin
    }
  },
  method: {
    changeRoute (path) {
      this.$router.push(path)
    },
    beforeCreate () {
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
