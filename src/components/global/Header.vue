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
            <a href="#/index" @click="getData">首 页</a>
          </el-menu-item>
          <el-menu-item index="2"
                        style="">
            <i class="el-icon-bell"></i>
            <el-badge :value="2"
                      class="item">
            </el-badge>
            <!-- <a href="#/index">通 知</a> -->
            <div class="notify">
              <notifyContent />
            </div>
          </el-menu-item>
        </el-menu>
      </div>
      <div class="g-logo"
           @click="changeRoute('/index')">
        <img :src="require('@/assets/logo.png')"
             width="24px"
             height="21px">
        <!--<p style="line-height: 60px; text-align: center;">LOGO</p>-->
      </div>
      <div class="g-nav-right">
        <div @click="dialogVisible = true"
             class="head-icon">
          <el-tooltip class="item"
                      effect="dark"
                      content="点击查看个人信息"
                      placement="bottom">
            <svg id="ficon"
             class="icon"
             aria-hidden="true">
              <use :xlink:href="'#favicon-default'+'8'"></use>
            </svg>
          </el-tooltip>
          <el-dialog title="提示"
                     :visible.sync="dialogVisible"
                     width="30%"
                     :modal='false'
                     :before-close="handleClose">
            <personalInfoComponent />
          </el-dialog>
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
import notifyContent from '../common/notifyContent'

import personalInfoComponent from '../common/personalInfoComponent'
import api from '../../api/api'
import util from '../../utils'
export default {
  /* eslint-disable */
  name: 'global-header',
  components: {
    notifyContent: notifyContent,
    personalInfoComponent: personalInfoComponent
  },
  data () {
    return {
      activeIndex: "1",
      dialogVisible: false
    }

  },
  methods: {
    getData () {
    api.viewAllRepositoryMoments().then(re => {
      let moments = []
      let returnData = re.data.data
      returnData.forEach((item) => {
        moments.push({
          'id': item.momentId,
          'userName': item.name,
          'headIcon': util.getIconId(item.name),
          'floatVisible': false,
          'releaseTime': item.moment.date,
          'content': item.moment.content,
          'pictureUrl': item.moment.pictureUrl,
          'likeList': util.getLikeList(item.moment.likeList)
        })
      })
      this.$store.commit('changeMomentStream', moments)
    })
  },
    changeRoute (path) {
      this.$router.push(path)
      // window.reload()
      console.log('alert')
    },
    handleClose (done) {
      this.$confirm('确认关闭？')
        .then(_ => {
          done();
        })
        .catch(_ => { });
    },
    logout () {
      api.logout().then(res => {
        console.log('logout', res)
      })
      let state = { islogin: false, name: '', headIcon: '' }
      this.$store.replaceState(state)
      window.localStorage.setItem('state', JSON.stringify(state))
      console.log('logout', this.$store.state)
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
    width: 75%;
    position: relative;
    margin: 0 auto;
  }

  .g-logo {
    width: 150px;
    height: 100%;
    display: inline-block;
    margin-top: 12px;
    margin-left: 12px;
    text-align: center;
  }

  .g-nav-left {
    display: inline-block;

    float: left;

    .item {
      margin-top: -30px;
      margin-left: -20px;
    }

    .el-menu--horizontal {
      border-bottom: none;
      .el-menu-item {
        height: 46px;
        line-height: 46px;
        .notify {
          float: right;
          top: -45px;
          left: 25px;
        }
      }
    }
  }
  .g-nav-right {
    display: inline-block;
    width: 150px;
    float: right;
    margin-top: 3px;
    .head-icon {
      float: left;
      .icon{
        height: 4em;
        width: 4em;
        position: relative;
        margin-top: -4px;
      }
      .circle {
        height: 45px;
        clip-path: circle(100%);
      }
    }
  }
}
</style>
