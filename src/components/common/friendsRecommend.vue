<template>
  <div id="friends-recommand">
    <div class="header">
      <span><strong>好友的好友</strong></span>
    </div>
    <div v-for="(friend, index) in friends"
         :key="index"
         class="friend-recommand"
         @click="showMomentStream(index)">
      <el-popover
        placement="left-start"
        trigger="hover"

        v-model="friend.floatVisible">
        <floatwindow :name="friend.name"/>
        <div slot="reference" @mouseover="requestUserMsg(index)" @mouseleave="closeFloat(index)">
          <svg class="icon head-icon" aria-hidden="true">
            <use :xlink:href="'#favicon-default' + (friend.headIcon)"></use>
          </svg>
        </div>
      </el-popover>
      <span class="friend-recommand-name">
        <strong>{{ friend.name }}</strong>
        <!-- <span>#  {{ friend.className }}</span> -->
        <span>{{ friend.count }} 个共同好友</span>
      </span>
    </div>
  </div>
</template>

<script>
import floatWindow from './floating_window'
import api from '../../api/api'
import util from '../../utils'

export default {
  name: 'FriendsRecommand',
  data () {
    return {
      name: this.$store.state.name,
      friends: []
    }
  },
  components: {
    floatwindow: floatWindow
  },
  methods: {
    requestUserMsg: function (index) {
      this.friends[index].floatVisible = true
    },
    closeFloat: function (index) {
      this.friends[index].floatVisible = false
    },
    showMomentStream: function (index) {
      api.viewFriendInformation({
        myname: this.name,
        friendname: this.friends[index].name
      }).then(re => {
        let moments = []
        let returnData = re.data
        if (returnData.code === 1) {
          this.$message('你们还不是好友！')
        } else {
          returnData.moments.forEach((moment) => {
            moments.push({
              'userName': returnData.name,
              'headIcon': util.getIconId(returnData.name),
              'floatVisible': false,
              'releaseTime': moment.date,
              'content': moment.content,
              'pictureUrl': moment.pictureUrl,
              'likeList': util.getLikeList(moment.likeList)
            })
          })
          this.$store.commit('changeMomentStream', moments)
        }
      }).catch(e => {
        console.error(e)
      })
    }
  },
  created: function () {
    api.getFriendsRecommend({ name: this.name }).then(re => {
      let returnData = re.data
      if (returnData.code === 0) {
        returnData.data.forEach((item) => {
          this.friends.push({
            'name': item.name,
            'headIcon': util.getIconId(item.name),
            'count': item.count
          })
        })
      } else {
        this.$message({
          message: '好友推荐列表加载失败',
          type: 'warning'
        })
      }
    }).catch(e => {
      console.error(e)
    })
  }
}
</script>

<style lang="scss" scoped>
#friends-recommand {
  width: 200px;
}

.friend-recommand {
  height: 50px;
  margin: 0;
  line-height: 50px;

  &:hover {
    background-color: rgb(245, 245, 245);
  }
}

.header {
  height: 40px;
  background-color: #409eff;
  border-radius: 0.3em;

  span {
    font-size: 15px;
    line-height: 40px;
    position: relative;
    left: -50px;
  }
}

.head-icon {
  height: 3em;
  width: 3em;
  float: left;
  clear: both;
  position: relative;
  top: 5px;
  left: 20px;
}

.friend-recommand-name {
  font-size: 12px;
  position: relative;

  span {
    font-size: 8px;
    margin-left: 10px;
  }
}
</style>
