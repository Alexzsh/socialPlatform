<template>
  <div id="friends-list">
    <div class="header">
      <span><strong>好友列表</strong></span>
    </div>
    <div v-for="(friend, index) in friends" :key="index" class="friend-list">
      <svg class="icon head-icon" aria-hidden="true">
        <use :xlink:href="'#favicon-default' + (friend.headIcon)"></use>
      </svg>
      <span class="friend-list-name">
        <strong>{{ friend.name }}</strong>
        <span>#  {{ friend.className }}</span>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FriendsList',
  data () {
    return {
      friends: [
        {
          name: '小王',
          headIcon: '1',
          className: '1801'
        },
        {
          name: '小张',
          headIcon: '2',
          className: '1802'
        },
        {
          name: '小李',
          headIcon: '3',
          className: '1803'
        },
        {
          name: '小红',
          headIcon: '4',
          className: '1804'
        },
        {
          name: '小黑',
          headIcon: '5',
          className: '1805'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
#friends-list {
  width: 200px;
}

.friend-list {
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
