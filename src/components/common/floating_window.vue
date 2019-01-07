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
              <span> {{moments.length}}</span>
            </div>
            <div class="fright">
              <span><strong>好友人数</strong></span>
              <span>{{friends.length}}</span>
            </div>
          </div>
        </div>
      </div>
    </el-card>
  </div>
</template>

<script>
import api from '../../api/api'
export default {
  name: 'floating_window',
  data () {
    return {
      myname: '小健',
      friendname: '小健8号',
      id: null,
      name: '小健8号',
      iconId: '8',
      friends: ['xi', 'xx', 'xx'],
      moments: [
        {
          momentId: 139,
          pictureUrl: 'www.test.com',
          content: '今天的月色真好',
          likeList: [
            'xxinsert1'
          ]
        },
        {
          momentId: 140,
          pictureUrl: 'www.test.com',
          content: '今天的月色真好',
          likeList: [
            'xxinsert1',
            '大健4号'
          ]
        },
        {
          momentId: 142,
          pictureUrl: 'www.test.com',
          content: '今天的月色真好',
          likeList: [
            'xxinsert1',
            '大健4号'
          ]
        },
        {
          momentId: 138,
          pictureUrl: 'www.test.com',
          content: '今天的月色真好',
          likeList: [
            '小健8号',
            'xxinsert1'
          ]
        },
        {
          momentId: 137,
          pictureUrl: 'www.test.com',
          content: '今天的月色真好',
          likeList: [
            '大健4号',
            '小健8号',
            '小健7号',
            'xxinsert1'
          ]
        }
      ]
    }
  },
  props: {
    hover: false
  },
  methods: {
    addFriend () {
      api.addFriend({myname: this.myname, friendname: this.friendname}).then(re => {
        console.log('addFriendSuccess', re)
      }).catch(e => {
        console.log('addFriendError', e)
      })
    }
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
