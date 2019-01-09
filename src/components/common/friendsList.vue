<template>
  <div id="friends-list">
    <div class="header">
      <span><strong>好友列表</strong></span>
    </div>
    <div v-for="(friend, index) in friends"
         :key="index"
         class="friend-list"
         @click="showMomentStream(index)">
      <el-popover placement="left-start"
                  trigger="hover"
                  v-model="friend.floatVisible">
        <floatwindow />
        <div slot="reference"
             @mouseover="requestUserMsg(index)"
             @mouseleave="closeFloat(index)">
          <svg class="icon head-icon"
               aria-hidden="true">
            <use :xlink:href="'#favicon-default' + (friend.headIcon)"></use>
          </svg>
        </div>
      </el-popover>
      <span class="friend-list-name">
        <strong>{{ friend.name }}</strong>
        <span># {{ friend.className }}</span>
      </span>
    </div>
  </div>
</template>

<script>
import floatWindow from './floating_window'
import api from '../../api/api'
import util from '../../utils'

export default {
  name: 'FriendsList',
  data () {
    return {
      name: this.$store.state.name,
      friends: this.$store.state.friendsList
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
      console.log('clicked')
      api.viewFriendInformation({
        myname: this.name,
        friendname: this.friends[index].name
      }).then(re => {
        let moments = []
        let returnData = re.data
        returnData.moment.forEach((item) => {
          moments.push({
            'id': item.momentId,
            'userName': returnData.person.name,
            'headIcon': util.getIconId(returnData.person.name),
            'floatVisible': false,
            'releaseTime': item.date,
            'content': item.content,
            'pictureUrl': item.pictureUrl,
            'likeList': util.getLikeList2(item.likeList)
          })
        })
        this.$store.commit('changeMomentStream', moments)
      }).catch(e => {
        console.error(e)
      })
    }

  }
}
</script>

<style lang="scss" scoped>
#friends-list {
  // width: 200px;
}

.friend-list {
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
.friend-list-name {
  font-size: 12px;
  position: relative;
  top: -10px;

  span {
    float: right;
    position: relative;
    font-size: 8px;
    left: -80px;
    top: 5px;
  }
}
</style>
