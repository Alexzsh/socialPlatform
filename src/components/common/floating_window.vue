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
            <use :xlink:href="'#favicon-default'+(person.iconId)"></use>
          </svg>
          <div class="fbtn"
               v-if="true">
            <el-button type="danger"
                       size="mini"
                       round
                       class="concern">已是好友</el-button>
          </div>
          <div v-else>
            <el-button type="danger"
                       round
                       class="concern">添加好友</el-button>
          </div>
        </div>
        <div class="fperson-text">
          <div class="fperson-name">
            <a class="fperson-u">@{{person.name}}</a>
          </div>
          <div class="fperson-content">
            <div class="fleft">
              <span><strong>动态</strong></span>
              <span> {{ person.momentCount }}</span>
            </div>
            <div class="fright">
              <span><strong>好友人数</strong></span>
              <span>{{person.friendCount}}</span>
            </div>
          </div>
        </div>
      </div>
    </el-card>
  </div>
</template>

<script>
import api from '../../api/api'
// import axioss from 'axios'
// import qs from 'qs'
export default {
  name: 'floating_window',
  data () {
    return {
      person:
        {
          id: '2',
          name: '小健8号',
          iconId: '9',
          momentCount: '0',
          friendCount: '0',
          followeeNum: '20'
        }
    }
  },
  // props
  beforeMount: function () {
    // const data = { myname: '小健', friendname: '小健8号' }
    // const options = {
    //   method: 'GET',
    //   headers: { 'Content-Type': 'application/json', 'X-Requested-With': 'XMLHttpRequest' },
    //   data: qs.stringify(data),
    //   url: 'http://139.199.221.89:8083/person/viewFriendInformation'
    // }
    // axioss(options)
    // const params = new URLSearchParams()
    // params.append('myname', '小健')
    // params.append('friendname', '小健8号')
    // axioss.get('http://139.199.221.89:8083/person/viewFriendInformation', params, Headers = {}).then(res => {
    //   console.log(res)
    // })
    api.viewFriendInformation({ myname: '小健', friendname: '小健8号' }).then(res => {
      console.log(res)
      this.person.friendCount = res.data.friends.length
      this.person.momentCount = res.data.moments.length
    })
  },
  computed: {
    isLike () {
      return function (index) {
        return this.inArray(this.moments[index].likeList, this.name)
      }
    }
  }
}
</script>
<style scoped lang='scss'>
.box-card {
  width: 200px;
  height: 180px;
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
      left: 10px;
      font-weight: bold;
      font-size: 15px;
    }
    .fbtn {
      margin: 10px 0 10px 0;
      .concern {
        width: 90px;
        height: 25px;
      }
    }
    .fperson-content {
      font-size: 10px;
      padding-top: 30px;
      padding-bottom: 10px;
      .fleft {
        position: absolute;
        left: 20px;
      }
      .fright {
        position: absolute;
        left: 95px;
      }
    }
  }
  #ficon {
    width: 78px;
    height: 78px;
    margin: -40px 0 0 0;
    float: left;
  }
}
</style>
