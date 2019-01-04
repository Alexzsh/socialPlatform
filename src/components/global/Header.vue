<template>
  <div class="g-header">
    <div class="g-header-wrapper">
      <div class="g-nav-left">
        <el-menu :default-active="activeIndex"
                 class="m-nav"
                 mode="horizontal"
                 background-color="#fff"
                 text-color="#14171a"
                 active-text-color="#1da1f2">
          <el-menu-item index="1">
            <i class="el-icon-tickets"></i>
            <a href="#/index">首 页</a>
          </el-menu-item>
          <el-menu-item index="2">
            <i class="el-icon-bell"></i>
            <el-badge :value="2"
                      class="item">
            </el-badge>
            <a href="#/index">通 知</a>
          </el-menu-item>
        </el-menu>
      </div>
      <div class="g-logo"
           @click="changeRoute('/index')">
        <img :src="require('@/assets/logo.png')"
             width="24px"
             height="21px"
             style="text-align: center;margin-top:12px">
        <!--<p style="line-height: 60px; text-align: center;">LOGO</p>-->
      </div>
      <div class="g-nav-right">
        <div v-on:click="changeRoute('/PersonalInfo')"
             class="head-icon">
          <el-tooltip class="item"
                      effect="dark"
                      content="点击查看个人信息"
                      placement="bottom">
            <img src="https://hacks.mozilla.org/files/2017/06/firefox-logo.png"
                 class="circle">
          </el-tooltip>
        </div>
        <div class="g-nav-logout"
             v-on:click="logout">
          <el-button type="primary"
                     @click="logout"
                     round>登出</el-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import api from '../../api/api'
export default {
  /* eslint-disable */
  name: 'global-header',
  data () {
    return {
      activeIndex: "1"
    }

  },
  methods: {
    changeRoute (path) {
      this.$router.push(path)
    },
    logout () {
      this.$store.state.islogin = false
      console.log('logout', this.$store.state.islogin)
      this.$router.push('/login')
    }
  },
}
</script>

<style lang="scss" scoped>
.g-header {
  z-index: 5;
  position: relative;
  // min-width: 1190px;
  display: inline-block;
  top: 0;
  left: 0;
  background: #fff;
  width: 100%;
  height: 46px;
  box-shadow: 0 1px 5px #999999;
  .g-header-wrapper {
    width: 80%;
    position: relative;
    margin: 0 auto;
  }

  .g-logo {
    width: 150px;
    height: 100%;
    display: inline-block;
  }

  .g-nav-left {
    // display: inline-block;
    position: absolute;
    left: 0;

    .item {
      margin-top: -30px;
      margin-left: -20px;
    }

    .el-menu--horizontal {
      border-bottom: none;
      .el-menu-item {
        height: 46px;
        line-height: 46px;
      }
    }
  }
  .g-nav-right {
    width: 150px;
    float: right;

    margin-top: 3px;
    .head-icon {
      float: left;
      .circle {
        height: 45px;
        clip-path: circle(100%);
      }
    }
  }
}
</style>
