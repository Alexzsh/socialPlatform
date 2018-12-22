<template>
  <div id="login">
    <div id="left">
      <div id="slogan">
        <i class="el-icon-search slogan">&nbsp;&nbsp;&nbsp;&nbsp;查看身边的趣事</i><br>
        <i class="el-icon-plus slogan">&nbsp;&nbsp;&nbsp;&nbsp;拓展你的人脉</i><br>
        <i class="el-icon-picture-outline slogan">&nbsp;&nbsp;&nbsp;&nbsp;分享自己的生活</i>
      </div>
    </div>
    <div id="right">
      <div id="logo">
        <img src="../../assets/blue-eagle.svg">
      </div>
      <h2>看看身边的新鲜事！</h2>
      <div id="login-component">
        <LoginComponent />
    </div>
    </div>
  </div>
</template>

<script>
import LoginComponent from '../common/loginComponent'

export default {
  name: 'Login',
  components: {
    LoginComponent: LoginComponent
  },
  data () {
    return {

    }
  }
}
</script>

<style lang="scss" scoped>
#login {
  width: 100%;
  height: 800px;
}
  #left {
    display: block;
    width: 48%;
    height: 100%;
    float: left;
    background-color: #1da1f2;
    background-image: url(../../assets/eagle1.svg);
    background-repeat: no-repeat;
    background-position: 0 50%;
    background-size: 200%;

    img {
      position: absolute;
      left: -2%;
      top: -50%;
      opacity: 0.3;
      height: 1500px;
      width: 1500px;
      z-index: 2;
    }

    #slogan {
      margin: 200px auto;
      margin-left: 20%;

      .slogan {
        font-size: 3em;
        color: #ffffff;
        display: block;
        margin: 20px;
        text-align: left
      }
    }
  }

  #right {
    display: block;
    width: 48%;
    height: 100%;
    float: right;
    z-index: 10;

    #logo {
      width: 200px;
      height: 200px;
      margin: 50px auto -20px;

    }
  }

  #loginComponent {
    width: 50%;
    margin: auto;
  }
</style>
