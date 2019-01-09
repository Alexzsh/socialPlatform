<template>
  <div class="float_windows">
    <el-card class="box-card"
             body-style="padding:0px;border:none;"
             shadow="never">
      <a class="fu-bgUserColor fu-block"
         href="#"></a>
      <div class="fpost">
        <div class="fperson-header">
          <svg id="ficon"
               class="icon"
               aria-hidden="true">
            <use :xlink:href="'#favicon-default'+(iconId)"></use>
          </svg>
          <div class="fbtn">
            <el-button type="danger" size="mini" round class="concern" v-if="hover">已是好友</el-button>
            <el-button type="danger" size="mini" round class="concern" @click="addFriend" v-else>添加好友</el-button>
          </div>
        </div>
        <div class="fperson-text">
          <div class="fperson-name">
            <a class="fperson-u">@{{name}}</a>
          </div>
          <div class="fperson-content">
            <div class="fleft">
              <span><strong>动态</strong></span>
              <span>{{moments}}</span>
            </div>
            <div class="fright">
              <span><strong>好友人数</strong></span>
              <span>{{friends}}</span>
            </div>
          </div>
        </div>
      </div>
    </el-card>
  </div>
</template>

<script>
// import api from '../../api/api'
import util from '../../utils'
export default {

  data () {
    return {
      iconId: '8',
      friends: 1,
      moments: 1
    }
  },
  props: {
    hover: false,
    name: ''
  },
  methods: {
    addFriend () {
      console.log(this.iconId)
      this.$store.state.friendsList.push({'name': this.name,
        'headIcon': this.iconId,
        'friendsNum': this.friends,
        'momentsNum': this.moments,
        'className': util.getClassNumber(this.name),
        'floatVisible': false}
      )

      // api.addFriend({myname: this.myname, friendname: this.friendname}).then(re => {
      //   console.log('addFriendSuccess', re)
      // }).catch(e => {
      //   console.log('addFriendError', e)
      // })
    }
  },
  created () {
    this.iconId = util.getIconId(this.name)
    this.friends = util.getFriendsNumber(this.name)
    this.moments = util.getMomentsNumber(this.name)
  }
}
</script>
<style scoped lang='scss'>
  .box-card {
    width: 200px;
    height:180px;
    position: relative;
    .fu-bgUserColor {
      background-color: #1da1f2 !important ;
    }
    .fu-block {
      display: block !important;
      height: 70px;
      width: 100%;
      padding: 0;
    }
    .fpost {
      width: 100%;
      .fperson-name {
        position: absolute;
        left:10px;
        font-weight: bold;
        font-size: 15px;
      }
      .fbtn{
        margin: 5px 0 5px 0;
        .concern{
          width:90px;
          height:25px;
        }
      }
      .fperson-content {
        font-size: 10px;
        padding-top: 30px;
        padding-bottom: 10px;
        .fleft {
          position: absolute;
          left:20px;
        }
        .fright{
          position: absolute;
          left:95px;
        }
      }
    }
    #ficon {
      width: 78px;
      height: 78px;
      margin: -40px 0 0 0px;
      float: left;
    }
  }
</style>
