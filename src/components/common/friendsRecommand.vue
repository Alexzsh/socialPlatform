<template>
  <div id="friends-recommand">
    <div class="header">
      <span><strong>好友的好友</strong></span>
    </div>
    <div v-for="(friend, index) in friends" :key="index" class="friend-recommand">
      <svg class="icon head-icon" aria-hidden="true">
        <use :xlink:href="'#favicon-default' + (friend.headIcon)"></use>
      </svg>
      <span class="friend-recommand-name">
        <strong>{{ friend.name }}</strong>
        <!-- <span>#  {{ friend.className }}</span> -->
        <span>{{ friend.count }}  个共同好友</span>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FriendsRecommand',
  data () {
    return {
      friends: [
        {
          name: '小王',
          headIcon: '1',
          count: '1'
        },
        {
          name: '小张',
          headIcon: '2',
          count: '2'
        },
        {
          name: '小李',
          headIcon: '3',
          count: '3'
        },
        {
          name: '小红',
          headIcon: '4',
          count: '4'
        },
        {
          name: '小黑',
          headIcon: '5',
          count: '5'
        }
      ]
    }
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

.header{
  height: 40px;
  background-color: #409EFF;

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
